from flask import Flask, request

web = Flask(__name__)

@web.route("/get-cat", methods=["GET"])
def get_cat():
    Api_key_recieved = request.headers.get("key")

    if Api_key_recieved == "123":
        print("User success to enter")
        return {
        #"message": "Hello World"
        "message": ["perisan", "siamese", "tabby"],
        "status": "success"

    } 
    #x = request.headers.get("name")
    #print(x)
    #y = request.headers.get("age")
    #print(y)
    #u = request.headers.get("address")
    #print(u)
    #return {
        #"message": "Hello World"
    #    "message": ["perisan", "siamese", "tabby"],
    #    "status": "success"
    #}
    else:
        print("user fail to enter")
        return {
        "message": [],
        "status": "Failure api key"
    }

if __name__ == "__main__":
    web.run(debug=True)
