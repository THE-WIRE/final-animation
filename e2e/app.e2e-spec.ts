import { FinalAnimationPage } from './app.po';

describe('final-animation App', () => {
  let page: FinalAnimationPage;

  beforeEach(() => {
    page = new FinalAnimationPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
