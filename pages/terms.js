import dynamic from "next/dynamic";
const AccordionFAQ = dynamic(() => import("../components/AccordionFAQ"), {
  loading: () => <p>Loading...</p>,
});

import InnerNavBanner from "../components/InnerNavBanner";
const Terms = () => {
  return (
    <>
      <InnerNavBanner page="Terms and Conditions" />
      <div className="container">
        <AccordionFAQ />
      </div>
    </>
  );
};

export default Terms;
