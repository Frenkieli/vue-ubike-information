<!--
  /**
  * @description searchBar 組件
  * @author frenkie
  * @date 2020-08-17
  */
-->
<template>
  <div class="form-inline">
    <label for="searchName">搜尋站點:</label>
    <input 
      id="searchName"
      class="form-control" 
      type="text" 
      v-model="conditionName"
    >
      <!-- @keydown="searchStart" -->
    <button 
      type="submit" 
      class="btn btn-primary" 
      @click="searchStart"
    >search</button>
  </div>
</template>

<script>

export default {
  name: 'searchBar',
  props: {
    conditionNameProp:{
      type: String
    }
  },
  // data() {
  //   return {
  //     conditionName : this.conditionNameProp
  //   }
  // },
  computed:{
    conditionName: {
      get: function({conditionNameProp}){
        return conditionNameProp;
      },
      set: function(val){
        let vm = this;
        vm.$emit('update:conditionNameProp', val);
        vm.$emit('page-change-event', 0);
        // console.log(Date.now(), '設定');
      }
    }
  },
  methods: {
    // searchStart(){
    //   // console.log('觸發');
    //   let vm = this;
    //   console.log('觸發');
    //   vm.$nextTick(function(){
    //     console.log(Date.now(), '刷新');
    //     // vm.$emit('update:conditionNameProp', vm.conditionName);
    //     // vm.$emit('page-change-event', 0);
    //   })
    // }
  },
  beforeUpdate(){
    console.log(Date.now(), '更新前');
  }
}

</script>