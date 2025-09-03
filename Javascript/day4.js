// let arr = [2, 3, 0, 5, 4];
// const pop=arr.pop()
// console.log(pop)
// console.log(arr.shift())
// console.log(arr)
// console.log(arr.unshift())
// console.log(arr)
// console.log(arr.shift())
// console.log(arr)
// console.log(arr.reverse())
// console.log(arr)
// console.log(arr.includes())
// console.log(arr.slice(1,3))

// let obj = {
//   name: "Nitya",
//   age: 19,
//   address: {
//     city: "jaipur",
//     region: "urban",
//     locality: "pratap nagar",
//   },
//   skills: ["html", "css", "js"],
// };
// console.log(obj);



let arr=[1,2,3,4,5,6];
for(let i=0; i < arr.length; i++){
    for(let j=1; i < arr.length; j++){
        if(arr[i]+arr[j]==11){
            console.log(arr[i]+arr[j])
        }
    }
}