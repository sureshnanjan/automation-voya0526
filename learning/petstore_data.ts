import type { ApiResponse } from "./petstore_types.js";
import { custom1, custom2, customUnion, customIntersection, myType } from "./petstore_types.js";
const successresponse:ApiResponse = {code: 200, type: "success", message: "successful operation"};
const data:custom1 = {}