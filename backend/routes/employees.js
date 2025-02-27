const express=require('express')

const EmployeesController=require('../controllers/employees')

const router=express.Router()

router.get("/getemployees", EmployeesController.getemployees);

exports.router=router