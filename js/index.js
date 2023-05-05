document.querySelectorAll(".customScroll").forEach((dropdow) => {
  new SimpleBar(dropdow, {
    autoHide: false,
    scrollbarMaxSize: 70,
  });
});

let phone = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999) 999-99-99");
im.mask(phone);
new window.JustValidate(".form", {
  colorWrong: "#FF5C00",
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 15,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      },
    },
    mail: {
      required: true,
      email: true,
    },
  },
  messages: {
    name: "Вы не ввели имя",
    tel: {
      required: "Вы не ввели телефон",
      function: "Не достаточноe количество символов",
    },
    mail: {
      required: "Вы не ввели e-mail",
    },
  },
});
