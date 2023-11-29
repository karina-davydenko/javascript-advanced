import iconPrevPage from "../../../static/previous_page.svg"
import { DivComponent } from '../../common/div-component.js';
import iconNextPage from "../../../static/next_page.svg"
import "./pagination.css"

export class Pagination extends DivComponent {
  constructor(state) {
    super()
    this.state = state;
  }

  render() {
    this.el.classList.add('pagination__wrapper');
    this.el.innerHTML = `
      <div class="previous_page">
        <img src=${iconPrevPage} />
        <p>Предыдущая страница</p>
      </div>
      <div class="next_page">
        <p>Следующая страница</p>
        <img src=${iconNextPage} />
      </div>
    `
    this.el.querySelector('.previous_page').addEventListener('click', () => {
      if (this.state.page === 1) {
        return
      }
      this.state.page = this.state.page - 1
    })
    this.el.querySelector('.next_page').addEventListener('click', () => {
      if (this.state.page === this.state.countPages) {
        return
      }
      this.state.page = this.state.page + 1
    })

    return this.el
  }

}