eb use backend-env

eb setenv NAME=$NAME
eb setenv BCRYPT_PASSWORD=$BCRYPT_PASSWORD
eb setenv ENV=$ENV
eb setenv PORT=$PORT
eb setenv RDS_DB_NAME=$RDS_DB_NAME
eb setenv RDS_HOSTNAME=$RDS_HOSTNAME
eb setenv RDS_PASSWORD=$RDS_PASSWORD
eb setenv RDS_PORT=$RDS_PORT
eb setenv RDS_USERNAME=$RDS_USERNAME
eb setenv SALT_ROUNDS=$SALT_ROUNDS
eb setenv TOKEN_SECRET=$TOKEN_SECRET

eb deploy backend-env