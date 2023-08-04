import express from 'express';
import { AddStud, Editstud, getstudent, AddStud} from './control.js';

const route = express.Router()

route.get("/students", async (req,res) => {
    try {
         const studentdatas = await getstudent()
    if (studentdatas.length == 0) {
       return res.status(404).json({data:"Data not found"})
        }
        
            res.status(200).json({data:studentdatas})
      
    } catch (error) {
        console.log(error)
        if (error) {
            res.status(500).json("Internal server error")
        }
    }
   
    
})
route.put("/editstud", async (req, res) => {
    try {
        const id = req.params;
        const updateStud = req.body
        if (id || !updateStud) {
            return res.status(400).json({Message:"Invalid Data"})
        }
        const result = await Editstud(id, updateStud)
        return res.status(200).json({data:updateStud,result:result})
    } catch (error) {
        console.log(error)
        if (error) {
            res.status(500).json("Internal server error")
        }
        
    }

})

route.post("/addstud", async (req, res) => {
    try {
        const newstud = req.body
        if (!newstud) {
            return res.status(400).json({Message:"No Data Found"})
        }
        const result = await AddStud(newstud);
        return res.status(201).json({data:newstud,statuses:result})
        
    } catch (error) {
        console.log(error)
        res.status(500)
        .json({Message:"Internal server"})
        
    }
})
export const studroute = route;