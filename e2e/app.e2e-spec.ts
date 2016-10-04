import { MaxfieldGroupPage } from './app.po';

describe('maxfield-group App', function() {
  let page: MaxfieldGroupPage;

  beforeEach(() => {
    page = new MaxfieldGroupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
