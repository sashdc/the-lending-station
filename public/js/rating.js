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