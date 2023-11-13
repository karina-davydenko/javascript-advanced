import { DivComponent } from "../../common/div-component";
import './card-list.css'

export class CardList extends DivComponent {
  constructor(appState, state) {
    super()
    this.state = state;
    this.appState = appState;
  }

  render() {
    if (this.state.loading) {
      this.el.innerHTML = `<div class="card_list__loader">Загрузка...</div>`;
      return this.el
    }
    this.el.classList.add('card_list');
    this.el.innerHTML = `
      <h1>Найдено книг - ${this.state.list.length}</h1>
      <div class="cards">
       ${this.state.list.map(book => `
        <div class="card"
          <p>${book.title}</p>
          <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg"/>
        </div>
        `).join('')}
      </div>
    `
    return this.el
  }

}