var localStore = {
  
  set: function(data, value) {
    if (value == null) {
      return console.warn("You can not store `" + data + "` as " + value + " - use localStore.unset(). Called from " + (arguments.callee.caller.toString()));
    }
    return localStorage[data] = JSON.stringify(value);
  },

  get: function(data) {
    var rawData;
    rawData = localStorage[data];
    if ((rawData == null) || rawData === 'undefined') {
      return null;
    }
    return JSON.parse(rawData);
  },

  unset: function(data) {
    return localStorage[data] = null;
  },

  exists: function(data) {
    return localStorage[data] != null;
  }

};

module.exports = localStore;
