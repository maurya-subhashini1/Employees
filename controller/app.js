const knex=require("../model/db")

Post_Name=(req,res)=>{
    const user={
        FirstName:req.body.FirstName,
        LastName:req.body.LastName,

    }
    knex("Employee").insert(user)
    .then((insertData)=>{
        res.send({message:"insert data successfuly",insertData:insertData})
    }).catch((err)=>{
        res.send({message:"Not inserted",err:err})
        console.log(err);
    })
}

GetEmployee=(req,res)=>{
    knex.select("*").from("Employee")
    .then((data)=>{
            res.send(data)
            console.log(data)
    }).catch((err)=>{
            console.log(err)
            res.send(err)
    })
}

Delete_data=(req,res)=>{
    knex.delete("*").from("Employee").where("EID","=",req.params.EID)
    .then((data)=>{
        console.log(data)
        res.send({message:"deleted successfulky",data:data})
}).catch((err)=>{
        res.send({message:"no deleted"})
});
}

update_data=(req,res)=>{
    knex.from("Employee").where("EID","=",req.params.EID).update({
        
        FirstName:req.body.FirstName,
        LastName:req.body.LastName,

    }).then((data)=>{
            console.log("data")
            res.send({message:"updated successfuly",data:data})
    }).catch((err)=>{
            res.send({message:"not updated"})
            console.log(err)
    })
}
module.exports={Post_Name,Delete_data,update_data,  GetEmployee}