import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);
  return <h1>Landing page</h1>;
};

// Use getInitialProps to call a function before the component loads. This function uses server side rendering
// Here we will use the currentuser logic to see if the user is loggedin
// We cannot use the useRequest hook here since hooks run inside components
LandingPage.getInitialProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentuser");
  return data;
};

export default LandingPage;
