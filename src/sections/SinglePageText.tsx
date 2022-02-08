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
      <h2>{title}</h2>
      <h4>By {author}</h4>
      <h4>{date}</h4>
      {text.map((t, index) => (
        <p key={index}>{t}</p>
      ))}
      <ArrowLink theme='light' btnText='back to stories' link='/stories' />
    </section>
  );
};

export default SinglePageText;
