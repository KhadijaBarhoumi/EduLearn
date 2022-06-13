import * as React from "react";
import "../../App.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Chart() {
  const user = useSelector((state) => state.userReducer.currentUser);

  return (
    <React.Fragment>
      {user.role == "student" ? (
        <div className="dashboard-welcome x-card-layer">
          <div className="dashboard-welcome__content x-flex-column-h-any-v-between">
            <div className="dashboard-welcome__content__body">
              <div className="dashboard-welcome__content__body__welcome">
                <span>
                  Welcome{" "}
                  <span className="dashboard-welcome__content__body__progress">
                    {user.firstName} <span>{user.lastName}</span>
                  </span>
                </span>
              </div>
              <div className="dashboard-welcome__content__body__member">
                <span>You are a member of </span>
                <span className="dashboard-welcome__content__body__progress">
                  Edulearn
                </span>
                <span> guild</span>
              </div>
              <div className="dashboard-welcome__content__body__member">
                <div>
                  <span>
                    {" "}
                    You have a{" "}
                    <span className="dashboard-welcome__content__body__progress">
                      {" "}
                      0%{" "}
                    </span>{" "}
                    learning progress in{" "}
                  </span>
                  <span className="dashboard-welcome__content__body__progress">
                    your course
                  </span>
                  <span> track</span>
                </div>
              </div>
            </div>
            <Link  to="/cours">
              <button
                type="button"
                style={{
                  color: "#fcfcfc",
                  backgroundColor: "#105be8",
                  borderColor: "#105be8",
                  borderRadius: "5px",
                  fontSize: "20px",
                }}
              >
                <span>Resume our course</span>
              </button>
            </Link >
          </div>
          <img
            className="dashboard-welcome__image"
            src="/image1.png"
            alt="Welcome back"
          />
        </div>
      ) : (
        <div className="dashboard-welcome x-card-layer">
          <div className="dashboard-welcome__content x-flex-column-h-any-v-between">
            <div className="dashboard-welcome__content__body">
              <div className="dashboard-welcome__content__body__welcome">
                <span>
                  Welcome{" "}
                  <span className="dashboard-welcome__content__body__progress">
                    {user.firstName} <span>{user.lastName}</span>
                  </span>
                </span>
              </div>
              <div className="dashboard-welcome__content__body__member">
                <span>You are a Teacher of </span>
                <span className="dashboard-welcome__content__body__progress">
                  Edulearn
                </span>
                <span> guild</span>
              </div>
            </div>
            <Link  to="/cours">
              <button
                type="button"
                style={{
                  color: "#fcfcfc",
                  backgroundColor: "#105be8",
                  borderColor: "#105be8",
                  borderRadius: "5px",
                  fontSize: "20px",
                }}
              >
                <span> your course</span>
              </button>
            </Link>
          </div>
          <img
            className="dashboard-welcome__image"
            src="/image1.png"
            alt="Welcome back"
          />
        </div>
      )}
    </React.Fragment>
  );
}
