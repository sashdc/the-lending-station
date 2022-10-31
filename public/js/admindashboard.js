// adding book form
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
          document.location.replace('/admin');
        } else {
          alert('Failed to add book');
        }
      }
    };

    
// adding a cover
// const picture = document.querySelector('#picture').value.trim();


// if (picture) {
//        const response = await fetch(`/api/books`, {
//          method: 'POST',
//          body: JSON.stringify({ picture }),
//          headers: {
//            'Content-Type': 'application/json',
//          },
//        });
//        if (response.ok) {
//            document.location.replace('/picture');
//          } else {
//            alert('Failed to upload the picture for the book');
//          }
//        };
     


//      const addButtonHandler = async (event) => {
//        if (event.target.hasAttribute('data-id')) {
//          const id = event.target.getAttribute('data-id');
     
//          const response = await fetch(`/api/picture/${id}`, {
//            method: 'POST',
//          });
     
//          if (response.ok) {
//            document.location.replace('/picture');
//          } else {
//            alert('Failed to upload the picture for the book');
//          }
//        }
//      };

// document
//      .querySelector('.new-uploadpic-form')
//      .addEventListener('upload', newFormHandler);
      
      document
        .querySelector('.new-book-form')
        .addEventListener('submit', newFormHandler);
      
