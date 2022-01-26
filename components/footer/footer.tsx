import { socialMediaLinks } from '../../constants/socialMediaLinks';
import { Container } from '../container/container';
import { Heading } from '../heading/heading';
import { Spacer } from '../spacer/spacer';

export const Footer = (): JSX.Element => (
  <footer className="bg-gray-50 dark:bg-neutral-850">
    <Container>
      <Spacer>
        <section>
          <div>
            <Heading style="h2" className="mb-6 sm:!text-4xl">
              Contact
            </Heading>
            <p className="mb-4 max-w-screen-sm text-xl !leading-relaxed tracking-normal text-gray-600 dark:text-gray-300">
              If you want to contact me, shoot me a message at contact@hamse.fi or find me on different social media
              platforms.
            </p>
            <p className="max-w-screen-sm text-xl !leading-relaxed tracking-normal text-gray-600 dark:text-gray-300">
              {`© ${new Date().getFullYear()} Sebastian. All Rights Reserved.`}
            </p>
          </div>
        </section>
        <hr className="mt-12 mb-5 border-t dark:border-t-neutral-700" />
        <section>
          <nav aria-label="Social media links" className="lg:flex lg:justify-end">
            <h2 className="sr-only">Follow me on social media</h2>
            <ul className="lg:-ml-4 lg:inline-grid lg:grid-flow-col-dense">
              {socialMediaLinks.map(({ label, url }) => (
                <li key={url}>
                  <a
                    href={url}
                    className="relative -mx-2 inline-block rounded px-2 py-3 text-lg font-normal text-gray-600 hover:text-black focus:text-black focus:outline-none focus:ring dark:text-gray-400 dark:ring-white dark:hover:text-white dark:focus:text-white lg:mx-0 lg:-my-3 lg:py-3 lg:px-4 lg:after:absolute lg:after:bottom-2 lg:after:left-1/2 lg:after:inline-block lg:after:h-[3px] lg:after:w-[calc(100%-2rem)] lg:after:origin-left lg:after:-translate-x-1/2 lg:after:scale-x-0 lg:after:bg-black lg:after:transition lg:after:duration-200 lg:hover:after:scale-x-100 dark:lg:after:bg-white"
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
