import React from "react";
import admin from "./styles/admin.module.css";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { GrCopy } from "react-icons/gr";
import { Link } from "react-router-dom";
import Nav_admin from "../components/Nav_admin";
import View_users from "./View_users";

const sessions = [
  {
    date: "2021-01-18",
    time: "11:29",
    session_type: "aerobics zumba",
    trainer: "test1",
    session_link: "https://some_link.com",
  },
  {
    date: "2021-01-19",
    time: "11:29",
    session_type: "yoga",
    trainer: "test2",
    session_link: "https://some_link.com",
  },
  {
    date: "2021-01-20",
    time: "11:29",
    session_type: "aerobics zumba",
    trainer: "test3",
    session_link: "https://some_link.com",
  },
  {
    date: "2021-01-21",
    time: "11:29",
    session_type: "yoga",
    trainer: "test4",
    session_link: "https://some_link.com",
  },
  {
    date: "2021-01-22",
    time: "11:29",
    session_type: "aerobics zumba",
    trainer: "test5",
    session_link: "https://some_link.com",
  },
  {
    date: "2021-01-23",
    time: "11:29",
    session_type: "yoga",
    trainer: "test6",
    session_link: "https://some_link.com",
  },
  {
    date: "2021-01-24",
    time: "11:29",
    session_type: "aerobics zumba",
    trainer: "test7",
    session_link: "https://some_link.com",
  },
  {
    date: "2021-01-25",
    time: "11:29",
    session_type: "yoga",
    trainer: "test8",
    session_link: "https://some_link.com",
  },
];

export default function Admin_panel() {
  const handleCopy = (link) => {
    const el = document.createElement("textarea");
    el.value = link;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert("Copied the text: " + link);
  };
  return (
    <>
      <Nav_admin />
      <div className={admin.main}>
        <div className={admin.btn_ctr}>
          <button className={admin.add_sesn}>Add Session</button>
          <Link to="/admin_panel/sessions_completed">
            <button className={admin.add_sesn}>Session Completed</button>
          </Link>
          <button className={admin.add_trainer}>Add New Trainer</button>
          <button className={admin.remaning}>remaning sessions</button>
          <Link to="/admin_panel/pricing_portal">
            <button className={admin.pricing}>Pricing</button>
          </Link>
          <Link to="/admin_panel/view_users">
            <button className={admin.users}>view users</button>
          </Link>
        </div>

        <div className={admin.data}>
          <table className={admin.table}>
            <tr className={admin.table_r1}>
              <th>date</th>
              <th>time</th>
              <th>session type</th>
              <th>trainer alloted</th>
              <th>session link</th>
              <th>options</th>
            </tr>
            {sessions.map((obj, i) => {
              return (
                <tr key={i}>
                  <td>{obj.date}</td>
                  <td>{obj.time}</td>
                  <td>{obj.session_type}</td>
                  <td>{obj.trainer}</td>
                  <td>
                    {obj.session_link}
                    <GrCopy
                      onClick={() => handleCopy(obj.session_link)}
                      className={admin.cpybtn}
                    />
                  </td>
                  <td className={admin.options}>
                    <button>manage</button>
                    <RiDeleteBin3Fill className={admin.del_ssn} />
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
}
