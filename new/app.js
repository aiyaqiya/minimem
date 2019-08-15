//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
       // console.log(res)
        this.globalData.jsCode = res.code;
        // 获取用户信息
        wx.getSetting({
          success: res=>{
            if(res.authSetting['scope.userInfo']){
              // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
              wx.getUserInfo({
                success: res => {
                  // console.log(res);
                  // 可以将 res 发送给后台解码出 unionId
                  this.globalData.userInfo = res.userInfo
                  this.globalData.hasUserInfo = true

                  //调后端接口获取token
                  this.apiRequest({
                    url: '/login/minoPro/getToken',
                    data: {
                      'jscode': this.globalData.jsCode
                    },
                    success: (res) =>{
                      if (res.data.code === 0){
                        this.globalData.apiToken = res.data.data
                      }
                    }
                  });
                  
                  // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                  // 所以此处加入 callback 以防止这种情况
                  if (this.userInfoReadyCallback) {
                    this.userInfoReadyCallback(res)
                  }
                }
              })
            } else {
              this.globalData.isAuth = false;
            }
          }
        })
      }
    })

    // 获取系统状态栏信息
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        //console.log(custom.top - e.statusBarHeight);
        if (custom.top - e.statusBarHeight < 0){
          this.globalData.CustomBar = custom.bottom + e.statusBarHeight;
        }else{
          this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
        }
        
      }
    })
  },
  globalData: {
    userInfo: null,
    hasUserInfo: false,
    jsCode: null,
    apiToken: '',
    isAuth: true,
  },
  //some configs
  apiDomain: 'https://www.jiyilive.com',
  qqMapKey: 'THOBZ-C64CP-3OTDK-VIUZE-6Q5HF-Y2FM2',

  //全局统一调用接口的方法
  apiRequest: function(options){
    wx.request({
      url: this.apiDomain + options.url,
      method: 'POST',
      header: {
        'token': this.globalData.apiToken,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: options.data,
      success: function(e){
        if (e.data.code == 1){
          wx.showToast({
            title: e.data.message,
            icon: 'none'
          })
          return false;
        }
        if (e.data.code == 3){
          if (!getApp().globalData.hasUserInfo){
            wx.switchTab({
              url: '/pages/mine/index',
              success: res => {
                wx.showToast({
                  title: '请先登录',
                  icon: 'none'
                })
              }
            })
            return true;
          }
          // 登录
          wx.login({
            success: res => {
              console.log(res)
              wx.request({
                url: getApp().apiDomain + '/login/minoPro/getToken',
                method: 'POST',
                header: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: {
                  'jscode': res.code
                },
                success: (res) => {
                  if (res.data.code === 0) {
                    getApp().globalData.apiToken = res.data.data
                  }
                }
              })
            }
          })
          wx.switchTab({
            url: '/pages/index/index',
            success: function(){
              wx.showToast({
                title: '令牌过期，重新登陆',
                icon: 'none'
              })
            }
          })
          return true;
        }
        if (e.data.code == 5){
          wx.showModal({
            content: '请完善手机号信息',
            showCancel: false,
            confirmText: '去绑定',
            success: res => {
              wx.redirectTo({
                url: '/pages/mine/userinfo/index',
                success: res => {
                  wx.showToast({
                    title: '请绑定手机号',
                    icon: 'none'
                  })
                }
              })
            }
          })
          return false;
        }
        options.success(e)
      },
      fail: res => {
        if (res.data.code == 5){
          wx.redirectTo({
            url: 'pages/mine/userinfo/index',
          })
        }
      },
      complete: options.complete
    });
  }
})