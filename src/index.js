if (!('cypressPluginConfig' in window.top)) {
  window.top.cypressPluginConfig = {}
}

function getPluginConfigValue(key) {
  return Cypress._.get(window.top.cypressPluginConfig, key, Cypress.env(key))
}

function setPluginConfigValue(key, value) {
  window.top.cypressPluginConfig[key] = value
}

/** Returns all config values as an object*/
function getPluginConfigValues() {
  return window.top.cypressPluginConfig
}

if (!Cypress.setPluginConfigValue) {
  Cypress.setPluginConfigValue = setPluginConfigValue
  Cypress.getPluginConfigValue = getPluginConfigValue
  Cypress.getPluginConfigValues = getPluginConfigValues
}

module.exports = {
  getPluginConfigValue,
  setPluginConfigValue,
  getPluginConfigValues,
}
