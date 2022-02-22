import getData from "./getData.js";
import { getData_bold } from "./getData_blod.js";
import dateFormat from "dateformat";

async function getDetail(req, res) {
    //?获取滚动图
    const ItemInfo = await getData("select * from detail_topimage", true);
    // console.log(ItemInfo);
    //?获取基本信息
    const baseInfo = await getData(
        `select * from detail_baseinfo where id=${req.query.id}`
    );
    //?获取销量，收藏
    const columns = await getData(
        `select * from detail_columns where id=${req.query.id}`
    );
    // console.log(columns);
    //?获取服务
    const services = await getData("select * from detail_services", true);
    services[0].name = services[0].name.split(";");
    //?获取商店信息
    const shopInfo = await getData(
        `select * from detail_shop where id=${req.query.id}`,
        true
    );
    shopInfo[0].score = shopInfo[0].score.split(";");
    let tmp = shopInfo[0].score.map((item, index) => {
        let temp = {};
        let lala = item.split(/\{"(.*?)",([0-9])\}/);
        temp.name = lala[1];
        temp.score = lala[2];
        if (lala[2] >= 5) temp.isBetter = true;
        else temp.isBetter = false;
        return temp;
    });
    shopInfo[0].score = tmp;

    //?图片详情
    const imgInfo = await getData_bold(
        `select * from detail_imginfo where id =${req.query.id}`
    );
    //?商品详情
    const paramsInfo = await getData(
        `select * from detail_paramsinfo where id=${req.query.id}`
    );
    //将info转换为二维数组
    paramsInfo[0].info = paramsInfo[0].info.split(";");
    let tmpinfo = [];
    let len = parseInt(paramsInfo[0].info.length / 4);
    let i = 0;
    for (i; i < len; i++) {
        tmpinfo[i] = paramsInfo[0].info.splice(0, 4);
    }
    if (paramsInfo[0].info.length !== 0) tmpinfo[i] = paramsInfo[0].info;
    paramsInfo[0].info = tmpinfo;
    const tmprule = paramsInfo[0].rule.split(";").map((item) => {
        let ite = {};
        let tmpitem = item.split(":");
        ite[`${tmpitem[0]}`] = tmpitem[1];
        return ite;
    });
    paramsInfo[0].rule = tmprule;
    //?商品评论
    let commentInfo = await getData_bold("select * from detail_commentinfo");
    const commentInfo_splice = await getData(
        "select * from detail_commentinfo",
        true
    );
    commentInfo[0].img = commentInfo_splice[0].img;
    console.log(dateFormat(new Date(), "yyyy,dS, dddd, h:MM:ss TT"));
    commentInfo[0].date = dateFormat(new Date(), "yyyy,dS, dddd, h:MM:ss TT");

    //?发送响应
    res.send({
        status: 0,
        message: "detail获取成功",
        result: {
            ItemInfo,
            baseInfo,
            columns,
            services,
            shopInfo,
            imgInfo,
            paramsInfo,
            commentInfo,
        },
    });
}

async function getRecommend(req, res) {
    //?获取推荐信息
    // res.send("get it too");
    const recommend = await getData("select * from home_goods", true);
    res.send({
        status: 0,
        message: "获取推荐商品成功",
        data: { recommend },
    });
}

export { getDetail, getRecommend };