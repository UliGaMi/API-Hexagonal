import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "sql10.freesqldatabase.com",
  user: "sql10618076",
  password: "9vrpfH786Y",
  port: 3306,
  database: "sql10618076",
});
