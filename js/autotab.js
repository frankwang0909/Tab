//自定义一个通过id获取元素的函数，后面可以简写
function gi(id) {
	return "string" == typeof id?document.getElementById(id):id; 
};
window.onload = function() {
	//当前高亮页签的索引
	var index = 0;

	var timer = null;
	
	//获取所有的页签和切换的内容
	var lis = gi('notice-tit').getElementsByTagName('li'),
		divs = gi('notice-content').getElementsByTagName('div');

	//封装一个切换函数
	function changeOption(curIndex) {
		//清除高亮样式
		for (var j = 0; j < lis.length; j++) {
			lis[j].className = "";
			divs[j].style.display = "none";
		}
		//高亮显示当前页
		lis[curIndex].className = "select";
		divs[curIndex].style.display = "block";
		//让索引等于当前索引
		index = curIndex;
	}
	//封装一个自动播放函数
	function autoPlay() {
		index++;
		if (index>=lis.length) {
			index = 0;
		}
		changeOption(index);
	};
	//遍历每一个页签且绑定事件
	for (var i = 0; i < lis.length; i++) {
		lis[i].id = i;

		lis[i].onmouseover = function() {
			clearInterval(timer);
			changeOption(this.id);
		};

		lis[i].onmouseout = function() {
			timer = setInterval(autoPlay,2000);
		};
	}
	//添加定时器之前，清除等待的定时器
	if (timer) {
		clearInterval(timer);
		timer=null;
	}
	//添加定时器，改变当前高亮的索引
	timer = setInterval(autoPlay,2000);
};