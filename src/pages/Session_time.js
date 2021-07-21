import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import axios from 'axios'
import Session_table from './Session_table'
const useStyles = makeStyles((theme) => ({

  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const Session_time = () => {
  const classes = useStyles();
  const [session, setSession] = React.useState('');
  const [selectday, setSelectDay] = useState('');
  const [starttime, setStarttime] = useState();
  const [endtime, setEndtime] = useState();
  const [monthPrice, setMonthPrice]=useState('')
  const [monthSession, setMonthSession]=useState();
  let sunday = 'sunday';
  let monday = 'monday';
  let tuesday = 'tuesday';
  let wednesday = 'wednesday';
  let thrusday = 'thrusday';
  let friday = 'friday';
  let saturday = 'saturday';


  console.log(monthSession)

  const changeMonthSession=(e)=>{
    setMonthSession(e.target.value)
  }
  const changeMonthPrice = (e)=>{
    setMonthPrice(e.target.value)
  }
  const handleChangeday = (e) => {
    setSelectDay(e.target.value);
  };
  const handleChange = (event) => {
    setSession(event.target.value);
  };
  const handleTimeChange = (e) => {
    setStarttime(e.target.value);
  }
  const handleTimeChangeEnd = (e) => {
    setEndtime(e.target.value);
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    const res = await axios.post('https://api.fitbuddy.co.in/Sessionschedule/',
      {session:session, day:selectday,totalsessionm:monthSession, totalprice:monthPrice, time:starttime,endtime:endtime})
    console.log(res)
    console.log("submited", session, selectday, starttime, endtime, monthSession,monthPrice)
  }
  return (
    <div>
    < MainContainer>
      <form onSubmit={handleSubmit}>
        <Time>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">Session</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"

              value={session}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Yoga</MenuItem>
              <MenuItem value={2}>Aerobics</MenuItem>
              <MenuItem value={3}>Weight loss</MenuItem>
            </Select>
          </FormControl>
          <TimeSelect>
            <div className={classes.container}>
              <TextField
                id="time"
                label=" Start-Time"
                type="time"
                defaultValue="07:30"
                className={classes.textField}
                onChange={handleTimeChange}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
              />
              <h2>TO</h2>
            </div>
            <div className={classes.container}>
              <TextField
                id="time"
                label=" End-Time"
                type="time"
                defaultValue="07:30"
                className={classes.textField}
                onChange={handleTimeChangeEnd}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
              />
            </div>
          </TimeSelect>

          <div>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-controlled-open-select-label">Day Select</InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"

                value={selectday}
                onChange={handleChangeday}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={sunday}>Sunday</MenuItem>
                <MenuItem value={monday}>Monday</MenuItem>
                <MenuItem value={tuesday}>Tuesday</MenuItem>
                <MenuItem value={wednesday}>Wednesday</MenuItem>
                <MenuItem value={thrusday}>Thrusday</MenuItem>
                <MenuItem value={friday}>Friday</MenuItem>
                <MenuItem value={saturday}>Saturday</MenuItem>
              </Select>
            </FormControl>
          </div>
           <div> 
             <TextField id="standard-basic" 
             label="No.of session in month"
              type="number"
              value={monthSession}
              onChange={changeMonthSession}
               />
              
              
             <TextField id="standard-basic" 
             label="Monthly Price" 
             value={monthPrice}
             onChange={changeMonthPrice}
             type="number" />

           </div>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Time>
      </form>
    </ MainContainer>
     
     <div>
     <Session_table />
      </div>

    </div>
  )
}

export default Session_time

const MainContainer = styled.div`
margin-top: 6rem;
`

const Time = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 0 10px;
`;
const TimeSelect = styled.div`
display: flex;
margin-top: 25px;
`