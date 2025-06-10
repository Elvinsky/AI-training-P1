import React, { useState, useEffect } from "react";

// Import the worker (Vite supports this syntax)
// @ts-ignore
import Worker from "./sumWorker?worker";

export default function Dashboard() {
  const [d, setD] = useState<number | null>(null);
  useEffect(() => {
    const worker = new Worker();
    worker.postMessage({});
    worker.onmessage = (e: MessageEvent) => {
      setD(e.data.result);
      worker.terminate();
    };
    return () => worker.terminate();
  }, []);
  return <div>{d}</div>;
}
