<!--
  /**
  * @description 用來測試DOM刷新的問題
  * @author frenkie
  * @date 2020-08-21
  */
-->

<template>
  <div 
    class="progress" 
    id="progress"
    :style="{
      width : change + 'px'
    }"
    @click="clickNextTick"
  >
    測試 {{ change }}
  </div>
</template>

<script>
export default {
  data(){
    return{
      // change : 100
    }
  },
  created () {
    // var oo = 0 ;
    // this.change = {};
    this.change = 100;
    setInterval(() => {
      // oo += 100 ;
      console.log(Date.now(), '時間進行')
      // document.getElementById('progress').style.width = oo + "px";
      this.change += 100;
      this.$nextTick(function(){
        console.log(Date.now(), '時間進行nextTick')
      });
    }, 100);
  },
  methods:{
    clickNextTick(e){
      console.log(Date.now(), '點擊進度條')
      e.target.style.backgroundColor = '#000';
      this.change += 100;
      this.$nextTick(function(){
        console.log(Date.now(), '點擊進度條nextTick')
        e.target.style.backgroundColor = '#fff';
      });
    }
  },
  beforeUpdate () {
    // this.change += 1;
  },
  updated () {
    // this.change += 1;
  },
}
</script>

<style>
.progress{
  /* animation: gogo 1s infinite; */
  transition: 1s;
}
/* @keyframes gogo {
  0%{
    background-color: #000;
  }
  100%{
    background-color: #fff;
  }
} */
</style>