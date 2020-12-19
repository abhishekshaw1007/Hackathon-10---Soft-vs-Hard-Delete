const express = require("express");
const Student = require("./models/Student");

const app = express();

// middleware
app.use(express.json());

// Routes

// Get all the students
app.get("/students", async (req, res) => {
  // write your codes here
  res.json(Student);
});

// Add student to database
app.post("/students", async (req, res) => {
  // write your codes here
});

// Get specific student
app.get("/students/:id", async (req, res) => {
  // write your codes here
  const id = req.params.id;
  const studWithId = Student.find({ _id: id });
  res.json(studWithId);
});

// delete specific student
app.delete("/students/:id", async (req, res) => {
  // write your codes here
  const typeOfDelete = req.query;
  if (typeOfDelete == "soft") {
    Student.isDeleted = true;
    res.sendStatus(200);
  } else if (typeOfDelete == "hard") {
  } else res.sendStatus(400);
});

module.exports = app;
