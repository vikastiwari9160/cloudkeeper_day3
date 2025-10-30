var discount = 10;
var container = document.getElementById('cards-container');

function Product(name,price,category){
    this.name = name;
    this.price = price;
    this.category = category;
}

(function(){
    var product1 = new Product('A tail of 2 cities','300','Books');
    var product2 = new Product('The Little Prince','450','Books');
    var product3 = new Product('The Alchemist ','300','Books');
    var product4 = new Product('The Very Hungry Caterpillar','500','Books');

    Product.prototype.getDiscountedPrice=function(dis){ return this.price -(this.price*dis)/100};

    products = [product1,product2,product3,product4];

    costDisc(products);
    DisplayCards(products);


    (function EventListeners(){
        var cards = document.querySelectorAll('.card');
        for(var i=0; i<cards.length; i++){
            const card = cards[i];
            card.addEventListener('mouseenter',()=>{
                card.style.backgroundColor='#adadad';
                card.style.scale='1.1';
            })
            card.addEventListener('mouseleave',()=>{
                card.style.backgroundColor='';
                card.style.scale='';
            })
        }
    })();
})();


function DisplayCards(products){
    for(var i=0; i<products.length; i++){

        var product = products[i];

        card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('id',`card${i}`);

        details = document.createElement('div');
        details.classList.add('details');

        prod_name=document.createElement('h2');
        prod_name.classList.add('prod-name');
        prod_name.innerText=product.name;

        cost_container=document.createElement('div');
        cost_container.classList.add('cost-section');

        prod_price_heading=document.createElement('h3');
        prod_price_heading.classList.add('prod-price-heading');
        prod_price_heading.innerText="Cost :";

        prod_price=document.createElement('h3');
        prod_price.classList.add('prod-price');
        prod_price.innerText=product.price;

        prod_dis_price=document.createElement('h3');
        prod_dis_price.classList.add('prod-dis-price');
        prod_dis_price.innerText=product.getDiscountedPrice(discount);
        
        prod_category=document.createElement('p');
        prod_category.classList.add('prod-category');
        prod_category.innerText="Category :" + product.category;

        cost_container.appendChild(prod_price_heading);
        cost_container.appendChild(prod_price);
        cost_container.appendChild(prod_dis_price);

        details.appendChild(prod_name);
        details.appendChild(cost_container);
        details.appendChild(prod_category);

        card.appendChild(details);

        container.appendChild(card);
    }
}

function costDisc(products){
    var ele = document.getElementById('cost-heading');
    ele.innerText=`Price of costliest product is ${maxFun.call(products)}`;
}


function maxFun(){
    var max=0;
    this.forEach(element => {
        if(max==0 || element.getDiscountedPrice(discount)>max){
            max=element.getDiscountedPrice(discount);
        }
    });
    return max;
}

