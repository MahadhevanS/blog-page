import express from "express";
import bodyParser from "body-parser";
import db from "./db.js";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));



app.get("/",(req,res) => {
  db.query("SELECT * FROM posts ORDER BY id DESC",(err,result)=>{
    if(err){
      console.log(err);
      res.status(500).send("Error fetching posts");
    } else{
      res.render("home",{posts: result.rows});
    }
  });
});

app.get("/compose", (req, res) => {
    res.render("compose");
  });

app.post("/compose",(req,res)=>{
  const {title,content} = req.body;
  db.query("INSERT INTO posts (title,content) VALUES ($1,$2)",[title,content],(err)=>{
    if(err){
      console.log(err);
      res.status(500).send("Error saving post");
    } else{
      res.redirect("/");
    }
  });
});

app.get("/edit/:id", (req, res) => {
    const id = req.params.id;
    db.query("SELECT * FROM posts where id = $1",[id],(err,result)=>{
      if(err){
        console.log(err);
        res.status(500).send("Error fetching post");
      } else if(result.rows.length>0){
        res.render("edit",{postId: id,post: result.rows[0]});
      } else{
        res.status(404).send("Post not found");
      }
    });
});

app.post("/edit/:id", (req, res) => {
    const id = req.params.id;
    const {title, content} = req.body;
    db.query(
      "UPDATE posts SET title = $1, content = $2 WHERE id = $3",[title,content,id],(err)=>{
        if(err){
          console.log(err);
          res.status(500).send("Error updating post");
        }
        else{
          res.redirect("/");
        }
      });
});
  
app.post('/delete/:id', (req, res) => {
    const id = req.params.id;
    db.query(
      "DELETE from posts WHERE id = $1",[id],(err)=>{
        if(err){
          console.log(err);
          res.status(500).send("Error deleting post");
        } else{
          res.redirect("/");
        }
      });
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
  });