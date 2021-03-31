import React from "react";
import card from "./styles/session_card.module.css";

export default function Session_card({
  label,
  thumb_image,
  description,
  read_more_link,
  trainer,
  trainer_image,
  color,
}) {
  return (
    <>
      <div className={card.ctr} style={{ background: color }}>
        <div
          className={card.backgroundImg}
          style={{
            backgroundImage: `url(${thumb_image})`,
            backgroundSize: "cover",
          }}
        />

        <div className={card.ctr1}>
          <div>
            <p className={card.label}>{label}</p>
            <p className={card.desc}>{description}</p>
            <button>READ MORE</button>
          </div>
          <div className={card.trainer_info}>
            <img
              className={card.round_trainer}
              alt="image"
              src={trainer_image}
            />
            <p>{trainer}</p>
          </div>
        </div>
        <img className={card.ctr2} alt="image" src={thumb_image} />
      </div>
    </>
  );
}
