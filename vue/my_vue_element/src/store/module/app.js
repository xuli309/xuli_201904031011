import Cookies from 'js-cookie';

const app = {
    state:{
        sidebar:{
            opened: !+Cookies.get('sidebarStatus'),
            withoutAnimation: false
        },
        device:'desktop'
    },
    mutations: {
        TOGGLE_SIDEBAR(state) {
            if(state.sidebar.opened){
                Cookies.set('sidebarStatus',1)
            }else{
                Cookies.set('sidebarStatus',0)
            }
            state.sidebar.opened = !state.sidebar.opened
        },
        CLOSE_SIDEBAR(state,withoutAnimation){
            Cookies.set('sidebarStatus',1)
            state.sidebar.opened = false
            state.sidebar.withoutAnimation = withoutAnimation
        },
        TOGGLE_DEVICE(state,device){
            state.device = device
        }
    },
    actions: {
        toggleSidebar({commit}) {
            commit('TOGGLE_SIDEBAR');
        },
        closeSiddebar({commit},{withoutAnimation}){
            commit('CLOSE_SIDEBAR',withoutAnimation)
        },
        toggleDevice({commit},device){
            commit('TOGGLE_DEVICE',device)
        }
    }
}

export default app