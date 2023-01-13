import { Fragment } from "react";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";
import { useHistory, useLocation } from "react-router-dom";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((a, b) => {
    if (ascending) {
      return a.id > b.id ? 1 : -1;
    } else return a.id < b.id ? 1 : -1;
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortedAscending = queryParams.get("sort") === "asc";

  const changeSortingHandler = () => {
    history.push("/quotes?sort=" + (isSortedAscending ? "desc" : "asc"));

    return <div>changeSorting</div>;
  };

  const sortedQuotes = sortQuotes(props.quotes, isSortedAscending);

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortedAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id + quote.author}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
