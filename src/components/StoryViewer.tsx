import { Dispatch, SetStateAction, useEffect, useState } from "react";
import stories from "../../data/stories.json";
import SlideProgress from "./SlideProgress";

function StoryViewer({
  userId,
  setUserId,
}: {
  userId: number;
  setUserId: Dispatch<SetStateAction<number | null>>;
}) {
  const slidesToShow = stories?.find((item) => item.userId === userId)?.data;
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    if (!slidesToShow || current > slidesToShow.length - 1) {
      setUserId(null);
      return;
    }

    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [current]);

  const handleNext = () => {
    if (current < (slidesToShow?.length ?? 0) - 1) {
      setCurrent((prev) => prev + 1);
    } else {
      setUserId(null);
    }
  };

  const handlePrev = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };


  return (
    <div className="storyholder">
      <SlideProgress
        current={current}
        slideCount={slidesToShow?.length as number}
      />
      <button className="closeBtn" onClick={() => setUserId(null)}>
        X
      </button>
      <img src={slidesToShow?.[current]} />
      {/* Left click zone */}
      <div className="clickZone leftZone" onClick={handlePrev}></div>

      {/* Right click zone */}
      <div className="clickZone rightZone" onClick={handleNext}></div>
    </div>
  );
}

export default StoryViewer;
