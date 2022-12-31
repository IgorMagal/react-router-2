import { Redirect, Route, Switch } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import QuotesList from "./pages/QuotesList";
import NewQuote from "./pages/NewQuote";
import QuoteDetails from "./pages/QuoteDetails";

function App() {
  return (
    <>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <QuotesList />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetails />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
