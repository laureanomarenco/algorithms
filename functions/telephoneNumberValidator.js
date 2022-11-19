export default function telephoneNumberValidator(str) {
  let rex1 = new RegExp(/^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/);
  let rex2 = new RegExp(/^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/);

  if (rex1.test(str)) {
    return true;
  } else {
    return rex2.test(str) ? true : false;
  }
}
