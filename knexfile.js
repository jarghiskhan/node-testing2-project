// Update with your config settings.
const common = {
  client: "sqlite3",
  useNullAsDefault: true,
  migrations: {
    directory: "./data/migrations",
  },
  seeds: {
    directory: "./data/seeds",
  },
  pool: {
    afterCreate: (connection, done) => {
      connection.run("PRAGMA foreign_keys = ON", done);
    },
  },
};
module.exports = {
  development: {
    ...common,
    connection: {
      filename: "./data/dev.db3",
    },
    testing: {
      ...common,
      connection: {
        filename: "./data/test.db3",
      },
    },
  },
};
