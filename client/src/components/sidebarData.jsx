import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import InterpreterModeIcon from "@mui/icons-material/InterpreterMode";
import AlbumIcon from "@mui/icons-material/Album";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import SearchIcon from '@mui/icons-material/Search';
export const sidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "Search",
    icon: <SearchIcon />,
    link:"/Search"
  },
  {
    title: "Playlists",
    icon: <LibraryMusicIcon />,
    link: "/Playlists",
  },
  {
    title: "Artists",
    icon: <InterpreterModeIcon />,
    link: "/Artists",
  },
  {
    title: "Albums",
    icon: <AlbumIcon />,
    link: "/Albums",
  },
  {
    title: "Songs",
    icon: <MusicNoteIcon />,
    link: "/Songs",
  },
  {
    title: "Downloads",
    icon: <ArrowCircleDownIcon />,
    link: "/Downloads",
  },
];
