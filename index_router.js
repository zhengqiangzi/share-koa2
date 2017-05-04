let server_config=require("./config/index.js");
let Koa=require("koa");
let views=require("koa-views");
let router=require("koa-router")();
let handlerBars=require("handlebars");
let app=new Koa();



router.get("/",async function(ctx,next){

	await ctx.render("index.hbs",{


	})

})

router.get("/themes",async function(ctx,next){


	await ctx.render("error.hbs",{msg:"<h1>error</h1>"})

})


//使用中间件 koa-views (render()方法)
app.use(views(__dirname+server_config.template_url,{
	map:{
		hbs:"handlebars"
	}
}));


app.use(router.routes());
app.use(router.allowedMethods());
console.log(`app listen ${server_config.port}`);
app.listen(server_config.port);