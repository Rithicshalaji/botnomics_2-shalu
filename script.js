

  function playVideo() {
    // Hide text and button
    document.getElementById('text-and-button').classList.add('hide');

    // Play the video
    var video = document.getElementById('myVideo');
    video.play();
  }