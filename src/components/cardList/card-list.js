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
    if (this.state.searchQuery) {

      this.el.classList.add('card_list');
      const cardGrid = document.createElement('div');
      cardGrid.classList.add('card_grid');
      this.el.append(cardGrid);
      this.state.list.forEach(item => {
        cardGrid.append(new Card(this.appState, item).render())
      })

    }
    return this.el
  }

}