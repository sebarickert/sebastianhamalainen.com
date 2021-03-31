import * as React from "react";
import Button from "../components/button/button";
import Hero from "../components/hero/hero";
import HeroLead from "../components/hero/hero.lead";
import Layout from "../components/layout/layout";

const IndexPage = (): JSX.Element => (
  <Layout>
    <Hero title="Hey, I'm Sebastian.">
      <HeroLead>
        Frontend Developer located in Helsinki, Finland. Web Design and JS
        enthusiast, also a so-called gym rat. I like to play around with CSS.
      </HeroLead>
      <Button link="/portfolio" className="mt-12">{"Checkout my work -->"}</Button>
    </Hero>
  </Layout>
);

export default IndexPage;
