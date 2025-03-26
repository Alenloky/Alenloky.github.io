var posts=["2025/03/26/hello-world/","2025/03/26/记事本的保存功能/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };