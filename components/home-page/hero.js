import Image from "next/image";
import classes from "./hero.module.css";

export default function Her() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/fathur.jpeg"
          alt="An image showing Fathur"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Fathur</h1>
      <p>
        I blog about web development - especially frontend framework like React
      </p>
    </section>
  );
}
