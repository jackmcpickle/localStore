localStore =
  set: (data, value) ->
    localStorage[data] = JSON.stringify value

  get: (data) ->
    rawData = localStorage[data]
    return null unless rawData?
    JSON.parse rawData

  exists: (data) ->
    localStorage[data]?

module.exports = localStore
