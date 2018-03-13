var express = require("express");
var router = express.Router();
var pool = require("./pg-connection-pool");


router.get("/incidents", function(req, res) {
  pool.query("SELECT * FROM incidents").then(function(result){
    res.send(result.rows);
  }).catch(function(err){
    console.log(err);
    res.status(500).send("ERROR");
  })
});

router.post("/incidents", function (req, res) {
    var incident = req.body;
    var sql = "INSERT INTO incidents(type_of, events, make, model, color, plate, driver, property, direction, phone, insurance_info, name_of) VALUES ($1::text, $2::text, $3::text, $4::text, $5::text, $6::text, $7::text, $8::text, $9::text, $10::text, $11::text, $12::text)";
    var values = [incident.type, incident.event, incident.make, incident.model, incident.color, incident.plate, incident.driver, incident.property, incident.direction, incident.phone, incident.insuranceInfo, incident.name];
    console.log(values);
    pool.query(sql, values).then(function () {
        res.status(201).send("Created");
    }).catch(function (err) {
        console.log(err);
        res.status(500).send("ERROR");
    });
});

router.delete("/incidents/:id", function(req, res) {
  var id = req.params.id;
  var sql = "DELETE FROM incidents WHERE id=$1::int";
  pool.query(sql, [id]).then(function(result){
    res.send("deleted");
  }).catch(function(err){
    console.log(err);
    res.status(500).send("ERROR");
  });
});

router.get("/videos", function(req, res) {
  pool.query("SELECT * FROM videos").then(function(result){
    res.send(result.rows);
    console.log(results.rows);
  }).catch(function(err){
    console.log(err);
    res.status(500).send("ERROR");
  });
});
  router.post("/videos", function (req, res) {
    var video = req.body;
    var sql = "INSERT INTO videos(title, subtitle, src) VALUES ($1::text, $2::text, $3::text)";
    var values = [video.title, video.subtitle, video.src];
    console.log(values);
    pool.query(sql, values).then(function () {
        res.status(201).send("Created");
    }).catch(function (err) {
        console.log(err);
        res.status(500).send("ERROR");
    });
  });

  router.delete("/videos/:id", function(req, res) {
    var id = req.params.id;
    var sql = "DELETE FROM videos WHERE id=$1::int";
    pool.query(sql, [id]).then(function(result){
      res.send("deleted");
    }).catch(function(err){
      console.log(err);
      res.status(500).send("ERROR");
    });
  });


module.exports = router;
