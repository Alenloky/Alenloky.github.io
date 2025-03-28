var posts=["2025/03/26/hello-world/","2025/03/28/大二的一次打工跑腿经历/","2025/03/26/记事本的保存功能/","2025/03/27/csapp学习进度/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };