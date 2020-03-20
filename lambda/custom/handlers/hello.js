const Alexa = require('ask-sdk-core')
const i18n = require('i18next')
const languageStrings = require('../strings')

const HelloWorldIntentHandler = {
  canHandle (handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
            Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent'
  },
  async handle (handlerInput) {
    const t = await i18n.init({
      lng: Alexa.getLocale(handlerInput.requestEnvelope),
      resources: languageStrings
    })

    const speakOutput = t('HELLO_MSG')

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse()
  }
}

module.exports = HelloWorldIntentHandler
