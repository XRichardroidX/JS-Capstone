const commentsBuilder = (data) => `
  <li>
    <p>${data.creation_date} ${data.username}: ${data.comment}</p>
  </li>
  `;

export default commentsBuilder;