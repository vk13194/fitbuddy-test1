import React from "react";
import { useState ,useEffect} from "react";
import axios from 'axios';
export default function Admin_banner_panel() {
  const [displayimg,setdisplayimg]=useState();
    const [image,setimage]=useState();
    const [show,setshow]=useState();
    useEffect(()=>{
      axios.get('http://3.137.209.222:8000/slider/').then(res =>{ console.log(res.data[0])});
    },[])



   function handleimage(e){
     console.log(e.target.files);
     setimage(e.target.files);
   }
   function handlesubmit(event){
     event.preventDefault();
     const url="http://3.137.209.222:8000/slider/";
     const formData = new FormData();
     formData.append('file',image[0])
     const obj = {'image':image[0]}
     if(image !== null){
      axios.post(url, obj).then(res=>{
          console.log('result',res);
      }).catch(error => {
        console.error('There was an error!', error);
    });
     }
    
   }

  return (
    <>

     <div className="sliderform" style={{
       height: 700,
       display: 'flex',
       justifyContent:'center',
       alignItems:'center'
            }}>
       <form action="submit"  onSubmit={(event)=>handlesubmit(event)}>
         <input type="file" name="image" id="image" onChange={(e)=>handleimage(e)} />
         <button type="submit">submit</button>
       </form>
      <div className="test">
        <img src={show} alt="here to test show" />
      </div>
       </div> 
     
    </>
  );
 
  
}
