import { AfroditeFrontendPage } from './app.po';

describe('afrodite.mobile App', () => {
  let page: AfroditeFrontendPage;

  beforeEach(() => {
    page = new AfroditeFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
