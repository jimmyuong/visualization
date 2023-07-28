<template>
  <div >
    <div class="adjustPanne">
      <input type="number" placeholder="perspective" @input="changeVisualBox" v-model="value.perspectivevalue"/>
      <input type="number" placeholder="rotateY" @input="changeVisualBox" v-model="value.rotateyvalue"/>
      <input type="number" placeholder="rotateX" @input="changeVisualBox" v-model="value.rotatexvalue"/>
      <input type="number" placeholder="scale" @input="changeVisualBox" v-model="value.scalevalue"/>
      <!-- <input type="number" placeholder="rotateX" @input="changeVisualBox" v-model="value.translatexvalue"/>
      <input type="number" placeholder="scale" @input="changeVisualBox" v-model="value.translateyvalue"/> -->
    </div>
    <div ref="visualbox" class="visualbox">
         <CyanView class="perspectivePosition"></CyanView>
        <!-- <div>
        <input v-model="perspectivevalue" @input="changeVisual">
        <input v-model="scalevalue"  @input="changeVisual">
        </div>
      <div ref="visualbox" class="perspective">
         <CyanView class="perspectivePosition"></CyanView>
      </div>
      <div style="position: absolute; height:100vh; width:100vw;left:10rem">
      <div ref="visualbox" class="perspective2" >
         <BlueView class="perspectivePosition"></BlueView>
      </div>
      </div> -->
    </div>
    </div>
</template>
    
<script>
import CyanView from "@/views/CyanView.vue"
import BlueView from "@/views/BlueView.vue"

export default {
    data () {
        return {
            value:{
              perspectivevalue:0,
              rotateyvalue:0,
              rotatexvalue:0,
              scalevalue:0,
              translatexvalue:0,
              translateyvalue:0,
            }
        }
    },
    mounted(){
      console.log("BlueView.vue")
    },
    computed:{
      returnvalue(){
        const a = `perspective(${this.value.perspectivevalue}px) `
        const b = `rotateY(${this.value.perspectivevalue}deg) `
        const c = `rotateX(${this.value.rotatexvalue}deg) `
        const d = `scale(${this.value.scalevalue}) `
        // const e = `translateX(${this.value.translatexvalue}px) `
        // const f = `translateX(${this.value.translateyvalue}px) `
        return a+b+c+d
        //return a+b+c+d+e+f
      }

    },
    methods:{
        changeVisualBox(){
          const visual = this.$refs.visualbox
          visual.style.transform = this.returnvalue;
          console.log(this.returnvalue)
        },
    },
    components: {
        BlueView,
        CyanView
    } 
}
</script>
<style lang="scss">
input{
  background:rgb(255, 255, 255);
  display: block;
}
.perspectivePosition{
  //display: flex;
  //position: absolute;

}

.visualbox{
  transform-style: preserve-3d;
}

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

.adjustPanne{
  position: fixed;
  z-index:1000;
  right:0;
}

</style>