function goProduct(){
    window.location.href = "product.html";
}

function goPayment(){
    window.location.href = "payment.html";
}

function goCart(){
    window.location.href = "cart.html";
}

function goLogin(){
    window.location.href = "login.html";
}

const hearts = document.querySelectorAll('.favorite');

hearts.forEach(heart => {

    heart.addEventListener('click', () => {

        heart.classList.toggle('active');

    });

});