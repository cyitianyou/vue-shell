<template>
  <div class="intro">
    <van-swipe :loop="false">
      <van-swipe-item  v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
          <img class="try"  @click="start" v-lazy="tryImage" v-if="index + 1 === images.length "/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { State, Action } from "vuex-class";
@Component({})
export default class Intro extends Vue {
  @State("images") private images!: string[];
  @State("tryImage") private tryImage!: string;
  private created(): void {
    this.images;
    this.tryImage;
  }
  private start(): void {
    window.location.href = "#/home";
  }
}
</script>
<style scoped lang="less">
.intro {
  width: 100%;
  height: 100%;
  border: 0;
  margin: 0;
  padding: 0;
}
.van-swipe,
.van-swipe__track img {
  width: 100%;
  height: 100%;
}
.try {
  vertical-align: middle;
  display: table-cell;
  height: auto;
  width: auto;
  max-width: 50%;
  position: relative;
  top: -120px;
  margin: auto;
}
</style>