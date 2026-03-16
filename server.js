const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(`
  <html>
  <head>
      <title>DevOps CI/CD App</title>
      <style>
          body {
              font-family: Arial;
              background: linear-gradient(135deg,#1e3c72,#2a5298);
              color: white;
              text-align: center;
              padding-top: 100px;
          }

          .card {
              background: rgba(255,255,255,0.1);
              padding: 40px;
              border-radius: 10px;
              display: inline-block;
          }

          h1 {
              font-size: 40px;
          }

          p {
              font-size: 20px;
          }

          .badge {
              margin-top:20px;
              background:#00ffae;
              color:black;
              padding:10px 20px;
              border-radius:5px;
              font-weight:bold;
          }
      </style>
  </head>

  <body>

  <div class="card">
      <h1>🚀 DevOps CI/CD Pipeline</h1>
      <p>Application deployed successfully using Jenkins Pipeline</p>

      <div class="badge">
      Node.js + Jenkins + Docker + Trivy + SonarQube
      </div>
  </div>

  </body>
  </html>
  `);
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
