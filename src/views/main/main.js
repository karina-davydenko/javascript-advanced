import { AbstractView } from "../../common/view.js";
import onChange from "on-change";
import { Header } from "../../components/header/header..js";
import { Search } from "../../components/search/search.js";
import { CardList } from "../../components/cardList/card-list.js";
import { Pagination } from "../../components/paginaton/pagination.js";

export class MainView extends AbstractView {
  state = {
    list: [],
    numFound: 0,
    loading: false,
    searchQuery: undefined,
    page: 1,
    countPages: 0,
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
      this.state.page = 1
      const data = await this.loadList(this.state.searchQuery, this.state.page)
      console.log(data);
      this.state.list = data.docs;
      this.state.numFound = data.total;
      this.state.countPages = data.pages;
      this.state.loading = false;
    }

    if (path === 'page') {
      this.state.loading = true;
      const data = await this.loadList(this.state.searchQuery, this.state.page)
      console.log(data);
      this.state.list = data.docs;
      this.state.numFound = data.total;
      this.state.countPages = data.pages;
      this.state.loading = false;
    }

    if (path === 'list' || path === 'loading') {
      this.render()
    }

  }

  async loadList(q, page) {
    const res = await fetch(`https://api.kinopoisk.dev/v1.4/movie/search?page=${page}&limit=9&query=${q}`, {
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
    if (this.state.searchQuery && !this.state.loading) {
      main.append(new Pagination(this.state).render());
    }
    this.app.innerHTML = '';
    this.app.append(main);
    this.renderHeader();
  }

  renderHeader() {
    const header = new Header(this.appState).render();
    this.app.prepend(header);
  }
}