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

MinhaLista.logUsuario();
