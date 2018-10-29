const assert = require('assert');

describe('Содержимое страниц', () => {
  it('содержит breadcrumbs и коммит', function () {
    return this.browser
      .url('/')
      .assertView('plain', '.page__wrapper');
  });
});
