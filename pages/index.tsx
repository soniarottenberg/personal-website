import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useMemo, useState } from "react";
import Head from "next/head";
import styles from "/styles/Home.module.scss";
import Navbar from "components/Navbar";
import Header from "containers/Header";
import About from "containers/About";
import Stack from "containers/Stack";
import Work from "containers/Work";
import Contact from "containers/Contact";
import Menu from "components/Menu";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}

const Home = () => {
  const [section, setSection] = useState<string>("header");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const displaySection = useMemo(() => {
    switch (section) {
      case "header":
        return <Header />;

      case "about":
        return <About />;

      case "stack":
        return <Stack />;

      case "work":
        return <Work />;

      case "contact":
        return <Contact />;
    }
  }, [section]);

  const navElements = useMemo(() => {
    return ["about", "stack", "work", "contact"];
  }, []);

  return (
    <>
      <Head>
        <title>Sonia Rottenberg</title>
        <meta
          name="description"
          content="Sonia Rottenberg - Personal Website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar
          selectNavbarItem={(data: string) => setSection(data)}
          handleBurgerMenuButtonClick={() => setMenuOpen(!menuOpen)}
          menuOpen={menuOpen}
          options={navElements}
        />
        {menuOpen && <Menu options={navElements} />}
        {displaySection}
      </main>
    </>
  );
};

export default Home;
