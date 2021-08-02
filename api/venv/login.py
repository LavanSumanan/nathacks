from dotenv import load_dotenv
import os
from pymongo import MongoClient

load_dotenv()

# MONGO STUFF
cluster = MongoClient(
    os.getenv("MONGO_KEY"))
database = cluster["Data"]


def validate_login(username, password):
    if username in database.list_collection_names():
        userPost = database[username].find_one(
            {"_id": "Login Info"}, {"Password": 1})
        if password == userPost["Password"]:
            return {"login": "success"}  # hooray!
        else:
            return {"login": "pw"}  # wrong pw
    else:
        return {"login": "dne"}  # account doesn't exist


def signUp(username, password):
    if not username in database.list_collection_names():
        userInitPost = {
            "_id": "Login Info",
            "Username": username,
            "Password": password,
        }
        database[username].insert_one(userInitPost)
        return {"signUp": "success"}  # hooray new account posted!
    else:
        return {"signUp": "exists"}  # Username exists
