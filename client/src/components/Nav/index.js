import React from "react";
import { useStoreContext } from "../../utils/GlobalState";

import NavLogo from '../Nav/navlogo';
import NavbarLogo from "../../img/papernote.png"



function Nav() {
  const [store] = useStoreContext();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLogo image={NavbarLogo}
      />
      {store.loading ? <a className="navbar-brand ml-auto">Loading...</a> : <></>}
    </nav>
  );
}

export default Nav;
