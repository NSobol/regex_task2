import Validator from '../validate';

test('Тестирование корректного изменения номера телефона', () => {
  const exp = '+860000000000';
  const resolved = new Validator();
  expect(resolved.getValidatePhone('+86 000 000 0000')).toBe(exp);
});

test('Тестирование корректного изменения номера телефона', () => {
  const exp = '+79600000000';
  const resolved = new Validator();
  expect(resolved.getValidatePhone('+7 960 000 00 00')).toBe(exp);
});

test('Тестирование корректного изменения номера телефона', () => {
  const exp = '+79270000000';
  const resolved = new Validator();
  expect(resolved.getValidatePhone('8 (927) 000-00-00')).toBe(exp);
});