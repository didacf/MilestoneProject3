from flask import Flask
from dotenv import load_dotenv
from flask_cors import CORS
import os
import psycopg2
from flask_sqlalchemy import SQLAlchemy
import requests
load_dotenv()
# enviorment variable assignment
FLASK_DEBUG = os.getenv("FLASK_DEBUG")
DB_USERNAME = os.getenv("DB_USERNAME")
DB_PASSWORD = os.getenv("DB_PASSWORD")


app = Flask(__name__)
CORS(app)

url = "https://skyscanner50.p.rapidapi.com/api/v1/searchFlights"

querystring = {"origin":"LOND","destination":"NYCA","date":"<REQUIRED>","adults":"1","currency":"USD","countryCode":"US","market":"en-US"}

headers = {
	"X-RapidAPI-Key": "673cd5f30amsh23e878dc6ccc272p1223f6jsn720ad90640aa",
	"X-RapidAPI-Host": "skyscanner50.p.rapidapi.com"
}

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)


if __name__ == '__main__':
    app.run()