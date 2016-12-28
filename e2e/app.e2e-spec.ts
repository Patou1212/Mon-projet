import { MonProjetProPage } from './app.po';

describe('mon-projet-pro App', function() {
  let page: MonProjetProPage;

  beforeEach(() => {
    page = new MonProjetProPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
