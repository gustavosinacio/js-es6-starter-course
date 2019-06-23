import arrays from "./funcoes";
import { execPromise } from "./async-await";
import Api from "./axios";

class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor() {
    super();

    this.usuario = "gustavo";
  }

  logUsuario() {
    console.log(this.usuario);
  }
}

const MinhaLista = new TodoList();

const btnElement = document.querySelector("#app #novotodo");
btnElement.onclick = () => {
  MinhaLista.add("NOVO");
};

// MinhaLista.logUsuario();

// Operacoes em arrays ---------------------------------------
const arr = [1, 1, 2, 3, 5, 8, 12, 15, 19, 26, 27, 31, 34];
const newArr = arr.map((num, index) => {
  return num + index;
});

const sum = arr.reduce((total, next) => {
  return total + next;
});

const even = arr.filter(number => {
  return number % 2 === 0;
});

const odds = arr.filter(number => {
  return number % 2 === 1;
});

const find = arr.find(number => number === 31);

console.log(arr, newArr, sum, even, odds, find);

// Desestruturação ------------------
const usuario = {
  nome: "Gustavo",
  idade: 25,
  endereco: {
    cidade: "Brasilia",
    estado: "DF"
  }
};

const {
  nome,
  idade,
  endereco: { cidade, estado }
} = usuario;

function logNomeIdade({ nome, idade }) {
  console.log(`${nome}, ${idade}`);
}

console.log(`${nome} (${idade}) - ${cidade}, ${estado}`);
logNomeIdade(usuario);

function soma(...params) {
  return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3, 7, 9));

// arrays();

// Not working
// rest/spread operators ------------------------
// const { nome2, idade2, ...address } = usuario;
// console.log(nome2, idade2, address);

execPromise();

Api.getUserInfo("gustavosinacio");
Api.getUserInfo("diego3g");
Api.getUserInfo("diego3as");
