import React, { useRef, useEffect } from "react";
// components
import TheSidebar from "./components/TheSidebar";
import TheSidebarOverlay from "./components/TheSidebarOverlay";
import TheHeader from "./components/TheHeader";
import TheMain from "./components/TheMain";
import TheRegistration from "./components/TheRegistration";

function App() {
  const contextWrapperRef = useRef(null);

  let isScrollingEnabled = true;

  function toggleScrolling(isEnabled) {
    isScrollingEnabled = isEnabled;
  }

  function handleScrolling(event) {
    if (isScrollingEnabled) return;

    event.preventDefault();
    event.stopPropagation();
  }

  useEffect(() => {
    const contentWrapper = contextWrapperRef.current;
    contentWrapper.addEventListener("wheel", handleScrolling);

    return () => contentWrapper.removeEventListener("wheel", handleScrolling);
  });

  return (
    <>
      <div className="flex grow overflow-auto">
        <TheSidebar />
        <TheSidebarOverlay />
        <div className="flex-1 overflow-auto" ref={contextWrapperRef}>
          <TheHeader />
          <TheMain toggleScrolling={toggleScrolling} />
        </div>
      </div>
      <TheRegistration />
    </>
  );
}

export default App;
