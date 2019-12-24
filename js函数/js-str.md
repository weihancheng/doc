目录
- slice     //第一个参数从哪里开始截取，第二个参数表示截取到哪里
- substring   //第一个参数从哪里开始截取，第二个参数表示截取数量
- indexof  //查询字符出现的位置，如果返回 -1 表示没找到 | 判断时候要不等于 -1
- includes //查询字符是否存在，存在返回true 否则false， 第二个参数表示从哪里开始查找
- lastIndexOf //同上区别在于 从右边开始查找
- startsWith   //判断是否以某个字符开头
- endWith //判断是否以某个字符结束
- toLowerCase
- replace //第一个参数表示要被替换的内容，第二期参数表示替换内容
- repeat  //第一个参数表示重复多少次
- split   //第一个参数表示用什么截取 比如：',' , ''
- join    //第一个参数表示用什么合并 比如： '/', ''

--- 

字符串截取函数：
- slice     //第一个参数从哪里开始截取，第二个参数表示截取到哪里
- substring   //第一个参数从哪里开始截取，第二个参数表示截取数量

字符串查找
- indexof  //查询字符出现的位置，如果返回 -1 表示没找到 | 判断时候要不等于 -1
- includes //查询字符是否存在，存在返回true 否则false， 第二个参数表示从哪里开始查找
- lastIndexOf //同上区别在于 从右边开始查找
- startsWith   //判断是否以某个字符开头
- endWith //判断是否以某个字符结束

大小写转化
- toLowerCase

字符串替换
- replace //第一个参数表示要被替换的内容，第二期参数表示替换内容
例子： 
`
	let hd = "houdunren.com";
	console.log(hd.replace('houdunren', 'hdcms'));    // hdcms.com
`

字符串重复输出
- repeat  //第一个参数表示重复多少次
`
	function phone(mobile, len=3) {
		return mobile.toString().slice(0, len*-1) + '*'.repeat(len);
	}
	console.log(phone(13288252461));
`

字符串转数组
- split   //第一个参数表示用什么截取 比如：',' , ''

数组转字符串
- join    //第一个参数表示用什么合并 比如： '/', ''





