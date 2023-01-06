const commentsBuilder = (data) => `
    <li data-comment-item>
      <p>${data.creation_date} ${data.username}: ${data.comment}</p>
    </li>
    `;

export default commentsBuilder;