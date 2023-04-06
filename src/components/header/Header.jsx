import styles from "./index.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.Header}>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/eventi">Eventi</Link>
        </li>
      </ul>
      <h1>Header</h1>
    </div>
  );
};

export default Header;
