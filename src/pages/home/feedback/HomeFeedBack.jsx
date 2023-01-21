import React, { useRef } from "react";
import SliderCategory from "../../../components/slider/SliderCategory";
import SliderTitle from "../../../components/slider/SliderTitle";

export default function HomeFeedBack() {
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);
  return (
    <>
      <section style={{ padding: "75px 0", background: "#F9F3F0" }}>
        <div className="container">
          <div className="home-feedback">
            <SliderCategory
              iconColor="white"
              icon="bi-quote"
              title="Testimonials"
              titleColor="#ff4b7e"
            />

            <SliderTitle
              title="Users Feedback"
              navigationNextRef={navigationNextRef}
              navigationPrevRef={navigationPrevRef}
            />
          </div>
        </div>
      </section>
    </>
  );
}
