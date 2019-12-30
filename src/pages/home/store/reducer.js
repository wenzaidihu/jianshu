import {fromJS} from 'immutable';

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: "社会热点",
    imgUrl: "https://upload.jianshu.io/users/upload_avatars/14715425/e0668349-8c75-43db-8a9d-c388e5f00d0d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
  }],
    articleList: [{
      id: 1,
      title:"程序员写了个修改密码接口 领导：真想把他千刀万剐",
      imgUrl: "//upload-images.jianshu.io/upload_images/10374073-55742efe42043896.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
      desc: "相信大家身边都有代码不规范的，最近就有网友在某论坛上吐槽看到程序员写的一个修改密码的接口，心想要不要把它杀了祭天 下面就是该接口的代码，你们体会..."
    },{
      id: 2,
      title:"程序员写了个修改密码接口 领导：真想把他千刀万剐",
      imgUrl: "//upload-images.jianshu.io/upload_images/10374073-55742efe42043896.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
      desc: "相信大家身边都有代码不规范的，最近就有网友在某论坛上吐槽看到程序员写的一个修改密码的接口，心想要不要把它杀了祭天 下面就是该接口的代码，你们体会..."
    },{
      id: 3,
      title:"程序员写了个修改密码接口 领导：真想把他千刀万剐",
      imgUrl: "//upload-images.jianshu.io/upload_images/10374073-55742efe42043896.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
      desc: "相信大家身边都有代码不规范的，最近就有网友在某论坛上吐槽看到程序员写的一个修改密码的接口，心想要不要把它杀了祭天 下面就是该接口的代码，你们体会..."
    }],
    recommendList: [{
      id: 1,
      imgUrl: "//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
    },{
      id: 2,
      imgUrl: "//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
    },{
      id: 3,
      imgUrl: "//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
    },{
      id: 4,
      imgUrl: "//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
    }]

});

export default (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}