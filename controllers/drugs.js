const drug = require("../models/drug.js");
const Drug = require("../models/drug.js");

// GET /fruits
const index = async (req, res) => {
  const foundDrug = await drug.find();
  res.render("drugs/index.ejs", { drugs: foundDrug });
};

// GET /
const home = async (req, res) => {
  res.render("index.ejs");
};

// GET /fruits/new
const showNewForm = async (req, res) => {
  res.render("drugs/new.ejs");
};

const show = async (req, res) => {
  const foundDrug = await Drug.findById(req.params.drugId);
  res.render("drugs/show.ejs", { fruit: foundDrug });
};

const edit = async (req, res) => {
  const foundDrug = await Drug.findById(req.params.drugId);

  res.render("drugs/edit.ejs", {
    drug: foundDrug,
  });
};

// POST /fruits
const create = async (req, res) => {
  await Drug.create(req.body);
  res.redirect("/drugs"); // redirect to index fruits
};

const update = async (req, res) => {
  await Drug.findByIdAndUpdate(req.params.drugId, req.body);
  res.redirect(`/drugs/${req.params.drugId}`); // redirect to index fruits
};

const deleteDrug = async (req, res) => {
  await Drug.findByIdAndDelete(req.params.drugId);
  res.redirect("/drugs");
};

module.exports = {
  index,
  showNewForm,
  create,
  home,
  update,
  deleteDrug,
  edit,
  show,
};