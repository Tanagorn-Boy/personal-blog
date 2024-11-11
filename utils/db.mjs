import * as pg from "pg";
import "dotenv/config";

const { Pool } = pg.default;

const connectionPool = new Pool({
  connectionString:
    "postgresql://postgres:password@localhost:5432/personal-blog",
});

export default connectionPool;

{
  /*
  
  const connectionPool = new Pool({
  connectionString: process.env.CONNECTION_STRING,
});


npm install dotenv
*/
}
