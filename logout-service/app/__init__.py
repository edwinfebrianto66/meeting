from flask import Flask
from flask_cors import CORS
from .routes import logout_bp

def create_app():
    app = Flask(__name__)
    CORS(app, resources={r"/*": {"origins": "*"}})  # ⬅ Tambahkan ini

    app.register_blueprint(logout_bp)

    return app
