const newFormHandler = async (event) => {
    event.preventDefault();

        const title = document.querySelector('#book-name').value.trim();
        
        if (title ) {
          const response = await fetch(`/api/books`, {
            method: 'GET',
            body: JSON.stringify({ title }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert('Failed to update dashboard');
          }
        }
      };
   

      const delButtonHandler = async (event) => {
        if (event.target.hasAttribute('data-id')) {
          const id = event.target.getAttribute('data-id');
      
          const response = await fetch(`/api/review/${id}`, {
            method: 'DELETE',
          });
      
          if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert('Failed to delete reviews');
          }
        }
      };
    
      
      
      document
        .querySelector('.new-book-form')
        .addEventListener('submit', newFormHandler);
      
      document
        .querySelector('.book-history')
        .addEventListener('click', delButtonHandler);