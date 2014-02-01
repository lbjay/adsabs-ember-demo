from flask import Flask, render_template

app = Flask(__name__)
app.debug = True

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/search/')
def search():
    return {}

@app.route('/facets/')
def facets():
    return {}