 const arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr.forEach((value, index) => {
  console.log(value, index);
});

const data = arr.map((value, index) => {
  return value * 3;
});
console.log(data);

const filterdata = data.filter((value, index) => {
  return value >= 12;
});
console.log(filterdata);

let obj= {
    name:"nitya",
    age:19,
    address:{
        city:"jaipur",
        state:"raj",
        country:"India"
    }
}
let adrres=obj.address

let {name:username,age:userage,address:{city,state}}= obj
console.log(username)
console.log(userage)
console.log(city)
console.log(state)
console.log(document);
