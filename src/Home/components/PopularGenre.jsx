import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Section from "@/src/common/components/Layout/utils/Section";
import ListNovelsCarousel from "../common/components/ListNovelsCarousel";
import OulinedButton from "@/src/common/components/Buttons/OulinedButton";
import { Blues, neutral } from "@/src/common/config/colors";

// in useeffect whenever value of currgenre changes call the api and update the novels.

const PopularGenre = () => {
  const [currGenre, setCurrGenre] = useState("action");

  const UpdateGenre = (tag) => {
    setCurrGenre(tag);
  };
  const slides = [
    {
      index: 1,
      cover: "/YourNovels/novel1.svg",
      name: "Ascension",
      rating: 9,
      status: "Ongoing",
    },
    {
      index: 2,
      cover: "/YourNovels/novel2.svg",
      name: "The Beginning After The End",
      rating: 9.3,
      status: "Ongoing",
    },
    {
      index: 3,
      cover: "/YourNovels/novel3.svg",
      name: "Reckoning",
      rating: 8.5,
      status: "Ongoing",
    },
    {
      index: 4,
      cover: "/YourNovels/novel1.svg",
      name: "Ascension",
      rating: 9,
      status: "Ongoing",
    },
    {
      index: 5,
      cover: "/YourNovels/novel2.svg",
      name: "The Beginning After The End ",
      rating: 9.3,
      status: "Ongoing",
    },
    {
      index: 6,
      cover: "/YourNovels/novel3.svg",
      name: "The Cult Leader in the Clergy Academy The Cult Leader in the Clergy Academy",
      rating: 8.5,
      status: "Ongoing",
    },
    {
      index: 7,
      cover: "/YourNovels/novel1.svg",
      name: "First Immortal of the Sword",
      rating: 9,
      status: "Ongoing",
    },
    {
      index: 8,
      cover: "/YourNovels/novel2.svg",
      name: "Beyond the Timescape",
      rating: 9.3,
      status: "Ongoing",
    },
    {
      index: 9,
      cover: "/YourNovels/novel3.svg",
      name: "Emperor’s Domination",
      rating: 8.5,
      status: "Ongoing",
    },
  ];
  const genres = [
    { name: "Action", tag: "action" },
    { name: "Mystery", tag: "mystery" },
    { name: "Comedy", tag: "comedy" },
    { name: "Fantasy", tag: "fantasy" },
    { name: "Romance", tag: "romance" },
  ];
  return (
    <Section boxProps={{ sx: { px: 10, mt: 6 } }}>
      <Box display="flex" flexDirection="column" rowGap={8}>
        <Box display="flex" flexDirection="column" rowGap={4}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="h2"
              sx={{
                color: neutral["A500"],
                fontWeight: 600,
                fontSize: { xs: 12, lg: 28 },
              }}
            >
              Popular Genres
            </Typography>
          </Box>
          <Box display="flex" columnGap={4} alignItems="center">
            {genres.map((genre, index) => (
              <OulinedButton
                key={index}
                onClick={() => UpdateGenre(genre.tag)}
                sx={{
                  color:
                    currGenre == genre.tag ? Blues["A200"] : neutral["A500"],
                  borderColor:
                    currGenre == genre.tag ? Blues["A200"] : neutral["A300"],
                }}
              >
                {genre.name}
              </OulinedButton>
            ))}
          </Box>
        </Box>
        <ListNovelsCarousel
          slides={slides}
          prevButtonClass="PopularNovelsPrev"
          nextButtonClass="PopularNovelsNext"
        />
      </Box>
    </Section>
  );
};

export default PopularGenre;
