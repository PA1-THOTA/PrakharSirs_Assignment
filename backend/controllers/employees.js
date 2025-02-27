const Employee = require("../models/employees").employeesSchema;

exports.getemployees = (req, res, next) => {
  Employee.find()
    .then((result) => {res.json(result)}
  )
    .catch((err) => res.json(err));
};
