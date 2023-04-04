let allTotal = 0;
function addToCart(element){
    let mainEl = element.closest('.single-item');
    let elName = mainEl.querySelector('.si-content h3').innerText;
    let elPrice = mainEl.querySelector('.si-content p').innerText;
    let quantity = mainEl.querySelector('input').value;
    let cart = document.querySelector('.cart-items');

    elPrice = elPrice.substring(1)
    elPrice = parseInt(elPrice);
    
    if(parseInt(quantity)>0){
        let total = quantity * elPrice;
        
        cart.innerHTML += `<div class="cart-single-item">
                                <h3>${elName}</h3>
                                <p>${elPrice} x ${quantity} = <span>${total}</span>$</p>
                                <button onclick="removeFromCard(this)">Ukloni</button>
                          </div>`;
        
        element.innerText = "Dodato";
        element = element.setAttribute('disabled','true');
                          
        let totalBuy = document.querySelector('.total');
        allTotal += total;
        totalBuy = totalBuy.innerHTML = `Ukupno kosta: ${allTotal}$`;

    }
}

function removeFromCard(element){
    let totalBuy = document.querySelector('.total');
    let mainEl = element.closest('.cart-single-item');
    let price = mainEl.querySelector('p span').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let vegetables = document.querySelectorAll('.single-item');
    price = parseInt(price);
    allTotal -= price;
    if(allTotal != 0){
    totalBuy = totalBuy.innerHTML = `Ukupno kosta: ${allTotal}$`;
    }else{
        totalBuy.innerHTML = "";
    }
    mainEl.remove();
    
    vegetables.forEach(function (vege){
        let itemName = vege.querySelector('.si-content h3').innerText
        if(name == itemName){
           vege.querySelector('.actions input').value = 0;
           vege.querySelector('.actions button').innerText = "Dodaj";
           vege.querySelector('.actions button').removeAttribute('disabled');
        }
    });
}