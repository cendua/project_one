import getData from "./getData.js";

async function mutildate(req, res) {
  const banner = await getData("select * from home_banner", true);
  const recommend = await getData("select * from home_recommend", true);
  res.send({
    status: 0,
    message: "成功获取了图片",
    banner: banner,
    recommend: recommend,
  });
}

async function getGoods(req, res) {
  const list = await getData(
    `select * from home_goods where type='${req.query.type}' limit ${
      11 * (req.query.page - 1)
    },${11 * req.query.page - 1}`,
    true
  );
  res.send({
    status: 0,
    length: list.length,
    message: "成功获取了商品",
    list: list,
  });
}

export { mutildate, getGoods };
