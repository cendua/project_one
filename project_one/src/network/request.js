import { Toast } from 'vant'
Toast.setDefaultOptions({ duration: 500 })
import axios from 'axios'

function myrequset(config) {
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:333/',
    timeout: 3000
  })

  //?配置请求拦截器
  instance.interceptors.request.use(
    function (config) {
      // console.log('请求前干点什么')
      Toast.loading({
        message: '我爱喝鸡汤',
        forbidClick: true,
        loadingType: 'spinner'
      })
      return config
    },
    function (err) {
      console.log(err)
    }
  )

  //?配置响应拦截器
  instance.interceptors.response.use(
    function (res) {
      // console.log('请求后干点什么')
      Toast.clear()
      return res
    },
    function (err) {
      console.log(err)
    }
  )

  //?发送请求并返回promise对象
  console.log('发送一次请求')
  return instance.request(config)
}

export default myrequset
