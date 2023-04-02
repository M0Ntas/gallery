import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import { Box, Input } from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import './styles.css';

const ContactForm = () => {
  const form = useRef();

  const sendForm = async (e) => {
    e.preventDefault();
    let x = document.getElementById('name').value
    let y = document.getElementById('email').value
    if (x.length !== 0 && y.length !== 0){
    emailjs.sendForm('service_xxagcmp', 'template_5skxofc', form.current, 'Fs5LVlfW4Er9H9RDd').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    document.getElementsByClassName("form")[0].reset()
    }

  };


  return (
    <form ref={form} className={'form'} onSubmit={sendForm}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <Input id={'name'} name={'name'} type={'text'} placeholder={'Имя'} />
        <Input id={'email'} name={'email'} type={'email'} placeholder={'Электронная почта'} />
        <Input name={'phone'} type={'phone'} placeholder={'Телефон'} />
        <Box sx={{ maxWidth: '327px', width: '100%' }}>
          <div className={'check-box-block'}>Выберите удобный способ связи для Вас:</div>
          <div className={'options'}>
            <div className="options-item">
              <input className={'check-box-input'} name={'communication'} id={'call'} checked value={'Позвонить'} type={'radio'} />
              <label className={'check-box-label'} htmlFor={'call'}>
                <span>Позвонить</span>
              </label>
            </div>
            <div className="options-item">
              <input className={'check-box-input'} name={'communication'} id={'write'} value={'Написать'} type={'radio'} />
              <label className={'check-box-label'} htmlFor={'write'}>
                <span>Написать</span>
              </label>
            </div>
          </div>
        </Box>
        <input style={{ display: 'none' }} name={'date'} value={new Date().toLocaleString()} />
      </Box>
      <Textarea
        name={'massage'}
        sx={{ width: '100%', '--Textarea-radius': 0, fontFamily: 'Helvetica Neue, sans-serif', marginTop: '8px' }}
        placeholder={'Текст сообщения'}
        minRows={3}
      />
      <button type={'submit'} className={`send-button`}>
        Отправить
      </button>
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
