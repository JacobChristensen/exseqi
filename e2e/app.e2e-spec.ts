import { ExseqiPage } from './app.po';

describe('exseqi App', function() {
  let page: ExseqiPage;

  beforeEach(() => {
    page = new ExseqiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
