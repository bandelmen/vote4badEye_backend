const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors'); // 引入 cors 中间件

const app = express();
const port = 3000;

connectDB();

app.use(express.json());

// 全局使用 cors 中间件处理跨域请求
app.use(cors());

app.use('/auth', require('./routes/auth'));
app.use('/api', require('./routes/candidates'));

app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});
