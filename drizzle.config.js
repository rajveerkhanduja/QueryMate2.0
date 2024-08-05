/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://query-mate_owner:ANQDV9sKdZy6@ep-silent-fog-a5qdhwht.us-east-2.aws.neon.tech/query-mate?sslmode=require',
    }
  };