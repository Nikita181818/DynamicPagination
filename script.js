const itemsPerPage = 5;  // Number of items per page
const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);  //(50 total)

// Getting  elements from the DOM
const itemList = document.getElementById('item-list');
//gets item-list
const paginationContainer = document.getElementById('pagination');
//gets div where page numbers are displayed



//gives total number of pages
//total length/ no. of items on each page
const totalPages = Math.ceil(items.length / itemsPerPage);

//display page for clicked number
function displayItems(page) {
  const start = (page - 1) * itemsPerPage;
  const end = page * itemsPerPage;
  const pageItems = items.slice(start, end);

  // Clear the current list 
  itemList.innerHTML = '';

  // Append the items for the current page
  pageItems.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('item');
    itemElement.textContent = item;
    itemList.appendChild(itemElement);
  });
}

// Function to create pagination buttons
function createPagination(page) {
  paginationContainer.innerHTML = '';  // Clear previous pagination buttons

  const prevButton = document.createElement('button');
  prevButton.textContent = 'Prev';
  prevButton.classList.add('page-button');
  prevButton.disabled = page === 1;
  prevButton.onclick = () => goToPage(page - 1);

  paginationContainer.appendChild(prevButton);

  // Create  buttons which displays buttons
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.textContent = i;
    pageButton.classList.add('page-button');
    if (i === page) {
      pageButton.classList.add('active');
    }
    pageButton.onclick = () => goToPage(i);
    paginationContainer.appendChild(pageButton);
  }

  const nextButton = document.createElement('button');
  nextButton.textContent = 'Next';
  nextButton.classList.add('page-button');
  nextButton.disabled = page === totalPages;
  nextButton.onclick = () => goToPage(page + 1);

  paginationContainer.appendChild(nextButton);
}

// Function to navigate to page
function goToPage(page) {
  displayItems(page);
  createPagination(page);
}


goToPage(1);
