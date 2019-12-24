### 速查列表
push 追加进数组
pop 出栈
unshift 从数组前面进入
shift 从前面移除
fill 填充数组
splice 数组删除，替换，追加
indexOf  数组查找 找不到返回-1
lastIndexOf 从后面开始进行查找 找不到返回-1
includes  数组查找，找不到返回 false
find  数组查找，可以解决引用类型的查找
findIndex  返回索引， 可以解决引用类型的查找
sort 排序
forEach 循环遍历
every 遍历数组 一个false直接返回false
some  遍历数组  一个true直接返回ture
filter 数组过滤
map 数组映射
reduce 


### 详情
追加进数组，同时可以追加多个
- push 
```
	let arr = ['hdcms', 'houdun'];
	let arr2 = ['golang', 'php'];
	// 方法一
	arr = [...arr, ...arr2];
	
	// 方法二
	arr = arr.push(...arr2);	
```

出栈
- pop

从前面进入
- unshift

从前面移除
- shift 

填充元素
- fill
```
	console.log([1, 2, 3, 4].fill('后盾人', 1, 3));  // [1, '后盾人', '后盾人', 4]
```

数组删除，替换，追加
- splice  第一个参数index，第二个参数删除多少，第三个参数在index后添加的内容
```
	let arr = [1, 2, 3, 4, 5];
	// 追加
	arr = arr.splice(2, 0, "111");
	
	// 替换
	arr = arr.splice(2, 1, 6);
	
	// 删除
	arr = arr.splice(2, 1);
```

数组查找
- indexOf
- lastIndexOf
- includes   返回bool
- find  可以解决引用类型的查找
```
	let arr = [1, 2, 3, 4, 5];
	let res = arr.find(item => item == 3);   // res => 3 
	// 解决引用类型查找
	let lessons = [
		{name: "js", id: 1},
		{name: "php", id: 2},
		{name: "go", id: 3}
	];
	let res2 = arr.find(item => item.name == "php");  // res2 =>  {name: "php", id: 2}
	
	// 在原型中自定义find
	Array.prototype.myFind = (callback) => {
		for (const value of this) {
			if (callback(value)) return value;
		}
		return undefined;
	}
```
- findIndex  返回索引
- sort 排序
```
	let arr = [1, 11, 100, 4, 99];
	arr = arr.sort((a, b) => a - b); //a-b = -1 从小到大排序   a-b=1 从大到小排序
	
	// 案例
	const cart = [
		{name: 'iphone', price: 1200},
		{name: 'imac', price: 11200},
		{name: 'ipad', price: 3200}
	];
	cart = cart.sort((a,b) => b.price - a.price);
```
- forEach  循环
```
	let lessons = [
		{name: "js", id: 1},
		{name: "php", id: 2},
		{name: "go", id: 3}
	];
	// 截断
	lessons.forEach((item, index, lessons) => {
		item.title = item.title.substr(0, 2);
	});
```

- every 
```
	// 假设我要求所有同学是否都及格，可以使用every
	let arr = [
		{name: "stud1", js: 91},
		{name: "stud2", js: 12},
		{name: "stud3", js: 63},
		{name: "stud4", js: 33}
	];
	// 一个错返回false，全部对才返回true
	arr.every((value) => {
		return value.js >= 60;
	});
```

- filter 数组过滤
```
 	//自定义过滤函数

	let hd = [1, 2, 3];

	function filter(hd, callback) {
		let arr = [];
		for (let value of hd) {
			if (callback) arr.push(value);
		}
		return arr;
	}

	console.log(filter(hd, function(value) {
		return value > 1;
	}));
```

- map 数组映射
``` 
	let hd = ['php', 'go'];

	// map 的特点是如果想改变原来的数组可以不赋值， 如果要不想改变原来的数组获得一个新数组可以赋值

	// 不改变原来的数组 arr => ['php.php', 'go.php']    hd = ['php', 'go']
	let arr = hd.map(value => value + ".php");
	//改变原来的数组 hd = ['php.php', 'go.php']
	hd.map(value => value + ".php");
```






