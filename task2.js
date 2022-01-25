let input = document.querySelector('.form__input');
let isPoint = false;
let count = 0;

let inputPattern = /[\d+(\.)]/;

function cutLastLetter(word) {

    return word.value.substring(0, word.value.length - 1);

};

function lastInputLetter(word) {

    let inputValue = word;

    let lastWord = null;

    if (inputValue.length > 1) {

        lastWord = inputValue.substring(inputValue.length - 1);

        return lastWord;

    } else {

        return inputValue;

    };
};

input.addEventListener('input', (event) => {

    let word = lastInputLetter(input.value);

    if (!isPoint) {

        if (!inputPattern.test(word)) {

            input.classList.add('form__input-invalid');

            input.value = cutLastLetter(input);

        } else {

            input.classList.remove('form__input-invalid');

        };

    } else {

        if ((!inputPattern.test(word) || count === 2 || word === '.') && event.inputType !== 'deleteContentBackward') {

            input.classList.add('form__input-invalid');

            input.value = cutLastLetter(input);

        } else if (event.inputType === 'deleteContentBackward' && count > 0) {

            input.classList.remove('form__input-invalid');
            
            if (word === '') {

                isPoint = false;

                count = 0

            } else {
                
                count == 1 ? isPoint = false : true;

                count--;
                
            };


        } else {

            input.classList.remove('form__input-invalid');

            event.inputType === 'deleteContentBackward' ? isPoint = false : count++;

        }

    };

    if (word === '.') {

        input.classList.remove('form__input-invalid');

        isPoint = true;

    };

});
