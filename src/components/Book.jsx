// import { InlineWidget } from "react-calendly";

// const Book = () => {
//   return (
//     <div className="bg-opacity-50">
//       <InlineWidget url="https://calendly.com/inmaj670/30-minutes-free-counsultancy" />
//     </div>
//   );
// };

// export default Book;

//popup

// import { PopupButton } from "react-calendly";

// const Book = () => {
//   return (
//     <div className="bg-red-500">
//       <PopupButton
//         url="https://calendly.com/inmaj670/30-minutes-free-counsultancy"
//         /*
//          * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
//          * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
//          */
//         rootElement={document.getElementById("root")}
//         text="Click here to schedule!"
//       />
//     </div>
//   );
// };

// export default Book;

import { useCalendlyEventListener, InlineWidget } from "react-calendly";

const Book = () => {
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => console.log(e.data.payload),
    onPageHeightResize: (e) => console.log(e.data.payload.height),
  });

  return (
    <>
      <h2 className="text-[25px] font-semibold text-center">Book a Metting</h2>
      <div className="lg:w-[1000px] mx-auto mt-[50px] mb-[50px]">
        <InlineWidget url="https://calendly.com/inmaj670/30-minutes-free-counsultancy" />
      </div>
    </>
  );
};

export default Book;
