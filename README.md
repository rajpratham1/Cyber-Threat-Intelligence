# Cyber Threat Intelligence Dashboard

<p align="center">
  <a href="#">
    <img src="https://via.placeholder.com/150" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Cyber Threat Intelligence Dashboard</h3>

  <p align="center">
    A web-based intelligence platform that visualizes live global cyber threats, displays attack trends and analytics, and provides a live cybersecurity news feed.
    <br />
    <a href="https://github.com/rajpratham1/Cyber-Threat-Intelligence"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://cyber-threat-intelligence-z8lc.onrender.com/">View Demo</a>
    ·
    <a href="https://github.com/rajpratham1/Cyber-Threat-Intelligence/issues">Report Bug</a>
    ·
    <a href="https://github.com/rajpratham1/Cyber-Threat-Intelligence/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#deployment">Deployment</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://cyber-threat-intelligence-z8lc.onrender.com/)

This project is a comprehensive Cyber Threat Intelligence Dashboard that provides real-time insights into the global cyber threat landscape. It is designed for security enthusiasts, researchers, and professionals who want to stay informed about emerging threats and malicious activities.

The dashboard aggregates and visualizes data from multiple sources, offering a single pane of glass for threat intelligence. It features a live attack map, IP/domain risk lookup, threat analytics, and a cybersecurity news feed.

### Built With

This project was built with the following technologies:

* [React](https://reactjs.org/)
* [Flask](https://flask.palletsprojects.com/)
* [Leaflet.js](https://leafletjs.com/)
* [Chart.js](https://www.chartjs.org/)
* [AbuseIPDB API](https://www.abuseipdb.com/)
* [NewsAPI](https://newsapi.org/)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```
* Python

### Installation

1. Get a free API Key at [https://www.abuseipdb.com/](https://www.abuseipdb.com/) and [https://newsapi.org/](https://newsapi.org/)
2. Clone the repo
   ```sh
   git clone https://github.com/rajpratham1/Cyber-Threat-Intelligence.git
   ```
3. Install NPM packages
   ```sh
   cd frontend
   npm install
   ```
4. Install Python packages
   ```sh
   cd backend
   pip install -r requirements.txt
   ```
5. Create a `.env` file in the `backend` directory and add your API keys:
   ```
   ABUSEIPDB_API_KEY=your_abuseipdb_api_key
   NEWS_API_KEY=your_newsapi_key
   ```



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_



<!-- PROJECT STRUCTURE -->
## Project Structure
```
.
├── backend
│   ├── api
│   │   ├── ip_lookup.py
│   │   ├── news_feed.py
│   │   └── threat_routes.py
│   ├── .env
│   ├── app.py
│   └── requirements.txt
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   └── utils
│   ├── .gitignore
│   ├── package.json
│   └── README.md
├── LICENSE
└── README.md
```

<!-- DEPLOYMENT -->
## Deployment

This project is deployed on Render. The frontend is a static site and the backend is a web service.

### Frontend

- **Service Type**: Static Site
- **Root Directory**: `frontend`
- **Build Command**: `npm run build`
- **Publish Directory**: `build`
- **Environment Variable**:
    - `REACT_APP_API_URL`: The URL of your backend service.

### Backend

- **Service Type**: Web Service
- **Runtime**: Python 3
- **Start Command**: `gunicorn app:app`
- **Environment Variables**:
    - `ABUSEIPDB_API_KEY`: Your AbuseIPDB API key.
    - `NEWS_API_KEY`: Your NewsAPI key.


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Your Name - [Pratham Kumar] - rajpratham40@gmail.com.com

Project Link: [https://github.com/rajpratham1/Cyber-Threat-Intelligence](https://github.com/rajpratham1/Cyber-Threat-Intelligence)



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Img Shields](https://shields.io)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)



[product-screenshot]: https://via.placeholder.com/800x400
