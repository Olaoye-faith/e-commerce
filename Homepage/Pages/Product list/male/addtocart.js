const open = document.getElementById('open')
const close = document.getElementById('close')
const sidebar = document.querySelector('.sidebar')

open.addEventListener('click', ()=> sidebar.classList.remove('active'))
close.addEventListener('click', ()=> sidebar.classList.add('active'))
const product = [
    {
        id: 0,
        image: 'Resources/img/male-1.jpg',
        title: 'LONG JACKET',
        price: 100,
        link: 'pages/jacket.html'
    },
    {
        id: 1,
        image: 'Resources/img/male-2.jpg',
        title: 'SWEAT SHIRT',
        price: 70,
        link: 'pages/shirt.html'
    },
    {
        id: 2,
        image: 'Resources/img/male-3.jpg',
        title: 'HOODIE',
        price: 300,
        link: 'pages/hoodie.html'
    },
    {
        id: 3,
        image: 'Resources/img/male-4.jpg',
        title: 'JEAN PANT',
        price: 150,
        link: 'pages/pant.html'
    },
    {
        id: 4,
        image: 'Resources/img/male-5.jpg',
        title: 'JEAN PANT',
        price: 200,
        link: 'pages/jean.html'
    }
];

const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('class').innerHTML = categories.map((items)=>
{
    var {image, title, price, link} = items;
    return(
        `<div class='content'>
            <div class='img'>
                <img src=${image}></img>
            </div>
            <div class='text'>
                <div class='cart'>
                    <h3><a href=${link}>${title}</a></h3>
                </div>
                <p>$ ${price}.00</p>
            </div>` + 
            "<button onclick='addtocart("+(i++)+")'>Add to cart</button>" +
        `</div>`
    )
}).join('')

var cart = [];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a){
    let j = 0, total=0;
    if(cart.length==0){
        document.getElementById('cartitem').innerHTML = "Your cart is empty";
        document.getElementById('total').innerHTML = "$ "+0+".00";
    }else{
        document.getElementById('cartitem').innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size: 15px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>` + 
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('')
    }
}
