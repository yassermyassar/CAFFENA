let shop = document.querySelector(`#shop`);
let cards = document.querySelector(`.cart-Items`)
let search = document.querySelector(`#glass`)
let mySearch = document.querySelector(`.idform`)
let navbar = document.querySelector(`#nav`);
let list = document.querySelector(`#list`)
let myForm = document.forms[0];
let nameLabel = document.querySelector(`#labelname`);
let numberLabel = document.querySelector(`#labelnumber`);
let emailLabel = document.querySelector(`#labelmail`)

let myinput = document.querySelector(`.text`)
let myNum = document.querySelector(`.number`)
let myEmail = document.querySelector(`.email`)
shop.onclick = () => {
    cards.classList.toggle(`products`);
    mySearch.classList.remove(`input`)
    navbar.classList.remove("product")

}
search.onclick = () => {
    mySearch.classList.toggle(`input`);
    cards.classList.remove(`products`);
    navbar.classList.remove("abs")


}
list.onclick = () => {
    navbar.classList.toggle(`abs`);
    cards.classList.remove("products");
    mySearch.classList.remove(`input`)



}

new WOW().init();


myinput.addEventListener(`blur`, () => {
    let pattern = /\w{3,10}/ig;
    if (pattern.test(myinput.value) === false) {
        nameLabel.style.opacity = 1
    }
});

myNum.addEventListener(`blur`, () => {
    let pattern = /\d{1, 11}/ig;
    if (pattern.test(myNum.value) === false) {
        numberLabel.style.opacity = 1
    }
})

myEmail.addEventListener(`blur`, () => {
    let pattern = /\w+?\d+?@\w{3,7}\.\w+/ig;
    if (pattern.test(myEmail.value) === false) {
        emailLabel.style.opacity = 1
    }
})