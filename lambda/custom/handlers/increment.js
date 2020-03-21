const Alexa = require('ask-sdk-core')

const operations = {
  increment: (counter, value) => counter + value,
  decrement: (counter, value) => counter - value
}

const MESSAGES = {
  increment: 'INCREMENT_MSG',
  decrement: 'DECREMENT_MSG'
}

const IncrementeCounterIntentHandler = {
  canHandle (handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
            Alexa.getIntentName(handlerInput.requestEnvelope) === 'IncrementCounterIntent'
  },
  async handle (handlerInput) {
    const { counter } = handlerInput.state
    const operationSlot = Alexa.getSlot(handlerInput.requestEnvelope, 'Operation')
    const operation = operationSlot.resolutions.resolutionsPerAuthority[0].values[0].value.id

    const value = parseInt(Alexa.getSlotValue(handlerInput.requestEnvelope, 'Value'))

    const newCounter = operations[operation](counter, value)

    const speakOutput = handlerInput.t(MESSAGES[operation], { value, counter: newCounter })

    handlerInput.state.counter = newCounter

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse()
  }
}

module.exports = IncrementeCounterIntentHandler
