import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../../Contexts/UserContext";
import { ReactComponent as Feed } from "../../../Assets/feed.svg";
import { ReactComponent as Stats } from "../../../Assets/estatisticas.svg";
import { ReactComponent as Post } from "../../../Assets/adicionar.svg";
import { ReactComponent as Logout } from "../../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
  const [mobile, setMobile] = useState(null);
  const { userLogout } = useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <NavLink to="/account" end activeClassName={styles.active}>
        <Feed />
        {mobile && "Minhas Fotos"}
      </NavLink>
      <NavLink to="/account/stats" activeClassName={styles.active}>
        <Stats />
        {mobile && "Estatísticas"}
      </NavLink>
      <NavLink to="/account/post" activeClassName={styles.active}>
        <Post />
        {mobile && "Adicionar Foto"}
      </NavLink>
      <button onClick={userLogout}>
        <Logout />
        {mobile && "Sair"}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
