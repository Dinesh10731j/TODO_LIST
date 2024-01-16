const item = document.querySelector("#item");
const listItems = document.querySelector("#listItems");
const num = document.querySelector(".num")

let totalList = 0;


item.addEventListener("keyup",(e)=>{
    e.stopPropagation()
   if(e.key == "Enter"){
getInputValues(e.target.value);
num.innerHTML = `Number of list:${totalList+1}`;
item.value = null;
   
   } 

 
});


const getInputValues  = (item) => {

    const listVal = document.createElement("li");
    listVal.innerHTML =`${item} 
    <i class="fas  fa-times"></i>
    `
listItems.appendChild(listVal);

listVal.addEventListener("click",function(e){
    e.stopPropagation();

    this.classList.toggle("done");

});

listVal.querySelector("i").addEventListener("click",function(e){
    e.stopPropagation()
    listVal.remove();
    num.innerHTML = `Number of list:${removeList--}`;
  
})

}
