import {observer} from "mobx-react-lite";
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.scss"
import sun from "../../components/contact/sun.svg"
import axios from "axios";
var ph = 0;

export const NewContacts = () => {
  const navigate = useNavigate();
  const[emptName, setEmptName] = useState(false);
  const[valueName, setValueName] = useState('');
  let handleChangeName = (contact) => {setValueName(contact.target.value); setEmptName(false);}


  const[emptPhone, setEmptPhone] = useState(false);
  const[valuePhone, setValuePhone] = useState('');
  let handleChangePhone = (contact) => {setValuePhone(contact.target.value); setEmptPhone(false); ph = 0;}
  

  const[emptCB, setEmptCB] = useState(false);
  const[checkedCB, setСheckedCB] = useState(false);
  let handleChangeCB = (contact) => {setСheckedCB(!checkedCB); setEmptCB(false);}

  


  function sendForm(contact) {
    let trg = true;
    if (valueName === '')
    {
      setEmptName(true);
      trg = false;
    }

    const reqwq = /^(\+7|8)+(\d{10})$/;
    if(valuePhone === '' || !reqwq.test(valuePhone))
    {
      if (valuePhone === ''){
        ph = 1;
      }
      else {
        ph = 2;
      }
      setEmptPhone(true);
      trg = false;
    }


    if (trg)
    {
      postContact();
      navigate('/');
    }
  }

  async function postContact() {
    await axios.post(`http://localhost:3001/contact`, {
      name_contact: valueName,
      phone: valuePhone,
      is_favorite: checkedCB,
      image: sun
    });
  }


    return (
      <div className="ContactEntryForm">
            <h1 className="ContactEntryForm__title">
                Создание контакта
            </h1>

            <form>
              <input value={valueName} onChange={handleChangeName} type='text' className={emptName ? "ContactEntryForm__input__error" : "ContactEntryForm__input"} placeholder="Имя контакта" required/>
              <span className={emptName ? "errorTxt__true" : "errorTxt__false"}>Поле обязательное</span>

              <input value={valuePhone} onChange={handleChangePhone} type='text' className={emptPhone ? "ContactEntryForm__input__error" : "ContactEntryForm__input"} placeholder="Номер телефона" required/>
              {ph === 1 && 
                <span className="errorTxt__true">Поле обязательное</span>
              }
              {ph === 2 && 
                <span className="errorTxt__true">Неверный формат</span>
              }



              <input checked={checkedCB} onChange={handleChangeCB} type="checkbox" className="ContactEntryForm__checkBox" id="agree" />
                  <label for="agree">
                  <span>Добавить в избранные</span>
                  </label>
            </form>

            <div className="">
                <button onClick={sendForm} className="Button">Создать контакт</button>
            </div>
        </div>
    );
  };
export default observer(NewContacts);