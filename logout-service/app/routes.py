
from flask import Blueprint, request, jsonify
import os
import jwt
from dotenv import load_dotenv

load_dotenv()
logout_bp = Blueprint('logout', __name__)

JWT_SECRET = os.getenv("JWT_SECRET")

@logout_bp.route('/logout', methods=['POST'])
def logout():
    token = request.headers.get('Authorization')
    if not token:
        return jsonify({"error": "Token required"}), 401
    try:
        jwt.decode(token.replace("Bearer ", ""), JWT_SECRET, algorithms=["HS256"])
        return jsonify({"message": "Logged out successfully (simulated)"}), 200
    except jwt.ExpiredSignatureError:
        return jsonify({"error": "Token expired"}), 401
    except jwt.InvalidTokenError:
        return jsonify({"error": "Invalid token"}), 401
