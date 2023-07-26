<template>
    <TopView></TopView>
    <main>
        <Blue></Blue>
        <div class="backtop" v-html="background.style1.topleft.svg"></div>
      <div class="backtop mirror" v-html="background.style1.topleft.svg"></div>
      <div class="backbottom" v-html="background.style1.bottomleft.svg"></div>
      <div class="backbottom mirror" v-html="background.style1.bottomleft.svg"></div>
    </main>
  </template>
  
  <script>
  import TopView from '@/views/layout/TopView'
  import Blue from '@/views/Block/Blue.vue'
  import { background }from '@/svg/background'
  
  export default {
      data () {
          return {
            background:background 
          }
      },
      mounted(){
        this.background
      },
      components: {
          TopView,
          Blue
      } 
  }
  </script>
  <style>
  .backtop,.backbottom{
    position:absolute;
    z-index: -100;
  }
  .backtop{
    top:8px;
  }
  .backbottom{
    bottom:8px;
  }
  .navicon{
    position: absolute;
    left:2rem;
  }
  .personalicon{
    position: absolute;
    right:2rem;
  }
  </style>