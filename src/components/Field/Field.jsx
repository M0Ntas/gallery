import { Input } from '@mui/material';
import './styles.css';

const Field = ({ type, placeholder, name }) => {
  return (
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
      />
  );
};

export default Field;
