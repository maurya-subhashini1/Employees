const express=require("express")
const { Post_Name, Delete_data, update_data, GetEmployee } = require("../controller/app")
const { POST_DEPARTMENT } = require("../controller/department")
const { EmployeeDetails, Jointables } = require("../controller/detaile")
const router=express.Router()

router.post("/employee/api",Post_Name)
router.get("/get/api",GetEmployee)
router.delete("/delete/api/:EID",Delete_data)
router.put("/update/:EID",update_data)





router.post("/department/api",POST_DEPARTMENT)

router.post("/employees/details",EmployeeDetails)
router.get("/getalldata",Jointables)

module.exports=router