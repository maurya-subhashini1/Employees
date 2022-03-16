const knex=require("../model/db")

EmployeeDetails=(req,res)=>{
    const Details={
        EID:req.body.EID,
        DID:req.body.DID

    }
    knex("EmployeeDetails").insert(Details)
    .then((Data)=>{
        console.log(Data);
        res.send({message:"Inserted",Data:Data})
    }).catch((err)=>{
        res.send({message:"Not inserted",err:err})
        console.log(err);
    })
}


Jointables=(req,res)=>{
    knex('EmployeeDetails')
    .innerJoin('DEPARTMENT','DEPARTMENT.DID','EmployeeDetails.DID')
    .innerJoin('Employee','Employee.EID','EmployeeDetails.EID')
    .select('*')
    .then((data)=>{
        res.send({
            message:'Employees Details!',
            employees:data

        })
    }).catch((err)=>{
        console.log(err);
        res.send({
            error:err
        })
    })

}
module.exports={EmployeeDetails,Jointables}