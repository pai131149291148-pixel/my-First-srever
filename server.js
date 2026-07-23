const http = require('http');
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

const port = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    try {

        const client = await pool.connect();
        const result = await client.query('SELECT * FROM students');
        client.release();

        let html = `
<!DOCTYPE html>
<html lang="th">

<head>

<meta charset="UTF-8">

<title>ฐานข้อมูลนักศึกษา</title>

<link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;500;700&display=swap" rel="stylesheet">

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Kanit',sans-serif;
}

body{
background:linear-gradient(135deg,#ffd6e8,#fff0f7,#ffeaf5);
min-height:100vh;
display:flex;
justify-content:center;
align-items:center;
overflow:hidden;
position:relative;
}

/* ฟองอากาศ */

body::before,
body::after{
content:'';
position:absolute;
border-radius:50%;
filter:blur(60px);
animation:float 8s infinite ease-in-out;
}

body::before{
width:260px;
height:260px;
background:#ffb7d8;
top:-80px;
left:-80px;
}

body::after{
width:300px;
height:300px;
background:#ffd8ea;
bottom:-100px;
right:-100px;
}

@keyframes float{
50%{
transform:translateY(30px);
}
}

/* ดอกซากุระ */

.sakura{
position:absolute;
top:-50px;
font-size:25px;
animation:fall linear infinite;
opacity:.8;
}

@keyframes fall{
0%{
transform:translateY(-50px) rotate(0deg);
}
100%{
transform:translateY(110vh) rotate(360deg);
}
}

.container{

width:85%;
max-width:900px;

background:rgba(255,255,255,.45);

backdrop-filter:blur(20px);

border-radius:25px;

padding:35px;

box-shadow:
0 0 25px rgba(255,130,180,.4),
0 0 55px rgba(255,170,220,.3);

animation:fade .8s;

z-index:2;

}

@keyframes fade{

from{
opacity:0;
transform:translateY(30px);
}

to{
opacity:1;
transform:translateY(0);
}

}

h1{

text-align:center;

color:#ff4b9c;

font-size:38px;

margin-bottom:30px;

text-shadow:
0 0 8px white,
0 0 20px #ff8fc4;

animation:shine 2s infinite alternate;

}

@keyframes shine{

to{

text-shadow:
0 0 15px white,
0 0 35px hotpink;

}

}

table{

width:100%;

border-collapse:collapse;

overflow:hidden;

border-radius:18px;

}

th{

background:#ff89c2;

color:white;

padding:18px;

font-size:19px;

}

td{

padding:16px;

text-align:center;

background:rgba(255,255,255,.8);

transition:.35s;

}

tr:nth-child(even) td{

background:#fff2f9;

}

tr:hover td{

background:#ffd8eb;

transform:scale(1.02);

box-shadow:inset 0 0 15px pink;

}

.footer{

margin-top:25px;

text-align:center;

font-size:20px;

color:#ff4d95;

animation:heart 1.5s infinite;

}

@keyframes heart{

50%{

transform:scale(1.08);

}

}

</style>

</head>

<body>

<div class="container">

<h1>🌸 ฐานข้อมูลนักศึกษา 🌸</h1>

<table>

<tr>

<th>รหัสนักศึกษา</th>

<th>ชื่อนักศึกษา</th>

</tr>
`;

        result.rows.forEach(row => {

            html += `
<tr>

<td>${row.student_id}</td>

<td>${row.student_name}</td>

</tr>
`;

        });

        html += `
</table>

<div class="footer">

💖 Welcome to Student Database 💖

</div>

</div>

<script>

for(let i=0;i<25;i++){

const flower=document.createElement("div");

flower.className="sakura";

flower.innerHTML="🌸";

flower.style.left=Math.random()*100+"vw";

flower.style.animationDuration=(Math.random()*5+5)+"s";

flower.style.fontSize=(Math.random()*15+15)+"px";

flower.style.animationDelay=Math.random()*5+"s";

document.body.appendChild(flower);

}

</script>

</body>

</html>
`;

        res.end(html);

    } catch (err) {

        console.error(err);

        res.end(`
        <h1>เกิดข้อผิดพลาด</h1>
        <p>${err.message}</p>
        `);

    }

});

server.listen(port, () => {

    console.log(`Server is running on port ${port}`);

});
