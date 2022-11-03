// star rating
const ratingStars = [...document.getElementsByClassName("rating__star")];
var newRating;
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

  const content = document.querySelector("#reviewtext").value.trim();

  if (content) {
        const response = await fetch(`/api/book/review`, {
      method: "POST",
      body: JSON.stringify({ content, book_id, rating }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      salmon()
      document.location.reload();
    } else {
      alert("Failed to add review for the book");
    }
  }
};

// updating the rating 
const reviewRatings = fetch(`/api/book/ratings/`, {
  method: "GET",
  headers: {"Content-Type": "application/json"}
})
.then ((response) => response.json())

.then((solomon) => {
  return solomon.e
})

//average rating
const salmon = async () => {
  const arr = await reviewRatings
  let shikigami;
  if (arr) {
    shikigami = arr.reduce((a,b) => a + b, 0) / arr.length;
  } else {
    shikigami = 0;
  }

  await fetch(`/api/book/review/update`, {
  method: 'PUT',
  body: JSON.stringify({shikigami}),
  headers: {"Content-Type": "application/json"}
  })

}

salmon()

document
  .querySelector(".new-review-form")
  .addEventListener("submit", newFormHandler);