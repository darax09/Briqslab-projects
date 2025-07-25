for (var i = 1; i <= 5; i++) {
  var loop = "";
  for (var j = 0; j < 5; j++) {
    loop += (i + j);
  }
  console.log(loop);
}



document.getElementById("openModalBtn").onclick = function () {
    document.getElementById("modal").style.display = "flex";
};

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function submitComment() {
    const name = document.getElementById("username").value.trim();
    const comment = document.getElementById("usercomment").value.trim();

    if (!name || !comment) {
        alert("Please fill in both fields.");
        return;
    }

    const commentObj = { name, comment };
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.push(commentObj);
    localStorage.setItem("comments", JSON.stringify(comments));

    document.getElementById("username").value = "";
    document.getElementById("usercomment").value = "";
    closeModal();
    showComments();
}

function showComments() {
    const commentList = document.getElementById("commentlist");
    commentList.innerHTML = "";
    const comments = JSON.parse(localStorage.getItem("comments")) || [];

    comments.forEach((cmt) => {
        const li = document.createElement("li");
        li.style.marginBottom = "10px";
        li.innerHTML = `<strong>${cmt.name}</strong>: ${cmt.comment}`;
        commentList.appendChild(li);
    });
}

