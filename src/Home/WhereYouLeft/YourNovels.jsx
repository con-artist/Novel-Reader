import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Section from "@/src/common/components/Layout/utils/Section";
import ListNovelsCarousel from "../common/ListNovelsCarousel";

const YourNovels = () => {
  const slides = [
    {
      index: 1,
      background: "/HeroSection/bg1.svg",
      character: "/HeroSection/char1.svg",
      height: "103%",
      name: "After Ten Millennia in Hell",
      description:
        "Henry Morris, the 8th-Circle Mage, stood on the execution platform. When the emperor, his friend, had passed, his son had became a puppet of the nobles. Soon after, a purge had ensued, led by the forces opposing Henry. Even in the face of death, all Henry could think was that he hated the new emperor and the nobles. ",
      status: "Ongoing",
    },
    {
      index: 2,
      background: "/HeroSection/bg2.svg",
      character: "/HeroSection/char2.svg",
      height: "103%",
      name: "Rebirth of the 8th-Circle Mage",
      description:
        "Oh Kang-Woo suddenly fell into Hell one day. The only things he had were his desire to live and the Authority of Predation. He devoured hundreds of thousands of demons from the First Hell all the way to the Ninth Hell, and even made the seven princes of Hell bow down to him.",
      status: "Ongoing",
    },
    {
      index: 3,
      background: "/HeroSection/bg3.svg",
      character: "/HeroSection/char3.svg",
      height: "103%",
      name: "Walking Daddy",
      description:
        "A zombie virus started infecting the world one day. The number of infected grew exponentially as days passed... A group of zombies began attacking me and my daughter while we hid at home!",
      status: "Ongoing",
    },
    {
      index: 4,
      background: "/HeroSection/bg4.svg",
      character: "/HeroSection/char4.svg",
      height: "103%",
      name: "Omniscient Reader's Viewpoint",
      description:
        "Dokja was a typical office worker who spent his free time reading his favorite web fiction, 'Three Ways to Survive the Apocalypse.' However, when the novel becomes a reality, he is the only one who knows how the world will end. ",
      status: "Ongoing",
    },
  ];

  return (
    <Section boxProps={{ sx: { px: 10 } }}>
      <ListNovelsCarousel slides={slides} />
    </Section>
  );
};

export default YourNovels;
