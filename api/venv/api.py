import time
from flask import Flask

app = Flask(__name__)


@app.route('/login')
def validate_user(userdata):
    return {'time': time.time()}
