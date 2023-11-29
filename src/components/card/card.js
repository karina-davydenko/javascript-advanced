import { DivComponent } from '../../common/div-component.js';
import './card.css';
import iconFavorites from "../../../static/favorites.svg"
import iconFavoritesWhite from "../../../static/favorites-white.svg"
import iconNotImg from "../../../static/not-img.svg"

export class Card extends DivComponent {
  constructor(appState, cardState) {
    super();
    this.appState = appState;
    this.cardState = cardState;
  }

  render() {
    this.el.classList.add('card');
    const existInFavorites = this.appState.favorites.find(input => input.id === this.cardState.id);
    this.el.innerHTML = `
      <div class="card__image">
        <img src=${this.cardState.poster ? this.cardState.poster.previewUrl : iconNotImg} alt="Обложка книги"/>
      </div>
      <div class="card__info">
        <div class="card__tag">
          ${this.cardState.genres[0] ? this.cardState.genres[0]['name'] : 'Жанр не задан'}
        </div>
        <div class="card__name">
          ${this.cardState.name ? this.cardState.name : ''}
        </div>
        <div class="card__year">
          ${this.cardState.year} год
        </div>
        <div class="card__footer">
          <button  class="button_add${existInFavorites ? ' button__active' : ''}">
            <img src="${existInFavorites ? iconFavorites : iconFavoritesWhite}" />
          </button>
        </div>
      </div>
    `
    this.el.querySelector('button').addEventListener('click', () => {
      if (existInFavorites) {
        this.appState.favorites = this.appState.favorites.filter(
          input => input.id !== this.cardState.id
        )
        return
      }
      this.appState.favorites.push(this.cardState)
    })

    return this.el
  }
}