require('dotenv').config(); // dotenv 모듈 config
const { PORT } = process.env;
const port = PORT || 4000;
const app = require('./src/app')
const db = require('./src/db');

app.get('/', (req, res) => {
  res.send('TEST PAGE');
});

app.listen(port, () => {
  console.log(`정상적으로 서버를 시작하였습니다. http://localhost:${port}`);
}); // 서버 실행