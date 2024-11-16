import { useState, useEffect } from "react";

const useDelayedEvent = () => {
  const [delayed, setDelayed] = useState(false);

  useEffect(() => {
    const handleDelayed = () => setDelayed(true);

    // Listen for the delayed event
    document.addEventListener("delayed", handleDelayed);

    // Cleanup listener on unmount
    return () => {
      document.removeEventListener("delayed", handleDelayed);
    };
  }, []);

  return delayed;
};

export default useDelayedEvent;
