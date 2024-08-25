"use client";
import { Synaps } from "@synaps-io/verify-sdk";
import { useEffect } from "react";

type Props = {
  sessionId: string;
};

const Modal = ({ sessionId }: Props) => {
  useEffect(() => {
    // Prevent multiple initializations with react strict mode
    // https://react.dev/learn/synchronizing-with-effects#fetching-data
    let init = true;

    Synaps.init({
      sessionId,
      onFinish: () => {
        alert("Verification finished");
      },
      mode: "modal",
    });

    return () => {
      init = false;
    };
  }, [sessionId]);

  const handleOpen = () => {
    Synaps.show();
  };

  return (
    <div className="App">
      <button onClick={handleOpen}>Start verification</button>
    </div>
  );
};

export default Modal;
