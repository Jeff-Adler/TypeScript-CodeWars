"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.var15NeverFunction = exports.var14Undefined = exports.var13Null = exports.var12VoidFunction = exports.var11ArrayOfAny = exports.var10Enum = exports.Color = exports.var9Tuple = exports.var8NumericArray = exports.var7Array = exports.var6String = exports.var5Octal = exports.var4Binary = exports.var3Hex = exports.var2Decimal = exports.var1Boolean = void 0;
/* Learning TypeScript. Basic Types
Overview:
In this kata you'll get familiar with TypeScript's basic types.
If you have problems solving this kata please refer to this article: https://www.typescriptlang.org/docs/handbook/basic-types.html */
exports.var1Boolean = true;
exports.var2Decimal = 13;
exports.var3Hex = 0xf00d;
exports.var4Binary = 0b111111;
exports.var5Octal = 0o744;
exports.var6String = "Hello, world!";
exports.var7Array = [1, "test", { a: 3 }, 4, 5];
exports.var8NumericArray = [1, 2, 3, 4, 5];
exports.var9Tuple = ["key", 12345];
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color = exports.Color || (exports.Color = {}));
exports.var10Enum = Color.Blue;
exports.var11ArrayOfAny = [1, "test", { a: 3 }, 4, 5];
function var12VoidFunction() {
    return undefined;
}
exports.var12VoidFunction = var12VoidFunction;
exports.var13Null = null;
exports.var14Undefined = undefined;
function var15NeverFunction() {
    throw new Error();
}
exports.var15NeverFunction = var15NeverFunction;
