const getters = {
    token: state=> state.user.token,
    name: state => state.user.name,
    sidebar: state => state.app.sidebar,
    device: state => state.app.device,
    avatar: state => state.user.avatar,
    roles: state => state.user.roles,
    routers: state => state.permission.routers
}

export default getters;