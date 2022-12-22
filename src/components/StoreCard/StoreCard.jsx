import './styles.css';
import { Link } from 'react-router-dom';

const StoreCard = ({ card }) => {
  return (
    <Link style={{ textDecoration: 'none' }} to={`/store/${card.id}`}>
      <div className={'store-card'}>
        <img className={'image'} src={`/painting/${card?.img[0]}`} alt={card?.name} />
        <div className={`card-hover`} style={{ background: `#${card?.color}50` }}>
          <div className={'card-info'}>
            <div className={'card-title'}>{card?.name}</div>
            <div className={'card-size'}>{card?.size}</div>
            <div className={'card-year'}>{card?.year} год</div>
            <div className={'line'} />
            <div className={'card-cost'}>{card?.cost} руб.</div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default StoreCard;
