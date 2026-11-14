"use strict";

const API_URL = 'dishes.json';

const template = document.querySelector('#template');
const templateContent = template.content;

let DISHES = [];

let costSoup = 0, costMain = 0, costStarter = 0, costDrink = 0, costDessert = 0;

function renderDishes() {
    DISHES.sort((a, b) => a.name.localeCompare(b.name));

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
}

async function loadDishes() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Ошибка сервера: ' + response.status);
        }
        DISHES = await response.json();
        renderDishes();
    } catch (error) {
        console.error(error);
        showNotification('Не удалось загрузить блюда');
    }
}

loadDishes();

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