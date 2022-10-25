import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
//const inputRef = document.querySelector('input');
//const textareaRef = document.querySelector('textarea');

const datesFormForLocalStor = {};

const LOCAL_STORAGE_KEY = 'feedback-form-state';

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);

addContentForm();

function onFormInput(evt) {
  datesFormForLocalStor[evt.target.name] = evt.target.value;

  save(datesFormForLocalStor);
}

function save(object) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(object));
}

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
  evt.currentTarget.reset();
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}

function addContentForm() {
  const valueKey = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (valueKey) {
    const parseValueKey = JSON.parse(valueKey);

    Object.entries(parseValueKey).forEach(([name, value]) => {
      datesFormForLocalStor[name] = value;
      formRef.elements[name].value = value;
    });
  }
}
