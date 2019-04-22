import img  from './new.png';
export default {
    template:`
        <div>
            我是App
            <img :src="imgSrc" />
        </div>
    `,
    data(){
        return {
            imgSrc: img
        }
    }
}