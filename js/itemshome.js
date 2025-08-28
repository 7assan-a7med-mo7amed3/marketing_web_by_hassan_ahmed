
fetch('products.json')
.then(response => response.json())
.then(data =>{
    const cart = JSON.parse(localStorage.getItem('cart'))||[]
    const swipe_item_sale= document.getElementById('swiper_items_sale');
    const swipe_item_electronics= document.getElementById('swiper_items_electronics');
    
    const swiper_items_appliances= document.getElementById('swiper_items_appliances');

    const swiper_items_mobiles= document.getElementById('swiper_items_mobiles');


    

    data.forEach(product =>{
        if(product.old_price){


            const IsInCart = cart.some(cartItem=> cartItem.id === product.id)
            const precent_disc=Math.floor((product.old_price - product.price)/product.old_price*100)


            swipe_item_sale.innerHTML +=`
             <div class="swiper-slide product">
                    <span class="sale">
                        ${precent_disc}%
                    </span>
                    <div class="img_product"><a href="#"><img src="${product.img}" alt=""></a></div>
                    <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    <p class="name-product"><a href="#">${product.name}</a></p>
                    <div class="price">
                        <p><span>$${product.price}</span></p>
                        <p class="old_price">$${product.old_price}</p>
                    </div>
                    <div class="icons">
                        <span  class="btn_add_cart ${IsInCart ? 'active' :''}" data-id="${product.id}">
                            <i class=" fa-solid fa-cart-shopping"></i> ${IsInCart ? 'item in cart' :'add to cart'}
                        </span>
                         <span class="icon_product">
                            <i class=" fa-solid fa-heart"></i> 
                        </span>
                    </div>
                </div>
            
            
            
            
            
            
            
            
            `
        }
    });
    data.forEach(product =>{
        if(product.catetory=="electronics"){
            const IsInCart = cart.some(cartItem=> cartItem.id === product.id)

            const precent_disc=Math.floor((product.old_price - product.price)/product.old_price*100)


            const old_price_p=product.old_price ?`  <p class="old_price">$${product.old_price}</p>`:''

            
            const product_sale=precent_disc ?`   <span class="sale">
                        ${precent_disc}%
                    </span>`:''



            swipe_item_electronics.innerHTML +=`
             <div class="swiper-slide product">
                    ${product_sale}
                    <div class="img_product"><a href="#"><img src="${product.img}" alt=""></a></div>
                    <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    <p class="name-product"><a href="#">${product.name}</a></p>
                    <div class="price">
                        <p><span>$${product.price}</span></p>
                        ${old_price_p}
                        
                    </div>
                    <div class="icons">
                        <span  class="btn_add_cart ${IsInCart ? 'active' :''}" data-id="${product.id}">
                            <i class=" fa-solid fa-cart-shopping"></i> ${IsInCart ? 'item in cart' :'add to cart'}
                        </span>
                         <span class="icon_product">
                            <i class=" fa-solid fa-heart"></i> 
                        </span>
                    </div>
                </div>
            
            
            
            
            
            
            
            
            `
        }
    });
     data.forEach(product =>{
        if(product.catetory=="appliances"){
            
            const IsInCart = cart.some(cartItem=> cartItem.id === product.id)

            const precent_disc=Math.floor((product.old_price - product.price)/product.old_price*100)


            const old_price_p=product.old_price ?`  <p class="old_price">$${product.old_price}</p>`:''

            
            const product_sale=precent_disc ?`   <span class="sale">
                        ${precent_disc}%
                    </span>`:''



            swiper_items_appliances.innerHTML +=`
             <div class="swiper-slide product">
                    ${product_sale}
                    <div class="img_product"><a href="#"><img src="${product.img}" alt=""></a></div>
                    <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    <p class="name-product"><a href="#">${product.name}</a></p>
                    <div class="price">
                        <p><span>$${product.price}</span></p>
                        ${old_price_p}
                        
                    </div>
                    <div class="icons">
                        <span  class="btn_add_cart ${IsInCart ? 'active' :''}" data-id="${product.id}">
                            <i class=" fa-solid fa-cart-shopping"></i> ${IsInCart ? 'item in cart' :'add to cart'}
                        </span>
                         <span class="icon_product">
                            <i class=" fa-solid fa-heart"></i> 
                        </span>
                    </div>
                </div>
            
            
            
            
            
            
            
            
            `
        }
    })
      data.forEach(product =>{
        if(product.catetory=="mobiles"){
            const IsInCart = cart.some(cartItem=> cartItem.id === product.id)

            const precent_disc=Math.floor((product.old_price - product.price)/product.old_price*100)


            const old_price_p=product.old_price ?`  <p class="old_price">$${product.old_price}</p>`:''

            
            const product_sale=precent_disc ?`   <span class="sale">
                        ${precent_disc}%
                    </span>`:''



           swiper_items_mobiles.innerHTML +=`
             <div class="swiper-slide product">
                    ${product_sale}
                    <div class="img_product"><a href="#"><img src="${product.img}" alt=""></a></div>
                    <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    <p class="name-product"><a href="#">${product.name}</a></p>
                    <div class="price">
                        <p><span>$${product.price}</span></p>
                        ${old_price_p}
                        
                    </div>
                    <div class="icons">
                       <span  class="btn_add_cart ${IsInCart ? 'active' :''}" data-id="${product.id}">
                            <i class=" fa-solid fa-cart-shopping"></i> ${IsInCart ? 'item in cart' :'add to cart'}
                        </span>
                         <span class="icon_product">
                            <i class=" fa-solid fa-heart"></i> 
                        </span>
                    </div>
                </div>
            
            
            
            
            
            
            
            
            `
        }
    })
})
 