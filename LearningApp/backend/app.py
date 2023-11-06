from flask import Flask, jsonify, g, request, send_from_directory
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity
import sqlite3
import secrets

DATABASE = 'elearningapp.db'
SECRET_KEY = secrets.token_hex(16)

app = Flask(__name__, static_folder="static")
CORS(app)

app.config['JWT_SECRET_KEY'] = SECRET_KEY
jwt = JWTManager(app)

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

def query_db(query, args=(), one=False):
    cur = get_db().execute(query, args)
    rv = cur.fetchall()
    cur.close()
    get_db().commit()
    return (rv[0] if rv else None) if one else rv

@app.route('/static/<path:filename>', methods=['GET'])
def serve_static(filename):
    return send_from_directory(app.static_folder, filename)


@app.route('/api/courses', methods=['GET'])
def get_courses():
    courses = query_db("SELECT id, title, description, image, price FROM courses")  # Added price column
    courses_list = [{'id': row[0], 'title': row[1], 'description': row[2], 'image': row[3], 'price': row[4]} for row in courses]
    return jsonify({'courses': courses_list})

@app.route('/api/courses', methods=['POST'])
@jwt_required()
def add_course():
    data = request.json
    query_db("INSERT INTO courses (title, description, image, price) VALUES (?, ?, ?, ?)",  
             (data.get('title'), data.get('description'), data.get('image'), data.get('price')))
    return jsonify({'status': 'success', 'message': 'Course added successfully!'}), 201

@app.route('/api/enroll', methods=['POST'])
@jwt_required()
def enroll_course():
    data = request.json
    user_id = get_jwt_identity()
    return jsonify({'status': 'success', 'message': f"User {user_id} enrolled in course {data.get('course_id')} successfully!"}), 201


@app.route('/api/courses/<int:course_id>/lessons', methods=['GET'])
def get_lessons(course_id):
    lessons = query_db("SELECT id, title, content FROM lessons WHERE course_id=?", (course_id,))
    lessons_list = [{'id': row[0], 'title': row[1], 'content': row[2]} for row in lessons]
    return jsonify({'lessons': lessons_list})

@app.route('/api/lessons', methods=['POST'])
@jwt_required()
def add_lesson():
    data = request.json
    query_db("INSERT INTO lessons (course_id, title, content) VALUES (?, ?, ?)", 
             (data.get('course_id'), data.get('title'), data.get('content')))
    return jsonify({'status': 'success', 'message': 'Lesson added successfully!'}), 201

@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.json
    hashed_password = generate_password_hash(data.get('password'), method='pbkdf2:sha256')
    try:
        query_db("INSERT INTO users (username, email, password, is_admin) VALUES (?, ?, ?, ?)", 
                 (data.get('username'), data.get('email'), hashed_password, data.get('is_admin', False)))
        return jsonify({'status': 'success', 'message': 'User registered successfully!'}), 201
    except sqlite3.IntegrityError:
        return jsonify({'status': 'error', 'message': 'Username or email already exists!'}), 400

@app.route('/api/login', methods=['POST'])
def login():
    try:
        data = request.json
        user = query_db("SELECT id, password, is_admin FROM users WHERE username=?", (data.get('username'),), one=True)

        if user and check_password_hash(user[1], data.get('password')):
            access_token = create_access_token(identity=user[0])
            return jsonify({'status': 'success', 'access_token': access_token, 'is_admin': user[2]}), 200

        return jsonify({'status': 'error', 'message': 'Invalid credentials!'}), 401

    except Exception as e:
        return jsonify({'status': 'error', 'message': 'Something went wrong!'}), 500

@app.route('/api/protected', methods=['GET'])
@jwt_required()
def protected():
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200

if __name__ == '__main__':
    app.run(debug=True)
