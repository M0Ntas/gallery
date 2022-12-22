import StoreCard from '../StoreCard/StoreCard';
import { arr } from '../../config';
import './styles.css';

const Store = () => {
  return (
    <div className={'store-container'}>
      {arr.map((i) => (
        <StoreCard card={i} key={i.id} />
      ))}
    </div>
  );
};

export default Store;
