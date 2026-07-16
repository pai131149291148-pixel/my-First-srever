// 1. เรียกใช้งาน Module ที่ชื่อว่า 'http'
const http = require('http');

// 2. กำหนด Port
const port = process.env.PORT || 3000;

// 3. สร้าง Server
const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    res.end(`
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <title>My Web Server</title>
    <style>
        body{
            margin:0;
            padding:0;
            font-family:'Tahoma',sans-serif;
            background:linear-gradient(135deg,#ffd6e8,#ffeef5);
            display:flex;
            justify-content:center;
            align-items:center;
            height:100vh;
        }

        .card{
            background:#fff;
            width:500px;
            padding:40px;
            border-radius:25px;
            text-align:center;
            box-shadow:0 10px 25px rgba(255,105,180,.3);
            border:4px solid #ffb6d5;
        }

        h1{
            color:#ff4f9a;
            font-size:32px;
            margin-bottom:15px;
        }

        h2{
            color:#ff69b4;
            margin-bottom:10px;
        }

        p{
            color:#666;
            font-size:18px;
            line-height:1.8;
        }

        .heart{
            font-size:45px;
            animation:beat 1s infinite;
        }

        @keyframes beat{
            0%{transform:scale(1);}
            50%{transform:scale(1.2);}
            100%{transform:scale(1);}
        }

        .footer{
            margin-top:25px;
            color:#ff69b4;
            font-weight:bold;
            font-size:16px;
        }
    </style>
</head>

<body>

<div class="card">
    <div class="heart">💖</div>

    <h1>Welcome to My Web Server</h1>

    <h2>สวัสดีค่ะ 👋</h2>

    <p>
        <b>นางสาว ภัทรธิดา ผางไธสง</b><br>
        รหัสนักศึกษา <b>69319011689</b>
    </p>

    <p>
        เครื่องแม่ข่ายทำงานปกติบนระบบ Railway แล้วค่ะ 🚄✨
    </p>

    <div class="footer">
        🌸 Have a Nice Day 🌸
    </div>

</div>

</body>
</html>
`);
});

// 4. เริ่มต้น Server
server.listen(port, () => {
    console.log(`Server is running! เครื่องแม่ข่ายเปิดทำงานแล้วที่ช่องทาง: ${port}`);
});ห
