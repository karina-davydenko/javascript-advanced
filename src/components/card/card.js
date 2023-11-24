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
        <img src="https://covers.openlibrary.org/b/olid/${this.cardState.cover_edition_key}-M.jpg" alt="Обложка книги"/>
      </div>
      <div class="card__info">
        <div class="card__tag">
          ${this.cardState.subject ? this.cardState.subject[0] : 'Жанр не задан'}
        </div>
        <div class="card__name">
          ${this.cardState.title}
        </div>
        <div class="card__author">
          ${this.cardState.author_name ? this.cardState.author_name[0] : 'Автор не задан'}
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