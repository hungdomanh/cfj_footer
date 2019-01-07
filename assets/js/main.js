const defaultImage = 'https://static.carfromjapan.com/public/images/car-default.jpg'
const isDev = true;

export const getImageCDN = (image, width = 0, height = 0, protocol = '') => {
  if (!image) return defaultImage
  if (!image.filename) return defaultImage
  if (image.rejected) return defaultImage
  if (protocol) {
    protocol += ':'
  } else if (!isDev) {
    protocol = 'https:'
  }
  return protocol + '//' + image.cdnUri + '/' + image.filename + `_${width}_${height}`
}