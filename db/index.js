let mysql=require("mysql");

class DataBase{

	constructor(config){

		this.connection=mysql.createConnection(config)
		this.connection.connect();
	}

	end(){

		this.connection.end();

	}
	query(sql){

		var _self=this;

		let promise=new Promise(function(resolve,reject){

			_self.connection.query(sql,function(error,results,fields){
				resolve(results)
			})
		})
		return promise;
	}



}


module.exports=function(params){

	return new DataBase(params)

}