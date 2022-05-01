/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex.raw('TRUNCATE TABLE "user" CASCADE');

    // Seed initial data
    await knex("user").insert([
        { name: "djerq", email: "djerq@gmail.com" },
        { name: "fox", email: "fox@gmail.com" },
        { name: "stan1", email: "stan1@gmail.com" },
        { name: "coolmate", email: "cm@gmail.com" },
        { name: "rezzy", email: "rzyy@gmail.com" },
    ]);
};
