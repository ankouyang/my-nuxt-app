import axios from 'axios'
import Vue from 'vue'

const ajax = axios.create({
  baseURL: process.env.baseUrl,
  timeout: 30 * 1000
})

// 请求拦截器
ajax.interceptors.request.use(
  config => {
    // const Token = getToken()
    // if (Token) {
    //     config.headers['token'] = getToken()
    // }
    config.headers['Content-Type'] = 'application/json;chartset=utf-8'
    // config.headers["Authorization"] = "Bearer atwerjjhqkwehtjhsdfqwehjhwrgqre";
    return config
  },
  error => {
    throw new Error(`请求错误: ${error}`)
  }
)
// 响应拦截器
ajax.interceptors.response.use(
  response => {
    if (response.status === 200) {
      // 处理返回流文件报错
      if (response.config.responseType === 'blob') {
        var reader = new FileReader()
        reader.readAsText(response.data)
        reader.onload = e => {
          const result = JSON.parse(e.target.result)
          if (result.code !== 200) {
            Vue.prototype.$message.error(result.msg)
          }
        }
      }
      if (response.data.code === 200) {
        return response.data.data
      } else {
        Vue.prototype.$message.error(response.data.message)
        return Promise.reject(response.data)
      }
    } else {
      return response
    }
  },
  error => {
    throw new Error(error)
    // throw new Error(`请求错误: ${error}`)
  }
)

/**
 * @params {config} 参数从API传递过来
 * @params @{config} {url} 请求地址
 * @params @{config} {data} 请求数据
 */
export function Get(config) {
  let obj = {
    url: config.url,
    method: 'get',
    params: {
      ...config.data,
    }
  }
  return ajax(obj)
}

export function Post(config) {
  let obj = {
    url: config.url,
    method: 'post',
    data: {
      ...config.data,
    }
  }
  return ajax(obj)
}

export function Delete(config) {
  let obj = {
    url: config.url,
    method: 'delete',
    data: {
      ...config.data,
    }
  }
  return ajax(obj)
}

export function Put(config) {
  let obj = {
    url: config.url,
    method: 'put',
    data: {
      ...config.data,
    }
  }
  return ajax(obj)
}

export function upload(config) {
  let obj = {
    url: config.url,
    method: 'post',
    data: config.data,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  return ajax(obj)
}
