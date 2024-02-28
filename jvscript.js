const btnEncrypt = document.querySelector('#encrypt');
const btnDecrypt = document.querySelector('#decrypt');
const key = document.querySelector('#key');



const listLetters = ['a', 'á', 'â', 'ã', 'à', 'b', 'c', 'ç', 'd', 'e', 'é', 'ê', 'f', 'g', 'h', 'i', 'í', 'j', 'k', 'l', 'm', 'n', 'o', 'ó', 'ô', 'p', 'q', 'r', 's', 't', 'u', 'ú', 'v', 'w', 'x', 'y', 'z']

let newText = '';
btnEncrypt.addEventListener('click', () => {
      const textarea = document.querySelector('#text');
      const keyValue = Number(key.value);

      for (const letter of textarea.value) {
            if (!listLetters.includes(letter)) {
                  continue
            }
            const indexLetter = listLetters.findIndex((item) => item === letter)
            let indexNewLetter = indexLetter + keyValue

            if (indexNewLetter > 37) {
                  indexNewLetter -= 38;

            }

            newText += listLetters[indexNewLetter]
            textarea.value = newText
      }

      newText = '';


});

btnDecrypt.addEventListener('click', () => {
      const textarea = document.querySelector('#text');
      const keyValue = Number(key.value);

      for (const letter of textarea.value) {

            if (!listLetters.includes(letter)) {
                  continue
            }
            const indexLetter = listLetters.findIndex((item) => item === letter)
            let indexNewLetter = indexLetter - keyValue

            if (indexNewLetter < 0) {
                  indexNewLetter += 38;

            }

            newText += listLetters[indexNewLetter]
            textarea.value = newText
      }

      newText = '';


});


document.getElementById('copy').addEventListener('click', function () {

      var text = document.getElementById('text');
      text.select();
      document.execCommand('copy');

});


