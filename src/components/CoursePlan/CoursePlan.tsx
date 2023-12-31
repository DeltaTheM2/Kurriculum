import React from 'react';
import './../../pages/CourseDashboard/index.css';

const CoursePlan = ({ weeks, onSelectLesson }) => {
  return (
    <div>
      {weeks.map((week, index) => (
        <div key={index}>
          <h3>{week.title}</h3>
          {week.lessons.map((lesson, lessonIndex) => (
            <div key={lessonIndex} className="lesson" onClick={() => onSelectLesson(lesson)}>
              {lesson.title}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CoursePlan;
