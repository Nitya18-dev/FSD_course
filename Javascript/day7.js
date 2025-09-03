const att= document.querySelector('img');
const att2=document.querySelector("h1")
console.log(att.getAttribute("class"));

att.setAttribute('src','https://imgs.search.brave.com/KJm5w-cbELGkNcYvZ6RLPOkg9y9vZK_xGQGWeDH31N8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I2L1BlbmNpbF9k/cmF3aW5nX29mX2Ff/Z2lybF9pbl9lY3N0/YXN5LmpwZw')
att.setAttribute("class",["hello","heelo"])

att2.setAttribute("style","background:red")