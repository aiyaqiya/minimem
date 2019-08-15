//index.js
const app = getApp();
var mta = require("../mta/mta_analysis.js");

Page({
  data: {
    allimg:[
      "http://resource.jiyilive.com/img/index/back.jpg",
      "http://resource.jiyilive.com/img/index/dz1.png",
      "http://resource.jiyilive.com/img/index/dz2.png",
      "http://resource.jiyilive.com/img/index/dz3.png",
      "http://resource.jiyilive.com/img/index/dz4.png",
      "http://resource.jiyilive.com/img/index/dz5.png",
      "http://resource.jiyilive.com/img/index/dz6.png",
      "http://resource.jiyilive.com/img/index/dz7.png",
      "http://resource.jiyilive.com/img/index/dz8.png",
      "http://resource.jiyilive.com/img/index/but.png",
      "http://resource.jiyilive.com/img/index/title.png",
      "http://resource.jiyilive.com/img/shaizi/1.png",
      "http://resource.jiyilive.com/img/shaizi/2.png",
      "http://resource.jiyilive.com/img/shaizi/3.png",
      "http://resource.jiyilive.com/img/shaizi/4.png",
      "http://resource.jiyilive.com/img/shaizi/5.png",
      "http://resource.jiyilive.com/img/shaizi/6.png",
      "http://resource.jiyilive.com/img/shaizi/7.png",
      "http://resource.jiyilive.com/img/shaizi/8.png",
      "http://resource.jiyilive.com/img/shaizi/9.png",
      "http://resource.jiyilive.com/img/shaizi/10.png",
      "http://resource.jiyilive.com/img/shaizi/11.png",
      "http://resource.jiyilive.com/img/shaizi/12.png",
      "http://resource.jiyilive.com/img/shaizi/13.png",
      "http://resource.jiyilive.com/img/shaizi/14.png",
      "http://resource.jiyilive.com/img/shaizi/15.png",
      "http://resource.jiyilive.com/img/shaizi/16.png",
      "http://resource.jiyilive.com/img/shaizi/17.png",
      "http://resource.jiyilive.com/img/shaizi/18.png",
      "http://resource.jiyilive.com/img/shaizi/19.png",
      "http://resource.jiyilive.com/img/shaizi/20.png",
      "http://resource.jiyilive.com/img/shaizi/zs.png",
      "http://resource.jiyilive.com/img/shaizi/ad.png", 
      "http://resource.jiyilive.com/img/shaizi/pt.png",
      "http://resource.jiyilive.com/img/index/logok.png",      
      "http://resource.jiyilive.com/img/index/logokac.png",
      "http://resource.jiyilive.com/img/logo/1.jpg",
      "http://resource.jiyilive.com/img/logo/2.jpg",
      "http://resource.jiyilive.com/img/logo/3.jpg",
      "http://resource.jiyilive.com/img/logo/4.jpg",
      "http://resource.jiyilive.com/img/logo/5.jpg",
      "http://resource.jiyilive.com/img/logo/6.jpg",
      "http://resource.jiyilive.com/img/logo/7.jpg",
      "http://resource.jiyilive.com/img/logo/8.jpg",
      "http://resource.jiyilive.com/img/logo/9.jpg",
      "http://resource.jiyilive.com/img/logo/10.jpg",
      "http://resource.jiyilive.com/img/logo/11.jpg",
      "http://resource.jiyilive.com/img/logo/12.jpg",      
      "http://resource.jiyilive.com/img/index/noword.png",
      "http://resource.jiyilive.com/img/ques/back.jpg",
      "http://resource.jiyilive.com/img/ques/backhome.png",
      "http://resource.jiyilive.com/img/ques/titleback.png",
      "http://resource.jiyilive.com/img/ques/fault.png",
      "http://resource.jiyilive.com/img/ques/right.png",
      "http://resource.jiyilive.com/img/laohj/back.png",
      "http://resource.jiyilive.com/img/laohj/but.png",
      "http://resource.jiyilive.com/img/laohj/butac.png",
      "http://resource.jiyilive.com/img/laohj/front.png",
      "http://resource.jiyilive.com/img/laohj/list.jpg",
      "http://resource.jiyilive.com/img/laohj/return.png",
      "http://resource.jiyilive.com/img/index/choujbut.png",
      "http://resource.jiyilive.com/img/laohj/background.png",
      "http://resource.jiyilive.com/img/index/share.jpg",
      "http://resource.jiyilive.com/img/index/sharehd.jpg",
      "http://resource.jiyilive.com/img/wish/back.jpg",
      "http://resource.jiyilive.com/img/wish/but.png",
      "http://resource.jiyilive.com/img/wish/board.png",
      "http://resource.jiyilive.com/img/wish/light.png",
      "http://resource.jiyilive.com/img/wish/wishbut.png",
      "http://resource.jiyilive.com/img/wish/pintback.jpg",
      "http://resource.jiyilive.com/img/memory/1.png",
      "http://resource.jiyilive.com/img/memory/2.png",
      "http://resource.jiyilive.com/img/memory/3.png",
      "http://resource.jiyilive.com/img/memory/4.png",
      "http://resource.jiyilive.com/img/memory/5.png",
      "http://resource.jiyilive.com/img/memory/6.png",
      "http://resource.jiyilive.com/img/memory/7.png",
      "http://resource.jiyilive.com/img/memory/8.png",
      "http://resource.jiyilive.com/img/memory/9.png",
      "http://resource.jiyilive.com/img/memory/10.png",
      "http://resource.jiyilive.com/img/memory/11.png",
      "http://resource.jiyilive.com/img/memory/12.png",
      "http://resource.jiyilive.com/img/memory/1ac.png",
      "http://resource.jiyilive.com/img/memory/2ac.png",
      "http://resource.jiyilive.com/img/memory/3ac.png",
      "http://resource.jiyilive.com/img/memory/4ac.png",
      "http://resource.jiyilive.com/img/memory/5ac.png",
      "http://resource.jiyilive.com/img/memory/6ac.png",
      "http://resource.jiyilive.com/img/memory/7ac.png",
      "http://resource.jiyilive.com/img/memory/8ac.png",
      "http://resource.jiyilive.com/img/memory/9ac.png",
      "http://resource.jiyilive.com/img/memory/10ac.png",
      "http://resource.jiyilive.com/img/memory/11ac.png",
      "http://resource.jiyilive.com/img/memory/12ac.png"
    ],
    logoimg: [//新logo图片
      {"src" : "http://resource.jiyilive.com/img/memory/1","active":"","style":"0.8"},
      { "src": "http://resource.jiyilive.com/img/memory/2","active":"", "style": "0.8" },
      { "src": "http://resource.jiyilive.com/img/memory/3","active":"", "style": "0.8" },
      { "src": "http://resource.jiyilive.com/img/memory/4","active":"", "style": "0.8" },
      { "src": "http://resource.jiyilive.com/img/memory/5","active":"", "style": "0.8" },
      { "src": "http://resource.jiyilive.com/img/memory/6","active":"", "style": "0.8" },
      { "src": "http://resource.jiyilive.com/img/memory/7","active":"", "style": "0.8" },
      { "src": "http://resource.jiyilive.com/img/memory/8","active":"", "style": "0.8" },
      { "src": "http://resource.jiyilive.com/img/memory/9","active":"", "style": "0.8" },
      { "src": "http://resource.jiyilive.com/img/memory/10","active":"", "style": "0.8" },
      { "src": "http://resource.jiyilive.com/img/memory/11","active":"", "style": "0.8" },
      { "src": "http://resource.jiyilive.com/img/memory/12","active":"", "style": "0.8" }
    ],
    allimgi: 0,
    allimgload:"0",
    loadOver:"none",
    zhezhao:'block',//加载框的显示与否，以上都是加载框的数据
    atime:3000,
    numi:1,
    aimg:20,
    imgt:20,
    isTou:true,
    showShaizi:"none",//以上是色子的逻辑数据
    isHuodShow:"none",//显示活动规则
    setWidthH:"",//初始化设置宽高
    touchjh:"",//进入按钮交互
    isShowEnter:"block",//点击进入按钮显示
    isShowChouj:"none",//主页开始老虎机抽奖按钮显示
    isNotimesShow:"none",//没有次数
    musicCtrl:"musicac",//音乐控制
    isMusicPlay:true,//音乐当前是否在播放
    tishiShow:"none",//显示抽中提示框显示与否
    tishiRenwu:"阅读任务",//要显示的任务内容
    isGuoGK:"none",//是否通关
    nowGuanKa:undefined,//当前通过的关卡数
    choujTimes:0,//抽奖次数
    isLaohjShow:"none",//【老虎机】是否显示
    laohjButAc:"",//老虎机按键是否激活状态管理
    laohjImage:{},//logo图片信息
    laohjtops:['0','0','0'],//老虎机三张图的top值
    animation1:{},//老虎机动画1.2.3
    animation2:{},
    animation3:{},
    isLaohjZhj:"none",//老虎机摇中
    isLaohjJP:"",//老虎机中奖的奖品名    
    isLaohjLJ:"",//老虎机中奖的领奖方式    
    guoguan:['','','','','','','','','','','',''],
    userInfo: {},
    hasUserInfo: false,
    laohjRuning:false,//老虎机正在转与否
    wishStart:"none",//许愿按钮显示与否，
    paopaoEnd:"block",//许愿开始，隐藏冒泡
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    musicUrl:"",
    musics:[],
    allGuank:12,
    chanlinge:3,
    appid: 'wx4f6b226a68a2c8fd',//APPID
    secret: '5cef16ff8b73d540b60e8eeb76e0c866',//screapt
  },
  onLoad: function (option) {    
    
    console.log("load了")
    this.resetF(option);
  },
  onShow:function(){
    console.log("show了")
    this.resetF();
  },
  resetF:function(option){
    //console.log(option);
    if(option==undefined){option={};option.id=app.globalData.selfActiveId}
    app.globalData.selfActiveId =option.id;
   
    mta.Event.stat('500692645', { 'activityid': option.id })
       
    this.data.sys = wx.getSystemInfoSync();
    function makeFit(obj) {//返回宽高差的一半，
      var tx = (obj.y - obj.x) / 2;
      var ty = (obj.y - obj.x) / 2;
      return { x: tx, y: ty }
    }
    var tr = makeFit({ x: this.data.sys.screenWidth, y: this.data.sys.screenHeight });
    this.setData({
      setWidthH: "width:" + this.data.sys.screenHeight + 'px;height:' + this.data.sys.screenWidth + "px;transform:rotate(90deg) translate(" + tr.y + "px," + tr.x + "px);-webkit-transform:rotate(90deg) translate(" + tr.y + "px," + tr.x + "px);"
    });

    //请求通过关卡数判断是否显示老虎机
    wx.request({
      url: "https://www.jiyilive.com/activityUser/queryByToken",
      method: "POST",
      data: { "activityId": app.globalData.selfActiveId },
      header: {
        "content-type": "application/x-www-form-urlencoded",
        "token": app.globalData.apiToken
      },
      success: function (res) {
        //console.log("关卡信息：",res.data);
        if (!res.data.data) {
          var guog = 0;
          that.resetGuank();
        } else {
          var guog = parseInt(res.data.data);
        }
        /*
        var tarr=['','','','','','','','','','','',''];
        for (var i = 0; i < guog;i++){
            tarr[i]='ac';
          }
          that.setData({
            guoguan:tarr
          });
        */
        if (guog >= that.data.allGuank) {
          that.setData({
            isGuoGK: "block",
            isShowEnter: "none",
            isShowChouj: "block",
            isLaohjShow: "block",
            //  choujTimes: choujt,//抽奖次数
            //   paopaoEnd:"none",//隐藏泡泡装饰
            //   wishStart:"block" //显示许愿按钮，不过目前版本不上许愿池，所以先注释掉
          });
        };
        that.setData({
          nowGuanKa: guog,
        });

      }
    });
    //获取抽奖次数1
    this.getCJTimes();
    //请求所有音乐地址
    var that = this;
    wx.request({
      url: "https://www.jiyilive.com/internetResources/queryByType",
      data: { "type": 0, "activityId": app.globalData.selfActiveId },
      method: "post",
      header: {
        "Content-type": "application/x-www-form-urlencoded",
        "token": app.globalData.apiToken
      },
      success: function (res) {
        //目前没有音乐，直接返回
        return;
        // console.log(res.data.data);
        that.setData({
          musics: res.data.data,
        });
        that.ctrlMusic();
        that.data.music.onEnded(that.ctrlMusic);
      }
    });
    this.data.music = wx.createInnerAudioContext();
    //模拟过关
    //setTimeout(function () { that.resetGuank(); },1200);    
   
    //更新【【闯关】】次数
    var tcl = 30// wx.getStorageSync("chanlinget");

    if (tcl === undefined || tcl === "") { tcl = 3; }
    var tdate = new Date();
    var today = tdate.getFullYear() + "" + tdate.getMonth() + tdate.getDate();
    var stoday = wx.getStorageSync("renwday") || "";
    //console.log(stoday,today,tcl);
    if (stoday !== today) {
      wx.setStorageSync("renwday", today);
      tcl = 3;
    }
    this.setData({
      chanlinge: parseInt(tcl)
    });
    wx.setStorageSync("chanlinget", tcl);
  },
  //模拟过关效果
  logoGuoG:function(fn){    
    var nowGk=3;
    var _this=this;
    var tarr=_this.data.logoimg;
    var nowAll=false;
    gg();
    function gg(){
      if (nowGk <= 12) {
        for (var i = 0; i < nowGk; i++){
          tarr[i].style = "1";
          tarr[i].active="ac";
        }
      } else {
        nowGk=12;
        for (var i = 0; i < nowGk; i++) {
          tarr[i].style = "0.8";
          tarr[i].active = "";
        }
        nowAll=true;
        nowGk = 0;
        setTimeout(function(){
          _this.setData({
            logoimg: tarr
          });
        },500);        
        setTimeout(gg, 1000);
        return;
      }
      _this.setData({
        logoimg: tarr
      });
      if (nowAll && nowGk==fn){return;}
        setTimeout(gg, 100);
        nowGk++;            
    }
  },
  resetGuank:function(){
    //【【重置过关情况】】
    var _this = this;
    var ggkk = 0;    
    wx.request({
      url: "https://www.jiyilive.com/activityUser/update",
      data: { "passQty": ggkk, "activityId": app.globalData.selfActiveId},
      method: "post",
      header: {
        "Content-type": "application/x-www-form-urlencoded",
        "token": app.globalData.apiToken
      },
      success: function (res) {
        console.log("重置完成",res);
      }
    }); 
  },
  ctrlMusic:function(){
    var tl=this.data.musics.length;
    var ti=Math.floor(Math.random()*tl);
    this.data.music.src = this.data.musics[ti].url;
    this.data.music.play();
  },
  toggleMusic:function(){
    if(this.data.isMusicPlay){
      this.data.isMusicPlay=false;
      this.data.music.pause();
      this.setData({
        musicCtrl:""
      });
    }else{
      this.data.isMusicPlay = true;
      this.data.music.play();
      this.setData({
        musicCtrl: "musicac"
      });
    }
  },
  onReady:function(){
    //设置分享带转发详情信息
    wx.showNavigationBarLoading();
    wx.updateShareMenu({
      withShareTicket: true
    });
    wx.showShareMenu()
  },
  getCJTimes:function(){//获取抽奖次数
    var that=this;
    wx.request({
      url: "https://www.jiyilive.com/activityShare/queryLotteryQty",
      data: { "activityId": app.globalData.selfActiveId},
      method: "POST",
      header: {
        "content-type": "application/x-www-form-urlencoded",
        "token": app.globalData.apiToken
      },
      success: function (res) {
        console.log(res);
        console.log("抽奖次数信息：",res.data.data);
        that.setData({
          choujTimes: res.data.data
        });
      }
    });
  },
  //事件处理函数
  bindViewTap:function(){
    wx.navigateTo({
      url: '../logs/logs'
    });
  },
  loadImgs:function(){//加载图片函数
      this.data.allimgi++;
      this.setData({
        allimgload:Math.round(this.data.allimgi/this.data.allimg.length*100)
      });
      if(this.data.allimgi==this.data.allimg.length){
        //图片加载完成，开始逻辑
        var that=this;
        that.setData({
          zhezhao: "none",
          loadOver: "block"
        });
       // that.logoGuoG(5);//开始展示过关效果，以及定格到当前通关数
        var ttt=setInterval(function(){
          if (that.data.nowGuanKa!==undefined){
            clearInterval(ttt);
            that.logoGuoG(that.data.nowGuanKa);            
          }
        },200);
      }
  },
  touchStartf:function(){
    this.setData({
      touchjh:"transform:scale(0.9,0.9);-webkit-transform:scale(0.9,0.9);"
    });
  },
  touchEndf:function(){
    this.setData({
      touchjh: ""
    });
    if (this.data.chanlinge <= 0) {
      wx.showToast({ "title": "您的答题次数用光了，请明天再来吧", "icon": "none" });      
      return;
    }
    this.startChange();
  },
  startChange:function(){
    this.data.isTou = true;
    this.setData({
      isTou:true,
      showShaizi:"block"
    });
    //request first[[]]//【【后台获取目前要做的任务，展示给客户，需要提前请求；】】
    var that=this;
    var moniData = [{ name: '广告任务', value: "ad" }, { name: "知识问答", value: "zs" }, { name: "拼图任务", value: "pt" }];
    wx.request({
      url: "https://www.jiyilive.com/activity/queryByPoints",
      data: { "activityId": app.globalData.selfActiveId},
      method: "post",
      header: {
        "Content-type": "application/x-www-form-urlencoded",
        "token": app.globalData.apiToken
      },
      success: function(res){
        return;
       // console.log(res.data);
        var tn=res.data.data.name;
        that.data.obj =tn=="看广告" ? moniData[0] :tn=="知识问答" ? moniData[1] : moniData[2];             
        that.changeBack();
      }
    });  
    //临时不用请求直接获取答题任务    
    that.data.obj = moniData[1];
    that.changeBack();  
  },
  changeBack:function(){//掷骰子函数
    this.data.atime-=this.data.imgt;
    var that=this;
    if(this.data.atime<=0){
      that.setData({numi:that.data.obj.value});
      that.data.atime=2000;
      that.data.isTou=false;
      setTimeout(() => {
        that.setData({
          tishiShow: "block",
          tishiRenwu: '【' + that.data.obj.name + '】'//更改显示的任务内容
        });
      }, 500);
      setTimeout(()=>{
        that.setData({
          showShaizi:"none",
          tishiShow: "none",
          tishiRenwu: ""//更改显示的任务内容
          });
        if(that.data.obj.name=="广告任务"){
            wx.redirectTo({url: "../video/vid?gk="+that.data.nowGuanKa});
        }else if (that.data.obj.name=="知识问答"){
            wx.navigateTo({ url:"../mess/mess?gk=" + that.data.nowGuanKa+"&times="+that.data.chanlinge });
          }else{
            wx.navigateTo({ url: "../pict/pict?gk=" + that.data.nowGuanKa });
          }
        },2000);
        return;
      }
    if(this.data.numi<this.data.aimg){this.setData({numi:++this.data.numi});}
    else { this.setData({ numi:1});}
    if (this.data.isTou){
        setTimeout(this.changeBack, this.data.imgt);
      }
  },
  getUserInfo:function(e){
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
  },
  backhomep:function(){//返回整个小程序首页的函数
    this.setData({
      isGuoGK:"none",
      isLaohjZhj:"none",
      isLaohjShow:"none"
    });
    return;
    wx.navigateTo({url:"../index/index"});
  },
  showLaohj:function(){//初始化并显示老虎机
    //判断有没有次数
    this.setData({      
      isGuoGK: "none",
    });
    if(this.data.choujTimes==0){
      this.showNoTimes();
      return;
    }
    this.setData({
      isLaohjShow: "block",      
    });
    var that=this;    
    const query = wx.createSelectorQuery();   
    query.select(".laohj_cimg1").boundingClientRect();
    //imageQuery.selectViewport().scrollOffset();    
    query.exec(function(res){      
      var imgInfo = { h: res[0].width, w: res[0].height }
      that.setData({
        laohjImage: imgInfo,
      });
    });
  },
  closeLaohuj:function(){//关闭老虎机
    this.setData({
      isLaohjShow: "none"
    });
  },
  laohujGo:function(){
    this.setData({
      laohjButAc:"ac"
    });
  },
  laohujGot:function(){
    this.setData({
      laohjButAc: ""
    });
    console.log("进入了老虎机")
    //如果正在抽奖，则不进行操作
    if (this.data.laohjRuning){return;}
    console.log("进入了老虎机，并且开始转动了");
    //判断有没有次数    
    if (this.data.choujTimes==0){
      this.getCJTimes();
      this.showNoTimes();      
      return;
    }
    console.log("进入了老虎机,并且有次数");
    this.setData({
      choujTimes: this.data.choujTimes - 1
    });
    this.data.laohjRuning=true;//劫持按钮，在执行完之前不允许再次操作
    //老虎机开始转，可以在请求之后获得中奖与否之后再执行
    var that=this;
  wx.request({
    url: "https://www.jiyilive.com/prize/lottery",
    data: { "activityId": app.globalData.selfActiveId},
    method: "post",
    header: {
      "Content-type": "application/x-www-form-urlencoded",
      "token": app.globalData.apiToken
    },
    success: function (res) {
      console.log("请求抽奖回来了",res);
      var zhongj = 2-res.data.data.prizeType;//Math.round(Math.random()) - Math.round(Math.random());//目前中奖是随机的
      that.laohujRun(zhongj);//
      that.data.zhongj = zhongj;
      that.data.zjDatas=res.data.data;
    }
  });
   
  },
  laohujRun:function(bo){
    console.log("老虎机转了")
    var count=12;
    var yaotimes=5;
    var that=this;    
    var tops;
    setZhongj(bo);
    var all = this.data.laohjImage.h;    
    var one = all/count;    
    const sto0=wx.createAnimation({
      duration:0,
    });
    const sto1=wx.createAnimation({
      duration:100,
      timingFunction: "linear"
    });
    const sto2 = wx.createAnimation({
      duration: 200,
      timingFunction: "linear"
    });
    const sto3 = wx.createAnimation({
      duration: 300,
      timingFunction: "linear"
    });
    const sto4 = wx.createAnimation({
      duration: 400,
      timingFunction: "linear"
    });
    const sto5 = wx.createAnimation({
      duration: 500,
      timingFunction: "linear"
    });
    const sto6 = wx.createAnimation({
      duration: 600,
      timingFunction: "linear"
    });
    const sto7 = wx.createAnimation({
      duration: 700,
      timingFunction: "linear"
    });
    const sto8 = wx.createAnimation({
      duration: 800,
      timingFunction: "linear"
    });
    const sto9 = wx.createAnimation({
      duration: 900,
      timingFunction: "linear"
    });    
    function getV(str) {
      if (str == "0") { return sto0; }
      if (str == "1") { return sto1; }
      if (str == "2") { return sto2; }
      if (str == "3") { return sto3; }
      if (str == "4") { return sto4; }
      if (str == "5") { return sto5; }
      if (str == "6") { return sto6; }
      if (str == "7") { return sto7; }
      if (str == "8") { return sto8; }
      if (str == "9" || str == "10" || str == "11") { return sto9; }
    }
    makeRun();
    function makeRun(){
      laohjRun(1, makeStop);
      setTimeout(() => { laohjRun(2, makeStop);},300);
      setTimeout(() => { laohjRun(3, makeStop);}, 600);
    }
    function laohjRun(ti, callb){
      var tstart=0;
      var tstr = "animation" + ti, ani = getV(5);      
      g();
      function g(){
        that.setData({ [tstr]: sto0.top(0).step().export()});
        that.setData({ [tstr]:ani.top(-all).step().export()});
        tstart++;if(tstart>=yaotimes){//停止动画
          setTimeout(function(){callb(ti);},500);
        }else{
          setTimeout(g,500);
        }
      }
    }
    function makeStop(ti){
      var tstr="animation"+ti,ani=getV(tops[ti-1]);
     that.setData({
        [tstr]:ani.top(-tops[ti-1]*one+one/15).step().export() 
        });
      //【【【当前抽奖结束】】】
      if (ti >= 3) {
        setTimeout(function(){
          console.log(that.data.zjDatas);
          that.data.laohjRuning = false;
          switch (that.data.zhongj) {
            case -1: {
              that.showZhongj(that.data.zjDatas.integralQty+"积分", "请在【我的】->【个人信息】->【积分记录】中查看");
              break;
            }
            case 0: {
              that.showZhongj(that.data.zjDatas.name, "请在右下角【领奖记录】中填写收货地址领取");
              break;
            }
            case 1: {
              that.showZhongj(that.data.zjDatas.name, "请用右下角【领奖记录】中说明的方式兑换");
              break;
            }
          }
        },1000);      
      }
    }
    function setZhongj(bo) {//bo为number值，1返回都一样，0；两个一样，-1都不一样    
      tops = [0, 0, 0];
      if (bo==1) {
        var ti = Math.floor(Math.random() * count);
        tops = [ti, ti, ti];
      } else if(bo==0){
          var ti = Math.floor(Math.random() * count);
          tops[0]=tops[1]=ti;
        var ti1 = Math.floor(Math.random() * count);
          while (ti1==ti) {
              ti1 = Math.floor(Math.random() * count);
          }          
          tops[2] = ti1;
      }else{
        for(var i=0;i<3;i++){
          var ti = Math.floor(Math.random() * count);
          while(tops.indexOf(ti)>-1){
            ti = Math.floor(Math.random() * count);
          }
          tops[i]=ti;
        }
      }
    }
  },
  closeHuodgz:function(){
    this.setData({
      isHuodShow: "none"
    });
  },
  showHuodgz(){
      this.setData({
        isHuodShow:"block"
      })
  },
  showLingj:function(){//跳转领奖记录页面
    wx.navigateTo({
      url:"../lingj/lingj"
    });
  }, 
  showNoTimes:function(){
    this.setData({ isNotimesShow:"block"});
  },
  hideNoTimes:function(){
    this.setData({ isNotimesShow: "none" });
  },
  showZhongj:function(a,c){
    this.setData({
      isLaohjZhj:"block",
      isLaohjJP: a,      
      isLaohjLJ: c
    });
  },
  hideZhongj:function(){
    this.setData({
      isLaohjZhj: "none",
      isLaohjJP:'',
      isLaohjLJ: ""
    });
  },
  makeWish:function(){//许愿  
    wx.navigateTo({url:"../wish/wish"});
  },
  makeMusic:function(){

  },
  exithome:function(){
    wx.showModal({
      title:"退出活动",
      content:"您确定要退出任务么？",
      success:function(e){        
        if (e.confirm){
          wx.reLaunch({
            url:"../../index/index"
          });
        }
      }
    })
  },
  onShareAppMessage: function (res) {//设置分享内容
    var user = wx.getStorageSync('user');
    
    var userid = app.globalData.userNumId;
    var url = "/pages/index/index?userId=" + userid + "&shareId=" + app.globalData.selfActiveId
    //console.log(escape(url))
    //url=escape(url)
    return {
      title: "通关活动",
      path: url,
      imageUrl: "http://resource.jiyilive.com/img/index/sharehd.jpg",
      success: function (res) {
        var shareTicket = res.shareTickets[0] || '';
        wx.getShareInfo({
          shareTicket: shareTicket,
          success: function (res){
            console.log(res);
            wx.showModel({
              title: "text",
              text: JSON.stringify(res)
            });
          }
        });
      }
    }
  }
});
/*
  isLaohjJP: "",//老虎机中奖的奖品名  
  isLaohjLJ: "",//老虎机中奖的领奖方式    
*/