import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { CardContainer } from "../components/CardContainer";

const Home: NextPage = () => {
  return (
<div>
  <h1>Heart Ring</h1>
  <CardContainer/>
</div>
  );
};

export default Home;
