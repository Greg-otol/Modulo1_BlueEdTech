const prompt = require("prompt-sync")();

function space() {
  console.log();
}

console.log(`
           Bluemer e o Projeto 1

Ao fim de mais um dia de trabalho exaustivo,
 Bluemer sai as pressas para chegar em casa
    e desenvolver seu primeiro projeto.
`);

space();

console.log(`Responda com 'S' ou 'N'!`);

space();

let questions = [
  "Vamos ajudar o Bluemer a desenvolver seu primeiro projeto? S/N: ",
  "Você pode ajudar o Bluemer a criar uma história? S/N: ",
  "Vamos ajudar o Bluemer a pensar em cinco perguntas? S/N: ",
  "Você consegue ajudar o Bluemer a somar as repostas positivas? S/N: ",
  "Vamos ajudar o Bluemer a criar cinco respostas? S/N: ",
];

let answers = [];

for (i = 0; i < questions.length; i++) {
  while (true) {
    space();
    answers[i] = prompt(questions[i]).toUpperCase();
    if (answers[i] !== "S" && answers[i] !== "N") {
      console.log(
        `'${answers[i]}' é uma resposta inválida, responda 'S' ou 'N'!`
      );
    } else {
      break;
    }
  }
}

space();

const yes = "S";
let sumYes = 0;

for (let i = 0; i < answers.length; i++) {
  if (answers[i] === yes) {
    sumYes++;
  }
}

if (sumYes === 0) {
  console.log(`${sumYes} Respostas sim: Você falha miseravelmente!`);
} else if (sumYes === 1 || sumYes == 2) {
  console.log(
    `${sumYes} Respostas sim: Você falha, mas ainda consegue fugir da situação!`
  );
} else if (sumYes === 3) {
  console.log(
    `${sumYes} Respostas sim: Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco!`
  );
} else if (sumYes === 4) {
  console.log(
    `${sumYes} Respostas sim: Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita!`
  );
} else if (sumYes === 5) {
  console.log(
    `${sumYes} Respostas sim: Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações!`
  );
}
