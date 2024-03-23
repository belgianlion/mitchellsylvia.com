import LinkStyles from "./components/Navbar/LinkStyles";
import Navbar from "./components/Navbar/Navbar";
import NavLinkData from "./components/Navbar/NavLinkData";
import Content from "./components/Content/Content";
import "./App.css";

function App() {
  let pageTabs = {
    Home: new NavLinkData("/home"),
    Projects: new NavLinkData("/projects"),
    Experience: new NavLinkData("/experience"),
    "Contact Me": new NavLinkData("/contact-me"),
    Résumé: new NavLinkData("/resume", LinkStyles.highlighted_colorful),
  };

  return (
    <div>
      <div className="nav">
        <Navbar
          brandIcon="src/assets/Muse_Icon_White_TransV2.png"
          brandAlt="An 'M'-shaped logo"
          pages={pageTabs}
        />
      </div>
      {Content()}
    </div>
  );
}

export default App;
