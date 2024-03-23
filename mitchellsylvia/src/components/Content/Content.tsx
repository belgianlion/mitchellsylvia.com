import "./content.css";

function Content() {
  return (
    <div className="content">
      <div className="title">
        <span className="title">
          <h2 className="title">Hello, my name is</h2>
          <h1 className="title">Mitchell Sylvia</h1>
          <h3 className="gradient-text">
            &gt; Developer, Engineer, 3D Designer
          </h3>
        </span>
      </div>
      <div className="socials-row">
        <a
          href="https://www.linkedin.com/in/mitchell-sylvia/"
          type="socials-button"
          className="github-icon"
        >
          <img src="src/assets/github-mark-white.png"></img>
        </a>
      </div>
    </div>
  );
}

export default Content;
