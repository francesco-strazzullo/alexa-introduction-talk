const Alexa = require('ask-sdk-core')
const i18n = require('i18next')
const languageStrings = require('../strings')

const CancelAndStopIntentHandler = {
  canHandle (handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
            (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent' ||
                Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent')
  },
  async handle (handlerInput) {
    const t = await i18n.init({
      lng: Alexa.getLocale(handlerInput.requestEnvelope),
      resources: languageStrings
    })

    const speakOutput = t('GOODBYE_MSG')

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse()
  }
}

module.exports = CancelAndStopIntentHandler
