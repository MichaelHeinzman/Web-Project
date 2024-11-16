import useDelayedEvent from "@hooks/useDelayedEvent";

const DelayedLoader = ({ children }) => {
  const delayed = useDelayedEvent();

  // Render children only after the delayed event fires
  if (!delayed) {
    return null;
  }

  return <>{children}</>;
};

export default DelayedLoader;
