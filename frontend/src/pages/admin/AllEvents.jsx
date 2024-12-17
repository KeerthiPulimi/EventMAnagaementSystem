import React, { useEffect, useState } from "react";

import AxiosAPI, { url } from "../AxiosAPI";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import AdminNav from "./AdminNav";

const AllEvents = () => {
  const faculty = JSON.parse(localStorage.getItem("faculty"));
  const [eventsF, setEventsF] = useState();
  const navigateTo = useNavigate();
  const [loading, setLoading] = useState(true);
  const getEventsByFaculty = async () => {
    try {
      await AxiosAPI.get(`/admin/events/`).then((response) => {
        console.log(response, "respo");
        setLoading(false);
        setEventsF(response.data.futureEvents
            );
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getEventsByFaculty();
  }, []);

  const deleteEvent = async (eventID) => {
    try {
      await AxiosAPI.delete(`/admin/event/${eventID}`).then(
        (responds) => {
          console.log(responds, "event ");
          toast.success("Event Deleted");
          navigateTo("/admin");
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const convertKeysToUpperCase = (data) => {
    return data.map((item) => {
      const newItem = {};
      Object.keys(item).forEach((key) => {
        newItem[key.toUpperCase()] = item[key];
      });
      return newItem;
    });
  };
  const excludeColumns = ["_id", "faculty", "pic", "__v"];

  const handleDownloadExcel = () => {
    const filteredData = eventsF.map((item) => {
      const filteredItem = { ...item };
      excludeColumns.forEach((column) => delete filteredItem[column]);
      return filteredItem;
    });
    const dataFordownloading = convertKeysToUpperCase(filteredData);
    const worksheet = XLSX.utils.json_to_sheet(dataFordownloading);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, "events.xlsx");
  };

  return (
    <div>
      <AdminNav/>
      <div className="back-color margin-top">
        <h4 className="text-white">Manage Events</h4>
        {loading && (
          <img src="/spinn.png" alt="" className="fa-spin " width={100} />
        )}
        <table className="table table-responsive table-dark">
          <thead>
            <tr>
              <th>S.NO</th>
              <th>TITLE</th>
              <th>LOCATION</th>
              <th>AVAILABLE SLOTS</th>
              <th>DATE</th>
              <th>DESCRIPTION</th>
              <th>PARTICIPANTS</th>
              <th>CLUB</th>
              <th>POSTER</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {eventsF &&
              eventsF.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.location}</td>
                  <td>{item.strength}</td>
                  <td>
                    {new Date(item.from_date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      // year: 'numeric',
                    })}{" "}
                    to{" "}
                    {new Date(item.to_date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      // year: 'numeric',
                    })}
                  </td>
                  <td>{item.description}</td>
                  <td>{item.participants}</td>
                  <td>{item.clubs}</td>
                  <td>
                    {" "}
                    <img
                      src={`${url}/events/${item.pic}`}
                      alt=""
                      className=""
                      style={{ width: "100px", height: "80px" }}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-light "
                      onClick={() => navigateTo(`/adminUpdateEvent/${item._id}`)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-light mt-1  "
                      onClick={() => deleteEvent(item._id)}
                    >
                      Delete
                    </button>
                    {/* <select name="" >
                            <option value="">Select</option>
                            <option value="">Update</option>
                            <option value="">Delete</option>
                        </select> */}
                  </td>
                </tr>
              ))}
            <tr>
              <td colSpan={10} className="text-center">
                <button
                  onClick={handleDownloadExcel}
                  className="btn btn-light "
                >
                  Download
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEvents;
