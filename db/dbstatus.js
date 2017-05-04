let db=require("./index.js")
let server_config=require("../config/index.js");

let connection=db(server_config.db);

module.exports=function(){


	return async function(ctx,next){

		await connection.query("select * from user").then(function(data){

			ctx.users=data

		})

		await next();
	}

}