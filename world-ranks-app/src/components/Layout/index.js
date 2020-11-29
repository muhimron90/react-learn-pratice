import Head from "next/head";
import Ranks from "../Icons/ranks";
import styles from "./Layout.module.css";
const Layout = ({ children, title, footer }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Ranks style={styles.svg} />
      </header>
      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>{footer}</footer>
    </div>
  );
};
export default Layout;
