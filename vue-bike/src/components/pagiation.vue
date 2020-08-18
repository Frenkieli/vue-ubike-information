<!--
  /**
  * @description pagiation 組件
  * @author frenkie
  * @date 2020-08-17
  */
-->
<template>
  <ul class="pagination">
    <li 
      class="page-item" 
      @click="pageChange(currentPage - 1)"
    >
      <a class="page-link" href="#">Previous</a>
    </li>
    <li
      class="page-item"
      :class="{ active : currentPage === n - 1 + (printPages)}"
      v-for="n in (pagiationTotal >= 10 ? 10 : pagiationTotal)"
      :key="'pages' + n"
      @click="pageChange(n - 1 + (printPages))"
    >
      <a class="page-link" href="#">{{ n + (printPages) }}</a>
    </li>
    <li 
      class="page-item" 
      @click="pageChange(currentPage + 1)"
    >
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'pagiation',
  props: {
    pagiationTotalProp: {
      type: Number,
    },
    conditionName: {
      type: String,
    },
  },
  data() {
    return {
      currentPage: 0,
      pagiationTotal: this.pagiationTotalProp,
    };
  },
  computed: {
    printPages: function ({ currentPage, pageMiddle }) {
      return currentPage - pageMiddle;
    },
    // currentPage = 36 37 38 39 40
    // pagiationTotal = 40
    // 期望回傳 6 7 8 9 10
    pageMiddle: function ({ currentPage, pagiationTotal }) {
      return  pagiationTotal <= 10 ? currentPage :
              currentPage <= 4 ? currentPage :
              currentPage >= pagiationTotal - 5 ? currentPage - pagiationTotal + 10 : 4;
    },
  },
  watch: {
    pagiationTotalProp(val) {
      this.pagiationTotal = val;
    },
    conditionName() {
      this.currentPage = 0;
    },
  },
  methods: {
    pagiationTotalChange(total) {
      this.pagiationTotal = total;
    },
    searchChange() {
      this.currentPage = 0;
    },
    pageChange(page) {
      let vm = this;
      if (page >= 0 && page < vm.pagiationTotal) {
        vm.currentPage = page;
        vm.$emit("page-change-event", vm.currentPage);
      }
    },
  },
};

</script>