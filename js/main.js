let category_nav_list=document.querySelector('.category-nav-list');
let add_btn=document.querySelector('.btn_add_cart')

const opened_nav_list=document.querySelector('.nav-links');
function open_menu(){
    opened_nav_list.classList.toggle('active')
}
const open_use=document.querySelector('.login-signup')
function open_use2(){
    open_use.classList.toggle('active')
}



function active_1(){
    category_nav_list.classList.toggle('active');
    

}
var cart= document.querySelector('.cart');

function open_cart(){
    cart.classList.toggle('active');
    

}
fetch('products.json')
.then(response => response.json())
.then(data=>{
    const addToCartButton = document.querySelectorAll('.btn_add_cart');
    addToCartButton.forEach(button=>{
        button.addEventListener('click',(event)=>{
            const product_id= event.target.getAttribute('data-id');
            const selected_product=data.find(product => product.id == product_id);



            addToCart(selected_product);

            const all_btns = document.querySelectorAll(`.btn_add_cart[data-id="${product_id}"]`);

            all_btns.forEach(btn_clicked=>{
                btn_clicked.classList.add('active');
                btn_clicked.innerHTML=` <i class=" fa-solid fa-cart-shopping"></i> item in cart `
            })
        })
    })    
})

function addToCart(product){
    let cart = JSON.parse(localStorage.getItem('cart'))|| [];

    cart.push({...product , quantity:1})
    localStorage.setItem('cart', JSON.stringify(cart));
    update_cart(product);
};

function update_cart(){
   let items_input=document.getElementById('items')
    let total_input=document.getElementById('total_price')
    let count_input=document.getElementById('count_items')
    const check_out_items=document.getElementById('check_out_items')
    const cart_items_conatiner= document.getElementById('cart_items');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    var total_price=0
    var total_count=0 
    
     if(check_out_items){
        check_out_items.innerHTML=``

        


        



    }
    if (items_input) items_input.value = '';
    if (total_input) total_input.value = '';
    if (count_input) count_input.value = '';

    cart_items_conatiner.innerHTML='';
    cart.forEach(( item , index )=>{

        let total_price_item= item.price* item.quantity
        total_price+=total_price_item
        total_count+=item.quantity


       if (total_input) total_input.value  = total_price + 20;
        if (count_input) count_input.value  = total_count
        if (items_input) items_input.value += item.name+'  ----   '+ 'price:  '+item.price +' count: '+item.quantity + '\n'
        
        
        
  
        cart_items_conatiner.innerHTML +=`
         <div class="item_cart">
                <img src="${item.img}" alt="">
                <div class="content">
                    <h4>${item.name}</h4>
                    <p class="price_cart">$${total_price_item}</p>
                    <div class="quantity_control">
                        <button class="decreass_quantity" data-index=${index}>-</button>
                        <span class="quantity">${item.quantity}</span>
                         <button class="increass_quantity"  data-index=${index}>+</button>
                    </div>
                </div>
                <button class="delet_item" data-index"${index}" ><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `

        if(check_out_items){
            check_out_items.innerHTML+=`
                          <div class="item_cart">
                <div class="img_name">
                  <img src="${item.img}" alt="" />

                  <div class="content">
                    <h4>${item.name}</h4>
                    <p class="price_cart">$${total_price_item}</p>
                    <div class="quantity_control">
                      <button class="decreass_quantity" data-index="${index}">-</button>
                      <span class="quantity">${item.quantity}</span>
                      <button class="increass_quantity" data-index="${index}">+</button>
                    </div>
                  </div>
                </div>
                <button class="delet_item" data-index"${index}">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            
            
            `
        }


    })

    const price_cart_total= document.querySelector('.price_cart_total')
    const coutnt_item_cart= document.querySelector('.count_item_cart')
    const count_item_header= document.querySelector('.count-item-header')

    if(check_out_items){
        var subtotal_check_out=document.querySelector('.subtotal_checkout')

        var total_check_out=document.querySelector('.total_checkout')

        var shipping_check_out=document.querySelector('.shipping')
        subtotal_check_out.innerHTML=`$${total_price}`
        total_check_out.innerHTML=`$${total_price + 20}`

    }





    price_cart_total.innerHTML=`$${total_price}`


    coutnt_item_cart.innerHTML=`${total_count}`
    count_item_header.innerHTML=`${total_count}`





    const increass_button=document.querySelectorAll('.increass_quantity')
    const decreass_button=document.querySelectorAll('.decreass_quantity')
    
    increass_button.forEach(button=>{
        button.addEventListener('click',(event) =>{
         const item_index= event.target.getAttribute('data-index');
            increass_quantity(item_index)
            })
    })
    decreass_button.forEach(button=>{
        button.addEventListener('click',(event)=>{
            const item_index= event.target.getAttribute('data-index');

            decreass_quantity(item_index)
        })
    })



    const delet_button=document.querySelectorAll('.delet_item')

    delet_button.forEach(button=>{
        button.addEventListener('click',(event)=>{
            const item_index= event.target.closest('button').getAttribute('data-index')
            removeFromCart(item_index);
        })
    })
}


function increass_quantity(index){
    let cart= JSON.parse(localStorage.getItem('cart'))|| [];
    cart[index].quantity += 1;
    localStorage.setItem('cart',JSON.stringify(cart))

    update_cart()
}
function decreass_quantity(index){
    let cart= JSON.parse(localStorage.getItem('cart'))|| [];
    if(cart[index].quantity > 1){
         cart[index].quantity -= 1;
    }
    localStorage.setItem('cart',JSON.stringify(cart))

    update_cart()
}

function removeFromCart(index){
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const remove_product=cart.splice(index, 1 )[0]

    localStorage.setItem('cart',JSON.stringify(cart))
    update_cart()
    update_button_stay(remove_product.id)

}
function update_button_stay(productId){
    const allMatcjingButtons= document.querySelectorAll(`.btn_add_cart[data-id="${productId}"] `)
    allMatcjingButtons.forEach(button=>{
        button.classList.remove('active')
        button.innerHTML=` <i class=" fa-solid fa-cart-shopping"></i> add to cart `
    })
}

update_cart()
