const newFormHandler = async (event) => {
    event.preventDefault();
    
    const title = document.querySelector('#title').value.trim();
    const year = document.querySelector('#year').value.trim();
    const synopsis = document.querySelector('#synopsis').value.trim();
    const isbn = document.querySelector('#isbn').value.trim();
    const author = document.querySelector('#author').value.trim();
    const cover = document.querySelector('#cover').value.trim();
    if (title && year && synopsis && isbn && author ) {
        const response = await fetch(`/api/adb/new-book`, {
          method: 'POST',
          body: JSON.stringify({ title,year,synopsis,isbn,author }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to add book');
        }
      }
    };

    const delButtonHandler = async (event) => {
      console.log("trying to delete the book")
        if (confirm('Are you sure you want to delete this book?')){
          const response = await fetch(`/api/book/${id}`, {
            method: 'DELETE',
          });
          
          if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert('Failed to the delete book');
          }
        }
      };
    
      
      
      document
        .querySelector('.new-book-form')
        .addEventListener('submit', newFormHandler);
      
      document
        .querySelector('.delete-book')
        .addEventListener('click', delButtonHandler);