import axios from "axios";

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);
  return <h1>Landing page</h1>;
};

// Use getInitialProps to call a function before the component loads. This function uses server side rendering
// Here we will use the currentuser logic to see if the user is loggedin
// We cannot use the useRequest hook here since hooks run inside components
LandingPage.getInitialProps = async () => {
  const response = await axios
    .get(
      "http://auth-srv/api/users/currentuser"
    )
    .catch((err) => {
      console.log(err.message);
    });
  return response.data;
};

export default LandingPage;
