import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';

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
   const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));
   const [starttime,setStarttime]=useState();
   const [endtime,setEndtime]=useState();

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };
   const handleChange = (event) => {
    setSession(event.target.value);
  };
  const handleTimeChange=(e) => {
    setStarttime(e.target.value);
  }
  const handleTimeChangeEnd=(e) => {
    setEndtime(e.target.value);
  }
const handleSubmit =(e)=>{
  e.preventDefault();
  console.log("submited",session, selectedDate,starttime,endtime)
}
  return (
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
          <div  className={classes.container}>
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
          <div  className={classes.container}>
          <TextField
        id="time"
        label=" Start-Time"
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
          <TextField
        id="date"
        label="DaySelect "
        type="date"
        defaultValue="2021-05-24"
        onChange={handleDateChange}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
          </div>
        <Button variant="contained" color="primary" type="submit">
           Submit
         </Button> 
         </Time>
        </form>
       </ MainContainer> 
    )
}

export default Session_time

const MainContainer =styled.div`
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