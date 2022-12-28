const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate the homepage grid of our web client
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    // returns a single Track based on the provided track ID argument
    track: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(id);
    }
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
<<<<<<< Updated upstream
    },
    modules: ({ id }, _, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(id);
=======
>>>>>>> Stashed changes
    }
  }
};

module.exports = resolvers;
