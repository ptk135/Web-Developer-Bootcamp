/*
check off specific todo by clicking
click()只对现有存在的element创建listener
所以新建的todo点击就没有效果了
$("li").click(function(){
换成on(),监听所有可能的element
$("li").on("click",function(){
这样也不行
原因是只能在初始时添加listener
当ul中的li被点击时触发
*/
$("ul").on("click","li",function(){
	/*
	注意这里是和RGB字符串比较，注意里面的空格
	if($(this).css("color") === "rgb(128, 128, 128)"){
		可以一个一个的修改
		也可以放到一整个对象里面修改
		注意这里每个后面是“，”，对比在css中的“；”
		$(this).css({
			color: "black",
			这里注意用对象修改时不能出现-，改为大写
			textDecoration: "none"
		});
	}
	else{
		$(this).css("color","grey")
		$(this).css("text-decoration","line-through")
	}
	上面的写法不仅不简洁，而且为了尽量做到css与js分离，所以上面的写法不好
	*/
	$(this).toggleClass("completed");
});

//click on x to delete todo
// $("span").click(function(event){
$("ul").on("click","span",function(event){
	/*
	要做到不只是span消失，而且要这一行消失，所以用到parent()	
	fadeOut()只是效果，使这一行display变成none
	要做到真的消失，要使用remove()
	remove()不会等到fadeOut()的时间到了就会提前运行
	为了保证remove()在fadeOut()彻底完成之后在运行
	$(this).parent().fadeOut().remove();
	*/
	$(this).parent().fadeOut(500,function(){
		//这里的this是指调用fadeOut()的this，
		//即上一层的$(this).parent()
		$(this).remove();
	})
	//这个函数阻止事件在父对象中触发
	//例如在这里点击span不会触发点击li的函数
	//否则会向上一层一层的触发点击事件
	 event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//取出input中的值
		var todoText = $(this).val();
		//清空输入框中的值
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash'></i> </span>" + todoText + "</li>");
	}
});

$(".fa-beer").click(function(){
	$("input[type='text']").fadeToggle();
})