const Alexa = require('ask-sdk-core')
const i18n = require('i18next')
const languageStrings = require('../strings')

const LocalisationRequestInterceptor = {
  async process (handlerInput) {
    const t = await i18n.init({
      lng: Alexa.getLocale(handlerInput.requestEnvelope),
      resources: languageStrings
    })

    handlerInput.t = (...args) => t(...args)
  }
}

module.exports = LocalisationRequestInterceptor
