"use strict";
const DISHES = [
    {
        keyword: 'gaspacho',
        name: 'Гаспачо',
        price: 195,
        category: 'soup',
        count: '350 г',
        image: '../img/gazpacho.jpg'
    },

    {
        keyword: 'mushroom',
        name: 'Грибной суп-пюре',
        price: 185,
        category: 'soup',
        count: '330 г',
        image: '../img/mushroom_soup.jpg'
    },

    {
        keyword: 'norwegian',
        name: 'Норвежский суп',
        price: 270,
        category: 'soup',
        count: '330 г',
        image: '../img/norwegian_soup.jpg'
    },

    {
        keyword: 'friedpotatoes',
        name: 'Жареная картошка с грибами',
        price: 150,
        category: 'main_food',
        count: '250 г',
        image: '../img/friedpotatoeswithmushrooms1.jpg'
    },

    {
        keyword: 'lasagna',
        name: 'Лазанья',
        price: 385,
        category: 'main_food',
        count: '310 г',
        image: '../img/lasagna.jpg'
    },

    {
        keyword: 'chickencutlets',
        name: 'Котлеты из курицы с картофельным пюре',
        price: 225,
        category: 'main_food',
        count: '280 г',
        image: '../img/chickencutletsandmashedpotatoes.jpg'
    },

    {
        keyword: 'orangejuice',
        name: 'Апельсиновый сок',
        price: 120,
        category: 'drink',
        count: '300 мл',
        image: '../img/orangejuice.jpg'
    },

    {
        keyword: 'applejuice',
        name: 'Яблочный сок',
        price: 90,
        category: 'drink',
        count: '300 мл',
        image: '../img/applejuice.jpg'
    },

    {
        keyword: 'carrotjuice',
        name: 'Морковный сок',
        price: 110,
        category: 'drink',
        count: '300 мл',
        image: '../img/carrotjuice.jpg'
    }
]

DISHES.sort(function(a, b) {
    return a.name.localeCompare(b.name);
})

const template = document.querySelector('#template');
const templateContent = template.content;

let costSoup = 0;
let costMain = 0;
let costDrink = 0;

for (let i = 0; i < DISHES.length; i++) {
    const {keyword, name, price, category, count, image} = DISHES[i];

    const FoodCard = templateContent.cloneNode(true);
    const card = FoodCard.firstElementChild;
    card.dataset.dish = keyword;

    FoodCard.querySelector('.food_img').src = image;
    FoodCard.querySelector('.cost').textContent = price + '₽';
    FoodCard.querySelector('.long_t').textContent = name;
    FoodCard.querySelector('.weight').textContent = count;
    FoodCard.firstElementChild.dataset.dish = keyword;
    const btn = FoodCard.querySelector('.append');

    btn.addEventListener('click', function () {
        const keywordOfCard = btn.closest('[data-dish]').dataset.dish;
        const dish = DISHES.find(function (d) {
        return d.keyword === keywordOfCard;
        });

        const section = document.querySelector('[data-dish="' + category + '"]');
        section.querySelectorAll('.selected').forEach(function (el) {
            el.classList.remove('selected');
        });
        btn.closest('[data-dish]').classList.add('selected');

        switch (dish.category) {
            case 'soup':
                document.querySelector('#soup').textContent = dish.name + ' ' + dish.price + '₽';
                document.querySelector('#soup_input').value = dish.keyword;
                costSoup = dish.price;
                break;

            case 'main_food':
                document.querySelector('#mainDish').textContent = dish.name + ' ' + dish.price + '₽';
                document.querySelector('#main_input').value = dish.keyword;
                costMain = dish.price;
                break;

            case 'drink':
                document.querySelector('#drink').textContent = dish.name + ' ' + dish.price + '₽';
                document.querySelector('#drink_input').value = dish.keyword;
                costDrink = dish.price;
                break;
    }
    const total = costSoup + costMain + costDrink;
    document.querySelector('#cost').textContent = total + '₽';
    document.querySelector('#total_input').value = total;
    document.querySelector('#costBlock').style.display = 'block';
    document.querySelector('#emptyMsg').style.display = 'none';
    document.querySelector('#orderBlock').style.display = 'block';

    })

    
    switch (category) {
        case 'soup':
            document.querySelector('[data-dish="soup"]').appendChild(FoodCard);
            break;
        
        case 'main_food':
            document.querySelector('[data-dish="main_food"]').appendChild(FoodCard);
            break;

        case 'drink':
            document.querySelector('[data-dish="drink"]').appendChild(FoodCard);
            break;

        default:
            break;
    }
}