let h1=document.querySelector("h1");

function changeColor(color,delay){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                h1.style.color=color;
                console.log(`color change : ${color}`);
                resolve("color changed");
            },delay);
        });
    };

async function demo(){
    await changeColor("red",1000);
    await changeColor("green",1000);
    await changeColor("blue",1000);
    await changeColor("yellow",1000);
    await changeColor("orange",1000);
    changeColor("black",1000);
}
