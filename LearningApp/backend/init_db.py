import sqlite3
from werkzeug.security import generate_password_hash

BASE_STATIC_URL = "http://localhost:5000/static/"

courses = [
    {'title': "Introduction to Python", 'description': "A beginner's guide to Python programming...", 'image': BASE_STATIC_URL + "python_intro.png", 'price': 49.99},
    {'title': "Advanced JavaScript", 'description': "Deep dive into advanced JavaScript topics...", 'image': BASE_STATIC_URL + "advanced_js.png", 'price': 59.99}
]

users = [
    {
        'username': "john_doe",
        'email': "john@example.com",  # Add an email for the user
        'password': generate_password_hash("password123", method='pbkdf2:sha256'),
        'is_admin': False
    },
    {
        'username': "admin",
        'email': "admin@example.com",  # Add an email for the admin
        'password': generate_password_hash("admin", method='pbkdf2:sha256'),
        'is_admin': True
    }
]

connection = sqlite3.connect('elearningapp.db')
cursor = connection.cursor()

def table_exists(table_name):
    cursor.execute(f"SELECT name FROM sqlite_master WHERE type='table' AND name='{table_name}'")
    return bool(cursor.fetchone())

# Create and insert into courses table
if not table_exists('courses'):
    cursor.execute("""
    CREATE TABLE courses (
        id INTEGER PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        image TEXT NOT NULL,
        price REAL NOT NULL  
    )
    """)
    print("Table 'courses' created successfully!")

    for course in courses:
        cursor.execute("INSERT INTO courses (title, description, image, price) VALUES (?, ?, ?, ?)",
                       (course['title'], course['description'], course['image'], course['price']))  
    print("Courses inserted successfully!")

if not table_exists('users'):
    cursor.execute("""
    CREATE TABLE users (
        id INTEGER PRIMARY KEY,
        username TEXT UNIQUE NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        is_admin BOOLEAN NOT NULL DEFAULT 0
    )
    """)
    print("Table 'users' created successfully!")

    for user in users:
        cursor.execute("INSERT INTO users (username, email, password, is_admin) VALUES (?, ?, ?, ?)",
                       (user['username'], user['email'], user['password'], user['is_admin']))
    print("Users inserted successfully!")

connection.commit()
connection.close()

print("E-learning app database initialized successfully!")
