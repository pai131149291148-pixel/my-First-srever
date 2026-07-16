const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    res.end(`
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<title>My Web Server</title>

<style>
body{
    margin:0;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    background:linear-gradient(135deg,#ffd6e7,#ffeef7);
    font-family:Tahoma,sans-serif;
}

.card{
    background:white;
    padding:40px;
    width:500px;
    border-radius:20px;
    text-align:center;
    box-shadow:0 0 20px rgba(255,105,180,.3);
}

h1{
    color:#ff4f9a;
}

h2{
    color:#ff69b4;
}

p{
    color:#555;
    font-size:18px;
}

.heart{
    font-size:50px;
}
</style>

</head>

<body>

<div class="card">
<div class="heart">💖</div>

<h1>Welcome</h1>

<h2>สวัสดีค่ะ</h2>

<p><b>นางสาว ภัทรธิดา ผางไธสง</b></p>

<p>รหัสนักศึกษา 69319011689</p>

<p>เครื่องแม่ข่ายทำงานปกติบนระบบ Railway แล้วค่ะ 🌸</p>

</div>

</body>
</html>
`);
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
