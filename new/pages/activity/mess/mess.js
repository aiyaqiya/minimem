// pages/mess/mess.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data:{
    setWidthH:'',    
    nowQuest:"",
    answer1:"",
    answer2: "",
    answer3: "",
    answer4: "",
    nowQuesi:0,
    chanlinge:0,
    wordNumber:"一",//大写数字
    questions:[
      { "title": "记忆之声持续坚持的品牌理念是什么？", "answers": ["让好音乐走进现场", "让天下没有难打的车", "好的生活，没那么贵", "标记我的生活"],"answer":0},
      { "title": "记忆之声成立至今曾成功主办过数十场明星艺人全国巡演、演唱会、生日会，以下哪项是记忆之声2019年主办的_______", "answers": ["白举纲全国巡演", "苏运莹新专辑首唱会", "伍嘉成全国巡演", "那吾克热生日会"], "answer": 2 },
      { "title": "以下哪项不属于记忆之声小程序的功能：", "answers": ["通过参加闯关活动获得免费门票", "攒积分兑换礼品", "叫外卖", "购买偶像演唱会门票方便快捷"], "answer": 2 },
      { "title": "记忆之声的官微叫什么？", "answers": ["记忆之声memory", "记忆之声电影院", "记忆之声演唱会", "记忆之声便利店"], "answer": 0 },
      { "title": "天蝎座的于文文生日是什么时候？", "answers": ["11月7日", "1月17日", "7月11日", "12月25日"], "answer": 0 },
      { "title": "伍嘉成是广东人，2019年伍嘉成举办的“DISCO PARTY全国巡演”在家乡开启首站演出，首站开启是在下列哪座城市？", "answers": ["北京", "广州", "上海", "南京"], "answer": 1 },
      { "title": "沈煜伦新专辑演唱会将于8月3日在北京举办，新专辑chapter1重锁，chapter2重逢，新专辑名称是什么？", "answers": ["《锁》", "《逢》", "《重》", "《平行世界》"], "answer": 2 },
      { "title": "洪辰是2011届快乐女声全国亚军，于2019年正式成立自己的工作室，请问2019年是洪辰出道几周年？", "answers": ["7", "8", "9", "10"], "answer": 1 },
      { "title": "于文文4岁学钢琴，10岁学吉他，在温哥华加入弦乐队担任吉他手。她毕业于美国顶尖音乐学府_______", "answers": ["伯克利音乐学院", "中央音乐学院", "中国音乐学院", "星海音乐学院"], "answer": 0 },
      { "title": "洪辰身型娇小却拥有极具爆发性的高亢嗓音，是一位偶像与实力兼备的女歌手。2018年在一部音乐剧巡演中扮演路小雨，这部音乐剧由周杰伦的同名电影改编，名叫_______", "answers": ["《歌剧魅影》", "《悲惨世界》", "《猫》", "《不能说的秘密》"], "answer": 3 },
      { "title": "不会写书的老板不是好歌手，沈煜伦身兼多重身份，百万畅销书作家、编剧、歌手、上古影业CEO，以下哪首歌不是由沈煜伦作词的？", "answers": ["《今天分手》", "《左手》", "《像我这样的男生》", "《双截棍》"], "answer": 0 },
      { "title": "伍嘉成十分喜爱猫咪，他个人参与创作的首支单曲也与猫有关，这首歌是______", "answers": ["《猫和老鼠》", "《小花猫》", "《温顺的猫》", "《学猫叫》"], "answer": 2 },
      { "title": "记忆之声的英文名是？", "answers": ["The voice of the memory", "Luckin coffee", "New balance", "MacDonald"], "answer": 0 },
      { "title": "Livehouse是一个什么地方？", "answers": ["一类演出场所，具备专业音响效果的小型室内场馆", "一类新型美发店", "一种贩卖盲盒娃娃的玩具店", "一种小型连锁超市"], "answer": 0 },
      { "title": "记忆之声是一家从事什么行业的公司？", "answers": ["演出行业", "餐饮行业", "制造业", "房地产业"], "answer": 0 }
    ],
    nowQueses:[],
    haveAnswerI:0,//当前页面的题目索引
    quesTitle:["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"],
    utoux:"http://resource.jiyilive.com/img/ques/toux.png",
    uname:"当前用户",
    isGuoGK:"none",//过关框显示
    isWGuoGK: "none",//未过关框显示
    isQuesShow:"block",//问题框，提示出现的时候隐藏
    chanlinge:0,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options){
    this.data.haveGK = isNaN(parseInt(options.gk)) ? 0 : parseInt(options.gk);    
    this.data.sys = wx.getSystemInfoSync();
    function makeFit(obj){//返回宽高差的一半，
      var tx = (obj.y - obj.x) / 2;
      var ty = (obj.y - obj.x) / 2;
      return { x: tx, y: ty }
    }
    var tr = makeFit({ x: this.data.sys.screenWidth, y: this.data.sys.screenHeight })
    this.setData({
      setWidthH: "width:" + this.data.sys.screenHeight + 'px;height:' + this.data.sys.screenWidth + "px;transform:rotate(90deg) translate(" + tr.y + "px," + tr.x + "px);-webkit-transform:rotate(90deg) translate(" + tr.y + "px," + tr.x + "px);"
    });
    
   
    var _this=this;
    
    //请求问题数据 
    /*
    wx.request({
      url: "http://www.jiyilive.com/activityQa/queryAll",
      method: "post",
      header: {
        "Content-type": "application/x-www-form-urlencoded",
        "token": app.globalData.apiToken
      },
      success: function(res){
        var datas = makearr(res.data.data);
        function makearr(ar){
          for(var i=0;i<ar.length;i++){
            var tstr=ar[i].answers.replace(/[\[\]]/g,'');
            ar[i].answers=tstr.split(",");
          }
          return ar;
        }
        _this.setData({
          questions: datas
        });
        _this.makeQues();
      }
    });
    */  
  //设置头像
  var info=app.globalData.userInfo;
    if(info!==null && JSON.stringify(info)!=="{}"){
      this.setData({
        uname:info.nickName,
        utoux: info.avatarUrl
      });
    }
  //单独添加，题目固定的逻辑
    //读取已有题目
    var haveQues=wx.getStorageSync("questions") || "";
    var tqarr=haveQues.split(",");
    for(let i=0;i<tqarr.length;i++){
      this.data.questions.splice(tqarr[i],1);      
    }
    if (this.data.questions.length == 1) { this.clearHaveQ();}
    console.log(this.data.questions);
    var qI=Math.floor(Math.random()*this.data.questions.length);
    var tarrq=[];
    tarrq.push(this.data.questions[qI]);
    this.setData({
      nowQueses:tarrq,
      haveAnswerI:qI
    });
    this.makeQues();

    //设置抽奖次数
    var tcl = wx.getStorageSync("chanlinget");    
    this.setData({chanlinge:parseInt(tcl)});
  },
  clearHaveQ:function(){
    wx.setStorageSync("questions","");
  },
  makeHaveQ:function(str){
    var tstr=wx.getStorageSync("questions") || "";
    if(tstr!==''){tstr+=",";}
    wx.setStorageSync("questions",tstr+str);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function(){
  },
  makeQues:function(){
    if (this.data.nowQuesi >= this.data.nowQueses.length){//通关
      //提交过关数据
      this.makeHaveQ(this.data.haveAnswerI);
      var _this = this;
      var ggkk = 1 + parseInt(_this.data.haveGK);
     // console.log(ggkk, app.globalData.selfActiveId, app.globalData.apiToken)
      wx.request({
        url:"https://www.jiyilive.com/activityUser/update",
        data: { "passQty": ggkk,
               "activityId": app.globalData.selfActiveId,
                 },
        header: {
          'token': app.globalData.apiToken,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method:"POST",
        success:function (res) {
          console.log(res);
          setTimeout(() => {//过关
            _this.setData({
              isGuoGK: "block",
              isQuesShow:"none"
            });
          }, 100);          
        }
      });
      return;
    }
    var obj = this.data.nowQueses[0];    
    this.setData({
      nowQuest: obj.title,
      answer1:obj.answers[0]+'',
      answer2:obj.answers[1]+'',
      answer3:obj.answers[2]+'',
      answer4:obj.answers[3]+'',
      wordNumber: this.data.quesTitle[this.data.nowQuesi]
    });
    this.data.nowQuesi += 1;
  },
  checkQues:function(e){
    var tcl=this.data.chanlinge;   
    tcl--;
    if(tcl<0){
      wx.showToast({"title":"您的答题次数用光了，请明天再来吧","icon":"none"});
      setTimeout(function(){
        wx.redirectTo({"url":"../index/index"});
      },1000);
      return;}
    this.setData({ chanlinge: parseInt(tcl)});
    wx.setStorageSync("chanlinget", tcl);
    
    var ind=e.target.dataset.set;
    if (ind == this.data.nowQueses[this.data.nowQuesi-1].answer){
      this.makeQues();
    }else{
      setTimeout(()=>{//错误
        this.setData({
          isWGuoGK:"block",
          isQuesShow:"none"
        });
      },100);
    }
  },
  reChanlege:function(){
      this.data.nowQuesi = 0;
      this.setData({
        isWGuoGK: "none",
        isQuesShow:"block"
      });
      this.makeQues();
  },
  backhomep:function(){
    //this.reChanlege();
    wx.redirectTo({ url:"../index/index?id="+app.globalData.selfActiveId});
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (){
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
  //  wx.showToast({title:"触底啦~"});
    //console.log("触底啦")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})