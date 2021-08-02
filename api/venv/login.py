from dotenv import load_dotenv
import os
from pymongo import MongoClient

load_dotenv()

# MONGO STUFF
cluster = MongoClient(
    "mongodb+srv://ivan:123@cluster.8jail.mongodb.net/NatHack2?retryWrites=true&w=majority")
database = cluster["Data"]


def validate_login(username, password):
    print(database.list_collection_names())
    if username in database.list_collection_names():
        userPost = database[username].find_one(
            {"_id": "Login Info"}, {"Password": 1})
        if password == userPost["Password"]:
            return {"login": "success"}  # hooray!
        else:
            return {"login": "pw"}  # wrong pw
    else:
        return {"login": "dne"}  # account doesn't exist


def sign_up_user(username, password):
    if not username in database.list_collection_names():
        userInitPost = {
            "_id": "Login Info",
            "Username": username,
            "Password": password
        }

        dataPost = {
            "_id": "Wave Data",
            "test": "abc"
        }

        database[username].insert_one(userInitPost)
        # database[username].insert_one(dataPost)
        return {"signUp": "success"}  # hooray new account posted!
    else:
        return {"signUp": "exists"}  # Username exists
