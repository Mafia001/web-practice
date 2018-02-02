// pages/index/sign-in.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  send:function(e){
      var username=e.detail.value.username;
      var iphone=e.detail.value.iphone;
      var email=e.detail.value.email;
      var branch=e.detail.value.branch;
      var luckynumbers =Math.floor(Math.random() * 60 + 1);
      var app=getApp();
      console.log(app.data.LuckyNumber);
      console.log(luckynumbers);
      if(username==""){
        wx.showToast({
          title: '请输入你的姓名',
          duration: 2000
        })
      }else if(iphone==""){
        wx.showToast({
          title: '请输入你的手机号',
          duration: 2000
        })
      }else if(email==""){
        wx.showToast({
          title: '请输入你的邮箱',
          duration: 2000
        })
      }else if(branch==""){
        wx.showToast({
          title: '请输入你的部门',
          duration: 2000
        })
      }else{
      wx.request({
        url: 'http://localhost/qiandao.php',//本地调试要设置,在微信开发者工具右上角详情那个项目设置那里
        data:{
          "username":username,
          "iphone":iphone,
          "email":email,
          "branch":branch,
          "luckynumbers":luckynumbers

        },
        method:'POST',//默认为get，必须大写
      header: { 'content-type': 'application/x-www-form-urlencoded' },//必须添加的，不然传值不了到后台
        success:function(res){
          console.log(res);
          app.data.LuckyNumber = luckynumbers;
              wx.showToast({
                title: '提交成功',
                duration: 2000
              })
              setTimeout(function(){
                wx.navigateTo({
                  url: 'after-sign-in',//跳转页面
                })
              },2000)
        },
        fail:function(res){
          console.log("错误"+":"+res)
        }
      })
      }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  }
})