import React, { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Blues, neutral } from "../../config/colors";

const SearchBar = ({
  handleSearch,
  placeholder = "Search",
  textFieldProps,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef(null);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <TextField
      placeholder={placeholder}
      type="search"
      variant="standard"
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ fontSize: 20, color: neutral["A400"] }} />
          </InputAdornment>
        ),
        disableUnderline: true,
      }}
      onFocus={handleFocus}
      onBlur={handleBlur}
      sx={{
        transition: "width 0.3s",
        width: isFocused ? 350 : 250, // Set your desired expanded width here
        "& .MuiInputBase-root": {
          color: neutral["A500"],
          py: 2,
          px: 4,
          borderRadius: 3, // Adjust the border radius as needed
          //   border: "none",
          //   borderColor: "#",
          border: "1px solid #2F3A46",
          bgcolor: "#161C20",
          boxShadow: "inset 0 1px 1px #1014,0 1px 0.5px #0B0D0E",
        },
        // '& .MuiOutlinedInput-root': {
        //     borderRadius: '25px', // Adjust the border radius as needed
        //     border: 'none', // Remove border
        //   },
        //   '&:hover .MuiOutlinedInput-root': {
        //     border: 'none', // Remove border on hover
        //   },
      }}
    />
  );
};

export default SearchBar;
