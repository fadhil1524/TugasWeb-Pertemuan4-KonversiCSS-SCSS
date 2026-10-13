(function(){
    var root = document.documentElement;
    var toggle = document.getElementById('themeToggle');
    var label = document.getElementById('themeLabel');
    var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    root.setAttribute('data-theme', prefersLight ? 'light' : 'dark');
    function syncLabel(){
      var t = root.getAttribute('data-theme');
      label.textContent = 'mode: ' + (t === 'dark' ? 'gelap' : 'terang');
    }
    syncLabel();
    toggle.addEventListener('click', function(){
      var current = root.getAttribute('data-theme');
      root.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
      syncLabel();
    });

    var tabs = document.querySelectorAll('.tab');
    var pages = document.querySelectorAll('.page');
    var breadcrumb = document.getElementById('breadcrumbPage');
    var statusPage = document.getElementById('statusPage');

    function goTo(name){
      tabs.forEach(function(t){
        var active = t.getAttribute('data-page') === name;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', active ? 'true' : 'false');
      });
      pages.forEach(function(p){
        p.classList.toggle('is-active', p.id === 'page-' + name);
      });
      breadcrumb.textContent = name;
      statusPage.textContent = name + '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    tabs.forEach(function(t){
      t.addEventListener('click', function(e){
        e.preventDefault();
        goTo(t.getAttribute('data-page'));
      });
    });
    document.querySelectorAll('[data-goto]').forEach(function(btn){
      btn.addEventListener('click', function(){ goTo(btn.getAttribute('data-goto')); });
    });

    var greetingEl = document.getElementById('greeting');
    if (greetingEl) {
      var greetings = [
        'halo, saya Fadhil',
        'こんにちは、ファディルです',
        '안녕하세요, 파딜입니다',
        '你好，我是法迪尔',
        "hello, i'm Fadhil",
        'bonjour, je suis Fadhil'
      ];
      var gi = 0;
      var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!reduceMotion) {
        setInterval(function () {
          greetingEl.classList.add('is-swapping');
          setTimeout(function () {
            gi = (gi + 1) % greetings.length;
            greetingEl.textContent = greetings[gi];
            greetingEl.classList.remove('is-swapping');
          }, 350);
        }, 2400);
      }
    }

    var range = document.getElementById('range');
    var rangeVal = document.getElementById('rangeVal');
    if (range) {
      range.addEventListener('input', function(){ rangeVal.textContent = range.value; });
    }

    var form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('submit', function(e){
        e.preventDefault();
        var nama = document.getElementById('nama').value;
        var email = document.getElementById('email').value;
        var pesan = document.getElementById('pesan').value;
        var subject = encodeURIComponent('Pesan dari ' + nama);
        var body = encodeURIComponent(pesan + '\n\n— dikirim oleh ' + nama + ' (' + email + ')');
        window.location.href = 'mailto:m.fadhil11881@gmail.com?subject=' + subject + '&body=' + body;
      });
    }
  })();
