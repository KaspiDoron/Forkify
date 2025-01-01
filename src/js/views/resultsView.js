import View from './View.js';

const icons = new URL('../../img/icons.svg', import.meta.url);

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query. Please try again!';
  _message = '';

  _generateMarkup() {
    return this._data.map(data => this._generateMarkupPreview(data)).join('');
  }
  _generateMarkupPreview(results) {
    return `
          <li class="preview">
            <a class="preview__link" href="#${results.id}">
              <figure class="preview__fig">
                <img src="${results.image}" alt="${results.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${results.title}</h4>
                <p class="preview__publisher">${results.publisher}</p>
              </div>
            </a>
          </li>
    `;
  }
}

id: '664c8f193e7aa067e94e8297';
image: 'http://forkify-api.herokuapp.com/images/100111309d9.jpg';
publisher: 'All Recipes';
title: 'Double Crust Stuffed Pizza';

export default new ResultsView();
