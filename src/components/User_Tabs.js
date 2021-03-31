import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "32rem",
    overflowY: "scroll",
    backgroundColor: theme.palette.background.paper,
  },
  img: {
    height: "8rem",
    width: "8rem",
    objectFit: "cover",
    boxShadow: "0 0 14px 4px #0000002b",
    cursor: "pointer",
    transition: "all ease 0.2s",
    margin: "0.6rem 0",
    "&:hover": {
      boxShadow: "0 0 14px 4px #0000004a",
    },
  },
}));

export default function Trainer_Tabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Photos" />
          <Tab label="My Workout" />
          <Tab label="Previous Session" />
          <Tab label="Upcoming Session" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            width: "26rem",
          }}
        >
          <img
            className={classes.img}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSszUzp_iiDQkmF54VmyWx4__xvHMFCxwXq0Q&usqp=CAU"
          />
          <img
            className={classes.img}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOJHUnO5aTobXoB4gtGgyZq-Mp3ZzqSWTAqA&usqp=CAU"
          />
          <img
            className={classes.img}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5hO9OxdF2DzZC8NuhC8fqMoTz7lVt88Cnew&usqp=CAU"
          />
          <img
            className={classes.img}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu1huWqUkDepppFgmiqGqhYOqC9wo2Nn3dgQ&usqp=CAU"
          />
          <img
            className={classes.img}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNs8aLTyhwyvmhiVoNTNegnltiIaVrJOiGuQ&usqp=CAU"
          />
          <img
            className={classes.img}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqkKJAuniPUhVq3nfsPlX95E1vw0tSIzDfPA&usqp=CAU"
          />
          <img
            className={classes.img}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk4wwrG2_AOEj9NIylvLc_bU-DrwEFL47NuA&usqp=CAU"
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </div>
  );
}
