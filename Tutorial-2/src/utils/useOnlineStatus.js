import { useState, useEffect } from "react";

const UseOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      console.log("App is online");
      setIsOnline(true);
    };

    const handleOffline = () => {
      console.log("App is offline");
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Additional check
    const checkOnlineStatus = async () => {
      try {
        const response = await fetch("/favicon.ico", {
          method: "HEAD",
          mode: "no-cors",
        });
        setIsOnline(true);
      } catch {
        setIsOnline(false);
      }
    };

    // Check every 30 seconds
    const interval = setInterval(checkOnlineStatus, 30000);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      clearInterval(interval);
    };
  }, []);

  return isOnline;
};

export default UseOnlineStatus;
