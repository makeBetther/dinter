const express = require("express"); // express 불러오기
const app = express(); // express 실행
const cookieParser = require("cookie-parser"); // 쿠키 파서 불러
const cors = require("cors"); // CORS 미들웨어 불러오기


// EJS
app.set("view engine", "ejs");
// JSON 형식의 데이터를 파싱하기 위한 미들웨어
app.use(express.json());

// URL-encoded 형식의 데이터를 파싱하기 위한 미들웨어
app.use(express.urlencoded({ extended: false }));

// 쿠키 파서 미들웨어 실행
app.use(cookieParser());

// CORS 오류 방지 미들웨어 실행
app.use(cors());


// app 객체 모듈로 내보내기
module.exports = app;