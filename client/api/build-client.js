// This is a generic function to call axios

import axios from "axios";

export default ({ req }) => {
  if (typeof window === "undefined") {
    // we are on the server
    return axios.create({
      baseURL:
        "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local", // for serverside rendering, we need to access ingress-nginx to connect to the auth service
      headers: req.headers,
    });
  } else {
    // we must be on the browser
    return axios.create({ baseURL: "/" });
  }
};
