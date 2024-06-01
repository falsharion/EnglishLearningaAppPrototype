import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import lessonsData from '../data/lessons.json'; // Ensure this path is correct


const LessonCard = ({ title, progress, image, description }) => (
  <div className="lesson-card">
    <div className='lesson-image'><img src={image} alt={title} className="lesson-image" loading='lazy'  /></div>
    <div className="straight-progress-container">
      <div className="straight-progress-bar">
        <div className="straight-progress" style={{ width: `${progress}%` }}></div>
      </div>
      <span className="straight-progress-percent">{progress}%</span>
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const LessonList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipedLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % lessonsData.length);
  };

  const handleSwipedRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? lessonsData.length - 1 : prevIndex - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipedLeft,
    onSwipedRight: handleSwipedRight,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="lessons-list-container" {...handlers}>
      <div className="lessons-list">
        {lessonsData.map((lesson) => (
          <LessonCard
            key={lesson.id}
            title={lesson.title}
            progress={lesson.progress}
            image={lesson.image}
            description={lesson.description}
          />
        ))}
      </div>
    </div>
  );
};

export default LessonList;
