import request from './request.js'

function getCategory() {
  return request({
    url: 'category'
  })
}

function getSubCategory(maitKey) {
  return request({
    url: 'category/subcategory',
    params: {
      maitKey
    }
  })
}

export { getCategory, getSubCategory }
