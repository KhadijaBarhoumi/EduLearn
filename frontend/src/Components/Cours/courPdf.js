import React from "react";
import Avatar from "@mui/material/Avatar";
import PDFViewer from "pdf-viewer-reactjs";
import { useSelector } from "react-redux";
import { fontSize } from "@mui/system";

const Test = ({ cour }) => {
  const lien = cour.content;
  console.log(cour.user);
  const Courses = useSelector((state) => state.courReducer.courses);
  const users = useSelector((state) => state.userReducer.users);
  return (
    <div>
      <h1 style={{ color: "#0542b5", fontSize: "40px" }}>
        {cour.materialName}
      </h1>
      <h1 style={{ color: "#0542b5", fontSize: "30px" }}>{cour.title}</h1>
      <h2>Add by</h2>
      <h4 style={{ color: "#0542b5", fontSize: "20px" }}>
        <Avatar alt="Remy Sharp" src={cour && cour.user && cour.user.image} />
        {cour && cour.user && cour.user.firstName}{" "}
        {cour && cour.user && cour.user.lastName}
      </h4>{" "}
      mail:
      <span style={{ color: "#0542b5" }}>
        {cour && cour.user && cour.user.email}
      </span>
      <PDFViewer
        document={{
          url: lien,
        }}
      />
    </div>
  );
};

export default Test;
