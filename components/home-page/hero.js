import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/darshan.jpeg"
          alt="An Image showing Darshan"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Darshan</h1>
      <p>I am Frontend developer at Kambi.</p>
    </section>
  );
}
export default Hero;
