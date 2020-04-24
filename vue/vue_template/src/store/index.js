import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    awardData: [],
    awardImgArr:[ 
      [-40,-15],
      [-47,-46],
      [-62,-67],
      [-60,-67], 
      [-60,-67],
      [-60,-67]
    ],
    point:{}
  },
  mutations: {
    getAwardData(state) {
      for (const i in state.awardData) {
        state.awardData[i].src =  "zp_award_"+(i+1)+".png";
        state.awardData[i].imgId = 'award_img_' + state.awardData[i].id;
        state.awardData[i].imgPos = state.awardImgArr[i];
        state.awardData[i].bgcolor = 'rgba(255,255,255,0)'
      }
    },
    valueToPoint(state,param) {
      const value=param.value, index=param.index, total=param.total;
      let x = 0;
      let y = -value * 0.8;
      let angle = ((Math.PI * 2) / total) * index;
      let cos = Math.cos(angle);
      let sin = Math.sin(angle);
      let tx = x * cos - y * sin + 100;
      let ty = x * sin + y * cos + 100;
      // console.log('x='+tx,'y='+ty);
      state.point ={
          x: tx,
          y: ty
      };
    }
  },
  actions: {
    async getAwardDataAsync(store){
      await axios.get('/api/wheel').then((ret) => {
          store.commit('getAwardData',ret.data.list);
      }).catch((err) => {
          console.log(err);
      });
     
    }
  },
  modules: {
  }
})
