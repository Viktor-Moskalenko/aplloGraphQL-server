const { gql } = require('apollo-server');

const typeDefs = gql`
  # Your schema will go here

  type Launch {
  id: ID!
  site: String
  mission: Mission
  rocket: Rocket
  isBooked: Boolean!
}
type Rocket {
  id: ID!
  name: String
  type: String
}

type User {
  id: ID!
  email: String!
  trips: [Launch]!
}

type Mission {
  name: String
  missionPatch(size: PatchSize): String
}
type Query {
  launches(
    after: String,
    pageSize: Int
  ): LaunchConnection!
  launch(id: ID!): Launch
  me: User
}
type Mutation {
  bookTrips(launchIds: [ID]!): TripUpdateResponse!
  cancelTrip(launchId: ID!): TripUpdateResponse!
  login(email: String): String # login token
}
type TripUpdateResponse {
  success: Boolean!
  message: String
  launches: [Launch]
}
type LaunchConnection { # add this below the Query type as an additional type.
  cursor: String!
  hasMore: Boolean!
  launches: [Launch]!
}
enum PatchSize {
  SMALL
  LARGE
}
`;


module.exports = typeDefs;
