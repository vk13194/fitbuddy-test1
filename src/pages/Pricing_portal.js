import React, { useState, useRef, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin7Line } from "react-icons/ri";
import pricing from "./styles/pricing.module.css";

const fetchedSessions = [
  "fitness sessions",
  "yoga sessions",
  "Aerobics sessions",
  "Martial art sessions",
];

export default function Pricing_portal() {
  const [packages, setPackages] = useState([
    {
      name: "chota pack",
      price: 499,
      sessions: [10, 4, 3, 0],
      thumbnail:
        "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Zml0bmVzc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    },
    {
      name: "yoga pack",
      price: 999,
      sessions: [0, 12, 0, 0],
      thumbnail:
        "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Zml0bmVzc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    },
    {
      name: "martial arts",
      price: 1299,
      sessions: [0, 0, 0, 12],
      thumbnail:
        "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Zml0bmVzc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    },
  ]);
  const [sessions, setSessions] = useState(fetchedSessions);
  const [sessionRender, setSessionRender] = useState(false);
  const [packRender, setPackRender] = useState(false);
  const [renderDeleteHandler, setRenderDeleteHandler] = useState(false);
  const [renderEditHandler, setRenderEditHandler] = useState(false);
  const [indexVal, setIndexVal] = useState(null);
  const [renderTedit, setTedit] = useState(false);

  const onEditHandler = (i) => {
    // console.log('i',i);
    setIndexVal(i);
    setRenderEditHandler(!renderEditHandler);
  };

  const onTeditHandler = (i) => {
    setIndexVal(i);
    setTedit(!renderTedit);
  };
  const Tedit = () => {
    const [edit_thumb, setEdit_thumb] = useState(null);
    const onChangeHandler = (e) => {
      setEdit_thumb(e.target.files[0]);
    };
    const onClickHandler = () => {
      // (edit_thumb == null) ? setTedit(!renderTedit) :
    };
    return (
      <>
        <div className={pricing.create_ssn}>
          <div className={pricing.thumb_edit_div}>
            <input
              onChange={(event) => onChangeHandler(event)}
              className={pricing.inp_edit_thumb}
              type="file"
            />
            <button onClick={onClickHandler} className={pricing.btn_edit_thumb}>
              save
            </button>
            <button
              onClick={() => setTedit(!renderTedit)}
              className={pricing.btn_edit_thumb}
            >
              exit
            </button>
          </div>
        </div>
      </>
    );
  };

  const EditHandler = () => {
    const Ename = JSON.parse(JSON.stringify(packages[indexVal].name));
    const Eprice = JSON.parse(JSON.stringify(packages[indexVal].price));
    const Esession = Object.assign([], packages[indexVal].sessions);

    // console.log("name: ", Ename, "price:", Eprice, "session:", Esession);
    const [Edit_name, setEdit_name] = useState(Ename);
    const [Edit_price, setEdit_price] = useState(Eprice);
    const [Edit_sessions, setEdit_sessions] = useState(Esession);
    const onClickHandler = () => {
      const payload = {
        name: Edit_name,
        price: Edit_price,
        sessions: Edit_sessions,
      };
      packages.splice(indexVal, 1, payload);
      // setPackages(packages);
      setRenderEditHandler(!renderEditHandler);
    };

    return (
      <>
        <div className={pricing.inp}>
          <input
            value={Edit_name}
            onChange={(event) => setEdit_name(event.target.value)}
            className={pricing.new_pack}
          />
          <input
            value={Edit_price}
            onChange={(event) => setEdit_price(event.target.value)}
            className={pricing.new_pack}
          />
          <div className={pricing.new_pack_ssns}>
            {Edit_sessions.map((ssn, i) => {
              return (
                <input
                  type="number"
                  key={i}
                  placeholder={ssn}
                  onChange={(event) =>
                    Edit_sessions.splice(i, 1, parseInt(event.target.value)) &&
                    setEdit_sessions(Edit_sessions)
                  }
                  required
                />
              );
            })}
          </div>
          <div className={pricing.edit_btn_ctr}>
            <button onClick={() => onClickHandler()}>save changes</button>
            <button
              id={pricing.edit_btn_exit}
              onClick={() => setRenderEditHandler(!renderEditHandler)}
            >
              exit
            </button>
          </div>
        </div>
        <div className={pricing.create_ssn}></div>
      </>
    );
  };

  const deleteHandler = (i) => {
    console.log(i);
    setIndexVal(i);
    setRenderDeleteHandler(!renderDeleteHandler);
  };

  const OnDeleteHandler = () => {
    const onInpTrue = (i) => {
      const temp_sessn = sessions.filter((sesn, index) => {
        return index !== i;
      });
      setSessions(temp_sessn);
      packages.map((p) => {
        p.sessions.splice(i, 1);
      });
      setPackages(packages);
    };
    return (
      <div
        onClick={() => setRenderDeleteHandler(!renderDeleteHandler)}
        className={pricing.confirm}
      >
        <p className={pricing.confirm_text}>are you sure?</p>
        <span>
          <button
            className={pricing.confirm_yes}
            onClick={() => onInpTrue(indexVal)}
          >
            yes
          </button>
          <button className={pricing.confirm_no} onClick={() => {}}>
            no
          </button>
        </span>
      </div>
    );
  };

  const SessionInput = () => {
    const ssn_ref = useRef("");
    const onClickHandler = () => {
      setSessions([...sessions, ssn_ref.current.value]);
      setSessionRender(!sessionRender);
    };
    return (
      <>
        <form className={pricing.inp}>
          <input ref={ssn_ref} placeholder="session name" />
          <button onClick={onClickHandler}>add now</button>
        </form>
        <div
          onClick={() => setSessionRender(!sessionRender)}
          className={pricing.create_ssn}
        ></div>
      </>
    );
  };

  const PackInput = () => {
    const pack_ref = useRef("");
    const price_ref = useRef(null);
    const pack_details_ref = useRef([]);

    const onClickHandler = () => {
      const inputs = Array.from(pack_details_ref.current.children);
      const payload_name = pack_ref.current.value;
      const payload_price = price_ref.current.value;
      let payload_sessions = [];
      inputs.map((inp, i) => {
        payload_sessions = [...payload_sessions, parseInt(inp.value)];
      });
      const payload = {
        name: payload_name,
        price: payload_price,
        sessions: payload_sessions,
      };
      setPackages([...packages, payload]);
      setPackRender(!packRender);
    };
    // useEffect(() => {
    //   console.log("task done: ", packages);
    // }, [packages]);

    return (
      <>
        <div className={pricing.inp}>
          <input
            required
            ref={pack_ref}
            className={pricing.new_pack}
            placeholder="pack name"
          />
          <input
            ref={price_ref}
            type="number"
            placeholder="price"
            required
            className={pricing.new_pack}
          />
          <div className={pricing.new_pack_ssns} ref={pack_details_ref}>
            {sessions.map((ssn, i) => {
              return (
                <input
                  required
                  type="number"
                  key={i}
                  placeholder={ssn}
                  required
                />
              );
            })}
          </div>
          <button onClick={onClickHandler}>add now</button>
        </div>
        <div
          onClick={() => setPackRender(!packRender)}
          className={pricing.create_ssn}
        ></div>
      </>
    );
  };

  const addSession = () => {
    setSessionRender(!sessionRender);
  };
  const addPack = () => {
    setPackRender(!packRender);
  };
  return (
    <div className={pricing.main}>
      <div className={pricing.btn_ctr}>
        <button className={pricing.add_btn} onClick={addSession}>
          add session
        </button>
        <button className={pricing.add_btn} onClick={addPack}>
          add pack
        </button>
      </div>
      {sessionRender && <SessionInput />}
      {packRender && <PackInput />}
      {renderDeleteHandler && <OnDeleteHandler />}
      {renderEditHandler && <EditHandler />}
      {renderTedit && <Tedit />}
      <table>
        <tr>
          <th>Package Name</th>
          <th>Price</th>
          <th>Thumbnail</th>
          {sessions.map((sessn, i) => {
            return (
              <>
                <th className={pricing.sessions_heading}>
                  {sessn}
                  <RiDeleteBin7Line
                    className={pricing.del}
                    onClick={() => deleteHandler(i)}
                  />
                </th>
              </>
            );
          })}
        </tr>
        {packages.map((pack, i) => {
          return (
            <tr>
              <td className={pricing.name_ctr}>
                {pack.name}
                <FaRegEdit
                  onClick={() => onEditHandler(i)}
                  className={pricing.edit}
                />
              </td>
              <td>{pack.price}</td>

              <td>
                <div className={pricing.thumb_ctr}>
                  <a href={pack.thumbnail}> view thumbnail</a>
                  <FaRegEdit
                    className={pricing.edit2}
                    onClick={() => onTeditHandler(i)}
                  />
                </div>
              </td>
              {sessions.map((session, i) => {
                return <td>{pack.sessions[i] ? pack.sessions[i] : 0}</td>;
              })}
            </tr>
          );
        })}
      </table>
    </div>
  );
}
