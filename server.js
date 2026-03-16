const http = require("http");

const server = http.createServer((req, res) => {

res.writeHead(200, {"Content-Type":"text/html"});

res.end(`
<!DOCTYPE html>
<html>

<head>
<title>F1 Fan Dashboard</title>

<style>

body{
margin:0;
font-family:Arial;
color:white;
overflow-x:hidden;
}

/* BACKGROUND VIDEO */

#bg-video{
position:fixed;
right:0;
bottom:0;
min-width:100%;
min-height:100%;
object-fit:cover;
z-index:-2;
}

/* DARK OVERLAY */

.overlay{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.65);
z-index:-1;
}

/* HEADER */

.header{
text-align:center;
padding:40px;
animation:fade 2s;
}

.header h1{
font-size:55px;
color:#ff1e1e;
}

.badge{
background:red;
padding:10px 20px;
border-radius:6px;
font-weight:bold;
}

/* NAV */

.nav{
text-align:center;
margin-bottom:30px;
}

.nav a{
color:white;
text-decoration:none;
margin:20px;
font-size:18px;
}

/* GRID */

.container{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
gap:20px;
padding:40px;
}

/* CARD */

.card{
background:rgba(255,255,255,0.1);
padding:25px;
border-radius:10px;
transition:0.3s;
backdrop-filter:blur(6px);
}

.card:hover{
transform:translateY(-10px);
box-shadow:0 15px 30px rgba(0,0,0,0.5);
}

.card h2{
color:#ffcc00;
}

/* PRODUCTS */

.product img{
width:100%;
border-radius:10px;
}

/* FOOTER */

.footer{
text-align:center;
padding:20px;
opacity:0.7;
}

/* ANIMATION */

@keyframes fade{
from{opacity:0}
to{opacity:1}
}

</style>
</head>

<body>

<!-- F1 BACKGROUND VIDEO -->

<video autoplay muted loop id="bg-video">
<source src="https://cdn.coverr.co/videos/coverr-racing-car-on-track-1579/1080p.mp4" type="video/mp4">
</video>

<div class="overlay"></div>

<div class="header">

<h1>🏎️ Formula 1 Fan Dashboard</h1>

<div class="badge">
F1 History • Champions • Teams • Products
</div>

</div>

<div class="nav">
<a href="#">Home</a>
<a href="#">History</a>
<a href="#">Champions</a>
<a href="#">Teams</a>
<a href="#">Products</a>
</div>

<div class="container">

<div class="card">
<h2>🏁 History of F1</h2>
<p>
Formula 1 started in 1950 and is the highest class of international racing.
Legendary drivers like 
<strong>Michael Schumacher</strong>, 
<strong>Ayrton Senna</strong>, and 
<strong>Lewis Hamilton</strong> 
have defined the sport.
</p>
</div>

<div class="card">
<h2>🏆 Current Champion</h2>
<p>
The current dominant driver in recent seasons is 
<strong>Max Verstappen</strong>
from 
<strong>Red Bull Racing</strong>.
</p>
</div>

<div class="card">
<h2>📅 Famous Races</h2>
<ul>
<li>🇲🇨 Monaco Grand Prix</li>
<li>🇮🇹 Italian Grand Prix</li>
<li>🇬🇧 British Grand Prix</li>
</ul>
</div>

<div class="card product">
<h2>🛍️ F1 Merchandise</h2>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/F1_logo.svg/1200px-F1_logo.svg.png">
<p>
Official Formula 1 merchandise includes caps, jackets, and team shirts from Ferrari, Mercedes, and Red Bull.
</p>
</div>

<div class="card">
<h2>📊 Teams</h2>
<ul>
<li>Ferrari</li>
<li>Mercedes</li>
<li>Red Bull Racing</li>
<li>McLaren</li>
<li>Aston Martin</li>
</ul>
</div>

<div class="card">
<h2>📡 DevOps Project</h2>
<p>
This website is deployed using a CI/CD pipeline powered by:
</p>
<p>
Node.js + Jenkins + Docker + Trivy + SonarQube
</p>
</div>

</div>

<div class="footer">
Built with DevOps CI/CD Pipeline 🚀
</div>

</body>
</html>
`);

});

server.listen(3000,()=>{
console.log("Server running on port 3000");
});
