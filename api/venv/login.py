from pymongo import MongoClient

#MONGO STUFF --> DO NOT LEAK THIS KEY PLEASE
cluster=MongoClient("mongodb+srv://BrainHyonk:BrainHyonkPassword@cluster.b3id9.mongodb.net/Nat_Hack?retryWrites=true&w=majority")
database = cluster["Data"]

def login(username,password):
    if username in database.list_collection_names():
        userPost = database[username].find_one({"_id":"Login Info"},{"Password":1})
        if password == userPost["Password"]:
            return {"login":"success"} #hooray!
        else:
            return {"login":"pw"} #wrong pw
    else:
        return {"login":"dne"} #account doesn't exist


def signUp(username,password):
    if not username in database.list_collection_names():
        userInitPost = {
            "_id":"Login Info",
            "Username":username,
            "Password":password,
        }

        dataPost = {
            "_id":"Wave Data",
        }
        database[username].insert_many(userInitPost,dataPost)
    
        return {"signUp":"success"} #hooray new account posted!
    else:
        return {"signUp":"exists"} #Username exists



