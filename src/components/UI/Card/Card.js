import './Card.css';

const Card = props => {
    return (
        <div className={`card ${'card-' + props.type}`}>
            {props.children}
        </div>
    )
};

export default Card;