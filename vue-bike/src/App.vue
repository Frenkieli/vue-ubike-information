<template>
  <div id="app">
    <searchBar />
    <UbikeTable 
      :ubikeStops="ubikeStops"
    />
    <pagiation/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import searchBar from "./components/searchBar";
import UbikeTable from "./components/UbikeTable";
import pagiation from "./components/pagiation";

export default {
  name: "App",
  components: {
    searchBar,
    UbikeTable,
    pagiation
  },
  data() {
    return {
      ubikeStops: [],
    };
  },
  created() {
    // 欄位說明請參照:
    // http://data.taipei/opendata/datalist/datasetMeta?oid=8ef1626a-892a-4218-8344-f7ac46e1aa48

    // sno：站點代號、 sna：場站名稱(中文)、 tot：場站總停車格、
    // sbi：場站目前車輛數量、 sarea：場站區域(中文)、 mday：資料更新時間、
    // lat：緯度、 lng：經度、 ar：地(中文)、 sareaen：場站區域(英文)、
    // snaen：場站名稱(英文)、 aren：地址(英文)、 bemp：空位數量、 act：全站禁用狀態
    fetch("https://tcgbusfs.blob.core.windows.net/blobyoubike/YouBikeTP.gz")
      .then((res) => res.json())
      .then((res) => {
        // 將 json 轉陣列後存入 this.ubikeStops
        this.ubikeStops = Object.keys(res.retVal).map((key) => res.retVal[key]);
        console.log(this.ubikeStops, "最終資料");
      });
  },
};
</script>

<style>
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
