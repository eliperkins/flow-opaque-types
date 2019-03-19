/* @flow */

import { useFileAURL } from "./fileA";

import type { EndpointURL, Endpoint } from "./fileA";

// Define a string const.
const x: string = "foo";

// Create a new variable of type `EndpointURL` with a `string` value.
// Passes (?!)
// This means any and every `string` constant can also be an `EndpointURL`.
// I would expect this to fail.
const y: EndpointURL = x;

// Passes (?!)
// This means any and every `string` constant can also be an `EndpointURL`.
// I would expect this to fail.
const baz: EndpointURL = "wat";

// Fails because `url` is not a `string`, nor an `EndpointURL`
const useURL = (url: Endpoint): EndpointURL => {
  return url;
};

// Fails because `url` is not a `string`, nor an `EndpointURL` too.
const useURL2 = (url: string): EndpointURL => {
  return url;
};

// Passes, as expected. `Endpoint`s are `strings` and within `fileA`, `EndpointURL`s are also `string`s.
const endpoint = useFileAURL("https://clubhouse.io");

// Fails, as expected. `wat` is not an `Endpoint`.
const endpointB = useFileAURL("wat");
