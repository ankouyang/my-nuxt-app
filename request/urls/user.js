let domain = process.env.NODE_ENV === 'development'? 'http://localhost:8888':''

export default {
  userinfo: `${domain}/user/userinfo`,
  userList: `${domain}/user/userList`,
}
