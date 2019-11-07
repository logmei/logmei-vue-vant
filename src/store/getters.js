const getters = {
  permission_routes: state => state.permission.routes,
  addRouters: state => state.permission.addRouters,
  token: state => state.user.token,
  name: state => state.user.name,
  departmentName: state => state.user.departmentName,
  identity: state => state.user.identity
}
export default getters
