from flask import Flask, request
import login as login

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

        print(login.login(username, password))
        return login.login(username, password)


@app.route('/signup', methods=["POST", "GET"])
def signup():
    if request.method == "POST":  # If theres actual things passed into the form

        username = str(request.form["username"])
        password = str(request.form["password"])

        print(login.signUp(username, password))
        return login.signUp(username, password)
