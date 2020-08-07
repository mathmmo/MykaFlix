function importAll(r) {
  return r.keys().map(r);
}
const imagesKid = importAll(require.context('../assets/img/gallery/kid', false, /\.(png|jpe?g)$/));
const imagesTeen = importAll(require.context('../assets/img/gallery/teen', false, /\.(png|jpe?g)$/));
const imagesFriends = importAll(require.context('../assets/img/gallery/friends', false, /\.(png|jpe?g)$/));
const imagesFamily = importAll(require.context('../assets/img/gallery/family', false, /\.(png|jpe?g)$/));
const imagesMe = importAll(require.context('../assets/img/gallery/me', false, /\.(png|jpe?g)$/));

const photosKid = [];
for (let index = 0; index < imagesKid.length; index++) {
  photosKid.push({
    src: imagesKid[index],
    width: 2,
    height: 3
  });
}
const photosTeen = [];
for (let index = 0; index < imagesTeen.length; index++) {
  photosTeen.push({
    src: imagesTeen[index],
    width: 2,
    height: 3
  });
}
const photosFriends = [];
for (let index = 0; index < imagesFriends.length; index++) {
  photosFriends.push({
    src: imagesFriends[index],
    width: 2,
    height: 3
  });
}
const photosFamily = [];
for (let index = 0; index < imagesFamily.length; index++) {
  photosFamily.push({
    src: imagesFamily[index],
    width: 2,
    height: 3
  });
}
const photosMe = [];
for (let index = 0; index < imagesMe.length; index++) {
  photosMe.push({
    src: imagesMe[index],
    width: 2,
    height: 3
  });
}

export const gallery = {
  'kid': photosKid,
  'teen': photosTeen,
  'friends': photosFriends,
  'family': photosFamily,
  'me': photosMe
};