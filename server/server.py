from flask import Flask, request, jsonify
import requests
from dotenv import load_dotenv
from flask_cors import CORS, cross_origin
import os
import psycopg2
from flask_sqlalchemy import SQLAlchemy

load_dotenv()
# enviorment variable assignment
FLASK_DEBUG = os.getenv("FLASK_DEBUG")
DB_USERNAME = os.getenv("DB_USERNAME")
DB_PASSWORD = os.getenv("DB_PASSWORD")


# defining app and server
app = Flask(__name__)
CORS(app)
# CORS(app, supports_credentials=True, origins='http://localhost:3000', allowed_headers=['Content-Type', 'Authorization'])


# Database connection:
conn = psycopg2.connect(
        host="localhost",
        database="ms3_flights",
        user=DB_USERNAME,
        password=DB_PASSWORD)


app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:password@localhost/ms3_flights'
db = SQLAlchemy(app)



#Database models

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
#routes


@app.route("/members")
def members():
    return{"members": ["Member1","Member2","Member3"]}

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


@app.route("/add_user", methods=['POST'])
def add_user():
    print(request.get_json())


    data = request.get_json()
    description = (data["fName"])
    # email = request.form['email']

    conn = psycopg2.connect(
        host="localhost",
        database="ms3_flights",
        user=DB_USERNAME,
        password=DB_PASSWORD)


    cur = conn.cursor()
    cur.execute("INSERT INTO event (fName, lName, email, password) VALUES (%s, %s, %s, %s)", (data["fName"],data["lName"],data["email"],data["password"] ))
    conn.commit()
    cur.close()
    conn.close()
    return 'User added successfully'

if __name__ == "__main__":
    app.run(debug=True)







