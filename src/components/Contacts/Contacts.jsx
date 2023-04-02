import ContactForm from '../ContactForm/ContactForm';
import Img from '../../assets/images/info/info.jpg';
import Inst from '../../assets/icons/inst.svg';
import Vk from '../../assets/icons/vk.svg';
import Telegram from '../../assets/icons/telegram.svg';
import Pinc from '../../assets/icons/pinc.svg';
import './styles.css';

const icons = [
  {
    icon: Inst,
    id: 1,
    to: 'https://instagram.com/linamissa_art'
  },
  {
    icon: Vk,
    id: 2,
    to: 'https://vk.com/linamissa_art'
  },
  {
    icon: Telegram,
    id: 3,
    to: 'https://t.me/LinaMissa'
  },
  {
    icon: Pinc,
    id: 4,
    to: 'https://pin.it/On7vQDe'
  }
];

const Contacts = () => {
  return (
    <div className={'container'}>
      <div className={'contacts-block'}>
        <div className={'contacts-form'}>
          <div className={'contacts-form-title'}>Для связи со мной заполните форму обратной связи!</div>
          <ContactForm />
        </div>
        <div className={'contacts-info'}>
          <img alt={'info'} src={Img} />
          <p className={'info-mail'}>Электронная почта: mlina.artist@gmail.com</p>
          <div className={'icon-block'}>
            {icons.map((i) => (
              <a className={'social-buttons'} target={'_blank'} href={i?.to}>
                <img key={i.id} alt={i.id} src={i?.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
