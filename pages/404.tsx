import { Button } from '../components/button/button';
import { Hero } from '../components/hero/hero';
import { HeroLead } from '../components/hero/hero.lead';
import { Icon } from '../components/icon/icon';
import { Layout } from '../components/layout/layout';
import { SEO } from '../components/seo/seo';

export default function Custom404() {
  return (
    <>
      <SEO
        title="Page not found (404)"
        description="Sorry, but the page cannot be found. The page may have been moved or deleted."
      />
      <Layout>
        <Hero title="Page not found (404)">
          <HeroLead>Sorry, but the page cannot be found. The page may have been moved or deleted.</HeroLead>
          <Button link="/" className="mt-12">
            Go to home page
            <Icon type="arrow-right" className="ml-2" />
          </Button>
        </Hero>
      </Layout>
    </>
  );
}
