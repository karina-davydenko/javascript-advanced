import { DivComponent } from "../../common/div-component.js";
import './header.css'
import iconSearch from "../../../static/search.svg"
import iconLogo from "../../../static/logo.svg"
import iconFavorites from "../../../static/favorites.svg"

export class Header extends DivComponent {
  constructor(appState) {
    super()
    this.appState = appState;
  }

  render() {
    this.el.classList.add('header');
    this.el.innerHTML = `
      <div>
        <img src="${iconLogo}" alt="Логотип"/>
      </div>
      <div class="menu">
        <a class="menu__item" href="#">
          <img src="${iconSearch}" alt="Поиск иконка"/>
          Поиск
        </a>
        <a class="menu__item" href="#favorites">
          <img src="${iconFavorites}" alt="Избранное иконка"/>
          Избранное
          <div class="menu__counter">
            ${this.appState.favorites.length}
          </div>
        </a>
      </div>
    `
    return this.el
  };
}