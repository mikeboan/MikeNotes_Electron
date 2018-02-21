export const fetchNotes = () => {
  // Default options are marked with *
  return fetch('http://localhost:3000/notes', {
    method: 'GET',
  })
  .then(response => response.json()) // parses response to JSON
};

export const postNote = (note) => {
  debugger
  return fetch('http://localhost:3000/notes', {
    method: 'POST',
    body: JSON.stringify({ note }),
    headers: { "Content-Type": "application/json" }
  })
  .then(response => response.json())
}
