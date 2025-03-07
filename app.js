const express  = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let posts = [];

app.get("/", (req, res) => {
    res.render("home", { posts: posts });
  });

app.get("/compose", (req, res) => {
    res.render("compose");
  });

app.post("/compose", (req, res) => {    
    const post = {
      id: Date.now().toString(),
      title: req.body.title,
      content: req.body.content
    };
    posts.push(post);
    res.redirect("/");
  });

app.get("/edit/:id", (req, res) => {
    const id = req.params.id;
    const post = posts[id];
    if(post){
        res.render("edit", { postId: id, post: post });
    }else{
        res.status(404).send('post not found');
    }
  });

app.post("/edit/:id", (req, res) => {
    const id = req.params.id;
    const post = posts[id];
    post.title = req.body.title;
    post.content = req.body.content;
    res.redirect("/");
  });
  
app.post('/delete/:id', (req, res) => {
    const id = req.params.id;
    
    if (posts[id]) {
      posts.splice(id, 1); // Remove the post at index 'id'
      res.redirect('/');
    } else {
      res.status(404).send('Post not found');
    }
  });
  

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
  });