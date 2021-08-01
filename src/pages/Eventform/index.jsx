import React, { useState } from "react";
import "./styles.css";
import { BASEURL } from "../../api/Api"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import EventProfile from "../../components/EventProfile";

const EventForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [img, setImg] = useState("https://external-preview.redd.it/fBai3DKZrSGf3YRd89f9pUHJua_lyGNS3LF0I-joA8Y.jpg?width=640&crop=smart&auto=webp&s=d53d81a152b17cbb467151b7513a7e0aac378567");
  const [org, setOrg] = useState("Club/Chapter");
  const [title, setTitle] = useState("Event Title");
  const [email, setEmail] = useState("example@example.com");
  const [desc, setDesc] = useState("Description of the Event");
  const [url, setURL] = useState("URL of the Event");

  return (
    <div className="flex md:container md:mx-auto items-center">
      <div className="container" >
        <form action={`${BASEURL}/api/add`} method="POST">
          <div className="row">
            <h4>Event Details</h4>
            <br />
            <div className="input-group" >
              <input
                type="text"
                placeholder="Event Name"
                name="title"
                required="required" onChange={(e) => setTitle(e.target.value)}
              />
              <div className="input-icon">
                <i className="fa fa-user"></i>
              </div>
            </div>
            <div className="input-group">
              <input
                type="email"
                placeholder="Email"
                name="email"
                pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                onChange={(e) => setEmail(e.target.value)} required
              />
              <div className="input-icon">
                <i className="fa fa-user"></i>
              </div>
            </div>
            <div className="input-group">
              <input
                type="text"
                placeholder="Club/Chapter Name"
                name="org"
                required onChange={(e) => setOrg(e.target.value)}
              />
              <div className="input-icon">
                <i className="fa fa-envelope"></i>
              </div>
            </div>
            <div rows="10" cols="58" >
              <textarea
                placeholder="Event Description"
                name="desc" className="description w-full px-4 pt-4 resize:none"
                required onChange={(e) => setDesc(e.target.value)}
              />
              <div className="input-icon">
                <i className="fa fa-user"></i>
              </div>
            </div>
            <div className="input-group"></div>
          </div>
          <div className="row">
          </div>
          <div className="col-half h-16 flex flex-wrap content-start">
            <h4>Label Color </h4>
            <input className="label-color"
              type="color"
              placeholder="Label Color"
              name="backgroundColor"
              required style={{ height: "60px" }}
            />
          </div>

          <div className="col-half h-16 flex flex-wrap content-start">

            <h4>Text Color </h4>
            <input className="text-color"
              type="color"
              placeholder="Text Color"
              name="textColor"
              required style={{ height: "60px" }}
            />
          </div>

          <div className="col-full">
            <h4>Start Date and Time of Event (IST +5:30) </h4>
            <div className="input-group">
              <div className="col-full">
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}
                  timeInputLabel="Time:" dateFormat="MM/dd/yyyy h:mm aa" showTimeInput
                  required name="start"
                  className="my-2 " />
              </div>
            </div>
          </div>
          <div className="input-group"></div>
          <br></br>
          <br></br>
          <div className="input-group"></div>
          <div className="col-full">
            <h4>End Date and Time of Event (IST +5:30) </h4>
            <div className="input-group">
              <div className="col-full">
                <DatePicker selected={endDate} onChange={(date) => setEndDate(date)}
                  timeInputLabel="Time:" dateFormat="MM/dd/yyyy h:mm aa" showTimeInput
                  required name="end"
                  className="mt-2" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="input-group"></div>
          </div>

          <div className="row">
            <div className="input-group"></div>
          </div>
          <div className="input-group">
            <input type="text" placeholder="Image URL" name="img" onChange={(e) => setImg(e.target.value)}/>
            <div className="input-icon">
              <i className="fa fa-user"></i>
            </div>
          </div>
          <div className="input-group">
            <input type="text" placeholder="Event URL" name="url" onChange={(e) => setURL(e.target.value)}/>
            <div className="input-icon">
              <i className="fa fa-user"></i>
            </div>
          </div>
          <div className="h-12">
            <button className="text-white font-bold bg-green-500 hover:bg-green-600 w-1/2 w-full scale-100 h-12 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">
              Submit Event For Approval
            </button>
          </div>
        </form>
      </div>
       <EventProfile  img={img} org={org} title={title} start={startDate} end={endDate} email={email} desc={desc} url={url}/>;

  </div>
  );
};

export default EventForm;