const express = require("express");
const router = express.Router();
const dailyLog = require("../models/dailyLog")
const exercise = require("../models/exercise")

router.post("/add-log", (req,res,next) =>{
    dailyLog.create({
        date: req.body.date,
        exerciseId: req.body.exerciseId,
        weight1: req.body.weight1,
        count1: req.body.count1,
        weight2: req.body.weight2,
        count2: req.body.count2,
        weight3: req.body.weight3,
        count3: req.body.count3,
    })
    .then(result => {
        console.log(result);
        res.status(200).send("Success")
    })
    .catch(err => {
        console.log(err);
        res.status(500).send("Error occured when creating the db item.")
    })
})

router.post("/add-exercise", (req,res,next) =>{
    dailyLog.create({
        name: req.body.name,
        category: req.body.category,
    })
    .then(result => {
        console.log(result);
        res.status(200).send("Success")
    })
    .catch(err => {
        console.log(err);
        res.status(500).send("Error occured when creating the db item.")
    })
})

router.get("/get-all-exercises", (req,res,next) =>{
    exercise.findAll().then(result => {
        res.status(200).send(result)
    })
    .catch(err => {
        console.log(err);
        res.status(500).send("Error.")
    })
})

router.get("/get-all-logs", (req,res,next) =>{
    dailyLog.findAll().then(result => {
        res.status(200).send(result)
    })
    .catch(err => {
        console.log(err);
        res.status(500).send("Error.")
    })
})

router.post("/get-date-logs", (req,res,next) =>{
    const logDate = req.body.date
    console.log(logDate)
    dailyLog.findAll(
        {
            where: { date: logDate}
        })
        .then(result => {
        res.status(200).send(result)
    })
    .catch(err => {
        console.log(err);
        res.status(500).send("Error.")
    })
})

router.post("/update-log", (req,res,next) =>{
    const logId = req.body.id;
    const logDate = req.body.date;
    const exerciseId = req.body.exerciseId;
    const weight1 = req.body.weight1;
    const count1 = req.body.count1;
    const weight2 = req.body.weight2;
    const count2 = req.body.count2;
    const weight3 = req.body.weight3;
    const count3 = req.body.count3;

    dailyLog.findByPk(logId)
    .then(log => {
        log.date = logDate;
        log.exerciseId = exerciseId;
        log.weight1 = weight1;
        log.count1 = count1;
        log.weight2 = weight2
        log.count2 = count2;
        log.weight3 = weight3;
        log.count3 = count3;
        return log.save()
    })
    .then(() => res.status(200).send())
    .catch(err => {
        console.log(err);
        res.status(500).send("Error.")
    })
})

router.post("/delete-logs", (req,res,next) =>{
    const logId = req.body.id;
    dailyLog.findByPk(logId)
        .then(log => {
        return log.Destroy()
    })
    .then(() => res.status(200).send())
    .catch(err => {
        console.log(err);
        res.status(500).send("Error.")
    })
})

module.exports = router;
