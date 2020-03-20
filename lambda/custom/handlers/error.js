const ErrorHandler = {
  canHandle () {
    return true
  },
  async handle (handlerInput, error) {
    console.log(`~~~~ Error handled: ${error.stack}`)
    const speakOutput = handlerInput.t('ERROR_MSG')

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse()
  }
}

module.exports = ErrorHandler
