# Hello gamers

import os
import datetime

from flask import (
  Flask,
  Response,
  render_template,
  request,
  url_for,
  redirect,
  session,
  send_from_directory
)


app = Flask(__name__)


@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/mapview')
def mapview():
    return render_template('mapview.html')

@app.route('/timeline')
def timeline():
    return render_template('timeline.html')

@app.route('/settings')
def settings():
    return render_template('settings.html')

# Debug when run
if __name__ == '__main__':
    app.run(debug=True)