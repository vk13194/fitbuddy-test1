import React from "react";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import completed from "./styles/completed.modules.css";
import Nav_admin from "../components/Nav_admin";

const data = [
  {
    session_type: "aerobics-zumba",
    trainer: "Test trainer",
    session_time: "05:00 am",
    session_date: "01-01-2021",
    registered_users: [
      {
        name: "user1",
        age: 18,
        height: 142,
        weight: 71,
      },
      {
        name: "user2",
        age: 18,
        height: 172,
        weight: 72,
      },
      {
        name: "user3",
        age: 21,
        height: 172,
        weight: 72,
      },
      {
        name: "user5",
        age: 32,
        height: 162,
        weight: 75,
      },
    ],
    present_users: [
      {
        name: "user1",
        age: 18,
        height: 142,
        weight: 71,
        ratings: 4,
      },
      {
        name: "user1",
        age: 18,
        height: 142,
        weight: 71,
        ratings: 4,
      },
      {
        name: "user3",
        age: 21,
        height: 172,
        weight: 72,
        ratings: 5,
      },
      {
        name: "user5",
        age: 32,
        height: 162,
        weight: 75,
        ratings: 4,
      },
    ],
    overall_ratings: 4.1,
  },
  {
    session_type: "aerobics-zumba",
    trainer: "Test trainer",
    session_time: "05:00 am",
    session_date: "01-01-2021",
    registered_users: [
      {
        name: "user1",
        age: 18,
        height: 142,
        weight: 71,
      },
      {
        name: "user2",
        age: 18,
        height: 172,
        weight: 72,
      },
      {
        name: "user3",
        age: 21,
        height: 172,
        weight: 72,
      },
      {
        name: "user5",
        age: 32,
        height: 162,
        weight: 75,
      },
    ],
    present_users: [
      {
        name: "user1",
        age: 18,
        height: 142,
        weight: 71,
        ratings: 4,
      },
      {
        name: "user3",
        age: 21,
        height: 172,
        weight: 72,
        ratings: 5,
      },
      {
        name: "user5",
        age: 32,
        height: 162,
        weight: 75,
        ratings: 4,
      },
    ],
    overall_ratings: 4.1,
  },
  {
    session_type: "strength-workout",
    trainer: "Test trainer",
    session_time: "05:00 am",
    session_date: "01-01-2021",
    registered_users: [
      {
        name: "user1",
        age: 18,
        height: 142,
        weight: 71,
      },
      {
        name: "user2",
        age: 18,
        height: 172,
        weight: 72,
      },
      {
        name: "user3",
        age: 21,
        height: 172,
        weight: 72,
      },
      {
        name: "user4",
        age: 18,
        height: 172,
        weight: 72,
      },
      {
        name: "user5",
        age: 32,
        height: 162,
        weight: 75,
      },
    ],
    present_users: [
      {
        name: "user5",
        age: 32,
        height: 162,
        weight: 75,
        ratings: 4,
      },
    ],
    overall_ratings: 4.1,
  },
  {
    session_type: "yoga",
    trainer: "Test trainer",
    session_time: "05:00 am",
    session_date: "01-01-2021",
    registered_users: [
      {
        name: "user2",
        age: 18,
        height: 172,
        weight: 72,
      },
      {
        name: "user3",
        age: 21,
        height: 172,
        weight: 72,
      },
      {
        name: "user4",
        age: 18,
        height: 172,
        weight: 72,
      },
      {
        name: "user5",
        age: 32,
        height: 162,
        weight: 75,
      },
    ],
    present_users: [
      {
        name: "user1",
        age: 18,
        height: 142,
        weight: 71,
        ratings: 4,
      },
      {
        name: "user3",
        age: 21,
        height: 172,
        weight: 72,
        ratings: 5,
      },
      {
        name: "user5",
        age: 32,
        height: 162,
        weight: 75,
        ratings: 4,
      },
    ],
    overall_ratings: 4.1,
  },
  {
    session_type: "aerobics-zumba",
    trainer: "Test trainer",
    session_time: "05:00 am",
    session_date: "01-01-2021",
    registered_users: [
      {
        name: "user1",
        age: 18,
        height: 142,
        weight: 71,
      },
      {
        name: "user2",
        age: 18,
        height: 172,
        weight: 72,
      },
      {
        name: "user1",
        age: 18,
        height: 142,
        weight: 71,
      },
      {
        name: "user3",
        age: 21,
        height: 172,
        weight: 72,
      },
      {
        name: "user4",
        age: 18,
        height: 172,
        weight: 72,
      },
      {
        name: "user5",
        age: 32,
        height: 162,
        weight: 75,
      },
    ],
    present_users: [
      {
        name: "user3",
        age: 21,
        height: 172,
        weight: 72,
        ratings: 5,
      },
      {
        name: "user5",
        age: 32,
        height: 162,
        weight: 75,
        ratings: 4,
      },
    ],
    overall_ratings: 4.1,
  },
  {
    session_type: "strength-workout",
    trainer: "Test trainer",
    session_time: "05:00 am",
    session_date: "01-01-2021",
    registered_users: [
      {
        name: "user1",
        age: 18,
        height: 142,
        weight: 71,
      },
      {
        name: "user2",
        age: 18,
        height: 172,
        weight: 72,
      },
      {
        name: "user3",
        age: 21,
        height: 172,
        weight: 72,
      },
      {
        name: "user4",
        age: 18,
        height: 172,
        weight: 72,
      },
      {
        name: "user5",
        age: 32,
        height: 162,
        weight: 75,
      },
    ],
    present_users: [
      {
        name: "user5",
        age: 32,
        height: 162,
        weight: 75,
        ratings: 4,
      },
    ],
    overall_ratings: 4.1,
  },
  {
    session_type: "yoga",
    trainer: "Test trainer",
    session_time: "05:00 am",
    session_date: "01-01-2021",
    registered_users: [
      {
        name: "user2",
        age: 18,
        height: 172,
        weight: 72,
      },
      {
        name: "user3",
        age: 21,
        height: 172,
        weight: 72,
      },
      {
        name: "user4",
        age: 18,
        height: 172,
        weight: 72,
      },
      {
        name: "user5",
        age: 32,
        height: 162,
        weight: 75,
      },
    ],
    present_users: [
      {
        name: "user1",
        age: 18,
        height: 142,
        weight: 71,
        ratings: 4,
      },
      {
        name: "user3",
        age: 21,
        height: 172,
        weight: 72,
        ratings: 5,
      },
      {
        name: "user5",
        age: 32,
        height: 162,
        weight: 75,
        ratings: 4,
      },
    ],
    overall_ratings: 4.1,
  },
];

export default function Sessions_completed() {
  const history = useHistory();

  const handleClick = (obj) => {
    const session = JSON.stringify(obj);
    console.log(session);
    history.push(`/sessions_completed/session_details/${session}`);
  };

  return (
    <div className={completed.main}>
      <Nav_admin />
      <table>
        <tr>
          <th>session_type</th>
          <th>trainer</th>
          <th>time</th>
          <th>date</th>
          <th>registered users</th>
          <th>attended by</th>
          <th>overall ratings</th>
        </tr>
        {data.map((session, i) => {
          return (
            <tr key={i} onClick={()=> handleClick(session)}>
              <td>{session.session_type}</td>
              <td>{session.trainer}</td>
              <td>{session.session_time}</td>
              <td>{session.session_date}</td>
              <td>{session.registered_users.length}</td>
              <td>{session.present_users.length}</td>
              <td>{session.overall_ratings}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
