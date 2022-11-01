// adding book form
const newFormHandler = async (event) => {
console.log("TRYING TO ADD NEW BOOK");
event.preventDefault();

const title = document.querySelector("#title").value.trim();
const year = document.querySelector("#year").value.trim();
const synopsis = document.querySelector("#synopsis").value.trim();
const isbn = document.querySelector("#isbn").value.trim();
const author = document.querySelector("#author").value.trim();

// document.querySelector("#cover-upload").addEventListener('change', function () {
//   const reader = new FileReader();
//   reader.addEventListener("load", () => {
//     const uploaded = reader.result;
//     console.log(uploaded)
//   })
// })



if (title && year && synopsis && isbn && author) {
  const response = await fetch(`/api/adb/new-book`, {
    method: "POST",
    body: JSON.stringify({ title, year, synopsis, isbn, author }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
  //   //add cover request
  //   console.log(file)
  //   const res = await fetch(`/api/adb/new-book-cover`, {
  //     method: "POST",
  //     file: file,
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })

  //   if (res.ok) {
    document.location.replace("/admin");
  } else {
    alert("Failed to add book");
  }
}
};


// Adding book cover for the new book
// const addButtonHandler = async (event) => {
//   if (event.target.hasAttribute("data-id")) {
//     const id = event.target.getAttribute("data-id");

//     const response = await fetch(`/api/adb/new-book-cover`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (response.ok) {
//       document.location.replace("/image");
//     } else {
//       alert("Failed to add the book cover");
//     }
//   }
// };

// document
//   .querySelector("#cover-upload")
//   .addEventListener("click", addButtonHandler);

document
.querySelector(".new-book-form")
.addEventListener("submit", newFormHandler);
