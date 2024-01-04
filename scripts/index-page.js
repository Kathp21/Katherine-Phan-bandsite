//create title element for class comment
const title = document.createElement("h4");
const gateway = document.querySelector(".comment");
title.innerText = "Join the Conversation";
gateway.appendChild(title);

//create form element for NAME
const form = document.createElement("form");
form.className = "comment__form";

const userEnterName = document.createElement("div");
userEnterName.className = "comment__container";

const userNameLabel = document.createElement("label");
userNameLabel.setAttribute('for', 'userName');
userNameLabel.textContent = 'NAME';

const userNameInput = document.createElement('input');
userNameInput.type = "text";
userNameInput.name = "userName";
userNameInput.id = "userName";
userNameInput.placeholder = "Enter your name";
userNameInput.className = "comment__name-input";
userNameInput.required = true;

userEnterName.appendChild(userNameLabel);
userEnterName.appendChild(userNameInput);

form.appendChild(userEnterName);
gateway.appendChild(form);

//create form element for COMMENT

const userAddComment = document.createElement("div");
userAddComment.className = "comment__container";

const addCommentLabel = document.createElement("label");
addCommentLabel.setAttribute('for', 'addComment');
addCommentLabel.textContent = 'COMMENT';

const addCommentInput = document.createElement('input');
addCommentInput.type = "text";
addCommentInput.name = "addComment";
addCommentInput.id = "addComment";
addCommentInput.placeholder = "Add a new comment";
addCommentInput.className = "comment__input";
addCommentInput.required = true;

userAddComment.appendChild(addCommentLabel);
userAddComment.appendChild(addCommentInput);

form.appendChild(userAddComment);
gateway.appendChild(form);

//Style form
userNameLabel.classList.add("comment__name");
addCommentLabel.classList.add("comment__name");

//Button
const btnContainer = document.createElement("div");
gateway.appendChild(btnContainer)

const btn = document.createElement("button");
btn.innerText = "COMMENT";
gateway.appendChild(btn);

btnContainer.appendChild(btn);

//Style button
btn.classList.add("comment__button");
btnContainer.classList.add("comment__btn-container");

