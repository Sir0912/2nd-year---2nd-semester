from flask import Flask, request

server = Flask(__name__)
@server.route("/cat", methods=["GET"])
def cat():
    api_key = request.headers.get("key")
    print("Client Enter: ", api_key)

    if api_key == "cat123":
        print("Client are successfully enter to our server")
        return {
           "message": ["Spinx", "Siamese", "Tabby"],
           "status_code": 200
        }
    #elif api_key != "key":
    elif api_key == None:
        print("Client enter the wrong request url")
        return {
            "message": ["Bad Request"],
            "Status_code": 400
        }
    else:
        print("Client fail to enter to portal")
        return {
            "message": ["Not Found"],
            "status_code": 404
    }

if __name__ == "__main__":
    server.run(debug=True)
