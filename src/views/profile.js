import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useAuth0 } from '@auth0/auth0-react'; 

export const Profile = () => {
  const { user } = useAuth0();
  return (
    <Container className= "mb-5">
     <h1>Welcome to my page!</h1>
    </Container>
  );
};

export default Profile;
