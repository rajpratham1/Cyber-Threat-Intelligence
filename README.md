# Cyber Threat Intelligence Dashboard

A web-based intelligence platform that visualizes live global cyber threats, displays attack trends and analytics, and provides a live cybersecurity news feed. The application features a React frontend and a Flask backend.

## Features

- **Live Attack Map**: Visualizes the geographical location of reported malicious IP addresses on an interactive world map using Leaflet.
- **IP/Domain Risk Lookup**: Allows users to enter any public IP address to get a risk score, country of origin, and other details from the AbuseIPDB API.
- **Map Zoom on Lookup**: The map automatically zooms to the location of a successfully looked-up IP address.
- **Cybersecurity News Feed**: A dedicated section to display the latest cybersecurity news.
- **Threat Analytics Dashboard**: A component for visualizing threat data with charts and graphs.

## Tech Stack

- **Frontend**: React.js, Leaflet.js
- **Backend**: Python (Flask)
- **APIs**: AbuseIPDB

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js and npm](https://nodejs.org/en/)
- [Python](https://www.python.org/downloads/) and `pip`

### Backend Setup

1.  **Navigate to the backend directory:**
    ```sh
    cd backend
    ```

2.  **Install Python dependencies:**
    ```sh
    pip install -r requirements.txt
    ```

3.  **Create an environment file:**
    Create a file named `.env` in the `backend` directory.

4.  **Add your API key:**
    Open the `.env` file and add your AbuseIPDB API key. You can get a free key from [abuseipdb.com](https://www.abuseipdb.com/account/api).
    ```
    ABUSEIPDB_API_KEY=your_actual_api_key
    ```

5.  **Run the backend server:**
    ```sh
    python app.py
    ```
    The backend will be running at `http://localhost:5000`.

### Frontend Setup

1.  **Open a new terminal** and navigate to the frontend directory:
    ```sh
    cd frontend
    ```

2.  **Install Node.js dependencies:**
    ```sh
    npm install
    ```

3.  **Run the frontend application:**
    ```sh
    npm start
    ```
    The application will open in your browser at `http://localhost:3000`.

## How to Use

- **IP Lookup**: Enter a **public IP address** in the "IP/Domain Risk Lookup" form and click "Lookup". The results will be displayed below, and the map will zoom to the IP's location. Please note that private IP addresses (e.g., `192.168.x.x`, `10.x.x.x`) are not tracked on the public internet and will not return location data.
- **Live Map**: The "Live Attack Map" shows markers for recently reported malicious IPs.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
