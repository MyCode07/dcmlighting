import { maskInputs } from "../static/inputmask.js";

document.addEventListener('DOMContentLoaded', function () {

    const countrySelect = document.getElementById('country-select');
    const selectedCountry = countrySelect.querySelector('.selected-country');
    const countryDropdown = countrySelect.querySelector('.country-dropdown');
    const phoneInput = document.getElementById('phone');
    const validationMessage = document.getElementById('validation-message');
    const submitBtn = document.getElementById('submit-btn');
    const result = document.getElementById('result');

    let currentCountry = {
        code: '+7',
        flag: '🇷🇺',
        mask: '+7 (999) 999-99-99',
        name: 'Россия'
    };

    maskInputs('+7 (999) 999-99-99', '.phone-input')


    // Показ/скрытие выпадающего списка стран
    selectedCountry.addEventListener('click', function () {
        countryDropdown.style.display = countryDropdown.style.display === 'block' ? 'none' : 'block';
    });

    // Выбор страны из списка
    countryDropdown.querySelectorAll('.country-option').forEach(option => {
        option.addEventListener('click', function () {
            currentCountry = {
                code: this.getAttribute('data-code'),
                flag: this.getAttribute('data-flag'),
                mask: this.getAttribute('data-mask'),
                name: this.querySelector('.country-name').textContent
            };

            selectedCountry.innerHTML = `
                        <span class="flag">${currentCountry.flag}</span>
                        <span class="code">${currentCountry.code}</span>
                    `;

            phoneInput.placeholder = currentCountry.mask;
            countryDropdown.style.display = 'none';

            // Очищаем поле ввода при смене страны
            phoneInput.value = '';
            validationMessage.textContent = '';
            validationMessage.className = 'validation-message';
            result.style.display = 'none';

            maskInputs(this.getAttribute('data-mask'), '.phone-input')
        });
    });

    // Закрытие выпадающего списка при клике вне его
    document.addEventListener('click', function (e) {
        if (!countrySelect.contains(e.target)) {
            countryDropdown.style.display = 'none';
        }
    });


    // Валидация номера телефона
    function validatePhone() {
        const numbers = phoneInput.value.replace(/\D/g, '');
        const expectedLength = currentCountry.mask.match(/9/g).length;

        console.log('expectedLength', expectedLength);


        if (numbers.length === 0) {
            validationMessage.textContent = 'Введите номер телефона';
            validationMessage.className = 'validation-message invalid';
            return false;
        } else if (numbers.length < expectedLength) {
            validationMessage.textContent = `Номер слишком короткий. Ожидается ${expectedLength} цифр`;
            validationMessage.className = 'validation-message invalid';
            return false;
        } else if (numbers.length > expectedLength) {
            validationMessage.textContent = `Номер слишком длинный. Ожидается ${expectedLength} цифр`;
            validationMessage.className = 'validation-message invalid';
            return false;
        } else {
            validationMessage.textContent = '✓ Номер телефона корректен';
            validationMessage.className = 'validation-message valid';
            return true;
        }

        if (/[_]/.test(input.value) || input.value.length < 18) {
            formAddError(input);
            error++;
        }
    }

    // Обработка отправки формы
    submitBtn.addEventListener('click', function () {
        if (validatePhone()) {
            const numbers = phoneInput.value.replace(/\D/g, '');

            document.getElementById('result-number').textContent = currentCountry.code + ' ' + numbers;
            document.getElementById('result-country').textContent = currentCountry.name;
            document.getElementById('result-code').textContent = currentCountry.code;

            result.style.display = 'block';
        }
    });

    // Инициализация
    phoneInput.placeholder = currentCountry.mask;
});