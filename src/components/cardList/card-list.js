import { DivComponent } from "../../common/div-component.js";
import { Card } from "../card/card.js";
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
    this.el.innerHTML = `<h1>Найдено книг - ${this.state.numFound}</h1>`
    this.state.list.forEach(book => {
      this.el.append(new Card(this.appState, book).render())
    })
    return this.el
  }

}