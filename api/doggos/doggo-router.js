const express = require("express");
const Doggos = require("../doggos/doggo-model");
const {checkNameLength, checkDoggoExists} = require("../doggos/doggo-middleware")

const router = express.Router()

router.get("/", (req, res) => {
    // DO YOUR MAGIC
    Doggos.getDoggos()
      .then((account) => {
        res.status(200).json(account);
      })
      .catch(() => {
        res.status(500).json({ message: "unable to get data" });
      });
  });

  router.post('/', checkNameLength,  (req, res) => {
    const newDoggo = req.body;
    // DO YOUR MAGIC
    Doggos.create(newDoggo)
    .then((doggo)=>{
      res.status(201).json(doggo)
    })
    .catch((err)=>{
        console.log(err)
      res.status(500).json({message:"unable to add that doggo"})
    })
  })



  router.delete('/', checkDoggoExists, (req, res) => {
    const deleteDoggo = req.body;
    // DO YOUR MAGIC
    Doggos.deleteDoggo(deleteDoggo)
    .then((doggo)=>{
      res.status(202).json(doggo)
    })
    .catch((err)=>{
        console.log(err)
      res.status(500).json({message:"unable to delete that doggo"})
    })
  })

  module.exports = router;