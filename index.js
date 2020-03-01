const mysql = require('mysql');
const express = require('express');
const knex = require('./knex')
var app = express();
var sleep = require('system-sleep');
const bodyparser = require('body-parser');
app.use(bodyparser.json());

app.get('/get_notes', function (req, res) {
  var get_data = knex.select("*").from('notes')
  .then(get_data => console.log(get_data));
  res.send()
});

app.post('/post_notes', function (req, res) {
  const data = {
    notes_title:req.body.notes_title,
    user_thought:req.body.user_thought,
    reminder:req.body.reminder
  }
  knex('notes').insert(data)
  .then(() => {
    res.send("insert")
  }).catch((err) => {
    res.send(err)
  })
});

app.get('/get_notes', function(req, res) {
  knex.select('*').from("notes")
  .then((data) => {
    res.send(data)
  })
});

knex.select('*').from("notes")
  .then((data) => {
    // console.log(data);
  })
var time = 0;
knex.select('notes_title','reminder').from("notes")
  .then((data) => {
    
    for(b in data){
      var title = (data[b]['notes_title']);
      time = (data[b]['reminder']);
    
      if (time != null){
        sleep(60000*time)
        // console.log(time)
        console.log("this time to focus on your ==>> ",title);
      }
    }
  })
app.listen(3000,()=> ('express server is running on port no : 3000'));