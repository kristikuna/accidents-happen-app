var express = require("express");
var router = express.Router();
var pool = require("./pg-connection-pool");


router.get("/rooms", function(req, res) {
  pool.query("SELECT * FROM rooms").then(function(result){
    res.send(result.rows);
  }).catch(function(err){
    console.log(err);
    res.status(500).send("ERROR");
  })
});


router.post("/rooms", function (req, res) {
    var room = req.body;
    var sql = "INSERT INTO rooms(name, capacity, available) VALUES ($1::text, $2::int, $3::boolean)";
    var values = [room.name, room.capacity, room.available];
    console.log(values);
    pool.query(sql, values).then(function (result) {
        res.status(201).send("Created");
    }).catch(function (err) {
        console.log(err);
        res.status(500).send("ERROR");
    });
});

router.delete("/rooms/:id", function(req, res) {
  var id = req.params.id;
  var sql = "DELETE FROM rooms WHERE id=$1::int";

  pool.query(sql, [id]).then(function(result){
    res.send("deleted");
  }).catch(function(err){
    console.log(err);
    res.status(500).send("ERROR");
  });
});

module.exports = router;
