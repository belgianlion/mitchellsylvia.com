import LinkStyles from "./LinkStyles";

class NavLinkData {
  pageDir: string;
  styling: LinkStyles;

  constructor(pageDir: string, styling: LinkStyles = LinkStyles.standard) {
    this.pageDir = pageDir;
    this.styling = styling;
  }
}

export default NavLinkData;
