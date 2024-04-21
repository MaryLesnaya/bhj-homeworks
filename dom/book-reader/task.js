const fonts = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('.book__content');
fonts.forEach((font, index) => {
    font.addEventListener('click', event => {
      for(let i = 0; i < fonts.length; i++) {
        fonts[i].classList.remove('font-size_active');
      }
      console.log(book);
      font.classList.add('font-size_active');
      event.preventDefault();
      
      if(font.dataset.size === 'small') {
        console.log('small');
        book.classList.remove('font-size_big');
        book.classList.add('font-size_small');
      }
      
      if(font.dataset.size === 'big') {
        book.classList.remove('font-size_small');
        book.classList.add('font-size_big');
      }

      if(font.dataset.size !== 'big' && font.dataset.size !== 'small') {
        book.classList.remove('font-size_small');
        book.classList.remove('font-size_big');
      }
    });
})