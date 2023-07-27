import AppNav from "../components/AppNav";
import PageNavigation from "../components/PageNavigation";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <PageNavigation />
      <AppNav />
      <h1 className="test">The whole home page</h1>
      <Link to="/app">Go to the app page</Link>
    </div>
  );
}

export default HomePage;
