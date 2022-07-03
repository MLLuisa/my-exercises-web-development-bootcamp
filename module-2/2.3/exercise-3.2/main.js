'use strict';

const user = document.querySelector(".user__avatar");
// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.jp/150x150.png';
// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';
user.name = "avatar";

user.innerHTML = `<div class="user">
<h1 class="user__name">Bill</h1>
<img class="user__avatar" src="${userAvatar}"/>
</div>`;

if (userAvatar === '') {
    user.src = DEFAULT_AVATAR;
} else {
    user.src = userAvatar;
}

