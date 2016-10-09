import { ConsultAppPage } from './app.po';

describe('consult-app App', function() {
  let page: ConsultAppPage;

  beforeEach(() => {
    page = new ConsultAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
