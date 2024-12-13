import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import react from "../assets/react.svg";
import html from "../assets/html.jpg";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import wordpress from "../assets/wordpress.png";
import php from "../assets/php.png";

export default function LogoCarousel() {
  useEffect(() => {
    const slider = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 4500,
      animationTimingFunc: "linear",
      perView: 6,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 3,
        },
        640: {
          perView: 3,
          gap: 36,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      {/*<!-- Component: Testimonial carousel --> */}
      <div className="glide-09 relative w-full h-[100px] py-[10px] mt-[60px] bg-slate-400 bg-opacity-10">
        {/* <!-- Slides --> */}
        <div data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <img
                src={react}
                className="m-auto h-[80px] max-h-full w-auto max-w-full rounded-full"
              />
            </li>
            <li className="bg-cover object-cover ">
              <img src={tailwind} className="m-auto w-auto h-[80px] " />
            </li>
            <li>
              <img
                src={css}
                className="m-auto h-[80px] max-h-full w-[80px] max-w-full rounded-full"
              />
            </li>
            <li>
              <img
                src={wordpress}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src={html}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src={php}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
          </ul>
        </div>
      </div>
      {/*<!-- End Testimonial carousel --> */}
    </>
  );
}
