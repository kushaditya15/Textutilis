import React, { useEffect, useState } from "react";

export default function Alert(props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (props.alert) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [props.alert]);

  return (
    <div
      className={`custom-alert alert alert-${props.alert?.type} ${
        visible ? "show" : "hide"
      }`}
      role="alert"
    >
      <strong>{props.alert?.message}</strong>
    </div>
  );
}
