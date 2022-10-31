// star rating
const ratingStars = [...document.getElementsByClassName("rating__star")];

let rating;

function executeRating(stars) {
  const starClassActive = "rating__star fas fa-star";
  const starClassInactive = "rating__star far fa-star";
  const starsLength = stars.length;
  
  let i;
  stars.map((star) => {
    star.onclick = () => {
      i = stars.indexOf(star);
      rating = i + 1;
      console.log("this many stars " + rating);

      if (star.className === starClassInactive) {
        for (i; i >= 0; --i) stars[i].className = starClassActive;
      } else {
        for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
      }
    };
  });
}
executeRating(ratingStars);



// adding a review & rating
const newFormHandler = async (event) => {
  event.preventDefault();

  const book_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  console.log(book_id)
  const content = document.querySelector("#reviewtext").value.trim();
  console.log(content)

  if (content) {
        const response = await fetch(`/api/book/review`, {
      method: "POST",
      body: JSON.stringify({ content, book_id, rating }),
      headers: {
        "Content-Type": "application/json",
      },
    });
   console.log(response);
    if (response.ok) {
      updateReviewRating();      
      document.location.replace(`/book/${book_id}`);
    } else {
      alert("Failed to add review for the book");
    }
  }
};

// updating the rating 
let updateReviewRating = async () => {
  const reviewRatings = await fetch(`/api/book/ratings/`, {
    method: "GET",
    headers: {"Content-Type": "application/json"}
  })

  let ratingArray = JSON.parse(reviewRatings)
  const newRating = ratingArray.reduce((a,b) => a + b, 0) / ratingArray.length
  console.log(newRating)

  const updateReview = await fetch(`/api/book/review/update`, {
    method: 'PUT',
    body: JSON.stringify({newRating}),
    headers: {"Content-Type": "application/json"}
  })
  console.log(updateReview)
}

document
  .querySelector(".new-review-form")
  .addEventListener("submit", newFormHandler);