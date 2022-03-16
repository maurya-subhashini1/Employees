const knex=require("../model/db")

// POST_DEPARTMENT=[
//     {departmentName:'CSE'},
//     {departmentName:'EEE'},
//     {departmentName:'ECE'},
//     {departmentName:'IT'}
// ]


// knex('DEPARTMENT').insert(this.POST_DEPARTMENT)
// .then((data)=>{
//     console.log({message:'data inserted',data});
// }).catch((err)=>{
//     console.log(err);
   
// })

POST_DEPARTMENT=(req,res)=>{
    const user={
        DepartmentName:req.body.DepartmentName 

    }
    knex("DEPARTMENT").insert(user)
    .then((insertData)=>{
        res.send({message:"insert data successfuly",insertData:insertData})
    }).catch((err)=>{
        res.send({message:"Not inserted",err:err})
        console.log(err);
    })
}
module.exports={POST_DEPARTMENT}
