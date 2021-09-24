# Infrastructure description
Full Stack app hosted on the AWS Cloud.

- The database is a RDS instance running PosgreSQL.
- The backend is running on Elastic Beanstalk.
- The frontend is hosted on a S3 bucket configured for website hosting; it fetches data from [http://backend-env.eba-gpma9uyx.us-west-1.elasticbeanstalk.com/products], which returns the list of products displayed on the frontend side.



