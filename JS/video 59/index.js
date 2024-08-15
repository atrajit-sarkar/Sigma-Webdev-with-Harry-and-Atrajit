/*
Creat a faulty calculator using javascript

This faulty calculator does the following:
1. It takes two numbers as input from user
2. It performes wrong operations as follows:
+-----> -
*------>+
- -------->/
/ -------> **

It performs wrong operation 10% of the times.
*/

let p=Math.random()
function calc(a,b,op){
    if (op=='+') {
        return a+b
    }
    if (op=='-') {
        return a-b
    }
    if (op=='*') {
        return a*b
    }
    if (op=='/') {
        return a/b
    }
    if (op=='**') {
        return a**b
    }
}
let op="-";
let a=10;
let b=2;

if (p<0.1) {
    if (op=="+") {
        result=calc(a,b,"-");
        console.log(result)
    }
    if (op=="*") {
        result=calc(a,b,"+");
        console.log(result)
    }
    if (op=="-") {
        result=calc(a,b,"/");
        console.log(result)
    }
    if (op=="/") {
        result=calc(a,b,"**");
        console.log(result)
    }

}
else{
    result=calc(a,b,op)
    console.log(result)
}
