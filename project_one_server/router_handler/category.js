import getData from "./getData.js";
import { getData_bold } from "./getData_blod.js";

async function getCategory(req, res) {
  const list = await getData("select * from category_list");
  res.send({
    status: 0,
    message: "分类后端已收到",
    category: { list },
  });
}

async function getCategoryContent(req, res) {
  console.log(req.query.maitKey);
  const list = await getData_bold(
    `select * from category_contentlist where id=${req.query.maitKey}`
  );
  console.log(list);
  res.send({
    status: 0,
    message: "fenlei get",
    list: list[0],
  });
}
export { getCategory, getCategoryContent };
