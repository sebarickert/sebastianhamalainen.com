import * as React from "react";
import BlogLiftup from "../components/blogLiftup/blogLiftup";
import Button from "../components/button/button";
import Hero from "../components/hero/hero";
import HeroLead from "../components/hero/hero.lead";
import Layout from "../components/layout/layout";
import PortfolioLiftup from "../components/portfolioLiftup/portfolioLiftup";
import SEO from "../components/seo/seo";

const IndexPage = (): JSX.Element => (
  <>
    <SEO
      title="Welcome"
      description="Developer located in Helsinki, Finland. Web Design and JS enthusiast, also
      a so-called gym rat.I like to play around with CSS."
    />
    <Layout>
      <Hero title="Hey, I'm Sebastian.">
        <HeroLead>
          Frontend Developer located in Helsinki, Finland. Web Design and JS
          enthusiast, also a so-called gym rat.I like to play around with CSS.
        </HeroLead>
        <Button link="/portfolio" className="mt-12">
          {"Checkout my work -->"}
        </Button>
      </Hero>
      <PortfolioLiftup />
      <BlogLiftup />
    </Layout>
  </>
);

export default IndexPage;
