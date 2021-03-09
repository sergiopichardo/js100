/*
Let's generalize the function from the previous
exercise a bit. Implement a function cite that
takes two string arguments: the author of the
quote and what they said. It then logs the quote
to the console, as in the following example.
*/

// logs:
// Brendan Eich said: "Always bet on JavaScript."

/**
 * @param {string} quote
 * @param {string} author
 */
function cite(quote, author) {
  console.log(`${author} always said: ${quote}`);
}

cite('Brendan Eich', 'Always bet on JavaScript.');