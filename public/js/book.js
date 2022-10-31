
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
      body: JSON.stringify({ content, rating, book_id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
   console.log(response);
    if (response.ok) {
      document.location.replace(`/book/${book_id}`);
    } else {
      alert("Failed to add review for the book");
    }
  }
};

// adding a book image
const addButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/image/${id}`, {
      method: "POST",
    });

    if (response.ok) {
      document.location.replace("/image");
    } else {
      alert("Failed to add the book image");
    }
  }
};

// delete a book when admin
const delButtonHandler = async (event) => {
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  console.log(`trying to delete book id = ${id}`)
    if (confirm('Are you sure you want to delete this book?')){
      const response = await fetch(`/api/book/${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        document.location.replace('/admin');
      } else {
        alert('Failed to delete the book');
      }
    }
  };



// delete review when admin
  btns = document.getElementsByClassName("delete-review");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", async function () {
          const bookid = window.location.toString().split("/")[
            window.location.toString().split("/").length - 1
          ];
          id = event.target.id;
          console.log(`trying to delete review id = ${id}`)
            if (confirm('Are you sure you want to delete this review?')){
              const response = await fetch(`/api/book/review/${id}`, {
                method: 'DELETE',
              });
              
              if (response.ok) {
                document.location.replace(`/book/${bookid}`);
              } else {
                alert('Failed to delete the review');
              }
            }        });
    }


  
    document
  .querySelector(".new-review-form")
  .addEventListener("submit", newFormHandler);
  
    document
  .querySelector('.delete-book')
  .addEventListener('click', delButtonHandler);



document
  .querySelector(".book-image")
  .addEventListener("click", addButtonHandler);


