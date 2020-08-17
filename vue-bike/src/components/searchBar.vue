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
      @keydown.enter="searchStart"
    >
    <button type="submit" class="btn btn-primary" @click="searchStart">search</button>
  </div>
</template>

<script>
import emitter from '../bus';

export default {
  name: 'searchBar',
  data() {
    return {
      conditionName : ''
    }
  },
  created() {
  },
  methods: {
    searchStart(){
      console.log('觸發');
      let vm = this;
      emitter.emit('searchEvent', vm.conditionName);
      emitter.emit('pageChangeEvent', 0);
    }
  },
}
</script>