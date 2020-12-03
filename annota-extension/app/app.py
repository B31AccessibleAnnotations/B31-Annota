# Hello gamers

import os
import datetime
import sqlite3

from flask import (
  Flask,
  Response,
  render_template,
  request,
  url_for,
  redirect,
  session,
  send_from_directory,
  g
)


app = Flask(__name__)

def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row # gives name-based access to columns
    return conn



@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/mapview')
def mapview():
    return render_template('mapview.html')

@app.route('/timeline')
def timeline():
    conn = get_db_connection()
    files = conn.execute('SELECT * FROM files').fetchall()
    conn.close()
    return render_template('timeline.html', files=files)

@app.route('/settings')
def settings():
    return render_template('settings.html')

# Debug when run
if __name__ == '__main__':
    app.run(debug=True)
