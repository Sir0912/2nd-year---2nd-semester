import serial
import requests

# Adjust COM port and baud rate to match your Arduino
ser = serial.Serial('COM3', 9600)

print('Hello, World!')

while True:
    line = ser.readline().decode().strip()
    if line.startswith("RFID Tag UID:"):
        uid = line.replace("RFID Tag UID:", "").strip()
        print("Scanned UID:", uid)

        # Send UID to Flask server
        response = requests.post("http://127.0.0.1:5000/scan", json={"uid": uid})
