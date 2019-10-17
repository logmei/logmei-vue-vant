const getters = {
  permission_routes: state => state.permission.routes,
  addRouters: state => state.permission.addRouters,
  token: state => state.user.token
}
export default getters
