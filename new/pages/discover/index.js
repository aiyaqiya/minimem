// pages/discover/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    discoverList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getActivities();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    // this.getActivities();
    // wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  checkDate: function (endTime) {
    //日期格式化
    var start_date = new Date();
    var end_date = new Date(endTime.replace(/-/g, "/"));
    //转成毫秒数，两个日期相减
    var days = end_date.getTime() - start_date.getTime();
    //转换成天数
    var day = parseInt(days / (1000 * 60 * 60 * 24));
    //do something
    console.log("day = ", day);
    return day;
  },

  getActivities: function(){
    app.apiRequest({
      url: '/activity/queryAll',
      success: res => {
        console.log(res)
        if(res.data.code == 0){
          for(var i=0; i<res.data.data.length; i++){
            res.data.data[i].day = this.checkDate(res.data.data[i].endDate)
          }
          this.setData({
            discoverList: res.data.data
          })
          console.log(this.data.discoverList);
        }
      }
    })
  }
})