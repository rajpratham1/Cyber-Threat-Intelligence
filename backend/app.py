from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Import blueprints
from api.threat_routes import threat_bp
from api.ip_lookup import ip_lookup_bp
from api.news_feed import news_bp

# Flask application setup
app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

# Register blueprints
app.register_blueprint(threat_bp)
app.register_blueprint(ip_lookup_bp)
app.register_blueprint(news_bp)

@app.route('/')
def index():
    """
    Root endpoint to check if the backend is running.
    """
    return "Flask Backend is running!"

if __name__ == '__main__':
    # Run the Flask app
    # The host is set to '0.0.0.0' to make it accessible from the local network
    app.run(host='0.0.0.0', port=os.environ.get('FLASK_RUN_PORT', 5000), debug=True)