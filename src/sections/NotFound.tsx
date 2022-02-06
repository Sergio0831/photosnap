import ArrowLink from "../components/ArrowLink";
import classes from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <section className={`${classes.notFound} section-center`}>
      <div>
        <h1>Page Not Found</h1>
        <ArrowLink btnText='go back' link='/' theme='light' />
      </div>
    </section>
  );
};

export default NotFound;
