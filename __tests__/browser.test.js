import nightmare from 'nightmare';

describe('When visit the homepage', () => {
  it('welcomes the user', async () => {
    let page = nightmare().goto('http://localhost:3000');

    let text = await page.evaluate(() => document.body.textContent).end();

    expect(text).toContain('ThinkneticaBlog');
  });

  describe('When edit the post', () => {
    let editPostPage;

    beforeEach(() => {
      window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
      editPostPage = nightmare()
        .goto('http://localhost:3000')
        // .click('a[href="/posts/1"]')
        .click('a[href="/posts/new"]')
        // .wait('a[href="/posts/1/edit"]')
        // .click('a[href="/posts/1/edit"]')
        .wait('input[name="title"]');
    });

    // it('page should contains selector', async () => {
    it('should warn about title maximum length', async () => {
      let page = editPostPage.insert('input[name="title"]', '1234567890abcde');

      // let text = await page.evaluate(() => document.body.textContent).end();

      let text = await page.evaluate(
        () => document.querySelector('div.ui.yellow.label').innerHTML
      ).end();
      // expect(text.find('div.ui.yellow.label').exists()).to.be(true);
      expect(text).toContain(
        'Recommended title length is less than 15 characters'
      );
    });

    // it('page should contains selector', async () => {
    it('should return error about title minimum length', async () => {
      let page = editPostPage.insert('input[name="title"]', '12');

      let text = await page.evaluate(() => document.body.textContent).end();

      // let text = await page.evaluate(
      //   () => document.querySelector('div.ui.yellow.label')
      // ).end();
      // expect(text.find('a[href="/posts/1/edit"]').exists()).to.be(true);
      expect(text).toContain(
        'Title length have to be longer than 5 characters'
      );
    });

    // it('page should contains selector', async () => {
    //   let page = editPostPage
    //     .insert('input[name="title"]', 'ad')
    //
    //   // let text = await page.evaluate(() => document.body.textContent).end();
    //
    //   let text = await page.evaluate(
    //     () => document.querySelector('div.ui.red.label')
    //   ).end();
    //   // expect(text.find('a[href="/posts/1/edit"]').exists()).to.be(true);
    //   expect(text).toContain('Title');
    // });

    // it('should validate title length', async () => {
    //   let page = editPostPage
    //     .insert('input[name="title"]', 'ad')
    //
    //   let error = await page.evaluate(
    //     () => document.querySelector('div.ui.red.label')
    //   ).end();
    //
    //   expect(error).toContain('Title length have to be longer than 5 characters');
    // });
  });
});
