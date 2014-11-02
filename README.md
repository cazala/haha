haha
====

Humorous javascript obfuscation tool

###Usage

`haha(code, getFunc);`

+code: the script that you want to make obfuscate.

+getFunc: if set to true, the returned value is a function, otherwise if set to false (or not defined at all) it returns a string

###Example

`haha('alert("hello world')') // Function('HahaAhAhHahahH....`

you can copy and paste the code in the console to test it out, it will run as if it was the script you passed as parameter to the haha() function

###Try it out

test it live [here](http://cazala.github.io/haha), just type some code on the text area and press Haha, then you can paste that code in the console or on a .js file and it should run exactly as if it was the code you typed in the box.

###Dependencies

haha.js uses hyeroglyphy.js, so you have to include it in your project before you include haha.js
