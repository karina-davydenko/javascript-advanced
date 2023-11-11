import { DivComponent } from "../../../common/div-component";
import './search.css'

export class Search extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
  }

  render() {
    this.el.classList.add('search');
    this.el.innerHTML = `
      <div class="search__wraper">
        <img src="/static/search.svg" alt="Иконка поиска"/>
        <input
          type="text" 
          class="search__input" 
          value="${this.state.searchQuery ? this.state.searchQuery : ''}"
          placeholder="Найти книгу или автора...."/>
      </div>
      <button aria-label="Искать">
        <img src="/static/search-white.svg" alt="Иконка поиска" />
      </button>
    `;
    return this.el;
  }
}