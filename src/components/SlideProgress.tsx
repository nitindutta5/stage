type SlideProgressProps = {
    slideCount: number;
    current: number;
  };
  
  function SlideProgress({ slideCount, current }: SlideProgressProps) {
    const progress = ((current+1) / slideCount) * 100;
  
    return (
      <div className="slide-progress-bar">
        <div
          className="slide-progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  }
  
  export default SlideProgress;
  