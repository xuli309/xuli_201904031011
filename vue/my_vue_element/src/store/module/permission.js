import { asyncRouterMap, constantRouterMap } from '@/router/index';

// 根据路由名称获取菜单
function getMenu(name,menus) {
    for (let i = 0; i < menus.length; i++) {
        const menu = menus[i];
        if(name === menu.name){
            return menu;
        }
    }
    return null;
}


// 判断是否有权限访问菜单
function hasPermission(menus, route) {
    if(route.name){
        let currMenu = getMenu(route.name,menus);
        if(currMenu != null){
            // 设置菜单的标题，图标和可见性
            if(currMenu.title != null && currMenu.title != ""){
                route.meta.title = currMenu.title;
            }
            if(currMenu.icon != null && currMenu.title != ''){
                route.meta.icon = currMenu.icon;
            } 
            if(currMenu.hidden != null){
                route.hidden = currMenu.hidden !== 0;
            }
            if(currMenu.sort != null && currMenu.sort !== ''){
                rote.sort = currMenu.sort;
            }
            return true;
        }else{
            rote.sort = 0;
            if(currMenu.hidden != undefined && route.hidden === true){
                return true;
            }else{
                return false;
            }
        }
    }else{
        return true;
    }
}


function compare(p) {
    return function (m,n) {
        let a = m[p];
        let b = n[p];
        return b-a;
    }
}


function sortRouters(accessedRouters) {
    for (let i = 0; i < accessedRouters.length; i++) {
        const router = accessedRouters[i];
        if(router.children && router.children.length > 0){
            router.children.sort(compare('sort'))
        }        
    }
    accessedRouters.sort(compare('sort'));
}

const permission = {
    state: {
        routers: constantRouterMap,
        addRouters: []
    },
    mutations: {
        SET_ROUTERS(state, routers) {
            state.addRouters = routers;
            state.routers = constantRouterMap.concat(routers);
        }
    },
    actions: {
        generateRoutes({ commit }, data) {
            return new Promise(resolve => {
                const { menus } = data;
                const { username } = data;
                const accessedRouters = asyncRouterMap.filter(v => {
                    // admin 账号直接返回所有菜单
                    // if(username === 'admin') return true;
                    if (hasPermission(menus, v)) {
                        if (v.children && v.children.length > 0) {
                            v.children = v.children.filter(child => {
                                if (hasPermission(menus, child)) {
                                    return child
                                }
                                return false;
                            });
                            return v
                        } else {
                            return v
                        }
                    }
                    return false;
                })
                // 对菜单进行排序
                sortRouters(accessedRouters);
                commit('SET_ROUTERS', accessedRouters);
                resolve();
            })
           
        }
    }
}

export default permission;