import { DivComponent } from "../../common/div-component.js";
import './search.css'
import iconSearch from "../../../static/search.svg"
import iconSearchWhite from "../../../static/search-white.svg"

export class Search extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
  }

  search() {
    const value = this.el.querySelector('input').value
    this.state.searchQuery = value;
  }

  render() {
    this.el.classList.add('search');
    this.el.innerHTML = `
      <div class="search__wraper">
        <img src="${iconSearch}" alt="Иконка поиска"/>
        <input
          type="text" 
          class="search__input" 
          value="${this.state.searchQuery ? this.state.searchQuery : ''}"
          placeholder="Найти фильм или сериал...."/>
      </div>
      <button aria-label="Искать">
        <img src="${iconSearchWhite}" alt="Иконка поиска" />
      </button>
    `;
    this.el.querySelector('button').addEventListener('click', this.search.bind(this));
    this.el.querySelector('input').addEventListener('keydown', (event) => {
      if (event.code === 'Enter') {
        this.search();
      }
    })
    return this.el;
  }
}