function uploadAvatar(event) {
    const image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
    // const icon = document.getElementById('icon');
    // icon.style.display = "none";
  }