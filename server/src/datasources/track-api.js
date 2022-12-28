const { RESTDataSource } = require("apollo-datasource-rest");

class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    // the Catstronauts catalog is hosted on this server
    this.baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";
  }

  getTracksForHome() {
    return this.get("tracks");
  }

  getAuthor(authorId) {
    return this.get(`author/${authorId}`);
  }
<<<<<<< Updated upstream

  getTrack(trackId) {
    return this.get(`tracks/${trackId}`);
  }
  getTrackModules(trackId) {
    return this.get(`tracks/${trackId}/modules`);
=======
  getTrack(trackId) {
    return this.get(`track/${trackId}`);
>>>>>>> Stashed changes
  }
}

module.exports = TrackAPI;
