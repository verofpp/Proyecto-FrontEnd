import BackButton from "../BackButton/BackButton";
import SearchButton from "../SearchButton/SearchButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import PerfilButton from "../PerfilButton/PerfilButton";
import Cookies from 'universal-cookie';


import "./Header.css";


const Header = (props) => {
  const cookies = new Cookies(null, { path: '/' });
  const haveRol =  cookies.get('rolUser') != undefined;
  const isPerfil = props.perfil ? props.perfil == 'true': false;
  return (
    <header className="header-page">
      <h1 className="logo">UVM Horarios</h1>
      <div className="botones-header">
        <>
          { haveRol? <LogoutButton></LogoutButton> :  isPerfil? <PerfilButton></PerfilButton> : <></>  }
        </>
        { props.search && <SearchButton></SearchButton> }
        { props.back && <BackButton link={ props.link }></BackButton> }
      </div>
    </header>
  );
}

export default Header;
