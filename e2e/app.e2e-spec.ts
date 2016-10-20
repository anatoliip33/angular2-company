import { CompanyPage } from './app.po';

describe('company App', function() {
  let page: CompanyPage;

  beforeEach(() => {
    page = new CompanyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
