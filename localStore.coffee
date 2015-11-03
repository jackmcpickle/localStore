localStore =
  set: (data, value) ->
    return console.warn "You can not store `#{data}` as #{value} - use localStore.unset(). Called from #{arguments.callee.caller.toString()}" if !value?
    localStorage[data] = JSON.stringify value

  get: (data) ->
    rawData = localStorage[data]
    return null unless rawData? or rawData is 'undefined'
    JSON.parse rawData

  unset: (data) ->
    localStorage[data] = null

  exists: (data) ->
    localStorage[data]?

module.exports = localStore
