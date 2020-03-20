const Alexa = require('ask-sdk-core')
const i18n = require('i18next')
const languageStrings = require('../strings')

const LaunchRequestHandler = {
  canHandle (handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest'
  },
  async handle (handlerInput) {
    const t = await i18n.init({
      lng: Alexa.getLocale(handlerInput.requestEnvelope),
      resources: languageStrings
    })

    const speakOutput = t('WELCOME_MSG')

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse()
  }
}

module.exports = LaunchRequestHandler
