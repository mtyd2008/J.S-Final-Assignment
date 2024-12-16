const div = document.querySelector(".container")


let products = []

 fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((res)=>{
    products = res.products
    console.log(products);

    products.map((item,index)=>{
        div.innerHTML += `<div class="cards">
            <img src = ${item.thumbnail}>
            <h1 class="head">${item.title.slice(0,20)}..</h1>
            <p>${item.description.slice(1,20)}....</p>
            <p>Price:$${item.price}</p>
            <button class="btn btn-secondary bg" onclick="showmore(${item.id})">See More</button>
            <button class="btn btn-primary" onclick="addtocart(${index})">Add to cart</button>
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




function addtocart(index) {
  const product = products[index]; // Access the correct product from the global array
  const checkIndex = cartitems.findIndex((item) => item.id === product.id); // Check if the product is already in the cart

  if (checkIndex === -1) {
    product.quantity = 1; // Add quantity property
    cartitems.push(product);
  } else {
    cartitems[checkIndex].quantity += 1; // Increment quantity if product is already in the cart
  }

  console.log(cartitems);

  
  Swal.fire({
    title: "Item Added To Cart!",
    text: "Thanks!",
    icon: "success",
  });

  

  // Save updated cart to localStorage
  localStorage.setItem("cart", JSON.stringify(cartitems));
}




// function addtocart(index){
//     const checkIndex = cartitems.indexOf(product[index]);
//   if(checkIndex === -1) {
//     product[index].quantity = 1;
//     cartitems.push(product[index]);
//   } else {
//     cartitems[checkIndex].quantity += 1;
//   } 
//   console.log(checkIndex);

//   Swal.fire({
//     title: "Item Added To Cart!",
//     text: "Thanks!",
//     icon: "success",
//   });
// }

function check(){
    window.location = "cart.html "
    localStorage.setItem("cart" , JSON.stringify(cartitems))
}


