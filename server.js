// TODO: this file :)

const express = require("express");
const employees = require("./employees");
const app = express();

const init = () => {
  app.listen(3001, () => console.log("im listening"));
};

app.get("/", async (req, res) => {
  res.status(200).send("Welcome");
});

app.get("/employees", (req, res) => {
  res.status(200).json(employees);
});

app.get("/employees/:id", (req, res) => {
  const id = req.params.id;
  const employee = employees.find((emp) => emp.id == id);
  if (employee) {
    res.status(200).json(employee);
  } else {
    res.status(404).json({ message: "employee not found" });
  }
});

app.get("/employees/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  console.log("Random Index:", randomIndex);
  const randomEmployee = employees[randomIndex];
  console.log("Random Employee:", randomEmployee);

  if (randomEmployee) {
    res.status(200).json(randomEmployee); // Respond with the random employee
  } else {
    res.status(404).json({ message: "Employee not found" }); // Handle error
  }
});

init();
