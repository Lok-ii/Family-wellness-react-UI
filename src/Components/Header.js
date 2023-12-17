import "./header.css";
export default function Header(){
    return(
        <header className="header">
            <p className="title">
                Family Wellness
            </p>
            <p className="subtitle">
                MASSAGE THERAPY
            </p>
            <nav className="navbar">
                <a href="#" className="home navlink active">HOME</a>
                <a href="#" className="about navlink">ABOUT</a>
                <a href="#" className="services navlink">SERVICES</a>
                <a href="#" className="faq navlink">FAQ</a>
                <a href="#" className="contact navlink">CONTACT</a>
            </nav>
        </header>
    );
}