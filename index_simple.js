let server_config=require("./config/index.js");
let Koa=require("koa");
let app=new Koa();


//请求第一个执行的中间件
app.use(async function(ctx,next){

	//next()方法是结束本次中间件操作，并返回 ctx;
	await next();

})

//请求的第二个执行的中间件
app.use(async function(ctx,next){

	await (function(){
		//结束请求

	 return ctx.body="hello"

	})();

})
console.log(`app listen ${server_config.port}`);

app.listen(server_config.port);