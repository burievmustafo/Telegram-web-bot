import { useParams, useNavigate } from 'react-router-dom';
import './CourseDetails.css';

const CourseDetails = ({ courses, onAddItem, cartItems }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const course = courses.find(c => c.id === parseInt(id));
  
  if (!course) {
    return (
      <div className="course-details">
        <div className="course-not-found">
          <span>😕</span>
          <h2>Kurs topilmadi</h2>
          <button onClick={() => navigate('/')} className="back-btn">
            ← Orqaga
          </button>
        </div>
      </div>
    );
  }

  const isInCart = cartItems.some(item => item.id === course.id);
  const cartItem = cartItems.find(item => item.id === course.id);

  const formatPrice = (price) => {
    return price.toLocaleString('uz-UZ') + " so'm";
  };

  const handleAddToCart = () => {
    onAddItem(course);
  };

  return (
    <div className="course-details">
      {/* Header */}
      <div className="details-header">
        <button onClick={() => navigate('/')} className="back-btn">
          ← Orqaga
        </button>
      </div>

      {/* Hero Section */}
      <div className="course-hero">
        <img src={course.image} alt={course.title} className="hero-image" />
        <div className="hero-overlay">
          <span className="hero-emoji">{course.emoji}</span>
        </div>
        <span className="hero-level">{course.level}</span>
      </div>

      {/* Content */}
      <div className="course-content">
        <h1 className="course-title">{course.title}</h1>
        <p className="course-description">{course.description}</p>

        {/* Stats */}
        <div className="course-stats">
          <div className="stat">
            <span className="stat-icon">⏱️</span>
            <span className="stat-value">{course.duration}</span>
            <span className="stat-label">Davomiyligi</span>
          </div>
          <div className="stat">
            <span className="stat-icon">📝</span>
            <span className="stat-value">{course.lessons}</span>
            <span className="stat-label">Darslar</span>
          </div>
          <div className="stat">
            <span className="stat-icon">⭐</span>
            <span className="stat-value">{course.rating || '4.8'}</span>
            <span className="stat-label">Reyting</span>
          </div>
        </div>

        {/* What you'll learn */}
        <div className="learning-section">
          <h2 className="section-title">📚 Siz nima o'rganasiz</h2>
          <ul className="learning-list">
            {course.learningOutcomes ? (
              course.learningOutcomes.map((item, index) => (
                <li key={index}>
                  <span className="check-icon">✓</span>
                  {item}
                </li>
              ))
            ) : (
              <>
                <li><span className="check-icon">✓</span> Yapon yozuvi asoslari</li>
                <li><span className="check-icon">✓</span> To'g'ri talaffuz</li>
                <li><span className="check-icon">✓</span> Amaliy mashqlar</li>
                <li><span className="check-icon">✓</span> Interaktiv testlar</li>
              </>
            )}
          </ul>
        </div>

        {/* Lessons Preview */}
        <div className="lessons-section">
          <h2 className="section-title">📖 Darslar ro'yxati</h2>
          <div className="lessons-list">
            {course.lessonsList ? (
              course.lessonsList.map((lesson, index) => (
                <div key={index} className={`lesson-item ${lesson.isFree ? 'free' : 'locked'}`}>
                  <div className="lesson-info">
                    <span className="lesson-number">{index + 1}</span>
                    <div className="lesson-details">
                      <span className="lesson-title">{lesson.title}</span>
                      <span className="lesson-duration">{lesson.duration}</span>
                    </div>
                  </div>
                  <span className="lesson-status">
                    {lesson.isFree ? '▶️ Bepul' : '🔒'}
                  </span>
                </div>
              ))
            ) : (
              <>
                <div className="lesson-item free">
                  <div className="lesson-info">
                    <span className="lesson-number">1</span>
                    <div className="lesson-details">
                      <span className="lesson-title">Kirish va tanishuv</span>
                      <span className="lesson-duration">10:00</span>
                    </div>
                  </div>
                  <span className="lesson-status">▶️ Bepul</span>
                </div>
                <div className="lesson-item locked">
                  <div className="lesson-info">
                    <span className="lesson-number">2</span>
                    <div className="lesson-details">
                      <span className="lesson-title">Asosiy tushunchalar</span>
                      <span className="lesson-duration">15:00</span>
                    </div>
                  </div>
                  <span className="lesson-status">🔒</span>
                </div>
                <div className="lesson-item locked">
                  <div className="lesson-info">
                    <span className="lesson-number">3</span>
                    <div className="lesson-details">
                      <span className="lesson-title">Amaliy mashg'ulot</span>
                      <span className="lesson-duration">20:00</span>
                    </div>
                  </div>
                  <span className="lesson-status">🔒</span>
                </div>
                <div className="lesson-item locked">
                  <div className="lesson-info">
                    <span className="lesson-number">4</span>
                    <div className="lesson-details">
                      <span className="lesson-title">Takrorlash va test</span>
                      <span className="lesson-duration">15:00</span>
                    </div>
                  </div>
                  <span className="lesson-status">🔒</span>
                </div>
              </>
            )}
          </div>
          <p className="lessons-more">+ yana {course.lessons - 4} ta dars</p>
        </div>
      </div>

      {/* Fixed Bottom Bar */}
      <div className="purchase-bar">
        <div className="price-info">
          <span className="current-price">{formatPrice(course.price)}</span>
        </div>
        <button 
          className={`purchase-btn ${isInCart ? 'in-cart' : ''}`}
          onClick={handleAddToCart}
        >
          {isInCart ? `✓ Savatchada (${cartItem.qty})` : '🛒 Savatchaga qo\'shish'}
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
