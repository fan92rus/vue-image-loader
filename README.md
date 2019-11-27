# vue-image-loader
image loader for vue js with prevue

used

```
js -
  import ImageLoader from "vue-picture-upload";
html -
  <ImageLoader :Images="images" keyName="id" valueName="i" />
```

   Images is array contained pictures <br/>
   keyName is name key property from array ('id' or 'name') etc.<br/> 
   valueName is name property contained image url ('image' or 'img' or 'pic') etc. <br/>
   accept is string file types ('.png , .jpg') etc.<br/>
   multiple is multiply load images<br/>
   <br/>
   @remove is event returned remove key<br/>
   @upload returned blob file for upload<br/>

###if you have idea wrire to fan92rus@mail.ru or telegram @fan92rus