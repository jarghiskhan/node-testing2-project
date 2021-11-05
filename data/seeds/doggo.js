
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('doggos').del()
    .then(function () {
      // Inserts seed entries
      return knex('doggos').insert([
        {doggoName: 'Pupp'},
        {doggoName: 'Nupp'},
        {doggoName: 'Rover'}
      ]);
    });
};
