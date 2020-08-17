import mitt from 'mitt';
const emitter = mitt();

export default emitter;

// 註冊事件列表

// searchEvent 搜尋事件使用 
//(emit方) searchBar string 觸發事件
//(on方) UbikeTable 接收條件去篩選
//(on方) pagiation 發生變更將頁數變回 0 

// pagiationTotalEvent 頁簽總數變更事件
//(emit方) UbikeTable number 發出總共有幾頁
//(on方) pagiation 接收總共有幾頁

// pageChangeEvent 變換頁數事件
//(emit方) pagiation number 發出換到哪一頁
//(emit方) searchBar number 0 發出變到第一頁
//(on方) UbikeTable 接收顯示哪一頁