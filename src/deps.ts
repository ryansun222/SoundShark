// centralized location to import and re-export external libraries

// ex:
//  export {
//    assert,
//    assertEquals,
//    assertStringIncludes,
//  } from "https://deno.land/std@0.201.0/assert/mod.ts";
// import like this
//  import { assertEquals, runTests, test } from "./deps.ts";
export { Application, Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";
export { config } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";