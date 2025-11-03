from flask import Blueprint, jsonify
import requests
import os

news_bp = Blueprint('news_bp', __name__)

# In-memory cache for news data
news_data_cache = None

@news_bp.route('/api/news')
def get_news():
    """
    Fetches the latest cybersecurity news from the NewsAPI.
    It uses an in-memory cache to avoid repeated API calls.
    """
    global news_data_cache
    
    # If cache is empty, fetch new data
    if news_data_cache is None:
        try:
            # Fetch latest cybersecurity news from NewsAPI
            url = f"https://newsapi.org/v2/everything?q=cybersecurity&apiKey={os.environ.get('NEWS_API_KEY')}"
            response = requests.get(url)
            response.raise_for_status()  # Raise an exception for bad status codes
            
            news_data_cache = response.json()
        except requests.exceptions.RequestException as e:
            return jsonify({"error": f"Failed to fetch news data: {e}"}), 500
    
    return jsonify(news_data_cache)
