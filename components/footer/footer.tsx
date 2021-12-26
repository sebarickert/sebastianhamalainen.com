import { socialMediaLinks } from '../../constants/socialMediaLinks';
import { Container } from '../container/container';
import { Heading } from '../heading/heading';
import { Spacer } from '../spacer/spacer';

export const Footer = (): JSX.Element => (
  <footer className="bg-gray-50">
    <Container>
      <Spacer>
        <section>
          <div>
            <Heading style="h2" className="mb-6 sm:!text-4xl">
              Contact
            </Heading>
            <p className="text-2xl !leading-relaxed text-gray-500 tracking-normal max-w-screen-md mb-4">
              If you want to contact me, shoot me a message at contact@hamse.fi or find me on different social media
              platforms.
            </p>
            <p className="text-2xl !leading-relaxed text-gray-500 tracking-normal max-w-screen-md">
              {`© ${new Date().getFullYear()} Sebastian. All Rights Reserved.`}
            </p>
          </div>
        </section>
        <hr className="bg-gray-200 border-t mt-12 mb-5" />
        <section>
          <nav aria-label="Social media links" className="lg:flex lg:justify-end">
            <h2 className="sr-only">Follow me on social media</h2>
            <ul className="lg:inline-grid lg:grid-flow-col-dense lg:-ml-4">
              {socialMediaLinks.map(({ label, url }) => (
                <li key={url}>
                  <a
                    href={url}
                    className="inline-block -mx-2 px-2 py-3 text-gray-500 text-lg font-normal hover:text-blue-600 focus:text-blue-600 focus:outline-none focus:ring rounded lg:mx-0 lg:-my-3 lg:py-3 lg:px-4 relative lg:after:h-[3px] lg:after:w-[calc(100%-2rem)] lg:after:bg-blue-600 lg:after:inline-block lg:after:bottom-2 lg:after:left-1/2 lg:after:-translate-x-1/2 lg:after:absolute lg:after:origin-left lg:after:scale-x-0 lg:hover:after:scale-x-100 lg:after:transition lg:after:duration-200"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {label}
                    <span className="sr-only">(link opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </Spacer>
    </Container>
  </footer>
);
