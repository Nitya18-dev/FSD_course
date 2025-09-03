// const a = document.getElementById("getID");
// console.log(a);

// const b = document.createElement("li");
// b.textContent = 'hello';

// const c = document.createElement("li");
// c.textContent = 'hello2';

// const d = document.createElement("li");
// d.textContent = 'hello';

// const e = document.createElement("li");
// e.textContent = 'hello2';

// console.log(b);
// a.appendChild(b);
// a.appendChild(c);
// a.appendChild(d);
// a.appendChild(e);

const a = document.getElementById("username");
console.log(a);

const b = document.getElementById("button");
console.log(b);

a.onchange= function(event){
    console.log('ihsdoihzdioh')
    console.log(event.target.value)
}

b.onclick= function(){
    console.log('hello')
}

const c= a.event.target.value
console.log(c);
