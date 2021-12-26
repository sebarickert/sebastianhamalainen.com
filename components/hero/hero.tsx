import { Container } from '../container/container';
import { Heading } from '../heading/heading';
import { Spacer } from '../spacer/spacer';

interface HeroProps {
  title: string;
  children: React.ReactNode;
}

export const Hero = ({ title, children }: HeroProps): JSX.Element => (
  <div>
    <Container>
      <Spacer>
        <Heading variant="h1" style="h1" className="mb-4 sm:mb-8 sm:max-w-[90%]">
          {title}
        </Heading>
        {children}
      </Spacer>
    </Container>
  </div>
);
