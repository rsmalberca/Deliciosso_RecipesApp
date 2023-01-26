import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const formSubmitHandler = (e) => {
    if (input && input[0] !== " ") {
      e.preventDefault();
      navigate("/searched/" + input);
    } else {
      e.preventDefault();
      alert("Word is required to initialize the search");
    }
  };

  return (
    <FormStyle onSubmit={formSubmitHandler}>
      <div>
        <BiSearch />
        <input onChange={inputChangeHandler} type="text" value={input} />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0rem 20rem;
  position: relative;

  div {
    width: 100%;
    position: relative;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1rem;
    color: white;
    padding: 0.5rem 2.5rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export default SearchBar;
