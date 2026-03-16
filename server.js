const http = require("http");
const https = require("https");

const PORT = 3000;

// Free public news API
const NEWS_API = "https://api.spaceflightnewsapi.net/v4/articles/?limit=5";

const server = http.createServer((req, res) => {

  https.get(NEWS_API, (apiRes) => {
    let data = "";

    apiRes.on("data", chunk => {
      data += chunk;
    });

    apiRes.on("end", () => {
      const news = JSON.parse(data).results;

      let newsCards = "";

      news.forEach(article => {
        newsCards += `
        <div class="news-card">
          <img src="${article.image_url}" />
          <h3>${article.title}</h3>
          <p>${article.summary.substring(0,120)}...</p>
          <a href="${article.url}" target="_blank">Read More</a>
        </div>
        `;
      });

      res.writeHead(200, { "Content-Type": "text/html" });

      res.end(`
<!DOCTYPE html>
<html>

<head>
<title>DevOps News Dashboard</title>

<style>

body{
font-family: Arial;
margin:0;
background: linear-gradient(120deg,#1f4037,#99f2c8);
color:white;
overflow-x:hidden;
}

/* Header */

.header{
text-align:center;
padding:40px;
animation:fadeIn 2s ease;
}

.header h1{
font-size:45px;
}

.badge{
display:inline-block;
margin-top:10px;
background:#00ffae;
color:black;
padding:10px 20px;
border-radius:6px;
font-weight:bold;
}

/* News Grid */

.container{
display:grid;
grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
gap:20px;
padding:40px;
}

/* Card */

.news-card{
background:rgba(255,255,255,0.1);
padding:20px;
border-radius:12px;
transition:0.3s;
animation:slideUp 1s ease;
}

.news-card:hover{
transform:translateY(-10px);
box-shadow:0 10px 25px rgba(0,0,0,0.4);
}

.news-card img{
width:100%;
border-radius:10px;
}

.news-card h3{
margin-top:10px;
}

.news-card a{
display:inline-block;
margin-top:10px;
background:#00ffae;
color:black;
padding:8px 15px;
text-decoration:none;
border-radius:5px;
}

/* Animations */

@keyframes fadeIn{
from{opacity:0}
to{opacity:1}
}

@keyframes slideUp{
from{
opacity:0;
transform:translateY(30px);
}
to{
opacity:1;
transform:translateY(0);
}
}

/* Footer */

.footer{
text-align:center;
padding:20px;
font-size:14px;
opacity:0.8;
}

</style>
</head>

<body>

<div class="header">
<h1>🚀 DevOps CI/CD News Dashboard</h1>
<p>Latest Tech & Space News (Live API)</p>

<div class="badge">
Node.js • Jenkins • Docker • Trivy • SonarQube
</div>
</div>

<div class="container">
${newsCards}
</div>

<div class="footer">
Auto-updated news feed • Powered by DevOps Pipeline
</div>

</body>

</html>
`);
    });

  }).on("error", () => {
    res.writeHead(500);
    res.end("Error fetching news");
  });

});

server.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
