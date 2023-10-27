import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Section from "@/src/common/components/Layout/utils/Section";
import ListNovelsCarousel from "../common/ListNovelsCarousel";
import { neutral } from "@/src/common/config/colors";

const YourNovels = () => {
  const slides = [
    {
      index: 1,
      cover: "/YourNovels/novel1.svg",
      name: "Ascension",
      rating: 9,
      status: "Ongoing",
      completetion_per: 30,
    },
    {
      index: 2,
      cover: "/YourNovels/novel2.svg",
      name: "The Beginning After The End",
      rating: 9.3,
      status: "Ongoing",
      completetion_per: 85,
    },
    {
      index: 3,
      cover: "/YourNovels/novel3.svg",
      name: "Reckoning",
      rating: 8.5,
      status: "Ongoing",
      completetion_per: 65,
    },
    {
      index: 4,
      cover: "/YourNovels/novel1.svg",
      name: "Ascension",
      rating: 9,
      status: "Ongoing",
      completetion_per: 16,
    },
    {
      index: 5,
      cover: "/YourNovels/novel2.svg",
      name: "The Beginning After The End ",
      rating: 9.3,
      status: "Ongoing",
      completetion_per: 10,
    },
    {
      index: 6,
      cover: "/YourNovels/novel3.svg",
      name: "The Cult Leader in the Clergy Academy The Cult Leader in the Clergy Academy",
      rating: 8.5,
      status: "Ongoing",
      completetion_per: 34,
    },
    {
      index: 7,
      cover: "/YourNovels/novel1.svg",
      name: "First Immortal of the Sword",
      rating: 9,
      status: "Ongoing",
      completetion_per: 70,
    },
    {
      index: 8,
      cover: "/YourNovels/novel2.svg",
      name: "Beyond the Timescape",
      rating: 9.3,
      status: "Ongoing",
      completetion_per: 20,
    },
    {
      index: 9,
      cover: "/YourNovels/novel3.svg",
      name: "Emperor’s Domination",
      rating: 8.5,
      status: "Ongoing",
      completetion_per: 50,
    },
  ];

  return (
    <Section boxProps={{ sx: { px: 10, mt: 10 } }}>
      <Box display="flex" flexDirection="column" rowGap={4}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            variant="h2"
            sx={{
              color: neutral["A500"],
              fontWeight: 600,
              fontSize: { xs: 12, lg: 24 },
            }}
          >
            Continue Reading
          </Typography>
        </Box>
        <ListNovelsCarousel
          slides={slides}
          prevButtonClass="YourNovelsPrev"
          nextButtonClass="YourNovelsNext"
        />
      </Box>
    </Section>
  );
};

export default YourNovels;
