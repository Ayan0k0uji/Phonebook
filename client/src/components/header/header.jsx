import {observer} from "mobx-react-lite";
import "./style.scss"

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-row">
                    <a className="logo">LOGO</a>
                    <ul className="header-list">
                        <li className="header-list__item"><a className="header-list__link" href="/">Contacts</a></li>
                        <li className="header-list__item"><a className="header-list__link" href="/newContact">New Contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
  };
export default observer(Header);