 const quoteContainer = document.querySelector('.quote');
const newQuoteBtn = document.getElementById('new-quote-btn');

 async function fetchRandomQuote() {
    try {
         const response = await fetch('https://type.fit/api/quotes');
        const data = await response.json();

         const randomIndex = Math.floor(Math.random() * data.length);

         const randomQuote = data[randomIndex];

         quoteContainer.innerHTML = `
            <p>${randomQuote.text}</p>
            <p>- ${randomQuote.author ? randomQuote.author : 'Unknown'}</p>
        `;
    } catch (error) {
        console.error('Error:', error);
        quoteContainer.innerHTML = '<p>An error occurred while fetching the quote.</p>';
    }
}

 newQuoteBtn.addEventListener('click', fetchRandomQuote);

 fetchRandomQuote();
