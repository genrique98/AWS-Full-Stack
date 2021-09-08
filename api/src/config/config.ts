import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  username: `${process.env.RDS_USERNAME}`,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DB_NAME,
  port: Number(process.env.RDS_PORT),
  host: process.env.RDS_HOSTNAME,

  dialect: "postgres",
  env: process.env.ENV,

  bcrypt_password: process.env.BCRYPT_PASSWORD,
  salt_rounds: process.env.SALT_ROUNDS,
  token_secret: process.env.TOKEN_SECRET,
  // aws_region: process.env.AWS_REGION,
  // aws_profile: process.env.AWS_PROFILE,
  // aws_media_bucket: process.env.AWS_BUCKET,
  // url: process.env.URL,
  jwt: {
    secret: process.env.TOKEN_SECRET,
  },
};
