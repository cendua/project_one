import db from "../db/index.js";
import fs from "fs";
import { fileURLToPath } from "url";

async function getData(url, hasPic = false) {
    //?获取指定表内容
    const table_tmp = new Promise((resolve, rejects) => {
        db.query(url, (err, result) => {
            resolve(result);
            rejects(err);
        });
    });
    const table = await table_tmp;

    //?将表中图片编译为base64形式
    if (hasPic) {
        async function myreadfile(pic_url) {
            return new Promise((resolve, rejects) => {
                fs.readFile(pic_url, "base64", (err, result) => {
                    resolve(result);
                    rejects(err);
                });
            });
        }
        for (let i = 0; i < table.length; i++) {
            table[i].img = await myreadfile(fileURLToPath(
                import.meta.url).split('project_one_server')[0] + table[i].img);
        }
    }

    return table;
}
// console.log(fileURLToPath(
//     import.meta.url))
export default getData;