from flask import Blueprint, jsonify, request
import requests
import os

ip_lookup_bp = Blueprint('ip_lookup_bp', __name__)

@ip_lookup_bp.route('/api/iplookup')
def ip_lookup():
    """
    Looks up an IP address to get its risk score and other details from AbuseIPDB.
    """
    ip_address = request.args.get("ip")
    if not ip_address:
        return jsonify({"error": "IP address is required"}), 400

    try:
        # Fetch IP details from AbuseIPDB
        url = f"https://api.abuseipdb.com/api/v2/check?ipAddress={ip_address}"
        headers = {
            "Key": os.environ.get("ABUSEIPDB_API_KEY"),
            "Accept": "application/json"
        }
        response = requests.get(url, headers=headers)
        response.raise_for_status()  # Raise an exception for bad status codes
        
        return jsonify(response.json())
    except requests.exceptions.RequestException as e:
        print(f"[ERROR] AbuseIPDB API request failed: {e}")
        return jsonify({"error": f"Failed to fetch IP lookup data: {e}"}), 500
