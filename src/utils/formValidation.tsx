const validateField = (fieldName: string, value: string) => {
  switch(fieldName) {
    case 'name':
      const nameValid = value.length >= 3;
      return nameValid;
    case 'email':
      const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const emailValid = regExp.test(value);
      return emailValid;
    default:
      break;
  }
}

export default validateField;
