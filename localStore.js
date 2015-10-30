var localStore = {
  set: function(data, value) {
    localStorage[data] = JSON.stringify(value);
  },
  get: function(data) {
    var rawData;
    rawData = localStorage[data];
    if (rawData == null) {
      return null;
    }
    return JSON.parse(rawData);
  },
  exists: function(data) {
    return localStorage[data] != null;
  }
};

module.exports = localStore;
