"use strict";
const DISHES = [
    {
        keyword: 'gaspacho',
        name: 'Гаспачо',
        price: 195,
        category: 'soup',
        count: '350 г',
        image: '../img/gazpacho.jpg',
        kind: 'veg'
    },

    {
        keyword: 'mushroom',
        name: 'Грибной суп-пюре',
        price: 185,
        category: 'soup',
        count: '330 г',
        image: '../img/mushroom_soup.jpg',
        kind: 'veg'
    },

    {
        keyword: 'norwegian',
        name: 'Норвежский суп',
        price: 270,
        category: 'soup',
        count: '330 г',
        image: '../img/norwegian_soup.jpg',
        kind: 'fish'
    },

    {
        keyword: 'friedpotatoes',
        name: 'Жареная картошка с грибами',
        price: 150,
        category: 'main_food',
        count: '250 г',
        image: '../img/friedpotatoeswithmushrooms1.jpg',
        kind: 'veg'
    },

    {
        keyword: 'lasagna',
        name: 'Лазанья',
        price: 385,
        category: 'main_food',
        count: '310 г',
        image: '../img/lasagna.jpg',
        kind: 'meat'
    },

    {
        keyword: 'chickencutlets',
        name: 'Котлеты из курицы с картофельным пюре',
        price: 225,
        category: 'main_food',
        count: '280 г',
        image: '../img/chickencutletsandmashedpotatoes.jpg',
        kind: 'meat'
    },

    {
        keyword: 'orangejuice',
        name: 'Апельсиновый сок',
        price: 120,
        category: 'drink',
        count: '300 мл',
        image: '../img/orangejuice.jpg',
        kind: 'cold'
    },

    {
        keyword: 'applejuice',
        name: 'Яблочный сок',
        price: 90,
        category: 'drink',
        count: '300 мл',
        image: '../img/applejuice.jpg',
        kind: 'cold'
    },

    {
        keyword: 'carrotjuice',
        name: 'Морковный сок',
        price: 110,
        category: 'drink',
        count: '300 мл',
        image: '../img/carrotjuice.jpg',
        kind: 'cold'
    },

    {
        keyword: 'ramen',
        name: 'Рамен',
        price: 375,
        category: 'soup',
        count: '425 г',
        image: '../img/ramen.jpg',
        kind: 'meat'
    },

    {
        keyword: 'tomyum',
        name: 'Том ям с креветками',
        price: 650,
        category: 'soup',
        count: '500 г',
        image: '../img/tomyum.jpg',
        kind: 'fish'
    },

    {
        keyword: 'chickensoup',
        name: 'Куриный суп',
        price: 330,
        category: 'soup',
        count: '350 г',
        image: '../img/chicken.jpg',
        kind: 'meat'
    },

    {
        keyword: 'fishrice',
        name: 'Рыбная котлета с рисом и спаржей',
        price: 320,
        category: 'main_food',
        count: '270 г',
        image: '../img/fishrice.jpg',
        kind: 'fish'
    },

    {
        keyword: 'pizza',
        name: 'Пицца Маргарита',
        price: 450,
        category: 'main_food',
        count: '470 г',
        image: '../img/pizza.jpg',
        kind: 'veg'
    },

    {
        keyword: 'shrimppasta',
        name: 'Паста с креветками',
        price: 340,
        category: 'main_food',
        count: '340 г',
        image: '../img/shrimppasta.jpg',
        kind: 'fish'
    },

    {
        keyword: 'koreyansalad',
        name: 'Корейский салат с овощами и яйцом',
        price: 330,
        category: 'starter',
        count: '250 г',
        image: '../img/saladwithegg.jpg',
        kind: 'veg'
    },

    {
        keyword: 'caesar',
        name: 'Цезарь с цыпленком',
        price: 370,
        category: 'starter',
        count: '220 г',
        image: '../img/caesar.jpg',
        kind: 'meat'
    },

    {
        keyword: 'caprese',
        name: 'Капрезе с моцареллой',
        price: 350,
        category: 'starter',
        count: '235 г',
        image: '../img/caprese.jpg',
        kind: 'veg'
    },

    {
        keyword: 'tunasalad',
        name: 'Салат с тунцом',
        price: 480,
        category: 'starter',
        count: '250 г',
        image: '../img/tunasalad.jpg',
        kind: 'fish'
    },

    {
        keyword: 'frenchfriescaesar',
        name: 'Картофель фри с соусом Цезарь',
        price: 280,
        category: 'starter',
        count: '235 г',
        image: '../img/frenchfries1.jpg',
        kind: 'veg'
    },

    {
        keyword: 'frenchfriesketchup',
        name: 'Картофель фри с кетчупом',
        price: 260,
        category: 'starter',
        count: '235 г',
        image: '../img/frenchfries2.jpg',
        kind: 'veg'
    },

    {
        keyword: 'cappuccino',
        name: 'Капучино',
        price: 180,
        category: 'drink',
        count: '300 мл',
        image: '../img/cappuccino.jpg',
        kind: 'hot'
    },

    {
        keyword: 'greentea',
        name: 'Зеленый чай',
        price: 100,
        category: 'drink',
        count: '300 мл',
        image: '../img/greentea.jpg',
        kind: 'hot'
    },

    {
        keyword: 'blacktea',
        name: 'Черный чай',
        price: 90,
        category: 'drink',
        count: '300 мл',
        image: '../img/tea.jpg',
        kind: 'hot'
    },

    {
        keyword: 'baklava',
        name: 'Пахлава',
        price: 220,
        category: 'dessert',
        count: '300 г',
        image: '../img/baklava.jpg',
        kind: 'medium'
    },

    {
        keyword: 'cheesecake',
        name: 'Чизкейк',
        price: 240,
        category: 'dessert',
        count: '125 г',
        image: '../img/checheesecake.jpg',
        kind: 'small'
    },

    {
        keyword: 'chocolatecheesecake',
        name: 'Шоколадный чизкейк',
        price: 260,
        category: 'dessert',
        count: '125 г',
        image: '../img/chocolatecheesecake.jpg',
        kind: 'small'
    },

    {
        keyword: 'chocolatecake',
        name: 'Шоколадный торт',
        price: 270,
        category: 'dessert',
        count: '140 г',
        image: '../img/chocolatecake.jpg',
        kind: 'small'
    },

    {
        keyword: 'donuts3',
        name: 'Пончики (3 штуки)',
        price: 410,
        category: 'dessert',
        count: '350 г',
        image: '../img/donuts2.jpg',
        kind: 'medium'
    },

    {
        keyword: 'donuts6',
        name: 'Пончики (6 штук)',
        price: 650,
        category: 'dessert',
        count: '700 г',
        image: '../img/donuts.jpg',
        kind: 'large'
    },
]

const template = document.querySelector('#template');
const templateContent = template.content;

let costSoup = 0;
let costMain = 0;
let costStarter = 0;
let costDrink = 0;
let costDessert = 0;

for (let i = 0; i < DISHES.length; i++) {
    const {keyword, name, price, category, count, image, kind} = DISHES[i];

    const FoodCard = templateContent.cloneNode(true);
    const card = FoodCard.firstElementChild;
    card.dataset.dish = keyword;

    FoodCard.querySelector('.food_img').src = image;
    FoodCard.querySelector('.cost').textContent = price + '₽';
    FoodCard.querySelector('.long_t').textContent = name;
    FoodCard.querySelector('.weight').textContent = count;
    FoodCard.firstElementChild.dataset.dish = keyword;
    FoodCard.firstElementChild.dataset.kind = kind;
    const btn = FoodCard.querySelector('.append');

    btn.addEventListener('click', function () {
        const keywordOfCard = btn.closest('[data-dish]').dataset.dish;
        const dish = DISHES.find(function (d) {
        return d.keyword === keywordOfCard;
        });

        const section = document.querySelector('[data-dish="' + category + '"]');
        section.querySelectorAll('.selected').forEach(function (el) {
            el.classList.remove('selected');
            el.querySelector('.append').textContent = 'Добавить';
        });
        btn.closest('[data-dish]').classList.add('selected');
        btn.textContent = "Добавлено"

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

            case 'starter':
                document.querySelector('#starter').textContent = dish.name + ' ' + dish.price + '₽';
                document.querySelector('#starter_input').value = dish.keyword;
                costStarter = dish.price;
                break;

            case 'drink':
                document.querySelector('#drink').textContent = dish.name + ' ' + dish.price + '₽';
                document.querySelector('#drink_input').value = dish.keyword;
                costDrink = dish.price;
                break;

            case 'dessert':
                document.querySelector('#dessert').textContent = dish.name + ' ' + dish.price + '₽';
                document.querySelector('#dessert_input').value = dish.keyword;
                costDessert = dish.price;
                break;

            default:
                break;
    }
    const total = costSoup + costMain + costStarter + costDrink + costDessert;
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

        case 'starter':
            document.querySelector('[data-dish="starter"]').appendChild(FoodCard);
            break;

        case 'drink':
            document.querySelector('[data-dish="drink"]').appendChild(FoodCard);
            break;

        case 'dessert':
            document.querySelector('[data-dish="dessert"]').appendChild(FoodCard);
            break;

        default:
            break;
    }
}

const filterBlocks = document.querySelectorAll('.filter');

filterBlocks.forEach(function (block) {
    const section = block.nextElementSibling;
    const buttons = block.querySelectorAll('.filter_btn');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            const wasActive = button.classList.contains('active');

            buttons.forEach(function (b) {
                b.classList.remove('active');
            });

            let chosenKind = null;
            if (!wasActive) {
                button.classList.add('active');
                chosenKind = button.dataset.kind;
            }

            section.querySelectorAll('.card_in').forEach(function (card) {
                if (chosenKind === null || card.dataset.kind === chosenKind) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});