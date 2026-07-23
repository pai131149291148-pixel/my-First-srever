let html = `
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<title>ฐานข้อมูลนักศึกษา</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI',sans-serif;
}

body{
    background:linear-gradient(135deg,#ffd6e8,#ffeef8,#fff5fb);
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
}

/* ฟองอากาศ */
body::before,
body::after{
    content:"";
    position:absolute;
    border-radius:50%;
    filter:blur(50px);
    animation:float 8s infinite ease-in-out;
}

body::before{
    width:250px;
    height:250px;
    background:#ffb6d9;
    top:-60px;
    left:-60px;
}

body::after{
    width:300px;
    height:300px;
    background:#ffd9ec;
    bottom:-80px;
    right:-80px;
}

@keyframes float{
    50%{
        transform:translateY(30px);
    }
}

.container{
    width:80%;
    max-width:850px;
    background:rgba(255,255,255,.45);
    backdrop-filter:blur(18px);
    border-radius:25px;
    padding:35px;
    box-shadow:
        0 0 20px rgba(255,120,180,.4),
        0 0 45px rgba(255,170,220,.3);
    animation:fade .8s;
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
    color:#ff4f9b;
    margin-bottom:25px;
    font-size:34px;
    text-shadow:
        0 0 8px #fff,
        0 0 15px #ffb3d9;
    animation:shine 2s infinite alternate;
}

@keyframes shine{
    from{
        text-shadow:
        0 0 8px #fff,
        0 0 15px #ffb3d9;
    }
    to{
        text-shadow:
        0 0 15px #fff,
        0 0 30px #ff69b4;
    }
}

table{
    width:100%;
    border-collapse:collapse;
    overflow:hidden;
    border-radius:18px;
}

th{
    background:#ff8fc5;
    color:white;
    padding:16px;
    font-size:18px;
}

td{
    padding:15px;
    text-align:center;
    background:rgba(255,255,255,.75);
    transition:.3s;
}

tr:nth-child(even) td{
    background:#fff3fa;
}

tr:hover td{
    background:#ffd6eb;
    transform:scale(1.02);
    box-shadow:0 0 15px #ffc4df inset;
}

.footer{
    text-align:center;
    margin-top:20px;
    color:#ff5ca8;
    font-weight:bold;
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

</body>
</html>
`;

res.end(html);
