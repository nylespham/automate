import { CustomError } from "./custom-error";
import { ValidationError } from "express-validator";

export class RequestValidationError extends CustomError {
    statusCode =  400;
    constructor(public errors: ValidationError[]){
        super(errors[0].msg);
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    };
    serializeErrors(){
        return this.errors.map(error => {
            return { message: error.msg, field: error.type };
        });
    }
}