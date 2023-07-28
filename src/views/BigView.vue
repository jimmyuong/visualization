<template>
    <HeaderView></HeaderView>
    <main>
    <Big></Big>
    </main>
  </template>
  
  <script>
  import HeaderView from '@/views/layout/HeaderView'
  import Big from '@/views/Block/Big'
  
  export default {
      data () {
          return {
  
          }
      },
      components: {
          HeaderView,
          Big
      } 
  }
  </script>