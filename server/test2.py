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


app = Flask(__name__)
CORS(app)


# Database connection:

conn = psycopg2.connect(
        host="localhost",
        database="ms3_flights",
        user=DB_USERNAME,
        password=DB_PASSWORD)

# Basic server function:

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:password@localhost/ms3_flights'
db = SQLAlchemy(app)

class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(100), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=1/1/2003)
    
    def __repr__(self):
        return f"Event:{self.description}"
    
    def __init__(self, description):
        self.description = description

@app.route('/')
def hello():
    return "Hey!"

if __name__ == '__main__':
    app.run()