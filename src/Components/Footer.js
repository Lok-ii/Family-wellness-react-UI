import "./footer.css"

export default function Footer(){
      return (
        <footer>
            <div className="contactDetails">
                <p className="fullTitle">
                Family Wellness Massage Therapy 
                </p>
                <div className="findUs">
                    <p className="address">888 Griffiths Way, Mainland ML 12345</p>
                    <p className="tel">Tel: 987.654.3210</p>
                    <p className="email">Email: info@yoursite.com</p>
                </div>
            </div>

            <div className="copyright">
                <p>
                    Copyright 2019. All Rights Reserved.
                </p>
            </div>

            <p className="createdBy">Website Created & Hosted by Lokesh Kataria <a href="https://github.com/lok-ii" target="_blank"><i className="fa-brands fa-github github"></i></a></p>

        </footer>
      );
}