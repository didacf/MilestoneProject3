from flask import Flask
from dotenv import load_dotenv
from flask_cors import CORS
import os
import psycopg2
# enviorment variable assignment
load_dotenv()

FLASK_DEBUG = os.getenv("FLASK_DEBUG")
DB_USERNAME = os.getenv("DB_USERNAME")
DB_PASSWORD = os.getenv("DB_PASSWORD")



conn = psycopg2.connect(
        host="localhost",
        database="ms3_flights",
        user=DB_USERNAME,
        password=DB_PASSWORD)

# Open a cursor to perform database operations
cur = conn.cursor()

# Execute a command: this creates a new table
cur.execute('DROP TABLE IF EXISTS flights;')
cur.execute('CREATE TABLE flights (id serial PRIMARY KEY,'
                                 'flight_name varchar (150) NOT NULL,'
                                 'flight_time varchar (50) NOT NULL,'
                                 'sampledata integer NOT NULL,'
                                 'sampledata2 text,'
                                 'date_added date DEFAULT CURRENT_TIMESTAMP);'
                                 )

# Insert data into the table

cur.execute('INSERT INTO flights (flight_name, flight_time, sampledata, sampledata2)'
            'VALUES (%s, %s, %s, %s)',
            ('A Tale of Two Cities',
             'Charles Dickens',
             489,
             'A great classic!')
            )


cur.execute('INSERT INTO flights (flight_name, flight_time, sampledata, sampledata2)'
            'VALUES (%s, %s, %s, %s)',
            ('tset',
             'test',
             123,
             'test')
            )

conn.commit()

cur.close()
conn.close()