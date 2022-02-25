"use strict";

const products = [
    { id: 1, title: 'Notebook', price: 2000,},
    { id: 2, title: 'Mouse', price: 20,},
    { id: 3, title: 'Keyboard', price: 200 },
    { id: 4, title: 'Gamepad', price: 50 },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
//добавила изображение по умолчанию

// let{title, price} = obj; не сработал

const renderProduct = (title, price, image="01.jpg") => {
    return `<div class="product-item">
                <img src=${image} alt="">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price, item.image));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join('');
};

//innerHTML вызывает метод ToString , это тоже самое что и join(',');
//надо добавить еще join(''), чтобы запятая исчезла

renderPage(products);