// import React, { useMemo } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import List from "@mui/material/List";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import HomeIcon from "@mui/icons-material/Home";
// import ArticleIcon from "@mui/icons-material/Article";
// import EventIcon from "@mui/icons-material/Event";
// import FeedSharpIcon from "@mui/icons-material/FeedSharp";
// import PersonIcon from "@mui/icons-material/Person";

// import TabListItem from "./TabListItem";
// import { SITE_NAME } from "@/src/common/config/seo";
// import { Blues, neutral } from "@/src/common/config/colors";

// import {
//   FRONTEND_HOME_PAGE_URL,
//   FRONTEND_BLOGS_PAGE_URL,
//   FRONTEND_EVENTS_PAGE_URL,
//   FRONTEND_RESOURCES_PAGE_URL,
//   FRONTEND_USER_PROFILE_URL,
// } from "@/src/common/utils/constants";
// import { LOGO } from "@/src/accounts/utils/constants";
// import Events from "./Events";

// const TabList = ({ handleClick }) => {
//   const router = useRouter();

//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   const iconColor = (slug) => {
//     return router.pathname.startsWith(slug) ? Blues["A100"] : neutral["600"];
//   };

//   const SideBarTabs = useMemo(
//     () => [
//       {
//         id: "home",
//         name: "Home",
//         route: FRONTEND_HOME_PAGE_URL,
//         Icon: (
//           <HomeIcon
//             sx={{
//               color:
//                 router.pathname === FRONTEND_HOME_PAGE_URL
//                   ? Blues["A100"]
//                   : neutral["600"],
//               fontSize: 22,
//             }}
//           />
//         ),
//       },
//       {
//         id: "blogs",
//         name: "Blogs",
//         route: `${FRONTEND_BLOGS_PAGE_URL}`,
//         Icon: (
//           <ArticleIcon
//             sx={{ color: iconColor(FRONTEND_BLOGS_PAGE_URL), fontSize: 24 }}
//           />
//         ),
//       },
//       {
//         id: "events",
//         name: "Events",
//         route: `${FRONTEND_EVENTS_PAGE_URL}`,
//         Icon: (
//           <EventIcon
//             sx={{ color: iconColor(FRONTEND_EVENTS_PAGE_URL), fontSize: 22 }}
//           />
//         ),
//       },
//       {
//         id: "resources",
//         name: "Resources",
//         route: `${FRONTEND_RESOURCES_PAGE_URL}`,
//         Icon: (
//           <FeedSharpIcon
//             sx={{ color: iconColor(FRONTEND_RESOURCES_PAGE_URL), fontSize: 22 }}
//           />
//         ),
//       },
//       {
//         id: "profile",
//         name: "Profile",
//         route: `${FRONTEND_USER_PROFILE_URL}`,
//         Icon: (
//           <PersonIcon
//             sx={{ color: iconColor(FRONTEND_USER_PROFILE_URL), fontSize: 22 }}
//           />
//         ),
//       },
//     ],
//     [iconColor, router.pathname]
//   );
//   return (
//     <Box
//       pt={{ xs: 8, lg: 5 }}
//       pb={6}
//       px={4}
//       minHeight="100vh"
//       display="flex"
//       flexDirection="column"
//       justifyContent="space-between"
//     >
//       <Box>
//         <Box display="flex" flexDirection="column" rowGap={8}>
//           <Link href={"/home"}>
//             <Box display="flex" alignItems="center" columnGap={1}>
//               <Box display="flex">
//                 <Image src={LOGO} alt="logo" width={55} height={55} priority />
//               </Box>

//               <Typography
//                 variant="h2"
//                 component="span"
//                 sx={{
//                   color: Blues["A100"],
//                   fontWeight: 600,
//                   fontSize: { xs: 24, lg: 28 },
//                 }}
//               >
//                 {SITE_NAME}
//               </Typography>
//             </Box>
//           </Link>
//         </Box>

//         <List sx={{ my: 4 }}>
//           {SideBarTabs.map(({ id, Icon, route, name }) => (
//             <TabListItem
//               key={id}
//               Icon={Icon}
//               route={route}
//               name={name}
//               id={id}
//               handleClick={handleClick}
//             />
//           ))}
//         </List>

//         <Divider sx={{ bgcolor: neutral["A500"], opacity: 1, my: 4 }} />
//       </Box>
//     </Box>
//   );
// };

// export default TabList;
import React from "react";

const TabList = () => {
  return <div></div>;
};

export default TabList;
