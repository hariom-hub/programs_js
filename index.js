const arrr = [10,20,30,3,100];

// let print = function(el){
//     console.log(el);
// }

// arrr.forEach(print);


// arrr.forEach((el)=>{

//     console.log(el);
// })
//for each
// const family = [

//     {
//         members : [
//             "papaji","mammi","dadi","didi","gaurisha","hariom"
//         ]
//     }
// ]

// family.forEach((mem)=>{
//     console.log(mem);
// })

// let names = ["ram","sita","lakshman","bharat"];

// console.log(names.reverse());

// map method   

const arr = [10,20,30,34,7];

// let newArr = arr.map((el)=>{

//     return el*2;
// })

// console.log(newArr);

//filter method

// let ans = arr.filter((el)=>{

//     return (el%10 == 0);    // will return those elements from the array that gives remainder 0 on dividing by 10
// })
// console.log(ans);

const voters = [
    {
        name: "hariom",
        age: 20
    },
    {
        name: "shubhraj",
        age: 21
    },
    {
        name: "gadha",
        age: 18
    }
];

// console.log(voters);

let adults = voters.filter((voter)=>{

    return voter.age>18;
}).map((voter)=>{
    return voter.name;
})
// console.log(adults);


let findans = arr.every((el)=>{

    return el%2 == 0;
})

// console.log(findans)



let sum = arr.reduce((res,el)=>{

    return res+el;
})

console.log(sum);