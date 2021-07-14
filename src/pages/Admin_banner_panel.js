import React from "react";
import { useState ,useEffect} from "react";
import axios from 'axios';
export default function Admin_banner_panel() {
  const [displayimg,setdisplayimg]=useState();
    const [image,setimage]=useState();
    const [show,setshow]=useState();
    const[imgurl,setimgurl]=useState("");
    useEffect(()=>{
      axios.get('http://3.137.209.222:8000/slider/').then(res =>{ console.log(res.data[0])});
    },[])

    function encodeImageFileAsURL(element) {
      var file = element.files[0];
      if(file!=undefined)
      {
      var filename=element.value.slice(12);
      console.log(filename);
      var extension=filename.substring(filename.lastIndexOf('.')+1, filename.length);
      var type="image/"+extension.toLowerCase();
      var reader = new FileReader();
      reader.onloadend = function(e) {
        var arrayBuffer=e.target.result;
        console.log(arrayBuffer);
        setimgurl(arrayBuffer.toString());
        console.log(arrayBuffer.toString());
      }
      reader.readAsDataURL(file);
    }
    }

   function handleimage(e){
     console.log(e.target.files);
     setimage(e.target.files);
   }
   function handlesubmit(event){
     event.preventDefault();
     const urlpath="https://api.fitbuddy.co.in/ImageUpload/";



     const url="https://api.fitbuddy.co.in/slider/";

     const formData = new FormData();
     formData.append('file',image[0])
     const obj = {'image':image[0].name}
     console.log('name',obj);
     console.log(formData);
     console.log(typeof(imgurl));
    axios.post(urlpath,formData).then(res=>console.log(res));
    axios.post(url,obj).then(res=>console.log(res))
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
       </div> 
    </>
  );
 
  
}
