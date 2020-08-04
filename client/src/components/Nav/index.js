import React from "react";
import { useStoreContext } from "../../utils/GlobalState";

import NavLogo from '../Nav/navlogo';
import NavbarLogo from "../../img/papernote.png"


// converted from Bootstrap to Materialize
function Nav() {
  const [store] = useStoreContext();

  return (
    <nav>
      <div className="nav-wrapper">
        <NavLogo image={NavbarLogo}
        />
        {store.loading ? <a className="navbar-brand ml-auto">Loading...</a> : <></>}
      </div>
    </nav>
  );
}

export default Nav;
