import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { deleteProfile, readProfile } from "../APIRequest/APIRequest";
const ProfileData = () => {
  let [data, setData] = useState([]);
  let [change, setChange] = useState(0);

  useEffect(() => {
    (async () => {
      let res = await readProfile();
      setData(res);
    })();
  }, [change]);

  const onDelete = async (id) => {
    let res = await deleteProfile(id);
    if (res) {
      toast.success("Delete successfully");
      setChange(new Date().getTime());
    } else {
      toast.error("Request Fail!");
    }
  };

  if (data.length === 0) {
    return (
      <div>
        <h3>Loading.....</h3>
      </div>
    );
  } else {
    return (
      <div>
        <table className="ListTable">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Address</th>
              <th>Email</th>
              <th>Mobile No</th>
              <th>Nationality</th>
              <th>Admission Date</th>
              <th>Course</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item["firstName"]}</td>
                  <td>{item["lastName"]}</td>
                  <td>{item["gender"]}</td>
                  <td>{item["dateOfBirth"]}</td>
                  <td>{item["address"]}</td>
                  <td>{item["email"]}</td>
                  <td>{item["mobileNumber"]}</td>
                  <td>{item["nationality"]}</td>
                  <td>{item["admissionDate"]}</td>
                  <td>{item["course"]}</td>
                  <td>
                    <button
                      className="deleteBtn"
                      onClick={() => {
                        onDelete(item["_id"]);
                      }}
                    >
                      Delete
                    </button>

                    <Link
                      className="editLink"
                      to={"/register?id=" + item["_id"]}
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Toaster position="bottom-center" />
      </div>
    );
  }
};

export default ProfileData;
