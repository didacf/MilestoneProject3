from flask import Flask, request, jsonify
import requests
from dotenv import load_dotenv
from flask_cors import CORS, cross_origin
import os
import psycopg2
from flask_sqlalchemy import SQLAlchemy
import json
from flask_login import LoginManager, UserMixin
# from flask_wtf import wtforms
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import InputRequired, Length, ValidationError


load_dotenv()
# enviorment variable assignment
FLASK_DEBUG = os.getenv("FLASK_DEBUG")
DB_USERNAME = os.getenv("DB_USERNAME")
DB_PASSWORD = os.getenv("DB_PASSWORD")


# defining app and server
app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:password@localhost/ms3_flights'
app.config['SECRET_KEY'] = 'password'
db = SQLAlchemy(app)
login_manager = LoginManager()
login_manager.init_app(app)



#Database models

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    password = db.Column(db.String(80), nullable=False) 
    firstname = db.Column(db.String(20), nullable=False) 
    lastname = db.Column(db.String(20), nullable=False) 
    email = db.Column(db.String(80), nullable=False, unique = True) 


class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(80), nullable=False)
    created_at = db.Column(db.String(120), nullable=False, default="1/2/3")
    
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
    return User.query.get(int(user_id))


#routes

@app.route("/login")
def login():
    user = User.query.filter_by(username="Anthony").first()
    

@app.route('/')
def hello():
    return "Hey!;"



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


@app.route("/add_user", methods=['POST', "GET"])
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
        existing = True
        return jsonify(existing)
    else:
        cur = conn.cursor()
        cur.execute("INSERT INTO \"user\" (firstname, lastname, email, password) VALUES (%s, %s, %s, %s)", (data["firstname"],data["lastname"],data["email"],data["password"], ))
        conn.commit()
        cur.close()
        conn.close()
        existing = False
        return jsonify(existing) 
    


if __name__ == "__main__":
    app.run(debug=True)







