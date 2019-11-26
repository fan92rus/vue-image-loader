<template>
  <div>
    <div class="image_container">
      <div class="image" v-for="i in Images" :key="i[keyName]" :style="GetStyle(i[valueName])">
        <div class="image_button_constainer">
          <button class="reset remove" @click="Remove(i)">+</button>
        </div>
      </div>
      <div class="outline q-pa-sm row justify-around" v-if="preLoaded.length > 0">
        <div class="image" v-for="i in preLoaded" :key="i.name" :style="GetStyle(i.image)">
          <div class="image_button_constainer">
            <button class="reset remove" @click="RemoveFromBufer(i)">+</button>
          </div>
        </div>
        <button class="reset load" @click="Upload()">Загрузить</button>
      </div>
      <input type="file" id="file" ref="file" :accept="accept" :multiple="multiple" v-on:change="handleFileUpload()" />
      <button class="add reset" @click="Select()">+</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    Images: {
      type: Array,
      required: true
    },
    keyName: {
      type: String,
      required: true
    },
    valueName: {
      type: String,
      required: true
    },
    multiple: {
      type: Boolean,
      default: true
    },
    accept: {
      type: String,
      default: ".jpg, .png, .svg"
    }
  },
  data: () => ({
    preLoaded: []
  }),
  methods: {
    Select() {
      this.$refs.file.click();
    },
    Remove(e) {
      console.log(e);
      this.$emit("remove", e[this.keyName]);
      const index = this.Images.indexOf(
        this.Images.filter(el => el[this.keyName] === e[this.keyName])[0]
      );
      if (index || index === 0) {
        this.Images.splice(index, 1);
      }
    },
    RemoveFromBufer(e) {
      const index = this.preLoaded.indexOf(
        this.preLoaded.filter(el => el.name === e.name)[0]
      );
      if (index || index === 0) {
        this.preLoaded.splice(index, 1);
      }
    },
    Upload() {
      Array.from(this.preLoaded).forEach(el => {
        this.$emit("upload", el.image);
      });
      this.preLoaded = [];
    },
    async handleFileUpload() {
      const files = this.$refs.file.files;
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = e => {
          this.preLoaded.push({ image: e.target.result, name: file.name });
        };
        reader.readAsDataURL(file);
      });

      console.log(files);
    },
    GetStyle(image) {
      return {
        "background-image": "url(" + image + ")"
      };
    }
  },
  name: "vue-image-loader"
};
</script>
<style scoped>
#file {
  display: none;
}
.image_container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-items: center;
}
.image {
  width: 100px;
  height: 70px;
  margin: 5px;
  background-size: cover;
}
.reset {
  background: none;
  border: none;
  outline: none;
}
.add {
  cursor: pointer;
  font-size: 40px;
  margin: 10px 20px;
  transition-duration: 0.4s;
}
.add:hover {
  transition-duration: 0.1s;
  color: lightskyblue;
}
.add:active {
  color: lightcoral;
}
.image_button_constainer {
  background: rgba(17, 16, 16, 0.137);
  display: flex;
  justify-content: flex-end;
}
.remove {
  top: 0px;
  right: 0px;
  transform: rotate(45deg); /* Standard syntax */
  cursor: pointer;
  color: white;
  font-size: 13pt;
  transition-duration: 0.3s;
  text-shadow: 0px 0px 2px white; /* Параметры тени */
}
.remove :hover {
  color: red;
  text-shadow: 0px 0px 2px red; /* Параметры тени */
}
.outline {
  border: 1px gray solid;
  border-radius: 3px;
}
.load {
  font-size: 14pt;
  cursor: pointer;
  transition-duration: 0.3s;
}
.load:hover {
  text-decoration: underline;
}
.justify-around {
    justify-content: space-around;
}
</style>
