const assert = require('assert');

describe('Содержимое страницы', () => {
  it('основное окно', function () {
    return this.browser
      .url('/')
      .assertView('plain', '.page__wrapper');
  });
  it('popup circle', function () {
    return this.browser
      .url('/')
      .element('.devices__panel:first-child')
      .click()
      .assertView('plain', '.modal_open');
  });
  it('popup sun', function () {
    return this.browser
      .url('/')
      .element('.panel_lamp:nth-child(2)')
      .click()
      .assertView('plain', '.modal_open');
  });
  it('popup temp', function () {
    return this.browser
      .url('/')
      .element('.panel_temp:nth-child(4)')
      .click()
      .assertView('plain', '.modal_open');
  });
  it('popup temp click', function () {
    return this.browser
      .url('/')
      .element('.panel_temp:nth-child(4)')
      .click()
      .element('.modal__filter-item_temp:first-child')
      .click()
      .assertView('plain', '.modal_open');
  });

  it('popup temp hover', function () {
    return this.browser
      .url('/')
      .element('.panel_temp:nth-child(4)')
      .click()
      .moveToObject('.modal__filter-item_temp:first-child', 10, 10)
      .assertView('plain', '.modal_open');
  });
});
