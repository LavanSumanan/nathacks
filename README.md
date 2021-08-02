This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements

# Back end server

In the api directory:

- python3 -m venv venv
- numpy
- flask
- dotenv
- pymongo

# Front end server

In the nathacks directory:

- npm install yarn
- npm install

## Starting the servers

# Back end server

To start the backend server, create a .flaskenv file in the api/venv directory with

```
FLASK_APP=api.py
```

Then, cd into the venv and enter `flask run` in the terminal. This will run the flask API on port 5000.

# Front end server

To start the frontend server, run yarn start in the nathacks directory. This will run the react app on port 3000 (with a proxy to make requests to port 5000).
