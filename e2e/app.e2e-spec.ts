import { MamasConnectPage } from './app.po';

describe('mamas-connect App', () => {
  let page: MamasConnectPage;

  beforeEach(() => {
    page = new MamasConnectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
