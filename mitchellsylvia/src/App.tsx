import LinkStyles from "./components/Navbar/LinkStyles";
import Navbar from "./components/Navbar/Navbar";
import NavLinkData from "./components/Navbar/NavLinkData";
import "./index.css";

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
      <Navbar
        brandIcon="src/assets/Muse_Icon_White_TransV2.png"
        brandAlt="An 'M'-shaped logo"
        pages={pageTabs}
      />
      <div className="title">
        <span className="title">
          <h2 className="title">Hello, my name is</h2>
          <h1 className="title">Mitchell Sylvia</h1>
          <h3 className="gradient-text">
            &gt; Developer, Engineer, 3D Designer
          </h3>
        </span>
      </div>
    </div>
  );
}

export default App;
