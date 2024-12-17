import { ValidationChain } from "express-validator";
import { body, param,query, validationResult } from "express-validator";
import { NextFunction, Request, Response } from "express";




const Studentregister=[
    body('email')
        .notEmpty()
        .withMessage('email is required'),

    body('password')
        .notEmpty()
        .withMessage('password is required'),

    body('mobileNumber')
        .notEmpty()
        .withMessage('mobileNumber is required'),

    body('name')
        .notEmpty()
        .withMessage('name is required'),
]



const Studentlogin=[
    body('email')
       .notEmpty()
       .withMessage('email is required'),

    body('password')
       .notEmpty()
       .withMessage('password is required')
]






const validate = (validations:ValidationChain[]) => {
    return async (req:Request, res:Response, next:NextFunction) => {
        try {
            for (const validation of validations) {
                await validation.run(req);
            }

            const errors = validationResult(req);
            if (errors.isEmpty()) {   // if the errors are empty
                return next();    // we are going to next function or controller
            }

            res.status(400).json({ errors: errors.array() });
        } catch (error) {
            res.status(500).json({ error });
        }
    };
};

module.exports = {validate,Studentlogin,Studentregister}