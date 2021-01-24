"use strict";
/* Learning TypeScript. Basic Types. Type Assertions */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResult2 = exports.getResult = exports.ErrorServerResult = exports.SuccessServerResult = void 0;
class SuccessServerResult {
    constructor(httpCode, resultObject) {
        this.httpCode = httpCode;
        this.resultObject = resultObject;
    }
}
exports.SuccessServerResult = SuccessServerResult;
class ErrorServerResult {
    constructor(httpCode, message) {
        this.httpCode = httpCode;
        this.message = message;
    }
}
exports.ErrorServerResult = ErrorServerResult;
//Good solution:
function getResult(result) {
    if (result.httpCode === 200) {
        return result.resultObject;
    }
    else {
        return result.message;
    }
}
exports.getResult = getResult;
//Bad (but working) solution:
function getResult2(result) {
    if (result.httpCode === 200) {
        // Returning resultObject if everything is OK
        return result.resultObject;
    }
    else {
        // Returning result.message in case of error
        // FIXME: help TypeScript Compiler to understand that result here
        // is the instance of ErrorServerResult...
        return result.message;
    }
}
exports.getResult2 = getResult2;
