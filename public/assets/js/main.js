document.addEventListener("DOMContentLoaded", function(){
  function actualizarReloj(){
    const ahora = new Date();
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();
    
    if (horas < 10) {
      horas = "0" + horas;
    } if (minutos < 10) {
      minutos = "0" + minutos;
    } if (segundos < 10) {
      segundos = "0" + segundos;
    };
    
    const tiempo = horas + ":" + minutos + ":" + segundos;
    const timeElement = document.getElementById('time');
    if (timeElement) {
      timeElement.textContent = tiempo;
    }
  };
actualizarReloj();
setInterval(actualizarReloj, 1000);


  function checkMobileNotice() {
      const isMobile = window.innerWidth <= 768;
      const overlay  = document.querySelector('.mobile-notice-overlay');

      if (isMobile) {
        overlay.classList.add('show');

        const closeBtn = document.getElementById('close-mobile-notice');
        if (closeBtn) {
          closeBtn.addEventListener('click', function () {
            overlay.classList.remove('show');
          });
        }
      }
    }
    checkMobileNotice();
});
// Splash screen: shown only on the first visit of the session
(function () {
  const splash = document.getElementById('splash');
  if (!splash || document.documentElement.classList.contains('splash-seen')) return;

  const MIN_TIME = 1200;

  function hideSplash() {
    const wait = Math.max(0, MIN_TIME - performance.now());
    setTimeout(function () {
      splash.classList.add('hide');
      try { sessionStorage.setItem('splashSeen', '1'); } catch (e) {}
      setTimeout(function () { splash.remove(); }, 500);
    }, wait);
  }

  if (document.readyState === 'complete') {
    hideSplash();
  } else {
    window.addEventListener('load', hideSplash);
  }
})();
