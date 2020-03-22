const Alexa = require('ask-sdk-core')

const PERMISSIONS = ['alexa::profile:name:read']

const LaunchRequestHandler = {
  canHandle (handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest'
  },
  async handle (handlerInput) {
    const { requestEnvelope, serviceClientFactory, responseBuilder } = handlerInput

    const consentToken = requestEnvelope.context.System.apiAccessToken
    if (!consentToken) {
      return responseBuilder
        .speak('Errore')
        .withAskForPermissionsConsentCard(PERMISSIONS)
        .getResponse()
    }

    const client = serviceClientFactory.getUpsServiceClient()
    const name = await client.getProfileGivenName()

    const speakOutput = handlerInput.t('WELCOME_MSG', { name })

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse()
  }
}

module.exports = LaunchRequestHandler
