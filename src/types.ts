import type { NOT_SUPPORTED, STRUCTS } from "./consts";
import type { OpenAPI3 } from "openapi-typescript";
import type { SchemaObject } from "openapi-typescript/src/types";
export type { OpenAPI3 };
// We don't know what the shape of the object looks like when it's passed in, but we know its some mix of these two
export type PatternPropertiesHandler = (schema: SchemaObject) => SchemaObject;

export interface Options {
  dateToDateTime?: boolean;
  cloneSchema?: boolean;
  supportPatternProperties?: boolean;
  keepNotSupported?: typeof NOT_SUPPORTED[number][];
  strictMode?: boolean;
  removeReadOnly?: boolean;
  removeWriteOnly?: boolean;
  patternPropertiesHandler?: PatternPropertiesHandler;
}

export interface OptionsInternal extends Options {
  _removeProps: string[];
  _structs: typeof STRUCTS;
  _notSupported: typeof NOT_SUPPORTED[number][];
  patternPropertiesHandler: PatternPropertiesHandler;
}
