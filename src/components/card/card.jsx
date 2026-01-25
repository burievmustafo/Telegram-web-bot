import "./card.css";
import Button from "../button/button";
import { useState } from "react";

const Card = (props) => {

    const [count, setCount] = useState(0)
    const{course, onAddItem, onRemoveItem} = props;
    const handleInrement = () => {
        setCount(prev => prev + 1)
        onAddItem(course)
    }
    const handleDecrement = () => {
        
        setCount(prev => prev - 1)
        onRemoveItem(course)
        
    }

    const formatPrice = (price) => {
        return price.toLocaleString('uz-UZ') + " so'm";
    }

    return (
        <div className="card">
            <span className={`${count !== 0 ? 'card__badge' : "card__badge--hidden"}`}>{count}</span>

            <div className="image__container">
                <img src={course.image} alt={course.title} />
                <span className="card__emoji">{course.emoji}</span>
            </div>
            <span className="card__level">{course.level}</span>

            <div className="card__content">
                <h2 className="card__title">{course.title}</h2>
                <p className="card__description">{course.description}</p>
                
                <div className="card__meta">
                    <span>⏱️ {course.duration}</span>
                    <span>📝 {course.lessons} dars</span>
                </div>

                <div className="card__footer">
                    <div className="card__price">{formatPrice(course.price)}</div>
                    <div className="btn__container">
                        <Button title={"+"} onClick={handleInrement} type={"add"} />
                        {count !== 0 && <Button title={"-"} onClick={handleDecrement} type={"remove"}/>}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Card;