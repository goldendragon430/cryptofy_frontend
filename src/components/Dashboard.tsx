import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import { BiArrowToLeft } from "react-icons/bi";
import {
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState, useEffect } from "react";
import { AiFillDashboard, AiTwotoneHome } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { TbMilitaryAward } from "react-icons/tb";
import { GiCircleClaws } from "react-icons/gi";
import { TiMessages } from "react-icons/ti";
import { BiStats } from "react-icons/bi";
import { FaQuestionCircle } from "react-icons/fa";
import { RiFolderWarningLine } from "react-icons/ri";
import { LuBanknote } from "react-icons/lu";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Link } from "@mui/material";
import { useApi } from "../contexts/ApiContext";
import { useAuth } from '../contexts/SessionContext'
import Imgsrc from '../assets/tron.svg'
import { BACKEND_URL } from "../config";

const drawerWidth = 240;
const image_url_1 = BACKEND_URL + 'get_file?name=banner_2.png'

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Dashboard() {
  const [open, setOpen] = useState(true);
  const [user, { logout }] = useAuth()
  const navigate = useNavigate()
  const [bannerVisible, setbannerVisible] = useState(true);
  const token = user?.token;
  const [bonusinfo, setBonusInfo] = useState({
    start_day: '',
    end_day: '',
    bonus_rate: ''
  })
  const [{ doPost }] = useApi()
  const path = window.location.pathname;
  const onLogout = () => {
    logout()
    navigate('/')
    localStorage.removeItem('showed')
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDismissBanner = () => {
    setbannerVisible(false);
  }

  useEffect(() => {
    const handleResize = () => {
      const isLSorSMOrMD = window.matchMedia('(max-width: 1023px)').matches;
      // const isSMOrMD = window.matchMedia('(min-width: 640px) and (max-width: 1023px)').matches;
      setOpen(!isLSorSMOrMD);
    };

    handleResize(); // Initialize visibility based on initial screen size

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [sidebarItems, setSidebarItems] = useState([
    {
      text: "Dashboard",
      active: path == '/dashboard',
      link: "",
      icon: <AiFillDashboard className="text-xl font-bold text-cblack" />,
    },
    {
      text: "Deposit",
      active: path == '/dashboard/deposit',
      link: "deposit",
      icon: <LuBanknote className="text-xl font-bold text-cblack" />,
    },
    {
      text: "Affiliate program",
      active: path == '/dashboard/affiliate',
      link: "affiliate",
      icon: <BsPeopleFill className="text-xl font-bold text-cblack" />,
    },
    {
      text: "Bonuses",
      active: path == '/dashboard/bonuses',
      link: "bonuses",
      icon: <TbMilitaryAward className="text-xl font-bold text-cblack" />,
    },
    {
      text: "Home",
      active: false,
      link: "/",
      icon: <AiTwotoneHome className="text-xl font-bold text-cblack" />,
    },
    {
      text: "FAQ",
      active: false,
      link: "/faq",
      icon: <FaQuestionCircle className="text-xl font-bold text-cblack" />,
    },
    {
      text: "Affiliate program",
      active: false,
      link: "/affiliate-program",
      icon: <BsPeopleFill className="text-xl font-bold text-cblack" />,
    },
    {
      text: "About Us",
      active: false,
      link: "/about-us",
      icon: <RiFolderWarningLine className="text-xl font-bold text-cblack" />,
    },
    {
      text: "Terms",
      active: false,
      link: "/terms",
      icon: <GiCircleClaws className="text-xl font-bold text-cblack" />,
    },
    {
      text: "Statistics",
      active: false,
      link: "/#statistics",
      icon: <BiStats className="text-xl font-bold text-cblack" />,
    },

    {
      text: "Contact us",
      active: false,
      link: "/contacts",
      icon: <TiMessages className="text-xl font-bold text-cblack" />,
    },
  ]);

  const handleLableActiveness = (link: string) => {
    setSidebarItems((prevData) => {
      return prevData.map((data) => {
        if (data.active) {
          data.active = false;
        }
        return data.link === link ? { ...data, active: !data.active } : data;
      });
    });
  };
  const get_bonus_information = async () => {
    const result = await doPost('mining/get_event_info', {
      token: token
    })
    if (result.error || result.result == 'failed') {

    }
    else {
      if (result.data) {
        setBonusInfo(result.data)
        setbannerVisible(true)
      }
    }
  }
  useEffect(() => {
    if (token) {
      get_bonus_information()
    }
  }, [token])

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "50px",
      }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{ backgroundColor: "white", height: "5rem", boxShadow: "none" }}
        className="w-[80%]"
      >
        <Toolbar className="flex h-full w-full items-center justify-between shadow-md">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { opacity: "0" }),
              borderRight: "2px solid black",
            }}
          >
            <img src={Imgsrc} className="h-8 w-8 " />
          </IconButton>

          {/* //////////////Banner/////////// */}
          {bannerVisible &&
            <div className=" fade-alert absolute isolate flex items-center gap-x-6 bg-gray-50 px-12 py-6 sm:px-3.5 sm:before:flex-1 top-0 rounded-b-lg w-full right-0 transform -transform-x-1/2 bg-img3 bg-cover bg-center" style={{ backgroundImage: `url(${image_url_1})` }}>
              <div className="flex flex-wrap items-center place-content-center gap-x-4 gap-y-2">
                <p className="gap-4 flex items-center flex-col lg:flex-row">
                  <span className="text-xl">{bonusinfo['start_day'].substring(0, 10)} ~ {bonusinfo['end_day'].substring(0, 10)}</span>
                  <strong className="font-semibold text-black text-3xl">Deposit bonus {bonusinfo['bonus_rate']}%</strong>
                </p>
                <button type="button" className="flex gap-2 text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2" onClick={() => { navigate('/dashboard/deposit') }}>
                  <img src={Imgsrc} alt="" className="h-6 w-6" />
                  Deposit Now
                </button>
                {/* <a href="#" className="flex-none rounded-full bg-white px-3.5 py-1 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white">Deposit now <span aria-hidden="true">→</span></a> */}
              </div>
              <div className="flex flex-1 justify-end">
                <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]" onClick={handleDismissBanner}>
                  <span className="sr-only">Dismiss</span>
                  <svg className="h-5 w-5 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                  </svg>
                </button>
              </div>
            </div>
          }
          <button className="whitespace-nowrap px-8 py-4 rounded-bl-lg rounded-tr-lg bg-colord text-base text-white" onClick={onLogout}>
            Log out
          </button>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader
          sx={{ paddingY: "1.3rem" }}
          className="flex w-full items-center justify-between gap-8"
        >
          <Link
            onClick={() => { navigate('/') }}
            className="flex h-full w-full items-center justify-center gap-2"
          >
            <img src={Imgsrc} alt="" className="h-8 w-8" />
            <span className="text-xl font-bold text-cblack">TRX Mining</span>
          </Link>
          <IconButton onClick={handleDrawerClose}>
            <BiArrowToLeft className="text-cblack" />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List
          sx={{
            px: 1,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
            marginTop: "26px"
          }}
        >
          {open && (
            <span
              className="mx-2 text-sm font-semibold uppercase transition"
              onClick={() => setSidebarItems}
            >
              Account
            </span>
          )}
          {sidebarItems.slice(0, 4).map((item, index) => {
            const { text, active, link, icon } = item;
            return (
              <ListItem
                key={index}
                disablePadding
                sx={{ display: "block" }}
                className={`${!active ? "bg-gray-200" : "bg-colord"
                  } transition-all duration-300 hover:bg-colord hover:text-white`}
                onClick={() => handleLableActiveness(link)}
              >
                <NavLink to={link}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{ opacity: open ? 1 : 0 }}
                      className={`hover:text-white ${active ? "text-white" : "text-cblack"
                        }`}
                    />
                  </ListItemButton>
                </NavLink>
              </ListItem>
            );
          })}
          {open && (
            <span className="mx-2 text-sm font-semibold uppercase transition-all duration-300">
              other
            </span>
          )}
          {sidebarItems.slice(4).map((item, index) => {
            const { text, active, link, icon } = item;
            return (
              <ListItem
                key={index}
                disablePadding
                sx={{ display: "block" }}
                className={`${!active ? "bg-gray-200" : "bg-colord"
                  } transition-all duration-300 hover:bg-colord hover:text-white`}
                onClick={() => handleLableActiveness(link)}
              >
                <NavLink to={link}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{ opacity: open ? 1 : 0 }}
                      className={`hover:text-white ${active ? "text-white" : "text-cblack"
                        }`}
                    />
                  </ListItemButton>
                </NavLink>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <Outlet />
      <footer className="fixed bottom-0 flex w-full flex-col items-center justify-center gap-2 border-t border-t-gray-200 bg-white py-4">
        <p className="font-medium lg:ml-32 lg:text-lg">
          Copyright © 2023. All right reserved.
        </p>
      </footer>
    </Box>
  );
}
