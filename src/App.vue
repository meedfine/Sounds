<template>
  <router-view />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
  -webkit-app-region: no-drag;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
*:focus {
  outline: none;
}
ul,
ol,
li {
  list-style: none;
}
.drag {
  -webkit-app-region: drag;
}
.no-drag {
  -webkit-app-region: no-drag;
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
}
/*滑块*/
::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
/*滑道*/
::-webkit-scrollbar-track {
  border-radius: 10px;
}
html,
body {
  height: 100%;
  font: 14px/1.5 Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.iconfont {
  line-height: 1;
}
#app {
  height: 100%;
}
</style>
