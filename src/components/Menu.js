import React from "react";
import {useLanguage} from "../LanguageContext";
import {FaTimes} from "react-icons/fa";
import LanguageSelector from "./LanguageSelector";

function Menu({isMenuOpen, setIsMenuOpen}) {
    const { translations } = useLanguage();

    return (
        <>
            <div style={styles.beforeStyle}  className={`menu ${isMenuOpen ? "open" : "close"}`}></div>
            <menu style={styles.menu} className={`fc menu ${isMenuOpen ? "open" : "close"}`}>
                <div className={"fr w100 jc-sb"} style={{padding:'0.3rem 2rem', width:'calc(100% - 4rem)'}}>
                    <img src="/logo_white.png" alt="Logo" style={styles.logo} id={"menu_logo"}/>
                    <button type={"button"} style={styles.menuButton} onClick={() => setIsMenuOpen(false)}>
                        <FaTimes/>
                    </button>
                </div>
                <div className={"fc f-c w100 mt-50 g2"} style={{ marginBottom:'4rem'}}>
                    <a href="/" rel="noreferrer" style={styles.menuNavLink} className={"expansiva-bold"}> {translations.home} </a>
                    <a href="/inscription" rel="noreferrer" style={styles.menuNavLink} className={"expansiva-bold"}> {translations.register} </a>
                    <a href="/reglement" rel="noreferrer" style={styles.menuNavLink} className={"expansiva-bold"}> {translations.rules} </a>
                    <a href="/contact" rel="noreferrer" style={styles.menuNavLink} className={"expansiva-bold"}> {translations.contact} </a>
                    <LanguageSelector className={"show_mobile"}/>
                </div>
                <div></div>
            </menu>
        </>
    );
}

// Styles CSS en JavaScript
const styles = {
    menu: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1001,
        backgroundColor:"rgb(50 62 95 / 43%)",
        transition: 'all 0.4s ease-in-out',
        justifyContent: "space-between"
    },
    beforeStyle: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backdropFilter: 'blur(15px)',
        WebkitBackdropFilter: 'blur(15px)',
        zIndex:"1001",
        transition: 'all 0.4s ease-in-out',
    },
    logo: {
        maxWidth: '350px',
        maxHeight: '100%',
        marginLeft: '10px',
        marginTop: '5px',
        marginBottom: '5px',
    },
    menuNavList:{
        display:"flex",
        flexDirection: 'column',
        listStyle: 'none',
        gap: '1rem',
    },
    menuNavLink:{
        color: "#fff",
        textDecoration: 'none',
        fontSize: '2.5em',
    },
    menuButton:{
        backgroundColor: 'transparent',
        fontSize: '2em',
        padding: '0px',
        border:'0'

    }
};

export default Menu;
