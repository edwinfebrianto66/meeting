from flask import Blueprint, request, jsonify
import os
import mysql.connector

logout_bp = Blueprint('logout_bp', __name__)

def get_db():
    return mysql.connector.connect(
        host=os.environ.get("DB_HOST"),
        user=os.environ.get("DB_USER"),
        password=os.environ.get("DB_PASSWORD"),
        database=os.environ.get("DB_NAME")
    )

@logout_bp.route('/forgot-password', methods=['POST'])
def forgot_password():
    data = request.json
    email = data.get('email')

    if not email:
        return jsonify({'message': 'Email wajib diisi', 'found': False}), 400

    db = get_db()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM users WHERE email=%s", (email,))
    result = cursor.fetchone()

    if not result:
        return jsonify({'message': 'Email tidak ditemukan', 'found': False}), 404

    return jsonify({'message': 'OK', 'found': True}), 200

@logout_bp.route('/reset-password', methods=['POST'])
def reset_password():
    data = request.json
    email = data.get('email')
    new_password = data.get('password')

    if not email or not new_password:
        return jsonify({'message': 'Email dan password baru wajib diisi'}), 400

    db = get_db()
    cursor = db.cursor()
    cursor.execute("UPDATE users SET password=%s WHERE email=%s", (new_password, email))
    db.commit()

    if cursor.rowcount == 0:
        return jsonify({'message': 'Reset gagal, email tidak ditemukan'}), 404

    return jsonify({'message': 'Password berhasil direset'}), 200