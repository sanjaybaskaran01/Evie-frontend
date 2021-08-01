import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getDate } from "../api/Request";
import { dayString, modalDate } from "./dateFormat";
import EventProfile from "./EventProfile";

const Modal = ({ closeModal, date }) => {
  const [event, setEvent] = useState([]);
  useEffect(() => {
    const AsyncDay = async () => {
      let res = await getDate(date);
      setEvent(res);
    };
    AsyncDay();
  }, []);
  if (closeModal) {
    
    return (
      <div
        className="fixed z-10 inset-0 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="inline-block self-center align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-screen sm:w-9/12">
            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4" style={{backgroundColor:"#2A2B2E"}}>
              <div className="sm:flex sm:items-start">
            
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-sm sm:text-lg leading-6 font-medium"
                    id="modal-title" style={{color:"aliceblue"}}
                  >
                    {modalDate(date)}
                  </h3>
                  <div className="mt-2">
                    <div className="flex flex-col">
                      {event ? (
                        event.map((item) => {
                          return <EventProfile key={item._id} {...item} />;
                        })
                      ) : (
                        <>
                          <h1>No events Today!</h1>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" style={{backgroundColor:"#2A2B2E"}}>
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() => {
                  closeModal(false);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default Modal;
