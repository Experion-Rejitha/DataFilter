import { DataFilterPage } from './app.po';

describe('data-filter App', function() {
  let page: DataFilterPage;

  beforeEach(() => {
    page = new DataFilterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
