# App dependencies

## Backend
- Elastic Beanstalk CLI.
- An Elastic Beanstalk environment.
- A RDS database running Postgres.

```
"engines": {
    "node": ">=14.0.0",
    "npm": ">=7.0.0"
},
"dependencies": {
    "bcrypt": "^5.0.1",
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "db-migrate": "^0.11.12",
    "db-migrate-pg": "^1.2.2",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "pg": "^8.5.1",
    "supertest": "^6.1.6",
    "typescript": "^4.3.4"
},
"devDependencies": {
    "@types/bcrypt": "^5.0.0",
    "@types/cors": "^2.8.11",
    "@types/express": "^4.17.12",
    "@types/jasmine": "^3.6.3",
    "@types/jsonwebtoken": "^8.5.2",
    "@types/node": "^15.12.4",
    "@types/pg": "^8.6.0",
    "@types/supertest": "^2.0.11",
    "jasmine": "^3.6.4",
    "jasmine-spec-reporter": "^7.0.0",
    "jasmine-ts": "^0.3.0",
    "nodemon": "^2.0.11",
    "ts-node": "^9.1.1",
    "tsc-watch": "^4.2.9"
}
```

## Frontend
- AWS CLI v2.
- A S3 bucket for hosting.

```
"dependencies": {
    "@angular/animations": "~12.1.2",
    "@angular/common": "~12.1.2",
    "@angular/compiler": "~12.1.2",
    "@angular/core": "~12.1.2",
    "@angular/forms": "~12.1.2",
    "@angular/platform-browser": "~12.1.2",
    "@angular/platform-browser-dynamic": "~12.1.2",
    "@angular/router": "~12.1.2",
    "dotenv": "^10.0.0",
    "rxjs": "~6.6.0",
    "tslib": "^2.2.0",
    "zone.js": "~0.11.4"
},
"devDependencies": {
    "@angular-devkit/build-angular": "~12.1.2",
    "@angular/cli": "~12.1.2",
    "@angular/compiler-cli": "~12.1.2",
    "@types/jasmine": "~3.8.0",
    "@types/node": "^12.11.1",
    "jasmine-core": "~3.8.0",
    "karma": "~6.3.0",
    "karma-chrome-launcher": "~3.1.0",
    "karma-coverage": "~2.0.3",
    "karma-jasmine": "~4.0.0",
    "karma-jasmine-html-reporter": "~1.7.0",
    "typescript": "~4.3.2"
}
```