import { Get, Post } from '../http.js'
import user from '../urls/user'

export function getUserinfo(params) {
  return Get({ url: user.userinfo, params })
}

export function getUserList(params) {
  return Post({ url: user.userList, params })
}
