import React from "react";
import { useParams } from "react-router-dom";
import details from "./styles/details.module.css";

export default function Session_details() {
  const { obj } = useParams();
  const session = JSON.parse(obj);
  console.log(session);
  return (
    <div className={details.main}>
      <div className={details.upper_txt}>
        <p>session type: {session.session_type}</p>
        <p>trainer: {session.trainer}</p>
        <p>session time: {session.session_time}</p>
      </div>
      <p className={details.tag}>registered users:</p>
      <table>
        <tr>
          <th>name</th>
          <th>age</th>
          <th>height</th>
          <th>weight</th>
        </tr>
        {session.registered_users.map((user) => {
          return (
            <tr>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.height}</td>
              <td>{user.weight}</td>
            </tr>
          );
        })}
      </table>
      <p className={details.tag}>attended by:</p>
      <table>
        <tr>
          <th>name</th>
          <th>age</th>
          <th>height</th>
          <th>weight</th>
          <th>ratings</th>
        </tr>
        {session.present_users.map((user) => {
          return (
            <tr>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.height}</td>
              <td>{user.weight}</td>
              <td>{user.ratings}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
