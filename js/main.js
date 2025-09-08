document.addEventListener('DOMContentLoaded', () => {
  const cta = document.querySelector('.cta');
  if (cta) {
    cta.addEventListener('click', () => {
      alert('Selamat datang dan turnamen di SMKN 9 MEDAN!');
    });
  }
});