function getMsg() {
  console.log("Está mensagem será exibida no console");
}

function setName(name) {
  console.log(`Olá, meu nome é ${name} e sou um dev frontend`);
}

function getStyle(array) {
  console.log(
    `Olá, meu nome é ${array[0]} e tenho ${array[1]} anos e meu estilo musical é ${array[2]}.`
  );
}

function getFilm(array) {
  console.log(
    `Não tenho um filme favorito mas gosto muito de ${array[0]} e uma música que gosto é ${array[1]}.`
  );
}

function getNumber() {
  console.log(3 * 3);
}

function getTruecaller(array) {
  if (array[0] === array[1]) {
    console.log("Verdadeiro");
  } else {
    console.log("Falso");
  }
}

getMsg();
setName("Eduardo");
getStyle(["Eduardo", 22, "Rock"]);
getFilm(["Kimetsu no yaiba - Infinit Train", "Hotel California"]);
getNumber();
getTruecaller(["Filme", "Idade"]);

// Atividade 3 - Algoritmo

function getArray() {
  for (let cont = 0; cont < 1; cont++) {
    let nomes = ["Eduardo", "Milena", "Joana", "Gustavo", "Jão"]; // Criação de um array recebendo 5 itens
    console.log(nomes);
    for (let cont = 0; cont < 1; cont++) {
      nomes.unshift("Juliana"); // Adicionando um nome ao inicio do array
      console.log(nomes);
      for (let cont = 0; cont < 1; cont++) {
        nomes.pop(); // Removendo um nome do final do array
        console.log(nomes);
        for (let cont = 0; cont < 1; cont++) {
          nomes.push("Rafael", "Lucas"); // Adiciona um ou mais nomes ao fim do array
          console.log(nomes);
          for (let cont = 0; cont < 1; cont++) {
            nomes.shift(); // Remove o primeiro nome do array
            console.log(nomes);
          }
        }
      }
    }
  }
}

function getSortarray() {
  let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];
  numbers.sort();
  console.log(numbers);
}

function getObjectme() {
  for (let cont = 0; cont < 1; cont++) {
    let aboutme = {
      idade: 22,
      autor: "Tolkien",
      genero: "Rock",
    };
    console.log(aboutme);
    for (let cont = 0; cont < 1; cont++) {
      aboutme.filme = "Spiderman - Aranhaverso";
      console.log(aboutme);
      for (let cont = 0; cont < 1; cont++) {
        delete aboutme.genero;
        console.log(aboutme);
      }
    }
  }
}

function getSignin() {
  let cadastro = [
    {
      nome: "João",
      idade: 22,
      telefone: 555,
      amigos: ["Thiago", "João", "Lucas", "Fernando", "Rafael"],
    },
    {
      nome: "Cesar",
      idade: 23,
      telefone: 545,
      amigos: ["Carlos", "João", "Lucas", "Fernando", "Rafael"],
    },
    {
      nome: "Gustavo",
      idade: 43,
      telefone: 413,
      amigos: ["Albert", "João", "Lucas", "Fernando", "Rafael"],
    },
    {
      nome: "Jão",
      idade: 20,
      telefone: 125,
      amigos: ["Salvador", "João", "Lucas", "Fernando", "Rafael"],
    },
    {
      nome: "Luan",
      idade: 33,
      telefone: 646,
      amigos: ["Jhow", "João", "Lucas", "Fernando", "Rafael"],
    },
  ];
  for (let cont = 0; cont < 5; cont++) {
    console.log(cadastro[cont].amigos[0]);
  }
}

getArray();
getSortarray();
getObjectme();
getSignin();
