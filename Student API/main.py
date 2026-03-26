from flask import Flask, request

app = Flask(__name__)

#@app.route("/get-students", methods=["GET"])
#def get_student():
 #   female_student = ["Molina", "Gabanes", "Ataza"]
 #   male_student = ["Saquilon", "Magallanes", "Sabardo"]

  #  return {
   #     "f_stud":female_student,
   #     "m_stud":male_student
   # }

@app.route("/get-specific-stud", methods=["GET"])
def get_specific_student():
    id_num = request.args.get("id_no")

    name = ""
    if id_num == "04-2425-031730":  
        name = "paolo" 
    if id_num == "04-2425-012345":  
        name = "jerielgayshit" 
    elif id_num == "04-2425-054321":
        name = "jj"
    return {
        "student_name": name
    
    }


if __name__=="__main__":
    app.run(debug=True)
