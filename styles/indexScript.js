const discoButton = document.querySelector('.discoMode');

discoButton.addEventListener('click', function() {
    const headerAppender = document.createElement('p');
    headerAppender.textContent = "DISCO";
    const headerBody = document.querySelector('.headMid');
    headerBody.appendChild(headerAppender);
})