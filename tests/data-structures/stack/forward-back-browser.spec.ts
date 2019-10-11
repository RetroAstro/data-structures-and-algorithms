import { expect } from 'chai'
import { ForwardBackBrowser } from '../../../src/data-structures/stack/forward-back-browser'

describe('forward-back-browser', () => {
  let browser: ForwardBackBrowser<string>

  beforeEach(() => {
    browser = new ForwardBackBrowser<string>()
  })

  it('empty urls', () => {
    expect(browser.forward()).to.be.undefined
    expect(browser.back()).to.be.undefined
    expect(browser.current).to.be.undefined
  })

  it('should show correct url after goto / forward / back', () => {
    browser.goto('page1')
    expect(browser.current).to.equal('page1')
    browser.goto('page2')
    expect(browser.current).to.equal('page2')
    browser.goto('page3')
    expect(browser.current).to.equal('page3')
    browser.back()
    expect(browser.current).to.equal('page2')
    browser.back()
    expect(browser.current).to.equal('page1')
    browser.forward()
    expect(browser.current).to.equal('page2')
    browser.forward()
    expect(browser.current).to.equal('page3')
    browser.back()
    browser.back()
    browser.goto('page4')
    expect(browser.current).to.equal('page4')
    browser.back()
    expect(browser.current).to.equal('page1')
    browser.forward()
    expect(browser.current).to.equal('page4')
  })
})
