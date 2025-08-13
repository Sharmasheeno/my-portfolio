import React, { useEffect } from "react";

const Helmet = (props) => {
  // This hook runs when the component is added to the page
  // or when the props.title changes.
  useEffect(() => {
    document.title = "portfolio - " + props.title;

    // Optional: This function runs when the component is removed,
    // resetting the title.
    return () => {
      document.title = "portfolio"; 
    };
  }, [props.title]); // The effect depends on the title prop

  // Render the child components
  return <>{props.children}</>;
};

export default Helmet;