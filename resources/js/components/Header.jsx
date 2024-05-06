import React, { useState } from "react";
import logo from "../images/LogoAsier.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <header
            style={{
                backgroundColor: "#AEFFFE",
                padding: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <div style={{ flexDirection: "row", display: "flex", gap: "32px" }}>
                <div className="logo" style={{ flexShrink: "0" }}>
                    <img
                        src={logo}
                        alt="Logo"
                        style={{ width: "100px", borderRadius: "30px" }}
                    />
                </div>
                <div style={{ position: "relative", marginLeft: "4%" }}>
                    <button
                        className={`menu-button ${menuOpen ? "open" : ""}`}
                        onClick={toggleMenu}
                        style={{
                            backgroundColor: "#F7F7F7",
                            border: "none",
                            fontSize: "1.5rem",
                            cursor: "pointer",
                            borderRadius:"15px"
                        }}
                    >
                        <p>MENU</p>
                        {menuOpen ? <p>↑</p> : <p>↓</p>}
                    </button>
                    {menuOpen && (
                        <ul
                            className="menu-items"
                            style={{
                                position: "absolute",
                                background: "white",
                                border: "1px solid #ccc",
                                borderRadius:"20px",
                                overflow:"hidden",
                                marginLeft:"130%",
                                marginTop:"-40%"
                            }}
                        >
                            <li
                                style={{
                                    padding: "8px",
                                    whiteSpace: "nowrap",
                                    background: "#f5f5f5",


                                }}
                                onClick={() => handleItemClick("Elemento 1")}
                            >
                                Elemento 1
                            </li>
                            <li
                                style={{
                                    padding: "8px",
                                    whiteSpace: "nowrap",
                                    background: "#ddd",
                                }}
                                onClick={() => handleItemClick("Elemento 2")}
                            >
                                Elemento 2
                            </li>

                            {/* Resto de elementos... */}
                        </ul>
                    )}

                    {/* Resto de tu contenido... */}
                </div>
            </div>
            <div
                className={`cart ${menuOpen ? "open" : ""}`}
                style={{ display: "flex", alignItems: "center" }}
            >
                {/* Contenido del carrito */}
                {/* Aquí puedes agregar
                elementos del carrito */}
                <span style={{ marginRight: "1rem" }}>🛒</span>
                <span>3 items</span>
            </div>
        </header>
    );
};

export default Header;
