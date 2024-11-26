//匿名函数
(function(){console.log('123')} ()); //123
(function(){console.log('123')}) () //123
!function(){console.log('123')}() //123
+function(){console.log('123')}()//123
-function(){console.log('123')}()//123
~function(){console.log('123')}()//123
void function(){console.log('123')}()//123
new function(){console.log('123')}();//123

//函数声明
(function test(){console.log('123')} ()); //123
(function test(){console.log('123')}) () //123
!function test(){console.log('123')}() //123
+function test(){console.log('123')}()//123
-function test(){console.log('123')}()//123
~function test(){console.log('123')}()//123
void function test(){console.log('123')}()//123
new function test(){console.log('123')}()//123
