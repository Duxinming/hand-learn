// array对象 方法总结
// var fruits = ["Banana", "Orange", "Apple", "Mango", "c", "d", "e"];

// 1.concat()	连接两个或更多的数组，并返回结果。
/* let a = ["a", "b"];
let b = ["c", "d"];
let c = a.concat(b);
console.log(c); // ['a','b','c','d'] */

// 2.copyWithin()	从数组的指定位置拷贝元素到数组的另一个指定位置中。
/* fruits.copyWithin(4, 2);
console.log(fruits); //["Banana", "Orange", "Apple", "Mango", "Apple", "Mango", "c"] */

// 3.entries()	返回数组的可迭代对象。
/* console.log(fruits.entries().next().value); */

// 4.every()	检测数值元素的每个元素是否都符合条件。
/* let ages = [32, 33, 18, 40, 15, 18, 15];
function checkAdult(age) {
  return age >= 18;
}
(function myFunction() {
  console.log(ages.every(checkAdult));
})(); */

// 5.fill()	使用一个固定值来填充数组。
/* console.log(fruits.fill("a", 2, 3)); */

// 6.filter()	检测数值元素，并返回符合条件所有元素的数组。
/* (function myFunction1() {
  console.log(ages.filter(checkAdult));
})(); */

// 7.find()	返回符合传入测试（函数）条件的数组元素。
/* (function myFunction2() {
  console.log(ages.find(checkAdult));
})(); */
// filter 返回所有符合元素
// find 返回一个符合元素

// 8.findIndex()	返回符合传入测试（函数）条件的数组元素索引。
/* (function myFunction3() {
  console.log(ages.findIndex(checkAdult));
})(); */

// 9.forEach()	数组每个元素都执行一次回调函数。
/* (function myFunction4() {
  ages.forEach((item) => {
    console.log(item);
  });
})(); */

// 10.from()	通过给定的对象中创建一个数组。
/* var myArr = Array.from("RUNOOB");
console.log(myArr); */

// 11.includes()	判断一个数组是否包含一个指定的值。
/* let site = ["runoob", "google", "taobao"];
site.includes("runoob"); // true
site.includes("baidu"); // false */

// 12.indexOf()	搜索数组中的元素，并返回它所在的位置。
/* console.log(site.indexOf("runoob")); */

// 13.isArray()	判断对象是否为数组。
/* console.log(Array.isArray(site)); */

// 14.join()	把数组的所有元素放入一个字符串。
/* console.log(site.join()); */

// 15.keys()	返回数组的可迭代对象，包含原始数组的键(key)。
/* console.log(fruits.keys().next().value); */

// 16.lastIndexOf()	搜索数组中的元素，并返回它最后出现的位置。
/* console.log(ages.lastIndexOf(18)); */

// 17.map()	通过指定函数处理数组的每个元素，并返回处理后的数组。
/* let agesIndex = ages.map((item, index) => {
  console.log(item);
  return index;
});
console.log(agesIndex); */
// foreach 和 map 的区别
// 能用forEach()做到的，map()同样可以。反过来也是如此。
// map()会分配内存空间存储新数组并返回新数组，forEach()不会返回数据。
// forEach()允许callback更改原始数组的元素。

// 18.pop()	删除数组的最后一个元素并返回删除的元素。
/* console.log(ages);
console.log(ages.pop());
console.log(ages); */

// 19.push()	向数组的末尾添加一个或更多元素，并返回新的长度。
/* console.log(ages, ages.length); // 6
console.log(ages.push("a")); // 7
console.log(ages, ages.length); */

// 20.reduce()	将数组元素计算为一个值（从左到右）。
/* function getSum(total, num) {
  return total + num;
}
console.log(ages.reduce(getSum)); */

// 21.reduceRight()	将数组元素计算为一个值（从右到左）。
/* console.log(ages.reduceRight(getSum)); */

// 22.reverse()	反转数组的元素顺序。
/* console.log(ages.reverse()); */

// 23.shift()	删除并返回数组的第一个元素。
/* console.log(ages.shift());
console.log(ages, ages.length); */

// 24.slice()	选取数组的一部分，并返回一个新数组。
/* let string = "Hello,hand!"; */
/* console.log(string.slice(6, 10)); */

// some()	检测数组元素中是否有元素符合指定条件。
// every 是否都符合条件 与关系
// some 是否有符合条件的元素 或关系
/* console.log(ages.some(checkAdult)); */

// 25.sort()	对数组的元素进行排序。
/* console.log(ages.sort());
console.log(ages); // 在原数组上进行排序 不生成新的数组 */

// 26.splice()	从数组中添加或删除元素。
/* console.log(ages.splice(1, 1));
console.log(ages); //更改原数组的值 */
// slice splice 与 split 的区别
// slice 不改变原数组
// splice 改变原数组
// split 将字符串安装指定元素进行分割返回一个数组

// 27.toString()	把数组转换为字符串，并返回结果。
/* console.log(site);
console.log(site.join(""));
console.log(site.toString()); */
// join 可通过指定分隔符分割元素  默认是逗号
// toString 只能用逗号分隔

// 28.unshift()	向数组的开头添加一个或更多元素，并返回新的长度。
/* console.log(fruits.unshift("Lemon", "Pineapple"));
console.log(fruits.shift());
console.log(fruits.push("Lemon", "Pineapple"));
console.log(fruits); */
// unshift 于 push  shift 均改变原始数组
// unshift于push返回更新后数组的长度
// shift返回被删除的第一项

// 29.valueOf()	返回数组对象的原始值
/* console.log(fruits.valueOf()); //不改变原始数组 */

// es6基础

// let 与 const
/* {
    let a = 0
    console.log(a)  // 0
}
console.log(a) // 报错 */
//** 代码块内有效 **/
// let在代码块内有效  var全局有效
/* {
    let a = 0
    var b = 1
}
a // 报错
b // 1 */

// 不能重复声明
// let只能声明一次  var可以重复声明多次
/* let a = 1;
let a = 2; // 报错
var b = 3;
var b = 4;
console.log(a);
console.log(b); */
