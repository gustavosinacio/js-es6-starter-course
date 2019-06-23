import Api from "./axios";
import api from "./api";
class App {
  constructor() {
    this.users = [];

    this.formEl = document.querySelector("#app form");
    this.inputEl = document.querySelector("#app form input");
    this.listEl = document.querySelector("#app #git-user-list");

    this.registerHandlers();
  }

  registerHandlers() {
    this.formEl.onsubmit = event => this.addUser(event);
  }

  setLoading(loading = true) {
    if (loading === true) {
      let loadingEl = document.createElement("span");
      loadingEl.appendChild(document.createTextNode("Carregando"));
      loadingEl.setAttribute("id", "loading");

      this.formEl.appendChild(loadingEl);
    } else {
      document.getElementById("loading").remove();
    }
  }

  async addUser(event) {
    event.preventDefault();

    this.setLoading();

    const userInput = this.inputEl.value;
    if (userInput.value === 0) return;

    try {
      const response = await api.get(`/users/${userInput}`);

      console.log(response);

      const { name, bio, avatar_url, html_url } = response.data;

      this.users.push({
        name,
        bio,
        avatar_url,
        html_url
      });

      this.inputEl.value = "";
      this.render();
    } catch (err) {
      alert("Usuário não encontrado.");
    } finally {
      this.setLoading(false);
    }
  }

  render() {
    this.listEl.innerHTML = "";

    this.users.forEach(user => {
      let imgEl = document.createElement("img");
      imgEl.setAttribute("src", user.avatar_url);

      let nameEl = document.createElement("strong");
      nameEl.appendChild(document.createTextNode(user.name));

      let bioEl = document.createElement("p");
      bioEl.appendChild(document.createTextNode(user.bio));

      let linkEl = document.createElement("a");
      linkEl.setAttribute("target", "_blank");
      linkEl.setAttribute("href", user.html_url);
      linkEl.appendChild(document.createTextNode("Github"));

      let listItemEl = document.createElement("li");
      listItemEl.appendChild(imgEl);
      listItemEl.appendChild(nameEl);
      listItemEl.appendChild(bioEl);
      listItemEl.appendChild(linkEl);

      this.listEl.appendChild(listItemEl);
    });
  }
}

// Api.getUserInfo("gustavosinacio");

new App();
