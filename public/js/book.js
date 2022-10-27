const newFormHandler = async (event) => {
    event.preventDefault();

    const review = document.querySelector('#review').value.trim();

    if (review ) {
        const response = await fetch(`/api/books`, {
          method: 'GET',
          body: JSON.stringify({ review }),
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
            method: 'GET',
          });
      
          if (response.ok) {
            document.location.replace('/image');
          } else {
            alert('Failed to add the book image');
          }
        }
      };
    
      
      document
      .querySelector('.new-review-form')
      .addEventListener('submit', newFormHandler);

      document
      .querySelector('.book-image')
      .addEventListener('click', addButtonHandler);