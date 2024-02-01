// Reusable Code
function getCardPrice (element) {
    const getProductPrice = document.getElementById(element);
    const productPriceString = getProductPrice.innerText;
    const productPrice = parseFloat(productPriceString);
    return productPrice;
};

function setSofaPrice (element, cardPrice){
    const couponButton = document.getElementById('apply');
    const discountPrice = document.getElementById('discount');
    const netPrice = document.getElementById('total') 
    const purchaseButton = document.getElementById('purchase')
    const getPreviousTotalPrice = document.getElementById(element);
    const previousTotalPriceString = getPreviousTotalPrice.innerText;
    const previousTotalPrice = parseFloat(previousTotalPriceString);
    const newPrice = previousTotalPrice + cardPrice;
    getPreviousTotalPrice.innerText = newPrice;
    if(newPrice > 200){
        couponButton.removeAttribute('disabled');
        couponButton.classList.remove('cursor-not-allowed', 'opacity-50')
    }
    else{
        couponButton.setAttribute('disabled', 'disabled');
        couponButton.classList.add('cursor-not-allowed');
    }

    if(newPrice > 0){
        purchaseButton.removeAttribute('disabled');
        purchaseButton.classList.remove('cursor-not-allowed', 'opacity-50')
    }
    else{
        purchaseButton.setAttribute('disabled', 'disabled');
        purchaseButton.classList.add('cursor-not-allowed');
    }
    function calDiscount() {
        // Discount;
        document.getElementById('apply').addEventListener('click', function(){
            const promoCodeInput = document.getElementById('promo-code');
            const promoCode = promoCodeInput.value;
            if(newPrice > 200 && promoCode === 'SELL200'){
                const discount = 0.2 * newPrice;
                discountPrice.innerText = discount.toFixed(2) + ' TK';
                const finalPrice = newPrice - discount;
                netPrice.innerText = finalPrice + ' TK';
            }
        })
    }
    calDiscount()
    return getPreviousTotalPrice
}

function showOrder(productName){
    const getOrder = document.getElementById(productName);
    const orderName = getOrder.innerText;
    const ul = document.getElementById('input-order');
    const li = document.createElement('li');
    li.innerText = orderName;
    ul.appendChild(li);
}


// Main Functions
document.getElementById('card-1').addEventListener('click', function(){
    const spoonPrice = getCardPrice('spoon')
    setSofaPrice('total-price', spoonPrice);
    showOrder('spoon-name');
});
document.getElementById('card-2').addEventListener('click', function(){
    const chopperPrice = getCardPrice('chopper')
    setSofaPrice('total-price', chopperPrice);
    showOrder('chopper-name');
});
document.getElementById('card-3').addEventListener('click', function(){
    const cookerPrice = getCardPrice('cooker')
    setSofaPrice('total-price', cookerPrice);
    showOrder('cooker-name');
});
document.getElementById('card-4').addEventListener('click', function(){
    const capPrice = getCardPrice('cap')
    setSofaPrice('total-price', capPrice);
    showOrder('cap-name');
});
document.getElementById('card-5').addEventListener('click', function(){
    const jerseyPrice = getCardPrice('jersey')
    setSofaPrice('total-price', jerseyPrice);
    showOrder('jersey-name');
});
document.getElementById('card-6').addEventListener('click', function(){
    const catsPrice = getCardPrice('cats')
    setSofaPrice('total-price', catsPrice);
    showOrder('cats-name');
});
document.getElementById('card-7').addEventListener('click', function(){
    const singlePrice = getCardPrice('single')
    setSofaPrice('total-price', singlePrice);
    showOrder('single-name');
});
document.getElementById('card-8').addEventListener('click', function(){
    const playPrice = getCardPrice('play')
    setSofaPrice('total-price', playPrice);
    showOrder('play-name');
});
document.getElementById('card-9').addEventListener('click', function(){
    const sofaPrice = getCardPrice('sofa')
    setSofaPrice('total-price', sofaPrice);
    showOrder('sofa-name');
});

document.getElementById('reloadButton').addEventListener('click', function() {
    location.reload();
});