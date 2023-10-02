import React, { useState } from "react";
import styled from "styled-components";

const Getstarted = () => {
  const [isNewUser, setIsNewUser] = useState(true);

  const toggleForm = () => {
    setIsNewUser(!isNewUser);
  };

  return (
    <Wrapper>
      <FormContainer>
        <FormHeader>
          <h2>{isNewUser ? "Sign Up" : "Sign In"}</h2>
          <ToggleButton onClick={toggleForm}>
            {isNewUser ? "Already a user? Sign In" : "New user? Sign Up"}
          </ToggleButton>
        </FormHeader>
        {isNewUser ? (
          <SignUpForm>
            <FormGroup>
              <InputLabel>Name</InputLabel>
              <Input type="text" placeholder="Enter your name" />
            </FormGroup>
            <FormGroup>
              <InputLabel>Mobile No</InputLabel>
              <Input type="tel" placeholder="Enter your mobile number" />
            </FormGroup>
            <FormGroup>
              <InputLabel>Date of Birth</InputLabel>
              <Input type="date" />
            </FormGroup>
            <FormGroup>
              <InputLabel>Gender</InputLabel>
              <Select>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Select>
            </FormGroup>
            <FormGroup>
              <InputLabel>Email ID</InputLabel>
              <Input type="email" placeholder="Enter your email" />
            </FormGroup>
            <FormGroup>
              <InputLabel>Password</InputLabel>
              <Input type="password" placeholder="Enter your password" />
            </FormGroup>
            <Button>Sign Up</Button>
          </SignUpForm>
        ) : (
          <SignInForm>
            <FormGroup>
              <InputLabel>UserName Or Email</InputLabel>
              <Input type="text" placeholder="UserName Or Email" />
            </FormGroup>
            {/* <FormGroup>
              <InputLabel>Email ID</InputLabel>
              <Input type="email" placeholder="Enter your email" />
            </FormGroup> */}
            <FormGroup>
              <InputLabel>Password</InputLabel>
              <Input type="password" placeholder="Enter your password" />
            </FormGroup>
            <Button>Sign In</Button>
          </SignInForm>
        )}
      </FormContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 30%;
  padding: 20px;
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    margin: 0;
    font-size: 24px;
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  text-decoration: underline;
  font-size: 14px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  font-size:1.1rem;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;


  &:hover {
    background-color: #0056b3;
  }
`;

const SignUpForm = styled.form``;

const SignInForm = styled.form``;

export default Getstarted;
