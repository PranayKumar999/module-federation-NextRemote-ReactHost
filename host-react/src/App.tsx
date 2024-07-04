import React, { Suspense } from "react";

const RemoteTest = React.lazy(() => import("remote/Test"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <h1>React Host</h1>
      <RemoteTest />
    </Suspense>
  );
}

export default App;
