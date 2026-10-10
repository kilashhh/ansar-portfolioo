'use strict';
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const mobile = window.matchMedia('(max-width: 650px)');
function setMenu(open) {
  toggle.setAttribute('aria-expanded', String(open));
  navigation.hidden = mobile.matches && !open;
}
function syncMenu() { setMenu(!mobile.matches); }
toggle.hidden = false;
syncMenu();
mobile.addEventListener('change', syncMenu);
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
navigation.addEventListener('click', event => {
  if (event.target.closest('a') && mobile.matches) setMenu(false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobile.matches && toggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false); toggle.focus();
  }
});
const copy = document.querySelector('.copy-button');
const status = document.querySelector('#copy-status');
copy.hidden = false;
copy.addEventListener('click', async () => {
  try {
    if (!navigator.clipboard) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText('+1 708 552 5090');
    status.textContent = 'Phone number copied.';
  } catch {
    status.textContent = 'Please select and copy the number above: +1 708 552 5090.';
  }
});
