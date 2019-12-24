获取最小值
Math.min(1, 2, 4);   // 1

获取最大值
Math.max(1, 2, 4);   // 4

`
	let arr = [1, 2, 3];
	console.log(Math.max.apply(null, arr));    // 3
	等同于
	console.log(Math.max(1, 2, 3));   // 3
`

向上取整
Math.ceil(5.01);   //6

向下取整数
Math.floor(5.56);  //5

四舍五入
Math.round(5.56);  //6

随机数
// 0 ~ <1
Math.random();