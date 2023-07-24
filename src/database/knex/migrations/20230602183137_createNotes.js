exports.up = knex => knex.schema.createTable("notes", table => {
    table.increments("id");
    table.text("title");
    table.text("description");
    table.integer("user_id").references("id").inTable("users");

    table.timestamp("created-at").default(knex.fn.now());
    table.timestamp("update-at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("notes");