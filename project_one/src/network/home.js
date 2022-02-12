import myrequest from './request.js'

//*获取轮播图和推荐
export function getHomeMultidata() {
  return myrequest({ url: 'home/multidate' })
}
//*获取商品
export function getHomeGoods(type, page) {
  return myrequest({
    method: 'post',
    url: 'home/data',
    params: {
      type,
      page
    }
  })
}
