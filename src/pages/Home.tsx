import { globalStyles } from "design-portfolio-ds";
import { FC } from "react";

import Header from "~/components/Header";
import HeroTitle from "~/components/HeroTitle";
import HeroGrid from "~/components/HeroGrid";
import AboutMe from "~/components/AboutMe";

const HomePage: FC = () => {
  globalStyles();

  return (
    <main>
      <Header />
      <HeroTitle />
      <HeroGrid />
      <AboutMe />
    </main>
  );
};

export default HomePage;
