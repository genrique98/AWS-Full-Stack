import express, { Request, Response, NextFunction } from 'express'
import jwt, { Secret } from 'jsonwebtoken'
import * as c from '../config/config'

const verifyAuthToken = (req: Request, res: Response, next: NextFunction):void => {
    try {
        const authorizationHeader: string = (req.headers.authorization as unknown) as string;
        const token = authorizationHeader.split(' ')[1]
        const decoded = jwt.verify(token, c.config.token_secret as Secret)
        next()
    } catch (error) {
        res.status(401)
        res.json('Access denied, invalid token')
    }
}

export default verifyAuthToken