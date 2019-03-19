/* @flow */

export opaque type EndpointURL: string = string;

export type Endpoint =
  | "https://clubhouse.io"
  | "https://google.com"
  | "https://facebook.com";

export const useFileAURL = (endpoint: Endpoint): EndpointURL => {
  return endpoint;
};
