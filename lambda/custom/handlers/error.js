const ErrorHandler = {
  canHandle () {
    return true
  },
  handle (handlerInput, error) {
    console.log(`~~~~ Error handled: ${error.stack}`)
    const speakOutput = 'Scusami, non riesco a fare ciò che mi hai chiesto. Riprova.'

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse()
  }
}

module.exports = ErrorHandler
