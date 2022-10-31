// edit book form
const editFormHandler = async (event) => {
  console.log("trying to edit book")
    event.preventDefault();
    const id = document.querySelector('#book-id').value.trim();
    const title = document.querySelector('#title').value.trim();
    const year = document.querySelector('#year').value.trim();
    const synopsis = document.querySelector('#synopsis').value.trim();
    const isbn = document.querySelector('#isbn').value.trim();
    const author = document.querySelector('#author').value.trim();
    const cover = document.querySelector('#cover').value.trim();
    const availability = document.forms["edit-book-form"].availability
    const available = availability.value
    const borrowed_user = document.querySelector('#borrower-id').value.trim();

    console.log(`trying to edit book ${id} `)
    if (title && year && synopsis && isbn && author && available ) {
        const response = await fetch(`/api/book/${id}`, {
          method: 'PUT',
          body: JSON.stringify({ id,title,year,synopsis,isbn,author, available  }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          document.location.replace(`/book/${id}`);
        } else {
          alert('Failed to edit book');
        }
      }
      if (title && year && synopsis && isbn && author && available && borrowed_user) {
        const response = await fetch(`/api/book/${id}`, {
          method: 'PUT',
          body: JSON.stringify({ id,title,year,synopsis,isbn,author, available,borrowed_user }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          document.location.replace(`/book/${id}`);
        } else {
          alert('Failed to edit book');
        }
      }
    };

    // Adding book cover
    const addButtonHandler = async (event) => {
      if (event.target.hasAttribute("data-id")) {
        const id = event.target.getAttribute("data-id");
    
        const response = await fetch(`/api/image/${id}`, {
          method: "POST",
        });
    
        if (response.ok) {
          document.location.replace("/image");
        } else {
          alert("Failed to add the book cover");
        }
      }
    };
  
    
    document
      .querySelector(".book-image")
      .addEventListener("click", addButtonHandler);

    document
    .querySelector('.edit-book-form')
    .addEventListener('submit', editFormHandler);