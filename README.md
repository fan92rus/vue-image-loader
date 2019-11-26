image loader for vue js with prevue

used

js -
  import ImageLoader from "vue-picture-upload";
html -
  <ImageLoader :Images="images" keyName="id" valueName="i" />
Images is array contained pictures
keyName is name key property from array ('id' or 'name') etc.
valueName is name property contained image url ('image' or 'img' or 'pic') etc.
accept is string file types ('.png , .jpg') etc.
multiple is multiply load images

@remove is event returned remove key
@upload returned blob file for upload