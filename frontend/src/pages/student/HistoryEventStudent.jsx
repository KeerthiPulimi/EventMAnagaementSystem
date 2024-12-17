import React, { useEffect, useState } from "react";

import AxiosAPI from "../AxiosAPI";
import StudentNav from "./StudentNav";
import { useNavigate } from "react-router-dom";

const HistoryEventStudent = () => {
  const faculty = JSON.parse(localStorage.getItem("user"));
  const [history, setHistory] = useState({});
  const navigateTo=useNavigate();
  const getHistory = async () => {
    try {
      const response = await AxiosAPI.get(`user/history/${faculty._id}`);
      const pastEvents = response.data.events;
      
      // Group events by month
      const groupedEvents = {};
      Object.keys(pastEvents).forEach(key => {
        const events = pastEvents[key];
        const [month, year] = key.split('-');
        const monthName = new Date(`${year}-${month}-01`).toLocaleString('default', { month: 'short' });
        const monthYear = `${monthName} ${year}`;
        groupedEvents[monthYear] = events;
      });
      setHistory(groupedEvents);
    } catch (error) {
      console.error("Error fetching history:", error);
    }
  };

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <div>
      <StudentNav />
      <div className="p-3 back-color text-white margin-top">
        <h4>History</h4>
        <hr />
        <h5 className="p-3"> Events</h5>
        {Object.entries(history).map(([monthYear, events]) => (
          <React.Fragment key={monthYear}>
            <p className="p-4 h6">{monthYear}</p>
            <ul className="list-unstyled">
              {events.map((item) => (
                <li key={item._id} className="p-3">
                  <span className="rounded-circle bg-secondary">
                    {item.title.charAt(0)}
                  </span>
                  <p style={{ display: "inline" }} className="p-3 fs-5">
                    {item.title}
                    <small className=" ms-lg-5">
                      {new Date(item.from_date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    &nbsp;&nbsp;&nbsp;&nbsp;   to  &nbsp;&nbsp;&nbsp;&nbsp;
                      {new Date(item.to_date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </small> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <small style={{marginLeft:"100px"}} className="btn text-decoration-underline text-info" onClick={()=>navigateTo(`/feedback/${item._id}`)}>feedback</small>
                  </p>
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </div>
      <style jsx="true">{`
        .rounded-circle {
          width: 40px;
          height: 40px;
          display: inline-block;
          border-radius: 50%;
          text-align: center;
          line-height: 40px;
          font-size: 18px;
        }
      `}</style>
    </div>
  );
};

export default HistoryEventStudent;
