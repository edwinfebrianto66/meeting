
from flask import Flask
from .routes import logout_bp

def create_app():
    app = Flask(__name__)
    app.register_blueprint(logout_bp)
    return app
