/**
 * action 类型
 */
 export const ADD_TODO = 'ADD_TODO';
 export const TOGGLE_TODO = 'TOGGLE_TODO';
 export const SET_VISTBILITY_FILTER = 'SET_VISTBILITY_FILTER';

 /**
  * 其他常量
  */
 export const VisibilityFilters = {
     SHOW_ALL:'SHOW_ALL',
     SHOW_COMPLETED:'SHOW_COMPLETED',
     SHOW_ACTIVE:'SHOW_ACTIVE'
 }

 /**
  * action 创建函数
  */
export function  addTodo(text){
    return {
        type:ADD_TODO,
        text
    }
}

export function toggleTodo(text){
    return {
        type:TOGGLE_TODO,
        text
    }
}

export function setVistbilityFiter(filter){
    return{
        type:SET_VISTBILITY_FILTER,
        filter
    }
}