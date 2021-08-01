from flask import Flask, request
from login import validate_login

app = Flask(__name__)


@app.route('/')
def test():
    return "<p>honk</p>"


@app.route('/login', methods=["POST", "GET"])
def login():
    if request.method == "POST":  # If theres actual things passed into the form
        content = request.get_json()
        username = str(content['username'])
        password = str(content['password'])

        print(validate_login(username, password))
        return validate_login(username, password)


@app.route('/signup', methods=["POST", "GET"])
def signup():
    if request.method == "POST":  # If theres actual things passed into the form

        username = str(request.form["username"])
        password = str(request.form["password"])

        print(login.signUp(username, password))
        return login.signUp(username, password)
