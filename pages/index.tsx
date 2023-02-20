import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useCallback, useMemo, useState } from "react";
import Head from "next/head";
import styles from "/styles/Home.module.scss";
import Navbar from "components/Navbar";
import Header from "containers/Header";
import About from "containers/About";
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
  const [section, setSection] = useState<string>("home");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const displaySectionMobile = useCallback((data: string) => {
    setSection(data);
    setMenuOpen(false);
  }, []);

  const displaySection = useMemo(() => {
    switch (section) {
      case "home":
        return <Header />;

      case "about":
        return <About />;

      case "work":
        return <Work />;

      case "contact":
        return <Contact />;
    }
  }, [section]);

  const navElements = useMemo(() => {
    return ["about", "work", "contact"];
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
        {menuOpen && (
          <Menu
            options={navElements}
            handleMenuSelection={(data: string) => displaySectionMobile(data)}
          />
        )}
        {displaySection}
      </main>
    </>
  );
};

export default Home;
