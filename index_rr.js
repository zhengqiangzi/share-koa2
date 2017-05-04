let server_config=require("./config/index.js");
let Koa=require("koa");
let app=new Koa();

//请求第一个执行的中间件
app.use(async function(ctx,next){
	ctx.response.status=404//设置返回结果 的状态 
//	ctx.status=404

	console.log(`客户端请求IP：${ctx.request.ip}`);//显示客户端的请求IP

	console.log(`客户端请求的方法:${ctx.request.method}`);//客户端请求的方法

	console.log(`客户端请求的URL：${ctx.request.url}`);//客户端请求的URL

	//next()方法是结束本次中间件操作，并返回 ctx;
	await next();
})

//请求的第二个执行的中间件
app.use(async function(ctx,next){

	await (function(){
		//结束请求

	// return	ctx.response.redirect("http://www.163.com");//跳转到163
	 return ctx.response.body="hello";//设置返回结果 body内容

	})();

})
console.log(`app listen ${server_config.port}`);

app.listen(server_config.port);