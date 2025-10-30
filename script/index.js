var discount = 10;
var container = document.getElementById('cards-container');

function Product(name,price,category){
    this.name = name;
    this.price = price;
    this.category = category;
}

main();

function main(){
    product1 = new Product('A tail of 2 cities','300','Books');
    product2 = new Product('A tail of 2 cities','300','Books');
    product3 = new Product('A tail of 2 cities','300','Books');
    product4 = new Product('A tail of 2 cities','300','Books');

    product1.__proto__.getDiscountedPrice=function(dis){ return this.price -(this.price*dis)/100};

    products = [product1,product2,product3,product4];

    costDisc(products);
    DisplayCards(products);


    (function EventListeners(){
        var cards = document.querySelectorAll('.card');
        for(var i=0; i<cards.length; i++){
            const card = cards[i];
            card.addEventListener('mouseenter',()=>{
                card.style.backgroundColor='#adadad';
            })
            card.addEventListener('mouseleave',()=>{
                card.style.backgroundColor='';
            })
        }
    })();
}


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
    var maxCost=0;
    for(var i=0; i<products.length; i++){
        var product=products[i];
        maxCost=maxFun.call(product,maxCost);
    }
    ele.innerText=`Price of costliest product is ${maxCost}`;
}


function maxFun(maxCost){
    if(maxCost==undefined || maxCost==null || this.price>maxCost){
        return this.getDiscountedPrice(discount);
    }
    return maxCost;
}

