const loginForm = document.querySelector('.login-form');//пошук форми

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

//Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням 
if(loginForm.email.value === '' || loginForm.elements.password.value === '') {
  alert('All form fields must be filled in');
}

//созд объекта = [ключи-значения]: доступ к значениям через пседомассив (Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях.) 
  const formData = {
 [loginForm.elements.email.name]: loginForm.elements.email.value.trim(), 
 [loginForm.elements.password.name]: loginForm.elements.password.value.trim(),
}
  console.log(formData);

//чистка форми  
loginForm.reset();
});

