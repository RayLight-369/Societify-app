import { useState, createContext, useContext, useEffect } from "react";

const Data = createContext();

export const useData = () => useContext(Data);

function showNotification(title, options) {
  console.log("Attempting to show notification:", title, options);

  if (Notification.permission === "granted") {
    new Notification(title, options);
  }
}

function requestNotificationPermission() {
  if ("Notification" in window) {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("Notification permission granted.");
      } else {
        console.log("Notification permission denied.");
      }
    });
  } else {
    console.log("Browser does not support notifications.");
  }
}

const DataProvider = ({ children }) => {
  const [bills, setBills] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (bills.length) {
      showNotification("A New Bill Added");
    }
  }, [bills]);

  useEffect(() => {
    requestNotificationPermission();

    fetch("http://localhost:3000/bills/all")
      .then((data) => data.json())
      .then((bills) => {
        if (bills) setBills(bills);
      });
  }, []);

  return (
    <Data.Provider value={{ bills, setBills, events, setEvents }}>
      {children}
    </Data.Provider>
  );
};

export default DataProvider;
