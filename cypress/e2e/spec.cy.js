import { getPluginConfigValue, setPluginConfigValue } from '../..'

describe('cypress-plugin-config', () => {
  it('sets setPluginConfigValue', function () {
    expect(Cypress.setPluginConfigValue, 'setPluginConfigValue').to.be.a(
      'function',
    )
  })

  it('can set a value', () => {
    Cypress.setPluginConfigValue('myTestName', 'Joe')
  })

  it('can read the value', () => {
    expect(Cypress.getPluginConfigValue('myTestName'), 'my test name').to.equal(
      'Joe',
    )
  })
})

describe('imported methods', () => {
  it('can set and get', () => {
    setPluginConfigValue('myMethodName', 'Ann')
    expect(getPluginConfigValue('myMethodName')).to.equal('Ann')
  })
})

describe('Mixture', () => {
  it('combines methods', () => {
    expect(getPluginConfigValue('myTestName')).to.equal('Joe')
  })
})

describe('fallback', () => {
  it('falls back on Cypress.env', () => {
    Cypress.env('randomName', 'XYZ')
    expect(getPluginConfigValue('randomName')).to.equal('XYZ')
  })
})
