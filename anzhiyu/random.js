var posts=["posts/d4c1.html","posts/3eeb.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};