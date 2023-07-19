(() => {
  const refs = {
    openMobileBtn: document.querySelectorAll('[data-mobile-open]'),
    closeMobileBtn: document.querySelector('[data-mobile-close]'),
    mobile: document.querySelector('[data-mobile]'),
  };

  console.log(refs.openMobileBtn);

  refs.openMobileBtn.forEach(function (btn) {
    btn.addEventListener('click', toggleMobile);
  });
  refs.closeMobileBtn.addEventListener('click', toggleMobile);


  function toggleMobile() {
    document.body.classList.toggle("mobile-open");
    refs.mobile.classList.toggle('is-hidden');
  }
})();