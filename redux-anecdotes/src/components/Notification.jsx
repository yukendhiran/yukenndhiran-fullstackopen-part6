import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Notification = () => {
  const [show, setShow] = useState(false);
  const notification = useSelector(({ notification }) => {
    return notification;
  });

  useEffect(() => {
    if (notification !== "") {
      setShow(true);
      const timeoutId = setTimeout(() => {
        setShow(false);
      }, 5000);
      return () => clearTimeout(timeoutId);
    }
  }, [notification]);

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };
  return <div>{show && <span style={style}>{notification}</span>}</div>;
};

export default Notification;
