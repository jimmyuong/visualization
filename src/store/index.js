import { createStore } from 'vuex'

export default createStore({
  state: {
    switch:{
      nav:false
    },
    theme:'blue',
  },
  getters: {
  },
  mutations: {
    setSwitch(state,item){
      state.switch[item.key] = item.value;
     // if(state.switch.tabs == false){ state.switch.tabsPin = false }//如果tabs 关闭了，就将tabsPin的也关闭了
    },
    setTheme(state,item){
      state.theme = item
    }
  },
  actions: {
  },
  modules: {
  }
})
