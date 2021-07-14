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
          <Tab label="Videos" />
          <Tab label="My Workout" />
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
            src="data:image/jpeg;base64,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"
          />
          <img
            className={classes.img}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7w_qbMR5r82584Qm8is6CLWMGUpoTFolkAw&usqp=CAU"
          />
          <img
            className={classes.img}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwSondEXYr9gqVyCykWRGiPitebuwPjMXdFg&usqp=CAU"
          />
          <img
            className={classes.img}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbN5A2mzdjD_mcf9Sb2gnRBzgyYi9rTBAtPw&usqp=CAU"
          />
          <img
            className={classes.img}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSdykiY-UoF-RFhTnRPwY6y2ypEzAnkSH5w&usqp=CAU"
          />
          <img
            className={classes.img}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3XmOHETTHkfZpgzhPGgrEGqb-pmhbia3Bw&usqp=CAU"
          />
          <img
            className={classes.img}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNu6mR3UoBLeDSWAcBk1RNgIuw97zWYjsJhA&usqp=CAU"
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="myworkout" style={{
         
        }}>
          <div  style={{
            display: 'flex',
            justifyContent:'space-between',
            alignItems:'center',
            padding: '5px'
          }}>
            <span style={{
              border: '1px solid black',
              borderRadius: '10px',
              paddingRight:2,
              paddingLeft:4,
              fontWeight:"bold",
              cursor: "pointer"
            }}>strength</span>
            <span style={{
              border: '1px solid black',
              borderRadius: '10px',
              paddingRight:2,
              paddingLeft:4,
              fontWeight:"bold",
              cursor: "pointer"
            }}>yoga</span>
            <span style={{
              border: '1px solid black',
              borderRadius: '10px',
              paddingRight:2,
              paddingLeft:4,
              fontWeight:"bold",
              cursor: "pointer"
            }}>zumba</span>
            <span style={{
              border: '1px solid black',
              borderRadius: '10px',
              paddingRight:2,
              paddingLeft:4,
              fontWeight:"bold",
              cursor: "pointer"
            }}>aerobic</span>
          </div>
          <div className="two"  style={{
            display: 'flex',
            justifyContent:'space-between',
            alignItems:'center',
            marginTop: '15px' }}>
            <span style={{
              border: '1px solid black',
              borderRadius: '10px',
              paddingRight:2,
              paddingLeft:4,
              width: '20%'
            }}> <input type="text" placeholder="core area" style={{border:'none',outline:'none'}} /> </span>
            <span style={{
              border: '1px solid black',
              borderRadius: '10px',
              paddingRight:2,
              paddingLeft:4,
              width: '20%'
            }}><input type="text" placeholder="excersize" style={{border:'none',outline:'none'}} /></span>
            <span style={{
              border: '1px solid black',
              borderRadius: '10px',
              paddingRight:2,
              paddingLeft:4,
              width: '100px'
            }}><input type="text" placeholder="muscle workout" style={{border:'none',outline:'none'}} /></span>
          </div>
          <div className="three" style={{
            marginTop:'10px'
          }}>
           <textarea name="benifits" id="" cols="30" rows="5"></textarea>
          </div>
          <div className="four"  style={{
            display: 'flex',
            justifyContent:'space-between',
            alignItems:'center',
            padding: '5px'
          }}>
          <span style={{
              border: '1px solid black',
              borderRadius: '10px',
              paddingRight:2,
              paddingLeft:4,
              width: '20%'
            }}> <input type="text" placeholder="user level" style={{border:'none',outline:'none'}} /> </span>
            <span style={{
              border: '2px solid black',
              borderRadius: '10px',
              paddingRight:2,
              paddingLeft:4,
              width: '20%'
            }}><input type="text" placeholder="rep count" style={{border:'none',outline:'none'}} /></span>
            <span style={{
              border: '2px solid black',
              borderRadius: '10px',
              paddingRight:2,
              paddingLeft:4,
              width: '100px'
            }}><input type="text" placeholder="time" style={{border:'none',outline:'none'}} /></span>
          </div>
          <div className="five" style={{
            display: "flex",
            justifyContent:'center',
            alignItems:'center'
          }}>
            <button style={{
              backgroundColor:'black',
              color: "white",
              border: "none",
              outline: "none"
            }}>submit</button>
          </div>
        </div>

      </TabPanel>
    </div>
  );
}
