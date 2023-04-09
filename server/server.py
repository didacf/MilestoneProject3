from flask import Flask, request, jsonify
import requests
from dotenv import load_dotenv
from flask_cors import CORS, cross_origin
import os
import psycopg2
from flask_sqlalchemy import SQLAlchemy
import json
from flask_login import LoginManager, UserMixin, login_user, current_user, login_required, logout_user
from sqlalchemy.dialects.postgresql import JSONB
from datetime import timedelta
load_dotenv()
# enviorment variable assignment
FLASK_DEBUG = os.getenv("FLASK_DEBUG")
DB_USERNAME = os.getenv("DB_USERNAME")
DB_PASSWORD = os.getenv("DB_PASSWORD")


# defining app and server
app = Flask(__name__)
CORS(app, supports_credentials=True)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:password@localhost/ms3_flights'
app.config['SECRET_KEY'] = 'password'
db = SQLAlchemy(app)
login_manager = LoginManager()
login_manager.init_app(app)


app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(hours=1)
#Database models

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    password = db.Column(db.String(80), nullable=False) 
    firstname = db.Column(db.String(20), nullable=False) 
    lastname = db.Column(db.String(20), nullable=False) 
    email = db.Column(db.String(80), nullable=False, unique = True) 
    def get_id(self):
        return str(self.id)


class Cart(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user = db.Column(db.Integer, nullable=False)
    flight_data = db.Column(JSONB, nullable=False)
    
    def __repr__(self):
        return f"Event:{self.description}"
    
    def __init__(self, description):
        self.description = description

def format_event(event):
    return {
        "description": event.description,
        "id": event.id,
        "created_at": event.created_at
    }

@login_manager.user_loader
def load_user(user_id):
    print(User.query.get(int(user_id)))
    return User.query.get(int(user_id))


#routes
@app.route("/log")
def log():
    user = load_user(10)
    login_user(user)
    print(current_user.password)
    return "user logged in"


#Create an event
#@app.route("/event", methods = ["POST"])
#def create_event():
#   description = request.json['description']
#   event = Event(description)
#   db.session.add(event)
#   db.session.commit()
#   return format_event(event)

#get all events
#@app.route("/event", methods = ['GET'])
#def get_events():
   # events = Event.query.order_by(Event.id.asc()).all()
   # event_list = []
    #for event in events:
    #   event_list.append(format_event(event))
    #return {'events':event_list}
@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()

    email = User.query.filter(
         User.email == data["email"]).first()
    password = User.query.filter(
        User.password == data["password"]).first()
    print(password.password, email.password)
    if (data['password'] == email.password):
        login_status= {"logged_in": True}
        print(login_status)
        user = load_user(email.id)
        isLoggedIn = login_user(user)
        
        return login_status
    else:
        login_status= {"logged_in": False}
        print(login_status)
        return login_status
    




@app.route("/add_user", methods=['POST'])
def add_user():

    print(request.get_json())

    data = request.get_json()

    conn = psycopg2.connect(
        host="localhost",
        database="ms3_flights",
        user=DB_USERNAME,
        password=DB_PASSWORD)

    existing_email = User.query.filter(
         User.email == data["email"]).first()
    if (existing_email):
        existing = {"status": True}
        return jsonify(existing)
    else:
        cur = conn.cursor()
        cur.execute("INSERT INTO \"user\" (firstname, lastname, email, password) VALUES (%s, %s, %s, %s)", (data["firstname"],data["lastname"],data["email"],data["password"], ))
        conn.commit()
        cur.close()
        conn.close()
        existing = {"status": False}
        return jsonify(existing) 
    
@app.route("/logout")
@login_required
def logout():
    logout_user()
    return "logout"

@app.route("/send_to_cart", methods=["POST"])
@login_required
def send_to_cart():
    conn = psycopg2.connect(
        host="localhost",
        database="ms3_flights",
        user=DB_USERNAME,
        password=DB_PASSWORD)
    
    data = request.get_json()
    print(data)
    json_data = json.dumps(data)
    cur = conn.cursor()
    cur.execute("INSERT INTO cart (\"user\", flight_data) VALUES (%s, %s)", (current_user.id, json_data ))
    conn.commit()
    cur.close()
    conn.close()
    return "yo"

@app.route("/remove_from_cart", methods=["POST"])
@login_required
def remove_from_cart():
    conn = psycopg2.connect(
        host="localhost",
        database="ms3_flights",
        user=DB_USERNAME,
        password=DB_PASSWORD)
    data = request.get_json()
    json_data = json.dumps(data)
    cur = conn.cursor()
    cur.execute("DELETE FROM cart WHERE flight_data = %s", ((json_data),))
    conn.commit()
    cur.close()
    conn.close()
    return "hi"


@app.route("/test")
@login_required
def test():
    print(load_user(8))
    print(current_user.is_authenticated)
    # print(current_user.id)
    return "hi"
@app.route("/test2")

def test2():
    user = load_user(8)
    login_user(user)
    print(current_user.is_authenticated)
    # print(current_user.id)
    return "hi"

@app.route("/access_cart", methods=["GET"])
@login_required
def acess_cart():
    conn = psycopg2.connect(
        host="localhost",
        database="ms3_flights",
        user=DB_USERNAME,
        password=DB_PASSWORD)
    cur = conn.cursor()
    cur.execute(f"SELECT flight_data FROM cart WHERE \"user\" ={current_user.id}")
    cart_data = cur.fetchall()
    cur.close()
    conn.close()
    return (cart_data)

if __name__ == "__main__":
    app.run(debug=True)







