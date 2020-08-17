<!--
  /**
  * @description 排序用的小零件
  * @author frenkie
  * @date 2020-08-17
  */
-->
<template>
  <span class="sort">
    <span v-show="!show || upDown" class="sort_up"></span>
    <span v-show="!show || !upDown" class="sort_down"></span>
  </span>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean
    },
    upDown: {
      type: Boolean
    }
  },
};
</script>

<style scoped>
.sort {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 10px;
}
.sort_up,
.sort_down {
  position: absolute;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
}
.sort_up {
  top: 5px;
  border-bottom: 5px solid #000;
}
.sort_down {
  bottom: 5px;
  border-top: 5px solid #000;
}
</style>