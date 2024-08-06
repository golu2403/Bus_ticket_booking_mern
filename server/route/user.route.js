const express=require("express")
const {home,usersignUp,usersignIn,addEvent}=require('../controller/user.auth');
const { busdetails } = require("../controller/busdetail.auth");
const router=express.Router();
//All routes defiine

router.route('/').get(home)

router.route('/signin').post(usersignIn);

router.route("/signup").post(usersignUp)

router.route("/addevent").post(addEvent)

router.route("/busdetail").post(busdetails)

// router.route("/searchname").post(searchName)


module.exports=router;