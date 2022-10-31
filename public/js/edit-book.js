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

    console.log(`trying to edit book ${id} `)
    if (title && year && synopsis && isbn && author ) {
        const response = await fetch(`/api/book/${id}`, {
          method: 'PUT',
          body: JSON.stringify({ id,title,year,synopsis,isbn,author }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          document.location.replace(`/book/${id}`);
        } else {
          alert('Failed to add book');
        }
      }
    };


    document
    .querySelector('.edit-book-form')
    .addEventListener('submit', editFormHandler);