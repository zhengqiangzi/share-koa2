let server_config=require("./config/index.js");
let Koa=require("koa");
let app=new Koa();
var views=require("koa-views");

//使用中间件 koa-views (render()方法)
app.use(views(__dirname+server_config.template_url,{
		map:{
			hbs:"handlebars"
		}
}));

//请求的第二个执行的中间件
app.use(async function(ctx,next){

	//自定义路由
	let url=ctx.request.url
	if(url=="/"||url=='/index.html'){

		await ctx.render("index.hbs",{
			username:"zhengqiangzi",
			age:20,
			info:"<h1>hello KOA</h1>"
		})
	}else{
		await ctx.render("error.hbs",{
			msg:"<h1>访问地址有误</h1>"
		})
	}
})

console.log(`app listen ${server_config.port}`);

app.listen(server_config.port);