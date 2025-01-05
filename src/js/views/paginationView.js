import View from './View.js';
const icons = new URL('../../img/icons.svg', import.meta.url);

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  _errorMessage = 'No recipes found for your query. Please try again!';
  _message = '';

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1)
      return this._generateMarkupBtn('next', curPage);

    // Last page
    if (curPage === numPages && numPages > 1)
      return this._generateMarkupBtn('prev', curPage);

    // Other page
    if (curPage < numPages)
      return `${this._generateMarkupBtn(
        'prev',
        curPage
      )}${this._generateMarkupBtn('next', curPage)}`;

    // Page 1, and there are NO other pages
    return '';
  }

  _generateMarkupBtn(direction, curPage) {
    return `
          <button data-goto="${
            curPage + (direction === 'prev' ? -1 : 1)
          }" class="btn--inline pagination__btn--${direction}">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-${
      direction === 'prev' ? 'left' : 'right'
    }"></use>
            </svg>
            <span>Page ${curPage + (direction === 'prev' ? -1 : 1)}</span>
          </button>
      `;
  }

  addHandlerRender(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }
}

export default new PaginationView();
