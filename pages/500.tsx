import { Button } from '../components/button/button';
import { Hero } from '../components/hero/hero';
import { HeroLead } from '../components/hero/hero.lead';
import { Icon } from '../components/icon/icon';
import { Layout } from '../components/layout/layout';
import { SEO } from '../components/seo/seo';

export default function Custom500() {
  return (
    <>
      <SEO title="Server-side error occurred (500)" description="Sorry, but something went wrong." />
      <Layout>
        <Hero title="Server-side error occurred (500)">
          <HeroLead>Sorry, but something went wrong.</HeroLead>
          <Button link="/" className="mt-12">
            Go to home page
            <Icon type="arrow-right" className="ml-2" />
          </Button>
        </Hero>
      </Layout>
    </>
  );
}
