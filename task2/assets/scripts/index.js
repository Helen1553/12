const result = document.querySelector('.paragraph');
const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

const getRandomWord = () => {
    let randomWord = '';

    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        randomWord += alphabet[randomIndex];
    }
    result.innerHTML = randomWord;
}

const clickFunction = () => {
    const click = document.getElementById('click');

}
click.addEventListener('click', getRandomWord);

//randomWordFunction();
