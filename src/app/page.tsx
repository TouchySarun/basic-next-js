"use client";

import Image from "next/image";
import styles from "./styles/Button.module.css";
import styled from "styled-components";
import "./styles/main.sass";
import nextImg from "../../public/next.svg";
import Header from "./components/Header";
import Nav from "./components/Nav";
import PokeData from "./components/PokeData";
const MyComponent = styled.div`
  color: #333;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
`;
export default function Home() {
  return (
    <>
      <Header />
      <Nav />
      <PokeData />
    </>
  );
}
