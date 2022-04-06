export default class Validator {
  getValidatePhone(str) {
    this.str = str;
    const reg1 = /^\+(\d{2})+[- .]+(\d{2,3})+[- .]\d{3}[- .]\d{4}/;
    // eslint-disable-next-line no-useless-escape
    const reg2 = /^(\+7[\- ])(\(?\d{3}\)?[\- ])[\d\- ]{7,10}$/;
    // eslint-disable-next-line no-useless-escape
    const reg3 = /^(8[\- ])(\(\d{3}\)[\- ])[\d\- ]{7,10}$/;
    let phone = str;
    if (reg1.test(phone) || reg2.test(phone)) {
      phone = phone.replace(/\s+/g, '');
    }

    if (reg3.test(phone)) {
      // eslint-disable-next-line no-useless-escape
      phone = phone.replace(/(8[\- ])/g, '+7');
      phone = phone.replace(/\(/g, '');
      phone = phone.replace(/\)/g, '');
      phone = phone.replace(/\s+/g, '');
      phone = phone.replace(/[-]/g, '');
    }
    return phone;
  }
}