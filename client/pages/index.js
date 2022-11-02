import axios from "axios";

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);
  return <h1>Landing page</h1>;
};

// Use getInitialProps to call a function before the component loads. This function uses server side rendering
// Here we will use the currentuser logic to see if the user is loggedin
// We cannot use the useRequest hook here since hooks run inside components
LandingPage.getInitialProps = async () => {
  if (typeof window === "undefined") {
    // We are on the server
    // request should be made to http://ingress-nginx.ingress-nginx
    const { data } = await axios.get(
      "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser",
      {
        headers: {
          Host: "ticketing.dev",
        },
      }
    );
    return data;
  } else {
    //we are on the browser
    // requests can be made with a base url of ''
    const { data } = await axios.get("/api/users/currentuser");
    return data;
  }
  return {};
};

export default LandingPage;
