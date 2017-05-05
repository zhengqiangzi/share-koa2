let server_config=require("./config/index.js");
let Koa=require("koa");
let app=new Koa();
let dbstatus=require("./db/dbstatus.js");
let views=require("koa-views");

let send=require("koa-send")

var router=require('koa-router')();
const logger=require("koa-logger");

router.get("/",async function(ctx,next){
	await ctx.render("userList.hbs",{
		data:ctx.users
	})
})

//使用中间件 koa-views (render()方法)
app.use(views(__dirname+server_config.template_url,{
	map:{
		hbs:"handlebars"
	}
}));

app.use(async function(ctx,next){

	if(ctx.path=="/bootstrap.css"){

		await send(ctx, ctx.path);
		
	}else{
		await next()
	}

})

app.use(dbstatus())
//app.use(logger())
app.use(router.routes())
app.use(router.allowedMethods());



//请求第一个执行的中间件
/*app.use(async function(ctx,next){

	//next()方法是结束本次中间件操作，并返回 ctx;
	await next();

})*/

//请求的第二个执行的中间件
/*app.use(async function(ctx,next){

	await (function(){
		//结束请求

	 return ctx.body="hello"

	})();

})*/
console.log(`app listen ${server_config.port}`);

app.listen(server_config.port);