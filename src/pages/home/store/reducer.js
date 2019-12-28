import {fromJS} from 'immutable';

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: "社会热点",
    imgUrl: "https://upload.jianshu.io/users/upload_avatars/14715425/e0668349-8c75-43db-8a9d-c388e5f00d0d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
  }],
});

export default (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}