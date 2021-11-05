const db = require("../../data/dbConfig.js");

const getDoggos = () => {
  // DO YOUR MAGIC
  return db("doggos");
};

function findById(doggoID) {
  return db("doggos").select("doggoID", "doggoName").where({ doggoID }).first();
}

const create = (doggo) => {
  // DO YOUR MAGIC
  return db("doggos")
    .insert(doggo)
    .then((ids) => {
      return findById(ids[0]);
    });
};

const deleteDoggo = async ({ doggoName }) => {
  let deletedDoggo = await db("doggos")
    .select("doggoID", "doggoName")
    .where("doggoName", doggoName)
    .first();

  return db("doggos")
    .where("doggoName", doggoName)
    .del()
    .then((dog) => {
      return deletedDoggo;
    });
};

module.exports = {
  getDoggos,
  create,
  deleteDoggo,
};
