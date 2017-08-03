/* global describe, it, browser */

const expect = require('chai').expect;

describe('Scrambled Word Game Report App', () => {
  it('Should load with the right title', () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql('Scrambled Word Game');
  });
});
