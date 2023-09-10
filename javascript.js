let btn1=document.getElementById('b1');
btn1.onclick=function()
{
    console.log("liked :)");
}
let btn2=document.getElementById('b2');
btn2.onclick=function()
{
    console.log("disliked :(");
}
let btn3=document.getElementById('b3');
btn3.onclick=function()
{
    console.log("comment added ");
}
let btn4=document.getElementById('b4');
btn4.onclick=function()
{
    console.log("report added !");
}
btn1.onmouseenter=function()
{
    console.log("want to like :)");
}
btn2.onmouseenter=function()
{
    console.log("want to dislike :(");
}
btn3.onmouseenter=function()
{
    console.log("make a comment");
}
btn4.onmouseenter=function()
{
    console.log("wanna report ");
}
