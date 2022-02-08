import ArrowLink from "../components/ArrowLink";
import classes from "./SinglePageText.module.scss";

type SinglePageTextProps = {
  title: string;
  author: string;
  date: string;
  text: string[];
};

const SinglePageText = ({ title, author, date, text }: SinglePageTextProps) => {
  return (
    <section className={`${classes.singlePage} section-center`}>
      <h1>{title}</h1>
      <h5>By {author}</h5>
      <h5>{date}</h5>
      {text.map((t, index) => (
        <p key={index}>{t}</p>
      ))}
      <ArrowLink theme='light' btnText='back to stories' link='/stories' />
    </section>
  );
};

export default SinglePageText;
