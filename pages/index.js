import Axios from "axios";
import React from "react";
import { useImmerReducer } from "use-immer";

import Head from "next/head";
import Image from "next/image";

import Init from "../components/init";
import Layout from "./layouts/layout";

// const { MAIN_BACKENDURL , DEV_BACKENDURL } = process.env

Axios.defaults.baseURL = "https://twentyquestions20.herokuapp.com";

const Home = () => {
  return (
    <Layout>
      <Init />
    </Layout>
  );
};

export default Home;
