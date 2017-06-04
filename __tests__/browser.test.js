import nightmare from 'nightmare';

describe('When visit the homepage', () => {
  it('welcomes the user', async () => {
    let page = nightmare().goto('http://localhost:3000');

    let text = await page.evaluate(() => document.body.textContent).end();

    expect(text).toContain('ThinkneticaBlog');
  });

  describe('When filling New Post form', () => {
    let editPostPage;

    beforeEach(() => {
      window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
      editPostPage = nightmare()
        .goto('http://localhost:3000')
        .click('a[href="/posts/new"]')
        .wait('input[name="title"]');
    });

    it('should warn about title maximum length', async () => {
      let page = editPostPage.insert('input[name="title"]', '1234567890abcde');
      let text = await page.evaluate(
        () => document.querySelector('div.ui.yellow.label').innerHTML
      ).end();

      expect(text).toContain(
        'Recommended title length is less than 15 characters'
      );
    });

    it('should return error about title minimum length', async () => {
      let page = editPostPage.insert('input[name="title"]', '12');

      let text = await page.evaluate(() => document.body.textContent).end();

      expect(text).toContain(
        'Title length have to be longer than 5 characters'
      );
    });
  });
});
