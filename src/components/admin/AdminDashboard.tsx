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
import { BsPeopleFill } from "react-icons/bs";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiFillProfile, AiOutlineOrderedList, AiTwotoneHome } from "react-icons/ai";
import { FaQuestionCircle, FaMoneyCheck } from "react-icons/fa";
import { RiFolderWarningLine } from "react-icons/ri";
import { GiCircleClaws } from "react-icons/gi";
import { TiMessages } from "react-icons/ti";
import { MdDashboard } from "react-icons/md"
import { TbAffiliateFilled } from "react-icons/tb";
import { useAuth } from "../../contexts/SessionContext";
import Imgsrc from '../../assets/tron.png'
const drawerWidth = 300;

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
  const navigate = useNavigate()
  const [, { logout }] = useAuth()

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const onLogout = () => {
    logout()
    navigate('/')
  }
  const handleDrawerClose = () => {
    setOpen(false);
  };

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

  const path = window.location.pathname;
  const [sidebarItems, setSidebarItems] = useState([
    {
      text: "Dashboard",
      active: path == '/admin',
      link: "",
      icon: <MdDashboard className="text-xl font-bold text-cblack" />,
    },
    {
      text: "Users",
      active: path == '/admin/users',
      link: "users",
      icon: <BsPeopleFill className="text-xl font-bold text-cblack" />,
    },
    {
      text: "Deposit",
      active: path == '/admin/deposit',
      link: "deposit",
      icon: <FaMoneyCheck className="text-xl font-bold text-cblack" />,
    },
    {
      text: "Withdrawals",
      active: path == '/admin/withdrawals',
      link: "withdrawals",
      icon: <FaMoneyCheck className="text-xl font-bold text-cblack" />,
    },
    {
      text: "Event Banner",
      active: path == '/admin/event-banner',
      link: "event-banner",
      icon: <AiFillProfile className="text-xl font-bold text-cblack" />,
    },
    {
      text: "Payment Gateway",
      active: false,
      link: "payment-gateway",
      icon: <FaMoneyCheck className="text-xl font-bold text-cblack" />,
    },

    {
      text: "Plan Management",
      active: path == '/admin/plan-management',
      link: "plan-management",
      icon: <AiOutlineOrderedList className="text-xl font-bold text-cblack" />,
    },
    {
      text: "Affiliate Management",
      active: path == '/admin/affiliate-management',
      link: "affiliate-management",
      icon: <TbAffiliateFilled className="text-xl font-bold text-cblack" />,
    },
    {
      text: "Edit Contact",
      active: path == '/admin/edit-contact',
      link: "edit-contact",
      icon: <AiFillProfile className="text-xl font-bold text-cblack" />,
    },
    {
      text: "Home",
      active: path == '/',
      link: "/",
      icon: <AiTwotoneHome className="text-xl font-bold text-cblack" />,
    },
    {
      text: "FAQ",
      active: path == '/faq',
      link: "/faq",
      icon: <FaQuestionCircle className="text-xl font-bold text-cblack" />,
    },
    {
      text: "Affiliate program",
      active: path == '/affiliate-program',
      link: "/affiliate-program",
      icon: <BsPeopleFill className="text-xl font-bold text-cblack" />,
    },
    {
      text: "About Us",
      active: path == '/about-us',
      link: "/about-us",
      icon: <RiFolderWarningLine className="text-xl font-bold text-cblack" />,
    },
    {
      text: "Terms",
      active: path == '/terms',
      link: "/terms",
      icon: <GiCircleClaws className="text-xl font-bold text-cblack" />,
    },
    {
      text: "Contacts",
      active: path == '/contacts',
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
            to="/"
            className="flex h-full w-full items-center justify-center gap-2"
          >
            <img src={Imgsrc} alt="" className="h-8 w-8" />
            <span className="text-xl font-bold text-cblack">Trx.uk</span>
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
              className="mx-2 text-sm font-semibold uppercase text-cblack transition"
              onClick={() => setSidebarItems}
            >
              Account
            </span>
          )}
          {sidebarItems.slice(0, 9).map((item, index) => {
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
            <span className="mx-2 text-sm font-semibold uppercase text-cblack transition-all duration-300">
              other
            </span>
          )}
          {sidebarItems.slice(10).map((item, index) => {
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
