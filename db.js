import pg from "pg"

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "blogs",
    password: "Your Password",
    port: 5432,
});

await db.connect();

export default db;
