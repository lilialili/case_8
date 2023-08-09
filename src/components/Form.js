import React, {useEffect, useState, useCallback} from "react";
import './StyledComponent.css';
import Input from "./input";
import validator from 'validator';
import { useSelector, useDispatch } from "react-redux";
import { submitForm } from "../redux/action";

const formFields = {
    firstName: 'firstName',
    secondName: 'secondName',
    message: 'message',
    email: 'email',
}

const Form = () => {
  const initialFormState = {
    [formFields.firstName]: '',
    [formFields.secondName]: '',
    [formFields.message]: '',
    [formFields.email]: '',
  }
  const [form, setForm] = useState(initialFormState);
  const [isSubmitDisable, setIsSubmitDisable] = useState(true);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const isFormValid = () => {
    const isFirstNameValid = !validator.isEmpty(form[formFields.firstName]);
    const isSecondNameValid = !validator.isEmpty(form[formFields.secondName]);
    const isMessageValid = validator.isLength(form[formFields.message], { min: 10, max: undefined });
    const isEmailValid = validator.isEmail(form[formFields.email]);
      return isFirstNameValid && isSecondNameValid && isMessageValid && isEmailValid;
  }

  useEffect(() => {
    setIsSubmitDisable(!isFormValid())
  }, [form]);

  const onSubmit = useCallback(e => {
    e.preventDefault();
    dispatch(submitForm(form))
    setForm(initialFormState);
    alert("Form was sent")
    }, [form])

  const onChange = (e) => {
    const {name, value} = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value
    }));
    };

  return (
    <div className="form">
      <form action="/">
        <Input
          label=" First name"
          type="text"
          id="name"
          placeholder="type your First name..."
          name={formFields.firstName}
          value={form.firstName}
          onChange={onChange}
          />
          <Input
            label="Second name"
            type="text"
            id="name"
            placeholder="type your Second name..."
            name={formFields.secondName}
            value={form.secondName}
            onChange={onChange}
          />
          <textarea name={formFields.message} value={form.message}  onChange={onChange} placeholder="type your message..."/>
          <Input
              label="email"
              type="email"
              id="email"
              placeholder="type your email..."
              name={formFields.email}
              value={form.email}
              onChange={onChange}
          />
          <input type="submit" disabled={isSubmitDisable} onClick={onSubmit}  />
      </form>
    </div>
  );
}

export default Form;
