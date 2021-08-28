import { NextFunction, Request, Response } from "express";
import { get } from "lodash";
import logger from "../logger";

const validateUser = async (req: Request, res:Response,next:NextFunction)=>{
    const accessToken=get(req,"headers.authorization","").replace(/^Bearer\s/);
    res.send(accessToken)
}

export default validateUser;
