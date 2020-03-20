const Alexa = require('ask-sdk-core')
const i18n = require('i18next')
const languageStrings = require('../strings')

const ErrorHandler = {
  canHandle () {
    return true
  },
  async handle (handlerInput, error) {
    console.log(`~~~~ Error handled: ${error.stack}`)
    const t = await i18n.init({
      lng: Alexa.getLocale(handlerInput.requestEnvelope),
      resources: languageStrings
    })

    const speakOutput = t('ERROR_MSG')

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse()
  }
}

module.exports = ErrorHandler
