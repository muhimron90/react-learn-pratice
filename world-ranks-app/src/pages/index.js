import Head from "next/head";
import { useState } from "react";
import Layout from "../components/Layout";
import SearchInput from "../components/Search";
import TableContent from "../components/TableContent";
import styles from "../styles/Home.module.css";

export default function Home({ resCountries }) {
  const [keyword, setKeyword] = useState("");
  const filteredCountries = resCountries.filter(
    (country) =>
      country.name.toLowerCase().includes(keyword) ||
      country.region.toLowerCase().includes(keyword) ||
      country.subregion.toLowerCase().includes(keyword)
  );
  const onInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };
  return (
    <Layout
      title="World-Ranks-App"
      footer="Learn & Practice @Muhamad Imron 2020"
    >
      <SearchInput
        placeholder="Search by Name Region subRegion..."
        onChange={onInputChange}
      />
      <div className={styles.counts}>Results : {resCountries.length} Items</div>
      <TableContent data={filteredCountries} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  // const fetchData = await fetch('https://restcountries.eu/rest/v2/all');
  const fetchData = await fetch("https://restcountries.eu/rest/v2/name/united");
  const resCountries = await fetchData.json();
  return {
    props: {
      resCountries,
    },
  };
};
