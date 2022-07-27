if (!('cypressPluginConfig' in window.top)) {
  window.top.cypressPluginConfig = {}
}

function getPluginConfigValue(key) {
  return Cypress._.get(window.top.cypressPluginConfig, key, Cypress.env(key))
}

function setPluginConfigValue(key, value) {
  window.top.cypressPluginConfig[key] = value
}

if (!Cypress.setPluginConfigValue) {
  Cypress.setPluginConfigValue = setPluginConfigValue
  Cypress.getPluginConfigValue = getPluginConfigValue
}

module.exports = {
  getPluginConfigValue,
  setPluginConfigValue,
}
