//
const inp = document.getElementById('inp');
const word = document.getElementById('word');
const bt = document.getElementById('bt');
const txt = document.getElementById('txt');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const description = document.getElementById('description');

//
const tg = document.getElementById('tg');
tg.addEventListener('click', () => {
  tg.classList.add('tgColor');
  setTimeout(() => {
    tg.classList.remove('tgColor');
  }, 1000);
});

//
function theToggle() {
  const body = document.querySelector('body');
  body.classList.toggle('mainBackgroundDark');
}

//
const theVoid = {
  inpValue: (inp.value = ''),
  word: (word.innerHTML = ''),
  h2: (h2.innerHTML = ''),
  txt: (txt.innerHTML = ''),
  h3: (h3.innerHTML = ''),
  description: (description.innerHTML = ''),
};

//
fetch('/json/info.json')
  .then(data => data.json())
  .then(data => {
    // prevent forbidden words
    inp.addEventListener('keyup', () => {
      for (let i = 0; i < data.forbiddenWords.length; i++) {
        if (inp.value.toLowerCase() === data.forbiddenWords[i]) {
          inp.value = '';
          word.innerHTML = data.forbiddenTxt;
          break;
        } else {
          word.innerHTML = inp.value;
        }
      }
    });

    // Disable spacebar
    inp.addEventListener('keypress', event => {
      if (event.key === ' ') {
        event.preventDefault();
        word.innerHTML = data.spacebar;
      }
    });

    // Blade Runner monologue
    const bladeRunner = () => {
      h2.innerHTML = data.bladeRunnerHeading;
      const str = data.bladeRunner;
      return (txt.innerHTML = str.replaceAll('xxxx', inp.value));
    };

    // Mandalorian
    const mandalorian = () => {
      h2.innerHTML = data.mandalorianHeading;
      const str = data.mandalorian;
      return (txt.innerHTML = str.replaceAll('xxxx', inp.value));
    };

    // Ghost In the Shell
    const ghostInTheShell = () => {
      h2.innerHTML = data.ghostInTheShellHeading;
      const str = data.ghostInTheShell;
      return (txt.innerHTML = str.replaceAll('xxxx', inp.value));
    };

    // The Matrix
    const matrix = () => {
      h2.innerHTML = data.matrixHeading;
      const str = data.matrix;
      return (txt.innerHTML = str.replaceAll('xxxx', inp.value));
    };

    // Set heading and description
    bt.addEventListener('click', () => {
      for (let i = 0; i < data.savedWords.length; i++) {
        if (inp.value.toLowerCase() === data.savedWords[i]) {
          //
          h3.innerHTML = data.savedWords[i].toUpperCase();
          description.innerHTML = data.desc[i];
          break;
        } else {
          theVoid.h3;
          theVoid.description;
        }
      }
    });

    // Set final text
    bt.addEventListener('click', () => {
      if (inp.value !== '') {
        //
        const quotes = [bladeRunner, mandalorian, ghostInTheShell, matrix];
        quotes[Math.floor(Math.random() * quotes.length)]();

        //
        theVoid.inpValue;
        theVoid.word;
      } else {
        word.innerHTML = data.typeWord;
        theVoid.h2;
        theVoid.txt;
        theVoid.h3;
        theVoid.description;
      }
    });
  });
