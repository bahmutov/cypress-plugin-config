function getPluginConfigValue(key) {
  return Cypress._.get(window.top, key, Cypress.env(key))
}

function setPluginConfigValue(key, value) {
  window.top[key] = value
}

if (!Cypress.setPluginConfigValue) {
  Cypress.setPluginConfigValue = setPluginConfigValue
}

module.exports = {
  getPluginConfigValue,
  setPluginConfigValue,
}
