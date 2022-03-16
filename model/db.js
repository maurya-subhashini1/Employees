const knex=require("knex")({
    client:"mysql",
    connection:{
        host:"localhost",
        user:"root",
        password:"Navgurukul@123",
        database:"mydb"
    }
})

knex.schema.createTable("Employee",(table)=>{
    table.increments("EID").primary();
    table.string("FirstName")
    table.string("LastName")
})
.then(()=>{
    console.log("created");
}).catch((err)=>{
    // console.log(err);
})

knex.schema.createTable("DEPARTMENT",(t)=>{
    t.increments("DID").primary();
    t.string("DepartmentName")

})
.then(()=>{
    console.log("department table created");
}).catch((err)=>{
    // console.log(err);
})

knex.schema.createTable("EmployeeDetails",(t)=>{
    t.increments("EDID").primary();
    t.integer("EID")
    t.integer("DID")
}).then(()=>{
    console.log("Employee Details table created");
}).catch((err)=>{
    // console.log(err);
})

module.exports=knex