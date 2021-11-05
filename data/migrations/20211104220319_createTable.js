
exports.up = function(knex) {
    return knex.schema
    .createTable("doggos", (table) => {
      table.increments("doggoID"); //Primary Key
      table.string("doggoName", 20).notNullable(); 
      table.timestamp("createTime").notNullable().defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("doggos"); //1 No FK
};
