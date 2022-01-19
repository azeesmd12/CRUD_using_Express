const express = require('express');
const router = express.Router()
const EmployeeController = require('../controllers/EmployeeController')

router.get('/',EmployeeController.getAll);
router.get('/adduser',EmployeeController.renderaddPage);
router.post('/adduser',EmployeeController.createEmployee);
router.get('/edit/:id',EmployeeController.renderEditpage);
router.post('/edit/:id',EmployeeController.editEmployee);
router.post('/edit/:id',EmployeeController.editEmployee);
router.get('/delete/:id',EmployeeController.deleteEmployee);

module.exports = router;