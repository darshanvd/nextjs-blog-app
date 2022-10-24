import classes from "./logo.module.css";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <div className={classes.logo}>Darshan next blog</div>
    </Link>
  );
}

export default Logo;
