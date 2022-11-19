import './styles.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.svg';

const links = [
  {
    name: 'Галерея',
    pathName: '/'
  },
  {
    name: 'Магазин',
    pathName: '/store'
  },
  {
    style: '-logo',
    name: <img alt={'Logo'} src={Logo} />,
    pathName: '/'
  },
  {
    name: 'Инфо',
    pathName: '/info'
  },
  {
    name: 'Контакты',
    pathName: '/contacts'
  }
];

const Header = () => {
  return (
    <div className={'header'}>
      <div className={'container'}>
        <div className={'header-block'}>
          {links.map((i) => (
            <Link key={i.name} to={i.pathName} className={`header-button${i.style ?? ''}`}>
              {i.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
