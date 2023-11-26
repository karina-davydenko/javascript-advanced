import { DivComponent } from '../../common/div-component.js';
import './card.css';
import iconFavorites from "../../../static/favorites.svg"
import iconFavoritesWhite from "../../../static/favorites-white.svg"

export class Card extends DivComponent {
  constructor(appState, cardState) {
    super();
    this.appState = appState;
    this.cardState = cardState;
  }

  render() {
    this.el.classList.add('card');
    const existInFavorites = this.appState.favorites.find(b => b.key === this.cardState.key);
    this.el.innerHTML = `
      <div class="card__image">
        <img src=${this.cardState.poster.previewUrl} alt="Обложка книги"/>
      </div>
      <div class="card__info">
        <div class="card__tag">
          ${this.cardState.genres ? this.cardState.genres[0]['name'] : 'Жанр не задан'}
        </div>
        <div class="card__name">
          ${this.cardState.name}
        </div>
        <div class="card__description">
          ${this.cardState.shortDescription}
        </div>
        <div class="card__year">
          ${this.cardState.year} год
        </div>
        <div class="card__footer">
          <button  class="button_add ${existInFavorites ? 'button__active' : ''}">
            <img src="${existInFavorites ? iconFavorites : iconFavoritesWhite}" />
          </button>
        </div>
      </div>
    `
    this.el.querySelector('button').addEventListener('click', () => {
      if (existInFavorites) {
        this.appState.favorites = this.appState.favorites.filter(
          b => b.key !== this.cardState.key
        )
        return
      }
      this.appState.favorites.push(this.cardState)
    })

    return this.el
  }
}