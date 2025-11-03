from flask import Blueprint, jsonify
from collections import Counter
import requests
import os

threat_bp = Blueprint('threat_bp', __name__)

# In-memory cache for threat data
threat_data_cache = None

def fetch_threat_data():
    """
    Fetches threat data from AbuseIPDB and caches it.
    """
    global threat_data_cache
    if threat_data_cache is None:
        try:
            url = "https://api.abuseipdb.com/api/v2/blacklist"
            headers = {
                "Key": os.environ.get("ABUSEIPDB_API_KEY"),
                "Accept": "application/json"
            }
            response = requests.get(url, headers=headers)
            response.raise_for_status()
            threat_data_cache = response.json()
        except requests.exceptions.RequestException as e:
            # In case of an error, return the error message
            return {"error": f"Failed to fetch threat data: {e}"}, 500
    return threat_data_cache, 200

@threat_bp.route('/api/threats')
def get_threats():
    """
    Returns the latest cyber threat data.
    """
    data, status_code = fetch_threat_data()
    return jsonify(data), status_code

@threat_bp.route('/api/threat-analytics')
def get_threat_analytics():
    """
    Analyzes threat data to provide statistics for charts.
    """
    data, _ = fetch_threat_data()
    if "error" in data:
        return jsonify(data), 500

    # Calculate top countries
    country_codes = [item['countryCode'] for item in data.get('data', [])]
    country_counts = Counter(country_codes)
    top_countries = country_counts.most_common(10)

    analytics = {
        "top_countries": top_countries
    }
    
    return jsonify(analytics)
