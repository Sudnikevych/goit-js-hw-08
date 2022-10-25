import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
//const inputRef = document.querySelector('input');
//const textareaRef = document.querySelector('textarea');

const datesForm = {};

const LOCAL_STORAGE_KEY = 'feedback-form-state';

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);

addContentForm();

function onFormInput(evt) {
  datesForm[evt.target.name] = evt.target.value;

  save(datesForm);
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
    const parsValueKey = JSON.parse(valueKey);

    Object.entries(parsValueKey).forEach(([name, value]) => {
      datesFormForLocalStor[name] = value;
      formRef.elements[name].value = value;
    });
  }
}
