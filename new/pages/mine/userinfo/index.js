// pages/mine/userinfo/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    genderList: ['待完善', '男', '女'],
    genderIndex: 0,
    birthday: null,
    mobile: '',
    integral: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //@Todo: 接口获取用户信息
    this.setData({
      userInfo: app.globalData.userInfo,
    })

    this.getInfo();
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

  //性别改变时触发
  bindGenderChange: function(e){
    app.apiRequest({
      url: '/my/updateUserByToken',
      data: {
        gender: e.detail.value,
      },
      success: res => {
        if (res.data.code == 0){
          this.setData({
            genderIndex: e.detail.value
          })
        }else{
          wx.showToast({
            title: '更新失败',
            icon: 'none'
          })
        }
      }
    })
  },

  //生日改变时触发
  bindBirthdayChange: function (e) {
    app.apiRequest({
      url: '/my/updateUserByToken',
      data: {
        birthday: e.detail.value + ' 12:00:00',
      },
      success: res => {
        if (res.data.code == 0) {
          this.setData({
            birthday: e.detail.value
          })
        }else{
          wx.showToast({
            title: '更新失败',
            icon: 'none'
          })
        }
      }
    })
    this.setData({
      birthday: e.detail.value
    })
  },
  //获取手机号后
  getPhoneNumber: function(e) {
    if (e.detail.errMsg == "getPhoneNumber:ok"){
      console.log(e.detail)
      app.apiRequest({
        url: '/minoPro/bind/phone',
        data: {
          encryptedData: e.detail.encryptedData,
          iv: e.detail.iv,
          userInfo: JSON.stringify(app.globalData.userInfo)
        },
        success: res => {
          console.log(res)
          if (res.data.code == 0){
            this.getInfo();
            wx.showToast({
              title: '绑定成功',
            })
          }
        }
      })
    }
  },

  getInfo: function(e){
    app.apiRequest({
      url: '/my/findUserByToken',
      success: res => {
        console.log(res)
        if (res.data.code == 0){
          let birthday = '';
          if (res.data.data.birthday){
            birthday = res.data.data.birthday.substring(0, 10);
          }
          this.setData({
            genderIndex: res.data.data.gender,
            mobile: res.data.data.phoneNumber,
            birthday: birthday,
            integral: res.data.data.integral
          })
        }
      }
    })
  }
})