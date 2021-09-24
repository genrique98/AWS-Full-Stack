# Pipeline process
After pushing code to my Github repo, CircleCi will:

1. Install all dependencies [frontend]
2. Install all dependecies [backend]
3. Build application [frontend]
4. Build application [backend]
5. Run tests [frontend]
6. Run tests [backend]
7. Deploy build folder to S3 [frontend]
8. Deploy build folder to Elastic Beanstalk [backend]