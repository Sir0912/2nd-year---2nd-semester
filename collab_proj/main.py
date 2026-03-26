from flask import Flask, render_template, request
from flask_socketio import SocketIO, emit

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origin="*")

@app.route("/", methods=["GET"])
def home():
    return render_template("home.html")
@app.route("/send-data", methods=["POST"])
def send():
    send_data = request.get_json()
    print(send_data)

    socketio.emit("room_one", send_data)

    return {
        "message": "Data recieved successfully"

    }
#@app.route("/number", methods=["POST"])
#def num():
 #   number = request.get_json()
  #  print(number)

   # socketio.emit("room_one", number)

    #return {
     #   "message": "counting"

    #}





if __name__ == "__main__":
    socketio.run(app, port=5000)
