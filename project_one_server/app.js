import express from "express";
import cors from "cors";
import homerouter from "./router/home.js";
import detailrouter from "./router/detail.js";
import categoryrouter from "./router/category.js";
const app = express();

// 实现跨域
app.use(cors());
// 实现可以解析url
app.use(express.urlencoded({ extended: false }));

//自定义报错中间件
app.use(function (req, res, next) {
  res.cc = function (err, status = 1) {
    res.send({
      status,
      message: err instanceof Error ? err.message : err,
    });
  };
  next();
});

// 挂载home路由模块
app.use("/home", homerouter);
//挂载detail模块
app.use("/detail", detailrouter);
//挂载categories路由模块
app.use("/category", categoryrouter);

app.listen(333, function () {
  console.log("开始监听333端口");
});
