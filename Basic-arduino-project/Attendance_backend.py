from flask import Flask, request
from socket_io import SocketIO, emit

server= Flask(__name__)
realtime = SocketIO(server,  cors_allowed_origin="*")

@server.route("/attendance")