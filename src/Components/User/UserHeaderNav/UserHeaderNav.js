import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Feed } from '../../../Assets/feed.svg';
import { ReactComponent as Stats } from '../../../Assets/estatisticas.svg';
import { ReactComponent as Post } from '../../../Assets/adicionar.svg';
import { ReactComponent as Logout } from '../../../Assets/sair.svg';
import useMedia from '../../../Hooks/useMedia';
import styles from './UserHeaderNav.module.css';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../../Store/user';

const UserHeaderNav = () => {
  const dispatch = useDispatch();
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/account" end activeClassName={styles.active}>
          <Feed />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to="/account/stats" activeClassName={styles.active}>
          <Stats />
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to="/account/post" activeClassName={styles.active}>
          <Post />
          {mobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={() => dispatch(userLogout())}>
          <Logout />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
