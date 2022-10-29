const newFormHandler = async (event) => {
    event.preventDefault();

    const review = document.querySelector('#review').value.trim();
    const rating = bookRating;

    if (review) {
        const response = await fetch(`/api/book/:id/review`, {
          method: 'POST',
          body: JSON.stringify({ review, rating }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
            document.location.replace('/review');
          } else {
            alert('Failed to add review for the book');
          }
        }
      };


const addButtonHandler = async (event) => {
        if (event.target.hasAttribute('data-id')) {
          const id = event.target.getAttribute('data-id');
      
          const response = await fetch(`/api/image/${id}`, {
            method: 'POST',
          });
      
          if (response.ok) {
            document.location.replace('/image');
          } else {
            alert('Failed to add the book image');
          }
        }
      };
    
      
      // star rating
      const ratingStars = [...document.getElementsByClassName("rating__star")];

      function executeRating(stars) {
        const starClassActive = "rating__star fas fa-star";
        const starClassInactive = "rating__star far fa-star";
        const starsLength = stars.length;
        let bookRating;
        let i;
        stars.map((star) => {
          star.onclick = () => {
            i = stars.indexOf(star);
            bookRating = i + 1;
            console.log("this many stars " + bookRating)
      
            if (star.className===starClassInactive) {
              for (i; i >= 0; --i) stars[i].className = starClassActive;
            } else {
              for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
            }
      
          };
        });
      }
      executeRating(ratingStars);
      


      document
      .querySelector('.new-review-form')
      .addEventListener('submit', newFormHandler);

      document
      .querySelector('.book-image')
      .addEventListener('click', addButtonHandler);