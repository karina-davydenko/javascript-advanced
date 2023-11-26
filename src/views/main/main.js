import { AbstractView } from "../../common/view.js";
import onChange from "on-change";
import { Header } from "../../components/header/header..js";
import { Search } from "../../components/search/search.js";
import { CardList } from "../../components/cardList/card-list.js";

export class MainView extends AbstractView {
  state = {
    list: [],
    numFound: 0,
    loading: false,
    searchQuery: undefined,
    offset: 1,
  }
  constructor(appState) {
    super();
    this.appState = appState;
    this.appState = onChange(this.appState, this.appStateHook.bind(this));
    this.state = onChange(this.state, this.stateHook.bind(this));
    this.setTitle('Поиск книг');
  }

  destroy() {
    onChange.unsubscribe(this.appState);
    onChange.unsubscribe(this.state);
  }

  appStateHook(path) {
    if (path === 'favorites') {
      this.render()
    }
  }

  async stateHook(path) {
    if (path === 'searchQuery') {
      this.state.loading = true;
      const data = await this.loadList(this.state.searchQuery, this.state.offset)
      console.log(data);
      this.state.list = data.docs;
      this.state.numFound = data.total;
      this.state.loading = false;
    }

    if (path === 'list' || path === 'loading') {
      this.render()
    }

  }

  async loadList(q, offset) {
    const res = await fetch(`https://api.kinopoisk.dev/v1.4/movie/search?page=${offset}&limit=10&query=${q}`, {
      headers: {
        'accept': 'application/json',
        'X-API-KEY': '12497KZ-M7CM7P4-KCG4K05-9ARBZKZ'
      }
    });
    return res.json()
  }

  render() {
    const main = document.createElement('main');
    main.innerHTML = `<h1>Найдено - ${this.state.numFound}</h1>`
    main.append(new Search(this.state).render());
    main.append(new CardList(this.appState, this.state).render())
    this.app.innerHTML = '';
    this.app.append(main);
    this.renderHeader();
  }

  renderHeader() {
    const header = new Header(this.appState).render();
    this.app.prepend(header);
  }
}