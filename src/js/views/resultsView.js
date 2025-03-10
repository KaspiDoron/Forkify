import View from './View.js';
import previewView from './previewView.js';
const icons = new URL('../../img/icons.svg', import.meta.url);

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query. Please try again!';
  _message = '';

  _generateMarkup() {
    return this._data.map(data => previewView.render(data, false)).join('');
  }
}

export default new ResultsView();
