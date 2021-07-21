import React, {useEffect, useState}  from 'react'
import {useSelector} from 'react-redux';
import axios from 'axios';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'session', headerName: 'Session', width: 200 },
  { field: 'day', headerName: 'Day', width: 200 },
  { field: 'time', headerName: 'Start Time', width: 200 },
  { field: 'endtime',headerName: 'End Time',width: 200,},
  { field: 'totalsessionm', headerName: 'Session in Month', width:200 },
  {field: 'totalprice', headerName: 'Total Price', width: 200 },
 /* {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  },*/
];

const Session_table = ()=>{
  const [data, setData]=useState()
	 useEffect(()=>{
    const fetchData =async()=>{
    	const res = await axios.post('https://api.fitbuddy.co.in/Psessionschedule/',9834419768)
    	console.log('resssss',res.data.data)
      setData(res.data.data)
      }
      fetchData()
	 },[])
    if(data===undefined){
      return <h2> loading...</h2>
    }
	return(
          <div> 
       <div style={{ height: 400, width: '100%' }}>

      <DataGrid rows={data} columns={columns} pageSize={5}  />
    </div>
         </div>
		)
}

export default Session_table