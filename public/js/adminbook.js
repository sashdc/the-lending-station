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
  
  
    // delete a review when admin
  const delReviewHandler = async (event) => {
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
  
    document
    .querySelector('.delete-review')
    .addEventListener('click', delReviewHandler);
  
    document
    .querySelector('.delete-book')
    .addEventListener('click', delButtonHandler);
   
  document
    .querySelector(".book-image")
    .addEventListener("click", addButtonHandler);