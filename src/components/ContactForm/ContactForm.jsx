import { Box, FormControlLabel, Input, Radio, RadioGroup } from '@mui/material';
import Textarea from '@mui/joy/Textarea';

const ContactForm = () => {
  return (
    <form className={'form'}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <Input placeholder={'Имя'} />
        <Input type={'email'} placeholder={'Электронная почта'} />
        <Input placeholder={'Телефон'} />
        <Box sx={{ maxWidth: '327px', width: '100%' }}>
          <div className={'check-box-block'}>Выберите удобный способ связи для Вас:</div>
          <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="Позвонить" name="radio-buttons-group">
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <FormControlLabel value="Позвонить" control={<Radio />} label="Позвонить" />
              <FormControlLabel value="Написать" control={<Radio />} label="Написать" />
            </Box>
          </RadioGroup>
        </Box>
      </Box>
      <Textarea
        sx={{ width: '100%', '--Textarea-radius': 0, fontFamily: 'Helvetica Neue, sans-serif', marginTop: '8px' }}
        placeholder={'Текст сообщения'}
        minRows={3}
      />
      <div onClick={(e) => e.preventDefault()} className={'send-button'}>
        Отправить
      </div>
      <p className={'text-form'}>
        Важно!
        <br />
        Пожалуйста обратите внимание, что фактические цвета могут отличаться от изображения на экране.
      </p>
      <p className={'text-form'}>
        Все произведения являются исключительной собственностью художника Lina Missa. Любое копирование, сбор и использование изображений
        произведений искусства запрещён, без письменного согласия художника.
      </p>
    </form>
  );
};

export default ContactForm;
