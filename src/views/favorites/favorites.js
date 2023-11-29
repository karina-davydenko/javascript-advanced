import { AbstractView } from "../../common/view.js";
import onChange from "on-change";
import { Header } from "../../components/header/header..js";
import { CardList } from "../../components/cardList/card-list.js";

export class FavoritesView extends AbstractView {

  constructor(appState) {
    super();
    this.appState = appState;
    this.favorites = { list: this.appState.favorites }
    this.appState = onChange(this.appState, this.appStateHook.bind(this));
    this.setTitle('Избранное');
  }

  destroy() {
    onChange.unsubscribe(this.appState);
  }

  appStateHook(path) {
    if (path === 'favorites') {
      this.render()
    }
  }

  render() {
    const main = document.createElement('main');
    main.innerHTML = '<h1>Избранное</h1>';
    main.append(new CardList(this.appState, this.favorites).render())
    console.log(this.favorites)
    this.app.innerHTML = '';
    this.app.append(main);
    this.renderHeader()
  }

  renderHeader() {
    const header = new Header(this.appState).render();
    this.app.prepend(header);
  }
}