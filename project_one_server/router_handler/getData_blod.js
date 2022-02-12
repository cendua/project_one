import db from "../db/index.js";
import fs, { copyFileSync, futimes } from "fs";
import { resolve } from "path";
import { rejects } from "assert";

async function getData_bold(select) {
  const tem = new Promise((resolve, rejects) => {
    db.query(select, (err, result) => {
      resolve(result);
      rejects(err);
    });
  });

  let res = await tem;
  res[0].list = res[0].list.toString("utf8").split(";");
  // console.log(res);

  function myreadfile(url) {
    return new Promise((resolve, rejects) => {
      fs.readFile(url, "base64", (err, result) => {
        resolve(result);
        rejects(err);
      });
    });
  }

  async function getbase64() {
    for (let i = 0; i < res[0].list.length; i++) {
      res[0].list[i] = await myreadfile(res[0].list[i]);
    }
  }

  await getbase64();

  return res;
}

// console.dir(getData_bold);

export { getData_bold };
