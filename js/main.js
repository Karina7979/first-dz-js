"use strict";

class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();//рекомендация, чтобы метод был вызван в текущем классе
        this.render();//вывод товаров на страницу
        this.sum = 0;
        this.getSum();
        this.showSum();
    }
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }
    //Пример взяла напрямую с factor завода машин, сделала 2 функции, одна считает сумму, другая показывает в консоль
    getSum() {
         for(let i = 0;i < this.goods.length;i++) {
           this.sum += this.goods[i].price;
        }
    }

    showSum() {
        console.log(`Общая сумма всех товаров ${this.sum}`);
    }
    
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
             const item = new ProductItem(product);
             block.insertAdjacentHTML("beforeend",item.render());
//           block.innerHTML += item.render();
        }
    }
}

class ProductItem{
    constructor(product,img= '01.jpg'){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    render(){
           return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList();

//для Корзины сделала метод сделать заказ и удалить все
class Cart {
    doOrder(){
    };
    removeAll(){
    };
}

// для Элемента корзины товара, сделала методы удалить(сам товар удаляется)
// и добавить товар(можно кол-во сделать больше)
class GoodOfCart {
    remove() {
    };
    add(){
    };
}
