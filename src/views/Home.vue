<template>
  <div class="side-nav">
    <h1 class="zanui-title">
      <img src="https://app.avacloud.com.cn/welcomeimage.png" >
      <span>Vstore</span>
    </h1>
    <h2 class="zanui-desc">{{ description }}</h2>
  </div>
</template>

<script lang="ts">
import { Vue, Prop } from "vue-property-decorator";
export default class Home extends Vue {
  @Prop() private description: string = "智能业务应用系统";
}
</script>

<style lang="less" scoped>
.side-nav {
  width: 100%;
  box-sizing: border-box;
  padding: 60px 15px 20px;
  .zanui-title,
  .zanui-desc {
    text-align: center;
    font-weight: normal;
    user-select: none;
  }
  .zanui-title {
    margin: 0 0 15px;
    img,
    span {
      display: inline-block;
      vertical-align: middle;
    }
    img {
      width: 36px;
    }
    span {
      font-size: 40px;
      margin-left: 15px;
      font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial,
        sans-serif;
    }
  }
  .zanui-desc {
    font-size: 14px;
    color: #455a64;
    margin: 0 0 60px;
  }
}
</style>
