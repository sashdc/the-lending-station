
  
  // delete a book when admin
  const delButtonHandler = async (event) => {
    const id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1
    ];
    console.log(`trying to delete book id = ${id}`)
      if (confirm('Are you sure you want to delete this book?')){
        const res = await fetch (`/api/book/${id}/bh`, {
          method: 'DELETE',
        });

        const surpanakha = await fetch (`/api/book/${id}/cover`, {
          method: 'DELETE',
        });

        const raktapaska = await fetch (`/api/book/${id}/reviews`, {
          method: 'DELETE',
        });

        //if (res.ok){
          const response = await fetch(`/api/book/${id}`, {
            method: 'DELETE',
          });
          
          if (response.ok) {
            document.location.replace('/admin');
          } else {
            alert('Failed to delete the book');
          }
        // } else {
        //   alert('Something went wrong');
        //}
  }};
  
  
    // delete a review when admin
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
    .querySelector('.delete-book')
    .addEventListener('click', delButtonHandler);
   
