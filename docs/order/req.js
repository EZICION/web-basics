function showNotification(text) {
    const old = document.querySelector('.notification');
    if (old) {
        old.remove();
    }

    const box = document.createElement('div');
    box.classList.add('notification');

    const message = document.createElement('p');
    message.textContent = text;

    const okBtn = document.createElement('button');
    okBtn.type = 'button';
    okBtn.textContent = 'Окей 👌';
    okBtn.classList.add('notification_btn');
    okBtn.addEventListener('click', function () {
        box.remove();
    });

    box.append(message, okBtn);
    document.body.append(box);
}

const orderForm = document.querySelector('#order_m');

orderForm.addEventListener('submit', function (event) {
    const hasSoup = document.querySelector('#soup_input').value !== '';
    const hasMain = document.querySelector('#main_input').value !== '';
    const hasStarter = document.querySelector('#starter_input').value !== '';
    const hasDrink = document.querySelector('#drink_input').value !== '';
    const hasDessert = document.querySelector('#dessert_input').value !== '';

    let message = '';

    if (!hasSoup && !hasMain && !hasStarter && !hasDrink && !hasDessert) {
        message = 'Ничего не выбрано. Выберите блюда для заказа';
    } else if (hasMain || (hasSoup && hasStarter)) {
        if (!hasDrink) {
            message = 'Выберите напиток';
        }
    } else if (hasSoup) {
        message = 'Выберите главное блюдо/салат/стартер';
    } else if (hasStarter) {
        message = 'Выберите суп или главное блюдо';
    } else {
        message = 'Выберите главное блюдо';
    }

    if (message !== '') {
        event.preventDefault();
        showNotification(message);
    }
});