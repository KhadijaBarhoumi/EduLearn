import React from "react";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import {deletevideo} from "../../Redux/Actions/Libraryaction"

const Library = ({ el }) => {
  const user = useSelector((state) => state.userReducer.currentUser);
  const dispatch = useDispatch();

  return (
    <div className="card" style={{ width: "22rem"  ,borderColor:"#0542b5"}}>
      <video width={320} height={240} controls>
        <source src={el.video} type="video/mp4" />
      </video>
      <div className="card-body">
        <h4 className="card-title" style={{color:"#0542b5"}}>{el.title}</h4>
        <p className="card-text"></p>
        {user && user.role == "prof" ? (
          <Button
                            size="small"
                            onClick={() =>
                              dispatch(deletevideo(el._id))
                            }
                            style={{backgroundColor:" #0542b5",color:" white"}}
                          >
                            Delete
                          </Button>
            
          
        ) : null}
      </div>
    </div>
  );
};

export default Library;
