/* Learning TypeScript. Basic Types. Type Assertions */

export class SuccessServerResult {
  constructor(public httpCode: number, public resultObject: Object) {}
}

export class ErrorServerResult {
  constructor(public httpCode: number, public message: string) {}
}

//Good solution:
export function getResult(result: SuccessServerResult | ErrorServerResult) {
  if (result.httpCode === 200) {
    return (result as SuccessServerResult).resultObject;
  } else {
    return (result as ErrorServerResult).message;
  }
}

//Bad (but working) solution:
export function getResult2(result: SuccessServerResult) {
  if (result.httpCode === 200) {
    // Returning resultObject if everything is OK
    return result.resultObject;
  } else {
    // Returning result.message in case of error
    // FIXME: help TypeScript Compiler to understand that result here
    // is the instance of ErrorServerResult...
    return ((result as any) as ErrorServerResult).message;
  }
}
