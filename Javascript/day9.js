async function name() {
    const data= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data1= await data.json()
    console.log(data1)
}
 
name();