const prompt = require("prompt-sync")();
const chalk = require("chalk"); // npm install chalk@4.1.2 # Essa é a versão instalada no projeto! #

console.log(
  chalk.yellow(`
                  Sobre o Jogo

Este é um jogo sobre a rotina diária de um Bluemer.
Você será o responsável pelas escolhas que percorrerá o rumo da história.
Ajude o Blumer a chegar ao nível MASTER e assim chegar ao final da história!
`)
);

let player;
let studying = 0;
let recoverEnergy;
let continuing;

let status = {
  energy: 100,
  money: 100,
  day: 1,
  hours: 6,
  zero: "",
};

let certificates = [
  "Certificado: Desenvolvedor Júnior - Javascript, HTML5 e CSS3.",
  "Certificado: Desenvolvedor Pleno - Javascript, NodeJS e Express.",
  "Certificado: Desenvolvedor Sênior - Javascript, NodeJS e ReactJS.",
  "Certificado: Desenvolvedor MASTER - Javascript, NodeJS, HTML5, CSS3, Express e ReactJS.",
];

function endCertificates() {
  for (let i = 0; i < certificates.length; i++) {
    let text = certificates[i];
    if (
      text == "Certificado: Desenvolvedor Júnior - Javascript, HTML5 e CSS3." &&
      studying == 3
    ) {
      console.log(`
Excelente escolha!
Ganhei um certificado por ter finalizado os estudos nível 1!`);
      console.log(certificates[i]);
    } else if (
      text ==
        "Certificado: Desenvolvedor Pleno - Javascript, NodeJS e Express." &&
      studying == 5
    ) {
      console.log(`
Excelente escolha!
Ganhei um certificado por ter finalizado os estudos nível 2!`);
      console.log(certificates[i]);
    } else if (
      text ==
        "Certificado: Desenvolvedor Sênior - Javascript, NodeJS e ReactJS." &&
      studying == 8
    ) {
      console.log(`
Excelente escolha!
Ganhei um certificado por ter finalizado os estudos nível 3!`);
      console.log(certificates[i]);
    } else if (
      text ==
        "Certificado: Desenvolvedor MASTER - Javascript, NodeJS, HTML5, CSS3, Express e ReactJS." &&
      studying == 10
    ) {
      console.log(`
Excelente escolha!
Ganhei um certificado por ter finalizado os estudos nível 4!`);
      console.log(certificates[i]);
    }
  }
}

function statusGame() {
  if (status.hours < 10) {
    status.zero = "0";
  } else status.zero = "";
  console.log(
    chalk.green(`
Energia: ${status.energy}/100              Dinheiro: R$${status.money}
    
Dia: ${status.day}                        Hora: ${status.zero}${status.hours}:00
    `)
  );
}

function levelStudy() {
  if (studying == 3) {
    studying = 4;
    console.log();
    console.log(
      chalk.blue(`
Obrigado!   
Agora sou Programador Júnior e já posso trabalhar!
      `)
    );
    console.log();
    continuing = prompt(chalk.cyan("Aperte ENTER para continuar: "));
  } else if (studying == 5) {
    studying = 6;
    console.log();
    console.log(
      chalk.blue(`
Obrigado!
Agora sou Programador Pleno e terei um aumento!    
    `)
    );
    console.log();
    continuing = prompt(chalk.cyan("Aperte ENTER para continuar: "));
  } else if (studying == 8) {
    studying = 9;
    console.log();
    console.log(
      chalk.blue(`
Obrigado!
Agora sou Programador Sênior e terei um aumento!    
    `)
    );
    console.log();
    continuing = prompt(chalk.cyan("Aperte ENTER para continuar: "));
  } else if (studying == 10) {
    studying = 11;
    console.log();
    console.log(
      chalk.blue(`
Obrigado!
Agora sou Programador Master e terei um aumento!    
    `)
    );

    console.log();
    continuing = prompt(chalk.cyan("Aperte ENTER para continuar: "));
  }
}

function workingMenu() {
  if (studying < 2) {
    console.log();
    console.log(
      chalk.red(`
Para trabalhar, é precisar chegar ao nível Júnior nos estudos!
Inicie os estudos para chegar ao nível indicado e conseguir seu primeiro trabalho.
    `)
    );
    console.log();
    continuing = prompt(chalk.cyan("Aperte ENTER para continuar: "));
  } else if (status.energy < 80 || status.hours > 10) {
    console.log();
    console.log(
      chalk.red("Não tenho energia ou tempo suficiente para trabalhar!")
    );
    console.log();
    continuing = prompt(chalk.cyan("Aperte ENTER para voltar ao MENU: "));
  } else {
    if (studying == 4) {
      status.hours = status.hours + 8;
      status.money = status.money + 500;
      status.energy = status.energy - 60;
      console.log();
      console.log("Codando...");
      console.log();
      continuing = prompt(chalk.cyan("Aperte ENTER para continuar: "));
      console.log();
      console.log(
        chalk.blue("Obaaa, recebi R$500 no trabalho de Programador Júnior!")
      );
      console.log();
      continuing = prompt(chalk.cyan("Aperte ENTER para continuar: "));
    } else if (studying == 6) {
      status.hours = status.hours + 8;
      status.money = status.money + 1000;
      status.energy = status.energy - 60;
      console.log();
      console.log("Codando...");
      console.log();
      continuing = prompt(chalk.cyan("Aperte ENTER para continuar: "));
      console.log();
      console.log(
        chalk.blue("Obaaa, recebi R$1000 no trabalho de Programador Pleno!")
      );
      console.log();
      continuing = prompt(chalk.cyan("Aperte ENTER para continuar: "));
    } else if (studying == 9) {
      status.hours = status.hours + 8;
      status.money = status.money + 2000;
      status.energy = status.energy - 60;
      console.log();
      console.log("Codando...");
      console.log();
      continuing = prompt(chalk.cyan("Aperte ENTER para continuar: "));
      console.log();
      console.log(
        chalk.blue("Obaaa, recebi R$2000 no trabalho de Programador Sênior!")
      );
      console.log();
      continuing = prompt(chalk.cyan("Aperte ENTER para continuar: "));
    } else if (studying >= 11) {
      status.hours = status.hours + 8;
      status.money = status.money + 5000;
      status.energy = status.energy - 60;
      console.log();
      console.log("Codando...");
      console.log();
      continuing = prompt(chalk.cyan("Aperte ENTER para continuar: "));
      console.log();
      console.log(
        chalk.blue(`
Obaaa, recebi R$5000 no trabalho de Programador MASTER!
Obrigado!
Cheguei ao maior salário e já posso pagar meu ISA!

Chegamos ao fim do jogo.
      `)
      );
      console.log();
      continuing = prompt(chalk.cyan("Aperte ENTER para finalizar! "));
    }
  }
}

function studyingMenu() {
  if (status.energy < 30 || status.hours > 19) {
    console.log();
    console.log(
      chalk.red("Não tenho energia ou tempo suficiente para estudar!")
    );
    console.log();
    continuing = prompt(chalk.cyan("Aperte ENTER para continuar: "));
  } else {
    studying++;
    status.hours = status.hours + 3;
    status.energy = status.energy - 30;
    console.log();
    console.log(`
    Estudando...
    Váriaveis... Condicionais... Laços de repetição... etc...
    `);
    console.log();
    continuing = prompt(chalk.cyan("Aperte ENTER para continuar: "));
  }
}

function energyMenu() {
  console.log(
    chalk.yellow(`
  Para recuperar energia, você pode:
  
  [1] Papar
  [2] Energético
  [3] Descansar
  `)
  );
  console.log();

  while (true) {
    recoverEnergy = prompt(chalk.magenta("Escolha uma opção: "));
    if (
      (recoverEnergy !== "1" &&
        recoverEnergy !== "2" &&
        recoverEnergy !== "3") ||
      recoverEnergy == ""
    ) {
      console.log(chalk.red('Opção inválida, digite "1", "2" ou "3"!'));
    } else break;
  }

  if (status.hours >= 23) {
    console.log(
      chalk.red(`
É hora de dormir!
Amanhã é um novo dia cheio de tarefas à executar!   
    `)
    );
    console.log();
    continuing = prompt(chalk.cyan("Aperte ENTER para continuar: "));
  } else if (recoverEnergy == 3) {
    console.log();
    console.log("Descansando...");
    console.log();
    status.energy = status.energy + 20;
    status.hours = status.hours + 3;
    continuing = prompt(chalk.cyan("Aperte ENTER para continuar: "));
  } else if (status.money <= 19) {
    console.log();
    console.log(chalk.red("Não tenho dinheiro suficiente para pagar!"));
    console.log();
    continuing = prompt(chalk.cyan("Aperte ENTER para continuar: "));
  } else {
    if (recoverEnergy == 1) {
      console.log();
      console.log("Papando...");
      console.log();
      status.money = status.money - 20;
      status.energy = status.energy + 20;
      status.hours = status.hours + 2;
      continuing = prompt(chalk.cyan("Aperte ENTER para continuar: "));
    } else if (recoverEnergy == 2) {
      console.log();
      console.log("Tomando energético...");
      console.log();
      status.money = status.money - 20;
      status.energy = status.energy + 20;
      status.hours = status.hours + 2;
      continuing = prompt(chalk.cyan("Aperte ENTER para continuar: "));
    } else if (status.energy == 100) {
      console.log();
      console.log(chalk.red("Minha energia já está 100%!"));
      console.log();
      continuing = prompt(chalk.cyan("Aperte ENTER para continuar: "));
    }
  }
}
function sleepingMenu() {
  if (status.hours < 20) {
    console.log();
    console.log(chalk.blue("Muito cedo para dormir, espere até as 20:00hs"));
    console.log();
    continuing = prompt(chalk.cyan("Aperte ENTER para continuar: "));
  } else {
    console.log();
    console.log("zZzZzZz Dormindo... zZzZzZz");
    console.log();
    continuing = prompt(chalk.cyan("Aperte ENTER para continuar: "));
    status.day++;
    status.hours = 6;
    status.energy = 100;
  }
}

function validatePlayer() {
  while (true) {
    player = prompt(chalk.magenta("Escolha uma opção: "));
    if (
      (player !== "0" &&
        player !== "1" &&
        player !== "2" &&
        player !== "3" &&
        player !== "4") ||
      player == ""
    ) {
      console.log(
        chalk.red('Opção inválida, digite "1", "2", "3", "4" ou "0"!')
      );
    } else break;
  }
}

function event1() {
  while (true) {
    let computer = Math.floor(Math.random() * 6);
    if (computer == 2 && status.money >= 300) {
      console.log();
      console.log(chalk.red("É um assalto, passa a grana!!!"));
      console.log(
        chalk.blue(
          "Essa não, fui assaltado enquanto voltava do restaurante e me levaram R$250!"
        )
      );
      console.log();
      continuing = prompt(chalk.cyan("Aperte ENTER para continuar: "));
      status.money = status.money - 250;
    } else break;
  }
}

function event2() {
  while (true) {
    let computer = Math.floor(Math.random() * 6);
    if (computer == 4 && status.money >= 1600) {
      console.log();
      console.log(
        chalk.red(
          "Essa não, computador com defeito e terai que levar para a assistência!"
        )
      );
      console.log("O reparo do computador custou R$1500,00.");
      console.log();
      continuing = prompt(chalk.cyan("Aperte ENTER para continuar: "));
      status.money = status.money - 1500;
    } else break;
  }
}

function endOfGame() {
  if (studying >= 12 && status.money >= 6000) {
    process.exit();
  }
}

let startGame = prompt(chalk.cyan("Aperte ENTER para iniciar o jogo!"));
console.clear();
while (true) {
  statusGame();
  endCertificates();
  levelStudy();

  console.log(
    chalk.yellow(`
Menu Principal:

[1] Trabalhar
[2] Estudar
[3] Restaurar energia
[4] Dormir
[0] Sair do jogo 
`)
  );

  validatePlayer();

  if (player == "1") {
    workingMenu();
    event2();
    endOfGame();
  } else if (player == "2") {
    studyingMenu();
  } else if (player == "3") {
    statusGame();
    energyMenu();
    event1();
  } else if (player == "4") {
    sleepingMenu();
  } else if (player == "0") {
    console.log();
    console.log("Jogo encerrado pelo jogador!");
    console.log();
    break;
  }
  if (status.hours >= 24) {
    status.hours = 6;
    status.day++;
  } else if (status.energy >= 100) {
    status.energy = 100;
  } else if (status.energy <= 0) {
    status.energy = 0;
  }
}
