<!--
  /**
  * @description UbikeTable組件
  * @author frenkie
  * @date 2020-08-17
  */
-->
<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th @click="sortConditionChange('sno')">
          <div class="d-flex cursor-pointer">
            #
            <sortItem 
              :show="conditionSortIdentify === 'sno'" 
              :upDown="conditionSortUpdown" 
            />
          </div>
        </th>
        <th>場站名稱</th>
        <th>場站區域</th>
        <th @click="sortConditionChange('sbi')">
          <div class="d-flex cursor-pointer">
            目前可用車輛
            <sortItem 
              :show="conditionSortIdentify === 'sbi'" 
              :upDown="conditionSortUpdown"
            />
          </div>
        </th>
        <th @click="sortConditionChange('tot')">
          <div class="d-flex cursor-pointer">
            總停車格
            <sortItem 
              :show="conditionSortIdentify === 'tot'" 
              :upDown="conditionSortUpdown" 
            />
          </div>
        </th>
        <th>資料更新時間</th>
      </tr>
    </thead>
    <tbody>
      <tr 
        v-for="s in sortFilterUbikeStops" 
        :key="s.sno"
      >
        <td>{{ s.sno }}</td>
        <td v-html="s.sna"></td>
        <!-- <td v-html="s.snaL"></td> -->
        <td>{{ s.sarea }}</td>
        <td>{{ s.sbi }}</td>
        <td>{{ s.tot }}</td>
        <td>{{ timeFormat(s.mday) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>

import sortItem from "./sortItem";
export default {
  name: "UbikeTable",
  components: {
    sortItem,
  },
  props: {
    ubikeStops: {
      type: Array,
    },
    currentPage: {
      type: Number,
    },
    conditionNameProp: {
      type: String,
    },
  },
  data() {
    return {
      conditionName: "",
      conditionSortIdentify: "sno", // sno, sbi, tot,
      conditionSortUpdown: false, // true up false down
      pagiationNow: 0,
    };
  },
  computed: {
    filterUbikeStops: ({ ubikeStops, conditionName }) => {
      return JSON.parse(JSON.stringify(ubikeStops))
        .filter((v) => {
          return v.sna.indexOf(conditionName) !== -1;
        })
        .map((v) => {
          if (conditionName)
            v.sna = v.sna.replace(
              conditionName,
              '<span class="bg-dark text-white">' + conditionName + "</span>"
            );
          return v;
        });
    },
    sortFilterUbikeStops({filterUbikeStops, conditionSortIdentify, conditionSortUpdown, pagiationNow}) {
      return [...filterUbikeStops]
        .sort((a, b) => {
          return (
            (a[conditionSortIdentify] - b[conditionSortIdentify]) *
            (conditionSortUpdown ? -1 : 1)
          );
        })
        .splice(pagiationNow * 10, 10);
    },
    pagiationTotal({ filterUbikeStops }) {
      return Math.floor(filterUbikeStops.length / 10) + 1;
    },
  },
  watch: {
    pagiationTotal(val) {
      this.$emit("pagiation-total-event", val);
    },
    currentPage(val) {
      this.pagiationNow = val;
    },
    conditionNameProp(val) {
      // console.log("val", "有來嗎");
      this.filterUbikeStop(val);
    },
  },
  methods: {
    timeFormat(t) {
      var date = [],
        time = [];
      date.push(t.substr(0, 4));
      date.push(t.substr(4, 2));
      date.push(t.substr(6, 2));
      time.push(t.substr(8, 2));
      time.push(t.substr(10, 2));
      time.push(t.substr(12, 2));

      return date.join("/") + " " + time.join(":");
    },
    filterUbikeStop(conditionName) {
      // console.log(conditionName, "追尋");
      // console.log(this);
      this.conditionName = conditionName;
    },
    sortConditionChange(sortIdentify) {
      let vm = this;
      if (sortIdentify === vm.conditionSortIdentify) {
        vm.conditionSortUpdown = !vm.conditionSortUpdown;
      } else {
        vm.conditionSortIdentify = sortIdentify;
      }
    },
    changePage(page) {
      let vm = this;
      vm.pagiationNow = page;
    },
  },
};

</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>