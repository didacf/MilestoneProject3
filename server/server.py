from flask import Flask
from dotenv import load_dotenv
from flask_cors import CORS
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
    name = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    
    def __repr__(self):
        return f"Event:{self.description}"
    
    def __init__(self, description):
        self.description = description

if __name__ == "__main__":
    app.run(debug=FLASK_DEBUG)


#routes

@app.route("/members")
def members():
    return{"members": ["Member1","Member2","Member3"]}

@app.route('/')
def hello():
    return "Hey!"

if __name__ == '__main__':
    app.run()