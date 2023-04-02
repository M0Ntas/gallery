import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { arr } from '../../config';
import './styles.css';

const CardPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [photo, setPhoto] = useState([]);
  const [active, setActive] = useState(0);


  useEffect(() => {
    if (item) {
      setPhoto(item.img);
    }
  }, [item]);

  useEffect(() => {
    setItem(arr.find((i) => `${i.id}` === id));
  }, [id]);

  return (
    <>
      {item && (
        <div className={'card-container'}>
          {photo && (
            <div className={'photo-block'}>
              {photo[active] && <img alt={'main'} src={`/painting/${photo[active]}`} className={'main-photo'} />}
              <div className={'second-block'}>
                {photo.map((i, index) => (
                  <img onClick={() => setActive(index)} key={i} alt={'second'} className={'second-photo'} src={`/painting/${i}`} />
                ))}
              </div>
            </div>
          )}
          <div className={'info-block'}>
            <div style={{ background: `#${item?.color}` || '#fff' }} className={'text'}>
              {item.name && <div style={{ fontSize: '64px', lineHeight: '77px' }}>{item.name}</div>}
              {item.year && (
                <div>
                  <span>год: </span>
                  {item.year}
                </div>
              )}
              {item.size && (
                <div>
                  <span>Размер: </span>
                  {item.size}
                </div>
              )}
              {item.materials && (
                <div>
                  <span>Материалы: </span>
                  {item.materials}
                </div>
              )}
              {item.info && <div className={'info'}>{item.info}</div>}
              {item.cost && <div>Цена: {item.cost} рублей</div>}
            </div>
            <div className={'button-block'}>
              <Link to={'/contacts'} style={{ background: `#${item?.color}` || 'blue' }} className={'want'}>
                Хочу купить
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardPage;
