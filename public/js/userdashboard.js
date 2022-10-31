// const newFormHandler = async (event) => {
//     event.preventDefault();

//         const title = document.querySelector('#title').value.trim();
        
//         if (title ) {
//           const response = await fetch(`/api/books`, {
//             method: 'GET',
//             body: JSON.stringify({ title }),
//             headers: {
//               'Content-Type': 'application/json',
//             },
//           });
      
//           if (response.ok) {
//             document.location.replace('/dashboard');
//           } else {
//             alert('Failed to update dashboard');
//           }
//         }
//       };
   

//       const delButtonHandler = async (event) => {
//         if (event.target.hasAttribute('data-id')) {
//           const id = event.target.getAttribute('data-id');
      
//           const response = await fetch(`/api/review/${id}`, {
//             method: 'DELETE',
//           });
      
//           if (response.ok) {
//             document.location.replace('/dashboard');
//           } else {
//             alert('Failed to delete reviews');
//           }
//         }
//       };
    
      

// display borrowed book
  // grab the element to display in 
  // iterate over all books
  // if the borrowed_user = user_id
  // display that book

  const borrowedBook =  fetch(`/api/udb/book`, {
    method: 'GET',
  });

  console.log("<><><><><><><><><>< THIS IS THE BORROWED BOOK" + borrowedBook)
      
      // document
      //   .querySelector('.new-book-form')
      //   .addEventListener('submit', newFormHandler);
      
      // document
      //   .querySelector('.book-history')
      //   .addEventListener('click', delButtonHandler);