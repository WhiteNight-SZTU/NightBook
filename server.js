const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000; // 你可以根据需要选择一个合适的端口

app.use(bodyParser.json());
app.use(cors());
// 创建MySQL数据库连接
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123',
  database: 'mydata'
});

// 连接到MySQL数据库
db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// 处理登录请求
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // 查询数据库以验证用户名和密码
  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(query, [username, password], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ message: '服务器内部错误' });
      return;
    }

    if (results.length === 1) {
      // 找到匹配的用户，返回登录成功
      res.status(200).json({ message: '登录成功' });
    } else {
      // 用户名或密码不匹配
      res.status(401).json({ message: '用户名或密码不正确' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
