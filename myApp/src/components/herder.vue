<template>
  <div class="header">
    <div class="row">
      <div class="logo">
        <a href="/">
          <img class="icon-logo" src="https://www.zymk.cn/static/images/default/logo.png" />
        </a>
      </div>
      <div class="nav">
        <ul>
          <li v-for="(el,i) in nav" ref="nav_ul" @click="my_li(i)">
            <a href="javascript:;">{{el.name}}</a>
          </li>
        </ul>
        <i class="modify hide" style="left: 8px; width: 32px; display: inline;" ref="nav_i"></i>
      </div>
      <div class="aside">
        <div class="search">
          <div class="bd" ref="bd">
            <input
              type="text"
              class="s_input"
              id="search"
              name="search"
              ref="s_input"
              @focus="myfocus"
              @blur="myblur"
            />

            <button type="button" class="s_button" ref="s_button">
              <label for="search" class="s_label iconfont">
                <svg
                  t="1573027630605"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http:// www.w3.org/2000/svg"
                  p-id="4502"
                  width="24"
                  height="24"
                >
                  <path
                    d="M694.3 430.2c0-65.6-22.3-126.1-59.7-174.3 29.5 83.1-28.6 245-95.7 308.9-74.6 71.1-223.2 120.8-303 91.7 48.1 36.9 108.1 58.9 173.2 58.9 157.3-0.1 285.2-128 285.2-285.2z"
                    fill="#FFD524"
                    p-id="4503"
                  />
                  <path
                    d="M951.6 893L740.4 681.8c-11.7-11.7-30.6-11.7-42.3 0-11.7 11.7-11.7 30.6 0 42.3l211.2 211.2c5.8 5.8 13.5 8.8 21.1 8.8 7.7 0 15.3-2.9 21.1-8.8 11.8-11.7 11.8-30.6 0.1-42.3zM409.1 85.2c-38.5 0-76.3 6.3-112.3 18.7-15.6 5.4-23.9 22.4-18.5 38s22.4 23.9 38 18.5c29.8-10.3 61-15.5 92.9-15.5 91.6 0 173.2 43.5 225.4 110.9 37.4 48.2 59.7 108.7 59.7 174.3 0 157.2-127.9 285.2-285.2 285.2-65.1 0-125.2-22-173.2-58.9-68-52.1-111.9-134.1-111.9-226.2 0-55.1 15.7-108.5 45.4-154.5 9-13.9 5-32.4-8.9-41.3-13.9-9-32.4-5-41.3 8.9-36 55.7-55 120.3-55 186.9 0 190.2 154.7 344.9 344.9 344.9S754 620.4 754 430.2s-154.7-345-344.9-345z"
                    fill="#333333"
                    p-id="4504"
                  />
                  <path
                    d="M204.2 220.8c6.9 0 13.8-2.4 19.4-7.2 5-4.2 10.1-8.4 15.4-12.3 13.2-9.9 16-28.6 6.1-41.8-9.9-13.3-28.6-16-41.8-6.1-6.4 4.8-12.6 9.8-18.6 14.9-12.5 10.7-14 29.6-3.2 42.1 5.9 6.8 14.3 10.4 22.7 10.4z"
                    fill="#333333"
                    p-id="4505"
                  />
                </svg>
              </label>
            </button>
            <div class="s_box" ref="s_box">
              <dl>
                <dt>大家都在搜</dt>
                <dd class="s_dd">
                  <a href="/" v-for="el in sdd">{{el.name}}</a>
                </dd>
                <dt>
                  搜索历史
                  <span class="s_clean" ref="s_clean">清空</span>
                </dt>
                <dd v-if="search_box!=undefined&&search_box.length>0" class="s_history_box">
                  <div v-for="el in search_box" class="s_history">
                    <a href="javascript" class="s_history_tiao">{{el}}</a>
                    <span class="s_clean1" ref="s_clean1">&times</span>
                  </div>
                </dd>
                <dd v-else class="s_none">
                  暂无相关所搜历史
                  <strong>^_^</strong>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <ul class="user">
          <li class="user_name fl">
            <img src alt />
          </li>
          <li class="user_phone fl">
            <img src alt class="user_phone_img" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        { name: "首页", path: "/" },
        { name: "分类", path: "/" },
        { name: "排行", path: "/" },
        { name: "更新", path: "/" },
        { name: "书单", path: "/" },
        { name: "APP", path: "/" }
      ],
      sdd: [
        { name: "斗破苍穹", url: "/" },
        { name: "斗罗大陆", url: "/" },
        { name: "元尊", url: "/" },
        { name: "绝世唐门", url: "/" },
        { name: "妖神记", url: "/" },
        { name: "风起苍岚", url: "/" },
        { name: "凤逆天下", url: "/" }
      ],
      search_box: [],
      search_box_flag: false
    };
  },
  methods: {
    my_li: function(i) {
      this.$store.commit("nav_li", i);
    },
    myfocus: function() {
      this.$refs.s_box.style.display = "block";
    },
    myblur: function() {
      this.$refs.s_box.style.display = "none";
    }
  },
  mounted() {
    console.log(this.$refs.nav_ul);
    this.$refs.nav_ul.forEach((el, i) => {
      el.addEventListener("mouseenter", e => {
        this.$refs.nav_i.style.transform = `translateX(${48 * i}px)`;
      });
      el.addEventListener("mouseleave", e => {
        this.$refs.nav_i.style.transform = `translateX(${48 *
          this.$store.state.nav_li}px)`;
      });
    });

    this.$refs.s_clean.addEventListener("click", el => {
      console.log(1);
      this.search_box = [];
      return;
    });
    this.$refs.s_button.addEventListener("click", el => {
      if (this.$refs.s_input.value == "") {
        return;
      }
      this.search_box.push(this.$refs.s_input.value);
    });
  }
};
</script>


<style scoped>
*,
dl,
ol,
ul {
  padding: 0;
  margin: 0;
}
h1,
h2 {
  font-weight: normal;
}
a {
  text-decoration: none;
}
ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
/* div::after {
  display: block;
  content: "";
  clear: both;
} */
.fr {
  float: right;
}
.fl {
  float: left;
}
.header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 68px;
  padding-top: 4px;
  background-image: linear-gradient(#000, transparent);
}
.row {
  min-width: 960px;
  max-width: 80%;
  width: 80%;
  margin: 0 auto;
}
.logo {
  display: block;
  margin-top: 4px;
  height: 48px;
  float: left;
}
.icon-logo {
  width: 208px;
  height: 48px;
}
.nav {
  float: left;
  height: 40px;
  display: inline;
  position: relative;
  margin: 8px 0 0 32px;
}
.nav li {
  line-height: 40px;
  font-size: 16px;
  display: inline;
  float: left;
  height: 40px;
}
.nav a {
  transition: 0.3s ease-in;
  padding: 0 8px;
  color: #fff;
}
.active {
  border-bottom: 2px solid red;
}
.modify {
  content: "";
  position: absolute;
  left: 10px;
  bottom: 0;
  width: 32px;
  height: 3px;
  background-color: #ff7647;
  transition: 0.2s ease-in;
}
.header .aside {
  display: inline;
  float: right;
}
.search {
  margin-top: 12px;
  float: left;
}
.search > .bd {
  width: 140px;
  height: 32px;
  position: relative;
}
.s_input {
  box-sizing: border-box;
  width: 100%;
  height: 32px;
  outline: none;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-color: transparent;
  padding: 8px 32px 8px 8px;
}
.s_button {
  width: 32px;
  height: 32px;
  position: absolute;
  right: 0;
  top: 0;
  border: none;
  background-color: transparent;
  opacity: 0.5;
  cursor: pointer;
}
.s_label {
  cursor: pointer;
}
.s_box {
  background-color: rgb(255, 255, 255);
  display: none;
  position: absolute;
  box-sizing: border-box;
  width: 282px;
  /* height: 172px; */
  border-radius: 6px;
  left: 50%;
  margin-left: -141px;
  top: 40px;
  border: 1px solid rgb(153, 149, 149);
  box-shadow: 0 0 5px rgba(177, 169, 169, 0.6);
  transition: 0.3s ease-in;
  overflow: hidden;
  z-index: 999;
}
.s_box::before {
  position: absolute;
  content: "";
  top: -9px;
  left: 0;
  border-bottom: 9px solid greenyellow;
  border-left: 9px solid transparent;
  border-right: 9px solid transparent;
  left: 50%;
  margin-left: -9px;
}
.user {
  float: left;
  list-style: none;
}
.user_name > img {
  width: 100px;
  height: 100px;
}
.s_box dt {
  height: 30px;
  color: #2a2b4a;
  background-color: #f5f5f5;
  line-height: 30px;
  padding-left: 10px;
}
.s_dd {
  max-height: 60px;
  overflow: hidden;
  margin: 6px;
  padding: 0 10px;
}
.s_dd a {
  display: inline-block;
  margin: 5px 10px 5px 0;
  border-radius: 3px;
  height: 20px;
  line-height: 18px;
  font-size: 12px;
  padding: 0 4px;
}
.s_dd a {
  color: #ffffff;
}
.s_dd a:nth-child(2n) {
  background-color: #f3bd7e;
}
.s_dd a:nth-child(1) {
  background-color: #c78590;
}
.s_dd a:nth-child(2n + 1) {
  background-color: #6ec4e9;
}
.s_dd a:nth-child(5) {
  background-color: #9b9bd5;
}
.s_dd a:nth-child(6) {
  background-color: #f776ec;
}
.s_clean {
  color: #6ec4e9;
  float: right;
  margin-right: 10px;
  cursor: pointer;
}
.s_none {
  font-size: 10px;
  color: rgb(197, 192, 192);
  text-align: center;
  padding: 10px;
}
.s_history {
  height: 30px;
  font-size: 12px;
  margin-left: 5px;
  line-height: 30px;
}
.s_history_tiao {
  display: block;
  height: 30px;
  width: 180px;
  float: left;
}
.s_history:nth-child(n) .s_history_tiao:hover {
  cursor: pointer;
  color: #f15f32;
}
.s_history:nth-child(2n) .s_history_tiao:hover {
  cursor: pointer;
  color: #f789f1;
}
.s_history:nth-child(3n) .s_history_tiao:hover {
  cursor: pointer;
  color: #f72c80;
}

.s_history_box {
  max-height: 150px;
  overflow-y: auto;
}
.s_clean1 {
  display: block;
  float: right;
  width: 30px;
  height: 30px;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
}
.s_clean1:hover {
  background-color: rgba(177, 169, 169, 0.6);
}
.user_name {
  height: 80px;
  width: 56px;
  margin-bottom: -24px;
  margin-left: 10px;
}
.user_name img {
  display: block;
  background: url(https://image.zymkcdn.com/file/head/020/433/344.jpg-noresize.webp)
    center center / cover no-repeat;
  opacity: 1;

  width: 56px;
  height: 56px;

  border-radius: 50%;
}
.user_phone {
  margin: 8px 0 8px 10px;
  width: 40px;
  height: 40px;
  padding-left: 0;
  margin-left: 10px;
  border-radius: 50%;
  background-color: #fee385;
}
.user_phone_img {
  display: block;
  background: url(https://image.zymkcdn.com/file/head/020/433/344.jpg-noresize.webp)
    center center / cover no-repeat;
  opacity: 1;

  width: 100%;
  height: 100%;

  border-radius: 50%;
}
</style>
