import { useNavigate } from 'react-router-dom';
import Card from '../../components/card/card';
import './Home.css';

const Home = ({ courses, onAddItem, onRemoveItem }) => {
  const navigate = useNavigate();

  const handleCourseClick = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <div className="home">
      <header className="header">
        <div className="header__logo">🐼</div>
        <h1 className="header__title">edu<span>Panda</span></h1>
        <p className="header__subtitle">Yapon tilini qiziqarli o'rganing</p>
      </header>

      <div className="cards__container">
        {courses.map(course => (
          <Card 
            key={course.id} 
            course={course} 
            onAddItem={onAddItem} 
            onRemoveItem={onRemoveItem}
            onCourseClick={() => handleCourseClick(course.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
