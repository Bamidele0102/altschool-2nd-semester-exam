# Altschool 2nd Semester Exam – Cloud Engineer Portfolio

This repository contains my submission for the Tinyuka 2024/2025 AltSchool Second Semester exam.

---

## 📄 Project Overview

A professional portfolio web application for a Cloud/DevOps Engineer, showcasing technical skills, projects, and experience.  
The app features a dynamic landing page, interactive elements, a detailed project page, and is fully containerized and deployed using Node.js and Express.

---

## 🌐 Live Demo

<!-- **Public IP Address:**  
`https://52.50.147.114` -->

**Domain:**  
<https://www.clouddeck.site/>

**Screenshots:** 
![Cloud Engineer Portfolio Screenshot](/web-app-images/landing.png)

![Project Details Screenshot](/web-app-images/project.png)

**Terminal Simulation Screenshot:**

![Terminal Simulation Screenshot](/web-app-images/terminal.png)

**Video Demo:**

[![Watch the video](https://img.youtube.com/vi/D7mUt4Jgy44/0.jpg)](https://www.youtube.com/watch?v=D7mUt4Jgy44)

---

## ✨ Key Features

- **Dynamic Landing Page:** Professional bio, skills, and project pitch.
- **Interactive Elements:** Terminal simulation, animated components, and responsive design.
- **Project Details Page:** In-depth technical implementation and architecture.
- **DevOps Focus:** Demonstrates cloud engineering and DevOps best practices.
- **Performance Optimized:** Fast loading, proper caching, and compression.
- **Security:** HTTP headers via Helmet middleware.
- **Containerization:** Docker support for easy deployment.
- **Responsive Design:** Works on all device sizes.
- **HTTPS/SSL:** Secured with Let’s Encrypt certificates.
- **NGINX Reverse Proxy:** Used for secure, performant routing and SSL termination.
- **Custom Domain:** Deployed with a domain registered via GoDaddy (or Namecheap).

---

## 🛠️ Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript
- **Styling:** Tailwind CSS with custom animations
- **Backend:** Node.js, Express
- **Security:** Helmet middleware, HTTPS/SSL (Let’s Encrypt)
- **Containerization:** Docker
- **Web Server/Proxy:** NGINX (reverse proxy, SSL termination)
- **Infrastructure:** AWS EC2 (for deployment)
- **Domain:** GoDaddy/Namecheap

---

## 📁 Project Structure

```no-highlight
cloud-engineer-portfolio/
├── public/                   # Publicly accessible files
│   ├── assets/               # Image assets
│   │   ├── icons/            # Technology icons (SVG)
│   │   └── img/              # Project images
│   ├── css/                  # CSS files
│   │   ├── main.css          # Main stylesheet (built)
│   │   └── tailwind.css      # Tailwind source
│   ├── js/                   # JavaScript files
│   │   └── main.js           # Main JavaScript
│   ├── favicon.ico           # Favicon
│   ├── index.html            # Main landing page (built)
│   └── project.html          # Project details page
├── src/                      # Source files
│   └── index.html            # Main landing page (source)
├── .dockerignore             # Docker ignore file
├── Dockerfile                # Docker configuration
├── package.json              # Node.js dependencies and scripts
├── server.js                 # Node.js server
├── tailwind.config.js        # Tailwind configuration
└── README.md                 # This file
```

---

## 🚀 Getting Started

### **Prerequisites**

- Node.js v20+
- npm

### **Installation**

```bash
# Clone the repository
git clone https://github.com/Bamidele0102/altschool-2nd-semester-exam.git
cd altschool-2nd-semester-exam/cloud-engineer-portfolio

# Install dependencies
npm install

# Build Tailwind CSS
npm run build:css
```

### **Running Locally**

```bash
# Start the development server
npm start

# Access the application at:
http://localhost:3000
```

---

## 🏗️ Building for Production

```bash
# Build CSS
npm run build:css

# Start production server
npm start
```

---

## 🐳 Docker Deployment

```bash
# Build Docker image
docker build -t cloud-portfolio .

# Run Docker container
docker run -p 8080:3000 cloud-portfolio

# Access the application at:
http://localhost:8080
```

---

## ☁️ AWS EC2 Deployment, NGINX, and SSL

1. Launch an EC2 instance (Ubuntu recommended).
2. Install Node.js and npm.
3. Clone your repository.
4. Install dependencies and build the project:

    ```bash
    npm install
    npm run build:css
    npm start

    ```

5. Set up **NGINX** as a reverse proxy:
    - Forward traffic from ports 80/443 to your Node.js app on port 3000.
    - Example NGINX config:

      ```bash
      server {
          listen 80;
          server_name your-domain.com www.your-domain.com;
          return 301 https://$host$request_uri;
      }
      server {
          listen 443 ssl;
          server_name your-domain.com www.your-domain.com;

          ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
          ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;

          location / {
              proxy_pass http://localhost:3000;
              proxy_set_header Host $host;
              proxy_set_header X-Real-IP $remote_addr;
              proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
              proxy_set_header X-Forwarded-Proto $scheme;
          }
      }
      ```

6. Obtain a free SSL certificate using **Let’s Encrypt** (Certbot).
7. Register and configure your **custom domain** (GoDaddy, Namecheap, etc.) to point to your EC2 instance.
8. Open ports 80 and 443 in your EC2 security group.
9. Access the app via your domain: `https://your-domain.com`

---

## 📝 Features in Detail

### **Landing Page**

- Professional bio with timeline of experience
- Technology stack showcase (SVG icons)
- Interactive terminal simulating DevOps commands
- Infrastructure as Code examples
- Animated cloud background elements
- Responsive design for all devices

### **Project Page**

- Detailed system architecture
- CI/CD pipeline visualization
- Technology stack breakdown
- Performance metrics and statistics
- Contact form for inquiries

---

## 🛠️ Troubleshooting

### **CSS Not Loading**

- Verify paths in HTML files use absolute paths (e.g., `/css/main.css`)
- Check that the build process ran successfully (`npm run build:css`)
- Ensure static file serving is configured properly in `server.js`
- Verify file permissions on the server

### **Deployment Issues**

- Ensure Node.js and npm are installed on the server
- Check that the server is running on the correct port (default is 3000)
- Check server logs for errors
- Verify port configuration and security groups
- Ensure all dependencies are installed
- Confirm Node.js version compatibility

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a new Pull Request

---

## 🚦 Future Contributions & Improvements

The following enhancements are planned or welcome as contributions:

- **Database Integration:**  
  Add a database (e.g., MongoDB, PostgreSQL) for dynamic content, blog posts, or contact form submissions.

- **CI/CD Pipeline:**  
  Integrate with GitHub Actions or GitLab CI for automated testing, linting, and deployment on every push.

- **Kubernetes Deployment:**  
  Add Kubernetes manifests (Deployment, Service, Ingress) for scalable, production-grade orchestration.

- **Cloud Storage & CDN:**  
  Serve static assets via AWS S3 and CloudFront or another CDN for improved performance.

- **Monitoring & Logging:**  
  Integrate Prometheus, Grafana, or ELK stack for real-time monitoring and log aggregation.

- **User Authentication:**  
  Add authentication and admin dashboard for managing portfolio content.

- **Unit & Integration Tests:**  
  Expand test coverage for backend and frontend code.

---

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 📬 Contact

- **Name:** Idowu Olayiwola Bamidele
- **Email:** <idowu.olayiwola.bamidele@gmail.com>
- **Source Code:** [Cloud Engineer Portfolio](https://github.com/Bamidele0102/altschool-2nd-semester-exam/tree/main/cloud-engineer-portfolio)
<!-- - **LinkedIn:** [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- **Live Demo:** <https://your-domain.com> -->

---

**_Thank you for checking out my Cloud Engineer Portfolio!_**
