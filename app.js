const div = document.querySelector(".container")


const data = fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((res)=>{
    console.log(res.products);

    res.products.map((item,index)=>{
        div.innerHTML += `<div class="cards">
            <img src = ${item.thumbnail}
            <h1>${item.title}</h1>
            <p>${item.description.slice(1,20)}....</p>
            <p>Price:$${item.price}</p>
            <button onclick="showmore(${item.id})">See More</button>
            <button onclick="addtocart(${index})">Add to cart</button>
        </div>`
    })
    
  })
  .catch(err=>console.log(err));

function showmore(id){
    window.location = "Singleproduct.html"
    localStorage.setItem("id" , id)
}

let cartitems 
const checkData = JSON.parse(localStorage.getItem("cart"))
if(checkData === null){
    cartitems = []
}else{
    cartitems = [...checkData]
}


function addtocart(index){
    const checkIndex = cartitems.indexOf(products[index]);
  if(checkIndex === -1) {
    products[index].quantity = 1;
    cartitems.push(products[index]);
  } else {
    cartitems[checkIndex].quantity += 1;
  }
  console.log(checkIndex);
}

function check(){
    window.location = cart.html 
    localStorage.setItem("cart" , JSON.stringify(cartitems))
}


