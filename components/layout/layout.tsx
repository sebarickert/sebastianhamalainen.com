import { Footer } from '../footer/footer';
import { Header } from '../header/header';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => (
  <div className="flex min-h-screen flex-col dark:bg-neutral-900">
    <div className="flex-grow">
      <Header />
      <main className="pb-20 lg:pb-32">{children}</main>
    </div>
    <Footer />
  </div>
);
