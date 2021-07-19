import { green } from "@material-ui/core/colors";
import { getNodeText } from "@testing-library/dom";
import {react,useState} from "react";
import { FaNetworkWired } from "react-icons/fa";
import st from "./styles/session.timing.module.css";
import Navbar from "./Navbar";
export default function Session_timing(){

    const [timeStatus, setTimeStatus] = useState(false);
    const [dayStatus , setDayStatus] = useState(false);
    const [addButtonStatus, setAddButtonStatus] = useState(false);
    const [dayUlList, setDayUlList] = useState("none");
   
    console.log('timeStatus', timeStatus, dayUlList, dayUlList)

    const sessionDropDownList=[       
        <td colSpan="2" id="firstRowColumn1">      
        <select className={st.exercise_button} onChange={(event)=>SessionChangeHandler(event)} >
        <option selected>&#60;select&#62;</option>
        <option>Yoga</option>
        <option>Gymnastics</option>
        </select>
        {addButtonStatus && <button className={st.plus_button} id="addButton" onClick={(event)=>addNewRow()} ><img src='./assets/plus_icon.png'></img></button>}
        </td>
];
    const timeDropDownList=[ <td id="firstRowColumn2">
        <select className={st.exercise_button} onChange={(event)=>TimeChangeHandler(event)}>
        <option selected>&#60;select&#62;</option>
        <option>10Am to 11Am</option>
        <option>11Am to 11:40Am</option>
        </select>
        </td>
    ];
    const dayDropDownList=[<td id="firstRowColumn3">
        <select className={st.exercise_button} onChange={(event)=>DayChangeHandler(event)}>
        <option selected>&#60;select&#62;</option>
        <option>Monday</option>
        <option>Tuesday</option>
        </select>
        </td>
    ];
     const columnData=[
    //<p>{document.getElementById("firstRowColumn2").style.display}</p>
    ];
    const data=[columnData];
   function SessionChangeHandler(event){
       let tr=document.getElementById("firstRow");
    /*   if(event.target.value=="<select>")
       {
        document.getElementById("firstRowColumn2").children[0].style.display="none";
        document.getElementById("firstRowColumn3").children[0].style.display="none";
       }
       else
       {
            document.getElementById("firstRowColumn2").children[0].style.display="block";
       }
       */
      if(event.target.value=="<select>") 
      {
          setTimeStatus(false);
          setDayStatus(false);
          setAddButtonStatus(false)
      }
      else 
      {
          setTimeStatus(true);
      }
   }
   function TimeChangeHandler(event){
       let tr=document.getElementById("firstRow");
      /* if(event.target.value=="<select>")
       {
        document.getElementById("firstRowColumn3").children[0].style.display="none";
       }
       else
       {
            document.getElementById("firstRowColumn3").children[0].style.display="block";
       }*/
       if(event.target.value.substring(0,2)=="--" && event.target.value.substring(3,5)=="--") 
       {
           setDayStatus(false);
           setAddButtonStatus(false);
       }
       else setDayStatus(true);
   }
   function DayChangeHandler(event){
       var lis=event.target.parentElement.parentElement.getElementsByTagName("li");
       var flag="false";  
       for(var i=0; i<lis.length;i++)
       {
           if(lis[i].getElementsByTagName("input")[0].checked==true) flag="true";
       }
       if(flag=="false")
       {
        setAddButtonStatus(false);
       }
       else if(flag=="true")
       {
        setAddButtonStatus(true);
       }
   }
   function dayListHandler(){
       if(dayUlList=="none") setDayUlList("block");
       else setDayUlList("none");
   }
   function deleteRow(event){
       //document.removeChild(event.target.previousElementSibling);
       //document.removeChild(event.target);
       if(event.target.parentElement.getElementsByTagName("div")[1]==null) document.getElementById("mainTable").removeChild(event.target.parentElement.parentElement);
       else{
           var divid=event.target.previousElementSibling.id;
       var split=divid.split(",");
       var session=split[0];
       var number=split[1];
       var type=split[2];
       console.log(session+number+"time");
       if(type=="day") document.getElementById(session+","+number+",time").remove();
       if(type=="time") document.getElementById(session+","+number+",day").remove();
       event.target.previousElementSibling.remove();
       event.target.nextSibling.remove();
       event.target.remove();
       }
}

function newRowCreation(session,time,day)
{
    var newtr=document.createElement("tr");
    var newtd=document.createElement("td");
    var newdiv=document.createElement('div');
    newdiv.innerHTML=session;
    newdiv.className=st.exercise_button;
    newdiv.id=session+",1,session";
    newtd.appendChild(newdiv);
    newtd.colSpan="2";
    newtr.appendChild(newtd);
    newtd=document.createElement("td");
    newdiv=document.createElement('div');
    newdiv.innerHTML=time;
    newdiv.className=st.exercise_button;
    newdiv.id=session+",1,time";
    newtd.appendChild(newdiv);
    newtd.colSpan="2";
    newtr.appendChild(newtd);

    newtd=document.createElement("td");
    newdiv=document.createElement('div');
    newdiv.innerHTML=day;
    newdiv.className=st.exercise_button_day;
    newdiv.id=session+",1,day";
    newtd.appendChild(newdiv);
    var newbutton=document.createElement('button');
    newbutton.className=st.delete_button;
    newbutton.onclick=(event)=>deleteRow(event);
     newtd.appendChild(newbutton);
     newtd.appendChild(document.createElement("br"));
    newtd.colSpan="2";
    newtd.className=st.column;
   newtr.appendChild(newtd);
return newtr;
}
function addToExisting(row,time,day)
{

    return null;
}
function addNewRow()
   {
       let table=document.getElementById("mainTable");
    
       let tr=table.getElementsByTagName("tr");

       if(tr.length<=3){
        var i=0;
        while(i!=tr.length-2) 
        {
            i++;
        }
         var td=tr[i].getElementsByTagName("td");
        var session=td[0].children[0].value;
        td[0].children[0].value="<select>";
        var time=td[1].children[0].children[0].value+" to "+td[1].children[0].children[1].value;
        td[1].children[0].children[0].value="--:--";
        td[1].children[0].children[1].value="--:--";
        var day="";
        var lis=td[2].children[1].getElementsByTagName("li");
        console.log(td[2].children[0]+"--"+td[2].children[1]);
        for(var k=0;k<lis.length;k++){
            if(lis[k].getElementsByTagName("input")[0].checked==true) {
                if(day!="") day=day+",";
                day=day+((lis[k].innerText).substring(0,3));
            }
        } 
        //td[2].children[0].value="<select>";
 
        var backupTr=tr[i];
        var buttonTr=tr[i+1];
        table.removeChild(tr[i+1]);
        table.removeChild(tr[i]);
        var newtr=newRowCreation(session,time,day);
        table.appendChild(newtr);
        table.appendChild(backupTr);
        table.appendChild(buttonTr);
        setTimeStatus(false);
        setDayStatus(false);
        setAddButtonStatus(false); 
       }
       else{
        var i=0;
        while(i!=tr.length-2) 
        {
            i++;
        }
        var td=tr[i].getElementsByTagName("td");
        var newsession=td[0].children[0].value;
        td[0].children[0].value="<select>";
        var newtime=td[1].children[0].children[0].value+" to "+td[1].children[0].children[1].value;
        td[1].children[0].children[0].value="--:--";
        td[1].children[0].children[1].value="--:--";
        var newday=td[2].children[0].value;
        var day="";
        var lis=td[2].children[1].getElementsByTagName("li");
        console.log(td[2].children[0]+"--"+td[2].children[1]);
        for(var k=0;k<lis.length;k++){
            if(lis[k].getElementsByTagName("input")[0].checked==true) {
                if(day!="") day=day+",";
                day=day+((lis[k].innerText).substring(0,3));
            }
        } 
        newday=day;
        //td[2].children[0].value="<select>";
        var backupTr=tr[i];
        var buttonTr=tr[i+1];
        table.removeChild(tr[i+1]);
        table.removeChild(tr[i]);
         var i=1;
        while(i<=tr.length-1) //as last two rows are removed above 
        {
            var oldtd=tr[i].getElementsByTagName("td");
            var session=oldtd[0].getElementsByTagName("div")[0].innerText.trim();
            var tt=oldtd[1].getElementsByTagName("div")[0].innerText.trim();
            var dd=oldtd[2].getElementsByTagName("div")[0].innerText.trim();
            console.log(session+"--"+tt+"--"+dd);
            console.log(newsession,newtime,newday);
            if(newsession == session)
            {
                if(session==newsession && tt==newtime && dd==newday)
                {
                    console.log("in");
                    //do nothing
                    break;
                }
                    var j=0;
                var timedivs=oldtd[1].getElementsByTagName("div");
                var daydivs=oldtd[2].getElementsByTagName("div");
                while(j<=timedivs.length-1){
                    timedivs[j].id=session+","+(j+1)+",time";
                    daydivs[j].id=session+","+(j+1)+",day";
                    console.log(timedivs[j].id+"==="+daydivs[j].id);
                    j++;
                }
                var newDiv=document.createElement("div");
                newDiv.innerHTML=newtime;
                newDiv.className=st.exercise_button;
                newDiv.id=session+","+(j+1)+",time";
                oldtd[1].appendChild(newDiv);
                
                newDiv=document.createElement("div");
                newDiv.innerHTML=newday;
                newDiv.className=st.exercise_button_day;
                newDiv.id=session+","+(j+1)+",day";
                oldtd[2].appendChild(newDiv);
                var newbutton=document.createElement('button');
                newbutton.className=st.delete_button;
                newbutton.onclick=(event)=>deleteRow(event);
                oldtd[2].appendChild(newbutton);
                oldtd[2].appendChild(document.createElement("br"));
                break;
            }
            i++;
        }
        if(i>tr.length-1)
        {
            var newtr=newRowCreation(newsession,newtime,newday);
            table.appendChild(newtr);
        }
    table.appendChild(backupTr);
        table.appendChild(buttonTr);
        setTimeStatus(false);
        setDayStatus(false);
        setAddButtonStatus(false);             
       }
    }
         /*while(i!=tr.length-2) 
       {
           i++;
       }
       var td=tr[i].getElementsByTagName("td");
       var session=td[0].children[0].value;
       td[0].children[0].value="<select>";
       var time=td[1].children[0].value;
       td[1].children[0].value="<select>";
       var day=td[2].children[0].value;
       td[2].children[0].value="<select>";
       var j=0;
       while(j!=tr.length-2)
        {
            var tdgroup=tr[j].getElementsByTagName("td");
            if(tdgroup[0]==null){
                
            }
            else if(tdgroup[0].getElementsByTagName("select")[0].value==session)
       {
        var newdiv=document.createElement('div');
        newdiv=document.createElement('div');
        newdiv.innerHTML=time;
        newdiv.className=st.exercise_button;
        tdgroup[1].appendChild(newdiv);
        newdiv=document.createElement('div');
        newdiv.innerHTML=day;
        newdiv.className=st.exercise_button_day;
        tdgroup[2].appendChild(newdiv);
       }
       j++;
        }
       var backupTr=tr[i];
       var buttonTr=tr[i+1];
       table.removeChild(tr[i+1]);
       table.removeChild(tr[i]);
       /*var newtr=document.createElement("tr");
       var newtd=document.createElement("td");
       var newdiv=document.createElement('div');
       newdiv.innerHTML=session;
       newdiv.className=st.exercise_button;
     newtd.appendChild(newdiv);
     newtd.colSpan="2";
       newtr.appendChild(newtd);
       var elements=[
       <td><div>{time}</div></td>,
       <td><div>{day}</div></td>];
       newtd=document.createElement("td");
       newdiv=document.createElement('div');
       newdiv.innerHTML=time;
       newdiv.className=st.exercise_button;
       newtd.appendChild(newdiv);
       newdiv=document.createElement('div');
       newdiv.innerHTML=time;
       newdiv.className=st.exercise_button;
       newtd.appendChild(newdiv);
         newtd.colSpan="2";
       newtr.appendChild(newtd);

       newtd=document.createElement("td");
       newdiv=document.createElement('div');
       newdiv.innerHTML=day;
       newdiv.className=st.exercise_button_day;
       newtd.appendChild(newdiv);
       var newbutton=document.createElement('button');
       newbutton.className=st.delete_button;
       newbutton.onclick=(event)=>deleteRow(event);
        newtd.appendChild(newbutton);
       newtd.colSpan="2";
       newtd.className=st.column;
      newtr.appendChild(newtd);
       table.appendChild(newtr);
    */
       /*
       <div id="dayListDiv" className={st.dropdown_check_list} tabIndex="100">
  <span className={st.anchor} onClick={(evt) =>{
      var checkList = document.getElementById('dayListDiv');
  if (checkList.getElementsByClassName(st.items)[0].style.display=="none") checkList.getElementsByClassName(st.items)[0].style.display="block";
  else checkList.getElementsByClassName(st.items)[0].style.display="none";
}
}>Select Days</span>
  <ul id="days_ul_list" className={st.items} >
    <li><input type="checkbox" />Monday </li>
    <li><input type="checkbox" />Tuesday</li>
  </ul>
</div>

                 <select className={st.exercise_button} onChange={(event)=>DayChangeHandler(event)}>
                <option selected>&#60;select&#62;</option>
                <option>Monday</option>
                <option>Tuesday</option>
                </select>

                                 <select className={st.exercise_button} onChange={(event)=>TimeChangeHandler(event)}>
                 <option selected>&#60;select&#62;</option>
                 <option>10Am to 11Am</option>
                 <option>11Am to 11:40Am</option>
                 </select>

                */
            
   return (
       < > 
       <Navbar/>
       <div style={{display:"flex", justifyContent:"center" ,alignItems:"center" ,height:'80vh'}}>
        <div className={st.main_frame} style={{width:"1200px"}}>
            <table id="mainTable" className={st.session_timing_table}>
                <tr>
                    <th colSpan="2">Session</th>
                    <th colSpan="2">Time</th>
                    <th colSpan="2">Day</th>
                </tr>
                <tr id="firstRow">
                    {sessionDropDownList}
                 {  
                 timeStatus && (<td colSpan="2" id="firstRowColumn2">
                 <span className={st.exercise_button_time} onChange={(event)=>TimeChangeHandler(event)} style={{width:'300px',height:'40px',display:'flex',justifyContent:"center", alignItems:'center'}}>
                 From <input style={{"border-radius":"5px"}} type="time"></input> To <input style={{"border-radius":"5px"}} type="time"></input>
                 </span>
                 </td>) 
                 }
                 {
                dayStatus &&(<td colSpan="2" id="firstRowColumn3" onChange={(event)=>DayChangeHandler(event)} >
                    <span className={st.exercise_button_span} onClick={()=>dayListHandler()}> Select Day &#x25BC;
                    </span><ul className={st.exercise_button_ul_list} style={{"display": dayUlList}}>
                        <li><input type="checkbox"></input>Monday</li>
                        <li><input type="checkbox"></input>Tuesday</li>
                        <li><input type="checkbox"></input>Wednesday</li>
                        <li><input type="checkbox"></input>Thursday</li>
                        <li><input type="checkbox"></input>Friday</li>
                        <li><input type="checkbox"></input>Saturday</li>
                        <li><input type="checkbox"></input>Sunday</li>
                        
                    </ul>
      </td>)                
                 }
                 </tr>
                {data}
                <tr>
                <td colSpan="3"><button className={st.cancel_button}>Cancel</button></td>
                <td colSpan="3"><button className={st.save_button}>Save</button></td>
                </tr>
            </table>
        </div>
        </div>
        </>
    );
}