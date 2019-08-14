//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    showStartModal: true,

    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    swiperList: [],
    cardList: [],
    page: 1,
    noMore: false,
    request: false,
    keywordsColor: ['blue', 'purple', 'yellow', 'red'],
    direction: null,
    openBannerInfo: {},
    isOpen: 0,
    jingcaituijian: '',
    jingcaituijianId: 0,
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      //获取开屏页
      this.getOpenBanner();
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        //获取开屏页
        this.getOpenBanner();
      }
      this.getOpenBanner();
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
          this.getOpenBanner();
        }
      })
    }
  },
  /**
  * 生命周期函数--监听页面初次渲染完成
  */
  onReady: function () {
    //获取轮播图列表
    this.getBannerList();
    //获取演出列表
    this.getPerformance();
  },

  /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
  onPullDownRefresh: function () {
    this.setData({
      page: 1
    })
    this.getBannerList();
    this.setData({
      cardList: []
    })
    this.getPerformance();
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.getPerformance();
  },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getBannerList: function(e){
    app.apiRequest({
      url: '/banner/queryBanner',
      success: res => {
        let jingcaituijian = res.data.data[0].thumbUrl;
        let jingcaituijianId = res.data.data[0].url;
        res.data.data.splice(0,1);
        this.setData({
          swiperList: res.data.data,
          jingcaituijian: jingcaituijian,
          jingcaituijianId: jingcaituijianId
        })
        this.towerSwiper('swiperList');
      }
    })
  },
  getPerformance: function(e){
    // 显示加载图标
    wx.showLoading({
      title: '加载中',
    })
    // 防止多次请求
    if (this.data.request){
      return false;
    }else{
      this.setData({
        request: true
      })
    }
    app.apiRequest({
      url: '/performance/wx/getListByPage',
      data: {
        page: this.data.page,
        limit: 10,
      },
      success: (e)=>{
        this.setData({
          request: false
        })

        if (e.data.data.list.length==0){
          this.setData({
            noMore: true
          })
          return false;
        }
        //处理时间格式
        for (var i = 0; i < e.data.data.list.length; i++) {
          let date = new Date(e.data.data.list[i].performanceVo.showTimeStr.replace(/-/g, '/'));
      
          let yearDate = date.getFullYear();
          let month = ((date.getMonth() + 1) < 10 ? ("0" + (date.getMonth() + 1)) : date.getMonth() + 1);
          let dayFormate = (date.getDate() < 10 ? ("0" + date.getDate()) : date.getDate());
          let hourFormate = (date.getHours() < 10 ? ("0" + date.getHours()) : date.getHours());
          let minuteFormate = (date.getMinutes() < 10 ? ("0" + date.getMinutes()) : date.getMinutes());
          e.data.data.list[i].performanceVo.showTimeStr = yearDate + '.' + month + '.' + dayFormate + ' ' + hourFormate + ':' + minuteFormate
        }

        let cardList = this.data.cardList.concat(e.data.data.list)
        this.setData({
          cardList: cardList,
          page: this.data.page+1,
        })
      }
    })
    // 隐藏加载框
    wx.hideLoading();
  },
  //演出详情
  showDetail(e){
    wx.navigateTo({
      url: 'performance/detail?id=' + e.currentTarget.dataset.id,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  hideModal: function () {
    this.setData({
      showStartModal: false
    })
  },

  test: function(){
    return 123
  },

  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
    //初始化完毕，开始轮播
    var _this = this;
    this.data.intval = setInterval(function () { _this.lunbo("left"); }, 5000);
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },
  // towerSwiper计算滚动
  towerEnd(e) {
    if (this.data.direction == null){
      return false;
    }
    //滚动执行
    this.lunbo()

    this.setData({
      direction: null
    })
    var _this = this;
    this.data.intval = setInterval(function () { _this.lunbo("left"); }, 5000);
  },
  lunbo: function (direct) {
    let direction = direct ? direct : this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
  },
  getOpenBanner: function(e){
    app.apiRequest({
      url: '/banner/queryOpeningPage',
      data: {
        type: 2
      },
      success: res => {
        if (res.data.code == 0 && res.data.data.data.length != 0){
          this.setData({
            openBannerInfo: res.data.data.data[0],
            isOpen: res.data.show ? res.data.show: 1
          })
        }
      }
    })
  }
})
