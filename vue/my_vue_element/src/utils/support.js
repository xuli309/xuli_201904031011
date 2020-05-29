
import Cookies from "js-cookie";
const supportKey = 'supportKey';
export function getSupport() {
    return Cookies.get(supportKey);
}

export function setSupport(isSupport) {
    return Cookies.set(supportKey,isSupport,{expires:3})
}

export function setCookie(key,value,expires) {
    return Cookies.set(key, value,{ expires: expires})
  }
  
  export function getCookie(key) {
    return Cookies.get(key)
  }