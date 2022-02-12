import myrequest from './request.js'

function getDetail(id) {
  console.log(id)
  return myrequest({
    method: 'get',
    url: 'detail',
    params: {
      id: id
    }
  })
}

function getRecommend() {
  return myrequest({
    url: 'detail/recommend'
  })
}

export { getDetail, getRecommend }
