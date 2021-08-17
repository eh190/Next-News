import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <hr className={styles.footer__line} />
      <p className={styles.footer__text}>NextNews 2021</p>
    </div>
  );
};

export default Footer;
