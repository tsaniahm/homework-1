import "./styles.css";

document.getElementById("submit").addEventListener("click", function () {
  let playlistTitle = document.getElementById("playlist-title");
  let playlistDesc = document.getElementById("playlist-desc");
  alert(
    `Success to Create "${playlistTitle.value}" Playlist. Description: ${playlistDesc.value}`
  );
});
