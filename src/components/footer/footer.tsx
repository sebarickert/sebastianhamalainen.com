import * as React from "react";
import Container from "../container/container";
import socialMediaLinks from "../../constants/socialMediaLinks";
import { Link } from "gatsby";
import Logo from "../logo/logo";
import Spacer from "../spacer/spacer";
import Icon from "../icon/icon";

const Footer = (): JSX.Element => (
  <footer className="bg-gray-50">
    <Container>
      <Spacer>
        <div>
          <h2 className="text-2xl md:text-3xl leading-tight font-bold tracking-tight text-gray-900 mb-6">
            Contact
          </h2>
          <p className="text-lg md:text-xl leading-relaxed md:leading-relaxed mb-4 max-w-screen-sm">
            If you want to contact me, shoot me a message at contact@hamse.fi or
            find me on different social media platforms.
          </p>
          <p className="text-lg md:text-xl leading-relaxed md:leading-relaxed">
            © 2021 Sebastian. All Rights Reserved.
          </p>
        </div>
        <hr className="bg-gray-200 border-t my-12" />
        <div>
          <h2 className="text-2xl leading-tight font-bold tracking-tight text-gray-900 mb-6">
            Follow
          </h2>
          <ul>
            {socialMediaLinks.map(({ label, url }, index) => (
              <li
                key={url}
                className={`${
                  socialMediaLinks.length - 1 !== index ? "mb-4" : ""
                }`}
              >
                <a
                  href={url}
                  className="inline-flex items-center focus:outline-none focus:ring ring-offset-2 rounded"
                  target="_blank"
                  rel="noreferrer"
                >
                  {label}
                  <Icon type="external-link" />
                  <span className="sr-only">(link opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <hr className="bg-gray-200 border-t my-12" />
        <Link
          to="/"
          className="inline-flex focus:outline-none focus:ring ring-offset-2 rounded"
        >
          <Logo />
        </Link>
      </Spacer>
    </Container>
  </footer>
);

export default Footer;
