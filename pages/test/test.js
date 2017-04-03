// pages/test/test.js
Page({
  data:{
    title: '小程序实战教程',
    desc: '视图层—WXML',
    id: 1,
    message: 'error',
    condition: true,
    flag: 1,
    a:1,
    b:1,
    c:2,
    d:5,
    name: 'Jie',
    object: {key:1,key2:'good'},
    array: [1,2,3,5,6],
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})