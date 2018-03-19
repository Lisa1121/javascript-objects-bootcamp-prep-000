var playlist = new Object({artist:'song title'});
function updatePlaylist(playlist, artist, song) {
  return Object.assign({}, playlist, {[artist]: song})
}
