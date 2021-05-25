import { Checkbox, Radio } from "@material-ui/core";
import React from "react";
import PD from "./styles/pricingdetails.module.css";
import ScrollMenu from 'react-horizontal-scrolling-menu';

/*
          <div className={PD.exercise_sliding_bar}>
                        <button className={PD.sb_left_arrow_button}>&#10094;</button>
                        <div className={PD.type_exercise_container}>
                        <button className={PD.exercise_button}>Yoga</button>
                        <button className={PD.exercise_button}>Zumba</button>
                        <button className={PD.exercise_button}>Something</button>
                        </div><button className={PD.sb_right_arrow_button}>&#10095;</button>
                    </div>
*/ 
export default function Pricing_details(){
    function scrollToTop()
    {
        document.getElementById("pdFrame3").scrollIntoView(true);
    }
    const ArrowLeft=    <button id="leftArrow" className={PD.sb_left_arrow_button}>&#10094;</button>;
    const ArrowRight=<button id="rightArrow" className={PD.sb_right_arrow_button}>&#10095;</button>;
    const menu= [<button className={PD.exercise_button} key="1">Yoga1</button>,
    <button className={PD.exercise_button} key="2">Zumba2</button>,
    <button className={PD.exercise_button} key="3">Something3</button>,
    <button className={PD.exercise_button} key="4">Other4</button>,
    <button className={PD.exercise_button} key="5">Othesfdsr5</button>,
    <button className={PD.exercise_button} key="6">Otdfher6</button>,
    <button className={PD.exercise_button} key="7">Otsdsdher7</button>,
    <button className={PD.exercise_button} key="8">Otccher8</button>,
    <button className={PD.exercise_button} key="9">Otssssadher9</button>,
    <button className={PD.exercise_button} key="10">Othdder10</button>,
    <button className={PD.exercise_button} key="11">Othasdaer11</button>,
    <button className={PD.exercise_button} key="12">Othssser12</button>];
;
    return (
        <div className={PD.main_frame}>
            <div className={PD.pd_frame_1}>
                <p className={PD.pricing_text}>PRICING</p>
                <p className={PD.details_text}>DETAILS</p>
            </div>
            <div className={PD.pd_frame_2}>
                    <div className={PD.exercise_sliding_bar}>
                        <div className={PD.type_exercise_container}>
                        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          alignCenter={true}
        />
                        </div>
                    </div><br></br>
                    <div className={PD.session_selection_info_container}>
                        <div className={PD.session_selection_info_container_row1}>
                                <button className={PD.exercise_button}>Morning</button>
                                <button className={PD.exercise_button}>Afternoon</button>
                                <button className={PD.exercise_button}>Evening</button>
                        </div><br></br>
                        <div className={PD.session_selection_info_container_row2}>
                                <button className={PD.exercise_button}><h2>Begginner</h2><h4>For Starting the Fitness</h4></button>
                                <button className={PD.exercise_button}><p>Intermediate</p></button>
                                <button className={PD.exercise_button}><p>Advance</p></button>
                        </div><br></br><br></br>
                        <div className={PD.session_selection_info_container_row3}>
                            <div className={PD.trainers_tag}>Trainers</div>
                            <div className={PD.male_checkbox} ><input type="checkbox" id="maleCheckbox"></input> <label htmlFor="maleCheckbox">Male</label></div>&nbsp;&nbsp;
                            <div className={PD.female_checkbox}><input type="checkbox" id="femaleCheckbox"></input> <label htmlFor="femaleCheckbox">Female</label></div>
                        </div>
                    </div>
                    <button className={PD.search_button}>Search</button>
            </div>
            <div className={PD.pd_frame_3} id="pdFrame3">
                <div className={PD.right_side_filter_button}><button><img src="/assets/filter_icon.png"></img></button></div>
                <div className={PD.search_results_exercise}>
                    <table className={PD.search_results_exercise_table}><tr><td className={PD.left_side_exercise_contents}>
                    <span >
                        <p className={PD.left_exercise_name}>Yoga</p>
                        <p className={PD.left_exercise_information}>vFltness Is not lust about the body but also about the mind and soul. Welcome peace and tranquility Into your life with expert Yoga sessions Fitness is not just about the body but also about the mind and soul. Welcome peace and tranquility Into your life with expert Yoga sessions! Fitness is not just about the body but also about the mind and soul. Welcome peace and tranquility into your life with expert Yoga sessions!! </p>
                    </span>
                    </td>
                    <td className={PD.right_side_trainer_session_cards_column}>
                    <span className={PD.right_side_trainer_session_cards}>
                    <div className={PD.trainer_session_card}>


                            <div className={PD.octagon_outer}>
                                <div className={PD.octagon_inner}>
                                    <div className={PD.octagon_inner_most}>    
                                        <img className={PD.octagon_img1} src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"></img>
                                    </div>
                                </div>
                            </div><br></br><br></br>



                            <div className={PD.trainer_name_txt}>Trainer Name</div>
                            <div className={PD.trainer_exercise_txt}>YOGA ...rating</div>
                            <div className={PD.trainer_experience_txt}>Experience</div>
                            <div className={PD.trainer_monthly_fee_txt}>Monthly fee : 1200/-</div>
                            <div className={PD.trainer_slot_time_heading_txt}>Slot Time</div>
                            <div className={PD.trainer_slot_time_txt}>08:20 Am to 10:30 Am</div>
                        </div>
                        <div className={PD.trainer_session_card}>
                            <div className={PD.octagon_outer}>
                                <div className={PD.octagon_inner}>
                                    <div className={PD.octagon_inner_most}>    
                                        <img className={PD.octagon_img1} src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"></img>
                                    </div>
                                </div>
                            </div><br></br><br></br>
                            <div className={PD.trainer_name_txt}>Trainer Name</div>
                            <div className={PD.trainer_exercise_txt}>YOGA ...rating</div>
                            <div className={PD.trainer_experience_txt}>Experience</div>
                            <div className={PD.trainer_monthly_fee_txt}>Monthly fee : 1200/-</div>
                            <div className={PD.trainer_slot_time_heading_txt}>Slot Time</div>
                            <div className={PD.trainer_slot_time_txt}>08:20 Am to 10:30 Am</div>
                        </div>
                        <div className={PD.trainer_session_card}>
                            <div className={PD.octagon_outer}>
                                <div className={PD.octagon_inner}>
                                    <div className={PD.octagon_inner_most}>    
                                        <img className={PD.octagon_img1} src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"></img>
                                    </div>
                                </div>
                            </div><br></br><br></br>
                            <div className={PD.trainer_name_txt}>Trainer Name</div>
                            <div className={PD.trainer_exercise_txt}>YOGA ...rating</div>
                            <div className={PD.trainer_experience_txt}>Experience</div>
                            <div className={PD.trainer_monthly_fee_txt}>Monthly fee : 1200/-</div>
                            <div className={PD.trainer_slot_time_heading_txt}>Slot Time</div>
                            <div className={PD.trainer_slot_time_txt}>08:20 Am to 10:30 Am</div>
                        </div>
                        <div className={PD.trainer_session_card}>
                            <div className={PD.octagon_outer}>
                                <div className={PD.octagon_inner}>
                                    <div className={PD.octagon_inner_most}>    
                                        <img className={PD.octagon_img1} src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"></img>
                                    </div>
                                </div>
                            </div><br></br><br></br>
                            <div className={PD.trainer_name_txt}>Trainer Name</div>
                            <div className={PD.trainer_exercise_txt}>YOGA ...rating</div>
                            <div className={PD.trainer_experience_txt}>Experience</div>
                            <div className={PD.trainer_monthly_fee_txt}>Monthly fee : 1200/-</div>
                            <div className={PD.trainer_slot_time_heading_txt}>Slot Time</div>
                            <div className={PD.trainer_slot_time_txt}>08:20 Am to 10:30 Am</div>
                        </div>
                        <div className={PD.trainer_session_card}>
                            <div className={PD.octagon_outer}>
                                <div className={PD.octagon_inner}>
                                    <div className={PD.octagon_inner_most}>    
                                        <img className={PD.octagon_img1} src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"></img>
                                    </div>
                                </div>
                            </div><br></br><br></br>
                            <div className={PD.trainer_name_txt}>Trainer Name</div>
                            <div className={PD.trainer_exercise_txt}>YOGA ...rating</div>
                            <div className={PD.trainer_experience_txt}>Experience</div>
                            <div className={PD.trainer_monthly_fee_txt}>Monthly fee : 1200/-</div>
                            <div className={PD.trainer_slot_time_heading_txt}>Slot Time</div>
                            <div className={PD.trainer_slot_time_txt}>08:20 Am to 10:30 Am</div>
                        </div>
                        <div className={PD.trainer_session_card}>
                            <div className={PD.octagon_outer}>
                                <div className={PD.octagon_inner}>
                                    <div className={PD.octagon_inner_most}>    
                                        <img className={PD.octagon_img1} src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"></img>
                                    </div>
                                </div>
                            </div><br></br><br></br>
                            <div className={PD.trainer_name_txt}>Trainer Name</div>
                            <div className={PD.trainer_exercise_txt}>YOGA ...rating</div>
                            <div className={PD.trainer_experience_txt}>Experience</div>
                            <div className={PD.trainer_monthly_fee_txt}>Monthly fee : 1200/-</div>
                            <div className={PD.trainer_slot_time_heading_txt}>Slot Time</div>
                            <div className={PD.trainer_slot_time_txt}>08:20 Am to 10:30 Am</div>
                        </div>
                        <div className={PD.trainer_session_card}>
                            <div className={PD.octagon_outer}>
                                <div className={PD.octagon_inner}>
                                    <div className={PD.octagon_inner_most}>    
                                        <img className={PD.octagon_img1} src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"></img>
                                    </div>
                                </div>
                            </div><br></br><br></br>
                            <div className={PD.trainer_name_txt}>Trainer Name</div>
                            <div className={PD.trainer_exercise_txt}>YOGA ...rating</div>
                            <div className={PD.trainer_experience_txt}>Experience</div>
                            <div className={PD.trainer_monthly_fee_txt}>Monthly fee : 1200/-</div>
                            <div className={PD.trainer_slot_time_heading_txt}>Slot Time</div>
                            <div className={PD.trainer_slot_time_txt}>08:20 Am to 10:30 Am</div>
                        </div>
                        <div className={PD.go_up_button_div}><button style={{"background-color":"white"}}className={PD.go_up_button_button} onClick={()=>scrollToTop()}><img src="/assets/up_icon.png"></img></button></div>

                    </span>
                    </td></tr></table>
                </div>
            </div>
        </div>
    );
}