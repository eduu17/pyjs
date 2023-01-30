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
