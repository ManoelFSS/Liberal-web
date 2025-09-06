import { useState, useEffect, useRef } from "react";
import { Container } from "./styles";

const Menu = ({ closeMenu }) => {
    const menuItems = ["Home", "Locutores", "Programação", "Podcast", "Sobre", "Contato"];
    const ulRef = useRef(null);

    const [active, setActive] = useState(Number(localStorage.getItem("activeMenu")) || 0);
    const [indicator, setIndicator] = useState({ width: 0, height: 0, left: 0, top: 0 });

    const updateIndicator = (index = active) => {
        if (!ulRef.current) return;
        const items = ulRef.current.querySelectorAll("li:not(.active)");
        const item = items[index];
        if (!item) return;

        const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = item;
        setIndicator({
        width: offsetWidth,
        height: offsetHeight,
        left: offsetLeft,
        top: offsetTop,
        });
    };

    useEffect(() => {
        updateIndicator(active);
        localStorage.setItem("activeMenu", active);
    }, [active]);

    useEffect(() => {
        if (!ulRef.current) return;
        const observer = new ResizeObserver(() => {
        updateIndicator(active);
        });
        observer.observe(ulRef.current);

        return () => observer.disconnect();
    }, [active]);

    useEffect(() => {
        if (!closeMenu) {
        const id = setTimeout(() => updateIndicator(active), 200);
            return () => clearTimeout(id);
        }
    }, [closeMenu, active]);

    const handleClick = (index) => {
        setActive(index);
    };

    return (
        <Container
            closeMenu={closeMenu}
            width={`${indicator.width}px`}
            height={`${indicator.height}px`}
            position={`${indicator.left}px`}
            positionTop={`${indicator.top}px`}
        >
        <ul ref={ulRef}>
            {menuItems.map((item, index) => (
            <li
                key={index}
                onClick={() => handleClick(index)}
                className={`${active === index ? "hover-active" : ""} ${
                item === "Sobre" ? "close-sobre" : ""
                }`}
            >
                {item}
            </li>
            ))}
            <li className="active"></li>
        </ul>
        </Container>
    );
};

export default Menu;
