<template>
  <div class="mycontent">
    <div class="lunbo">
      <div class="layui-carousel" id="test1">
        <div carousel-item>
          <img v-for="el in L_imgs" :src="el" alt />
        </div>
      </div>
    </div>
    <div class="cartoon_box" v-for="(el,index) in title_name">
      <div class="head_box">
        <div class="title">
          <h2>
            <img :src="el.imgs" alt />
            {{el.name}}
          </h2>
          <p class="title_detail">{{el.title}}</p>
        </div>
      </div>
      <div class="content_box" v-if="el.flag==true">
        <div class="lunbo_left">
          <div class="layui-carousel" :id="el.ui_id">
            <div carousel-item>
              <img v-for="(el1,i) in el.Left_imgs" :src="el1" alt />
            </div>
          </div>
        </div>
        <div class="c_right_box">
          <ul>
            <li class="item" v-for="(el5,i) in el.data" v-if="i<=9">
              <a href="javascript:">
                <img :src="el5.bookimg" class="comic" alt />
                <span class="newset">{{el5.newset}}</span>
                <span class="score">{{el5.score}}</span>
              </a>
              <div class="info">
                <h3 class="title">
                  <a href="javascript:" :title="el5.bookname">{{el5.bookname}}</a>
                </h3>
                <p class="desc">{{el5.desc}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="classify" v-if="index==0">
        <div class="left_box">
          漫画
          <br />分类
        </div>
        <div class="right_box">
          <ul class="bd">
            <li class="item" v-for="(el3,i) in classify">
              <a href="javascript:">{{el3}}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="content_box" v-if="el.flag==false">
        <div class="bigbox" ref="thl">
          <ul ref="thl_ul">
            <li class="item" v-for="(el4,i) in el.data">
              <a href="javascript:">
                <img class="comic" :src="el4.bookimg" alt />
                <span class="newset">{{el4.newset}}</span>
                <span class="score">{{el4.score}}</span>
              </a>
              <div class="info">
                <h3 class="title">
                  <a href="javascript:" :title="el4.bookname">{{el4.bookname}}</a>
                </h3>
                <p class="desc">{{el4.desc}}</p>
              </div>
            </li>
          </ul>
          <i class="prev iconfont" ref="prev">&#xe74a;</i>
          <i class="next iconfont" ref="next">&#xe74b;</i>
        </div>
      </div>
      <div class="content_box" v-if="el.flag==11">
        <el-row :gutter="50">
          <el-col :span="8" v-for="(el6,inx) in el.data">
            <div class="grid-content bg-purple">
              <div class="rank align_left">
                <div class="hd">
                  <a href="javascript:" :title="el6.name">
                    <img :src="el6.imgs" alt />
                  </a>
                </div>
                <div class="bd" v-if="index==9">
                  <ul class="manhuajia">
                    <li v-for="(el7,i) in el6.data" v-if="i<=8 ">
                      <a href="javascript">
                        <div class="headp">
                          <img :src="el7.headp" alt />
                        </div>
                        <span class="reward">
                          <strong>{{el7.reward}}</strong>
                          <i
                            class="iconfont"
                            v-if="inx<1"
                            style="font-size:18px;color:#ddd"
                          >&#xe626;</i>
                          <i
                            class="iconfont"
                            v-if="inx==1"
                            style="font-size:18px;color:#ddd"
                          >&#xe60c;</i>
                          <i
                            class="iconfont"
                            v-if="inx>1"
                            style="font-size:18px;color:#ddd"
                          >&#xe60f;</i>
                        </span>
                        <div class="info">
                          <h3 class="name">{{el7.name}}</h3>
                          <p class="desc">
                            共
                            <strong>{{el7.production}}</strong>部作品
                          </p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="bd" v-if="index==10">
                  <ul class="manhuaph">
                    <li class="item" v-for="(el8,i) in el6.data" v-if="i<=8">
                      <div class="hd">
                        <div class="reward">
                          <strong>{{el8.reward}}</strong>
                          <i
                            class="iconfont"
                            v-if="inx<1"
                            style="color:#ddd;font-size:18px;"
                          >&#xe626;</i>
                          <i
                            class="iconfont"
                            v-if="inx==1"
                            style="color:#ddd;font-size:18px;"
                          >&#xe62d;</i>
                          <i
                            class="iconfont"
                            v-if="inx==2"
                            style="color:#ddd;font-size:18px;"
                          >&#xe60f;</i>
                        </div>
                        <i class="designation">{{i+1}}</i>
                      </div>
                      <div class="bd"></div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "../assets/045.jpg-1920x560.webp.jpg";
import img2 from "../assets/085.jpg-1920x560.webp.jpg";
import img3 from "../assets/086.jpg-1920x560.webp.jpg";
import img4 from "../assets/087.jpg-1920x560.webp.jpg";
import img5 from "../assets/088.jpg-1920x560.webp.jpg";
import img6 from "../assets/089.jpg-1920x560.webp.jpg";
import img7 from "../assets/040.jpg-1920x560.webp.jpg";
import left_img1 from "../assets/059.jpg-600x800.webp.jpg";
import left_img2 from "../assets/040.jpg-600x800.webp.jpg";
import left_img3 from "../assets/066.jpg-600x800.webp.jpg";
import left_img4 from "../assets/062.jpg-600x800.webp.jpg";
import left_img5 from "../assets/063.jpg-600x800.webp.jpg";
import left_img6 from "../assets/064.jpg-600x800.webp.jpg";

//
//
//
//
//
//
//
// https://image.zymkcdn.com/file/news/000/004/040.jpg-1920x560.webp
export default {
  name: "mycontent",
  data() {
    return {
      L_imgs: [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        "https://image.zymkcdn.com/file/news/000/004/117.jpg"
      ],

      title_name: [
        {
          name: "独家",
          title: "独家精品私人订制",
          imgs: "http://b.cycangcdn.com/1490684231723.png",
          data: [],
          Left_imgs: [
            left_img1,
            left_img2,
            left_img3,
            left_img4,
            left_img5,
            left_img6
          ],
          flag: true,
          ui_id: "left1",
          sum1: 9,
          num: 0,
          sum: 0
        },
        {
          name: "经典",
          title: "永不退色的记忆",
          imgs: "http://b.cycangcdn.com/1490684231723.png",
          data: [],
          flag: false,
          sum1: 9,
          num: 0,
          sum: 0
        },
        {
          name: "霸总",
          title: "女人，你在玩火",
          imgs: "http://b.cycangcdn.com/1480325578896.png",
          data: [],
          flag: false,
          sum1: 9,
          num: 0,
          sum: 0
        },

        {
          name: "新番",
          title: "本季新作火钳刘明",
          imgs: "http://b.cycangcdn.com/1480325641299.png",
          data: [],
          flag: false,
          sum1: 9,
          num: 0,
          sum: 0
        },
        {
          name: "燃",
          title: "热血 勇气 奋斗",
          imgs: "http://b.cycangcdn.com/1490690388483.png",
          data: [],
          flag: false,
          sum1: 9,
          num: 0,
          sum: 0
        },
        {
          name: "萌",
          title: "少女 爱情 萌化",
          imgs: "http://b.cycangcdn.com/1480325586541.png",
          data: [],
          imgs: "http://b.cycangcdn.com/1490684231723.png",
          flag: false,
          sum1: 9,
          num: 0,
          sum: 0
        },
        {
          name: "锐",
          title: "青春 梦想 勇气",
          imgs: "http://b.cycangcdn.com/1480325612323.png",
          data: [],
          flag: false,
          sum1: 9,
          num: 0,
          sum: 0
        },
        {
          name: "幻",
          title: `幻想 奇妙 时尚`,
          imgs: "http://b.cycangcdn.com/1480325816038.png",
          data: [],
          flag: false,

          sum1: 9,
          num: 0,
          sum: 0
        },
        {
          name: "完结",
          title: "我们始终爱你",
          imgs: "http://b.cycangcdn.com/1490684231723.png",
          data: [],
          ui_id: "left2",
          flag: true,
          sum: 0,
          sum1: 9,
          num: 1,
          Left_imgs: [
            left_img1,
            left_img2,
            left_img3,
            left_img4,
            left_img5,
            left_img6
          ]
        },
        {
          name: "漫画家",
          title: `快来支持你喜欢的作者`,
          data: [
            {
              name: "大富豪",
              imgs:
                "https://www.zymk.cn/static/images/default/index_author_reward.jpg",
              data: []
            },
            {
              name: "人气王",
              imgs:
                "https://www.zymk.cn/static/images/default/index_author_fans.jpg",
              data: []
            },
            {
              name: "新人王",
              imgs:
                "https://www.zymk.cn/static/images/default/index_author_ticket.jpg",
              data: []
            }
          ],
          flag: 11,
          sum1: 9,
          num: 0,
          sum: 0
        },
        {
          name: "排行版",
          title: `馒头们都喜欢那些漫画`,
          data: [
            {
              name: "打赏榜",
              imgs:
                "https://www.zymk.cn/static/images/default/index_comic_reward.jpg",
              data: []
            },
            {
              name: "收藏榜",
              imgs:
                "https://www.zymk.cn/static/images/default/index_comic_collect.jpg",
              data: []
            },
            {
              name: "月票榜",
              imgs:
                "https://www.zymk.cn/static/images/default/index_comic_ticket.jpg",
              data: []
            }
          ],
          flag: 11,
          sum1: 9,
          num: 0,
          sum: 0
        },
        {
          name: "更新记录",

          data: [],
          flag: 11,

          sum1: 9,
          num: 0,
          sum: 0
        }
      ],
      classify: [
        "热血",
        "搞笑",
        "玄幻",
        "生活",
        "恋爱",
        "动作",
        "科幻",
        "战争",
        "悬疑",
        "恐怖",
        "校园",
        "历史",
        "穿越",
        "后宫",
        "体育",
        "都市",
        "萝莉",
        "漫改",
        "修真",
        "霸总",
        "古风",
        "游戏",
        "真人",
        "武侠",
        "连载",
        "完结",
        "短篇",
        "少男",
        "少女",
        "青年",
        "知音漫客",
        "神漫",
        "飒漫画",
        "漫客栈",
        "飒漫乐园",
        "其他"
      ],
      paihang: [
        {
          name: "大富豪",
          imgs:
            "https://www.zymk.cn/static/images/default/index_author_reward.jpg",
          data: []
        },
        {
          name: "人气王",
          imgs:
            "https://www.zymk.cn/static/images/default/index_author_fans.jpg",
          data: []
        },
        {
          name: "新人王",
          imgs:
            "https://www.zymk.cn/static/images/default/index_author_ticket.jpg",
          data: []
        },
        {
          name: "打赏榜",
          imgs:
            "https://www.zymk.cn/static/images/default/index_comic_reward.jpg",
          data: []
        },
        {
          name: "收藏榜",
          imgs:
            "https://www.zymk.cn/static/images/default/index_comic_collect.jpg",
          data: []
        },
        {
          name: "月票榜",
          imgs:
            "https://www.zymk.cn/static/images/default/index_comic_ticket.jpg",
          data: []
        }
      ]
    };
  },
  methods: {},
  mounted() {
    layui.use("carousel", function() {
      var carousel = layui.carousel;
      //建造实例
      carousel.render({
        elem: "#test1",
        width: "100%", //设置容器宽度
        height: "393.45px",
        arrow: "hover", //始终显示箭头
        anim: "fade" //切换动画方式
      });
    });

    layui.use("carousel", function() {
      var carousel = layui.carousel;
      //建造实例
      carousel.render({
        elem: "#left1",
        width: "100%", //设置容器宽度
        height: "438.64px",
        arrow: "hover", //始终显示箭头
        // anim: "fade" //切换动画方式
        indicator: "none",
        autoplay: false
      });
    });
    layui.use("carousel", function() {
      var carousel = layui.carousel;
      //建造实例

      carousel.render({
        elem: "#left2",
        width: "100%", //设置容器宽度
        height: "438.64px",
        arrow: "hover", //始终显示箭头
        // anim: "fade" //切换动画方式
        autoplay: false,
        indicator: "none"
      });
    });

    this.$refs.thl.forEach((el, index) => {
      var re = 0;
      this.$refs.next[index].addEventListener("click", el2 => {
        setTimeout(() => {
          re -= 146.017;
          this.$refs.thl_ul[index].style.left = re + "px";
          this.$refs.prev[index].style.display = "block";
          console.log(re, this.$refs.thl_ul[index].style.left);
          if (re <= -935.42) {
            this.$refs.next[index].style.display = "none";
            this.$refs.thl_ul[index].style.left = re + "px";
          }
        }, 20);
      });
      el.addEventListener("mouseenter", el1 => {
        this.$refs.next[index].style.display = "block";

        if (
          parseFloat(window.getComputedStyle(this.$refs.thl_ul[index]).left) < 0
        ) {
          console.log("显示");
          this.$refs.prev[index].style.display = "block";
        }

        if (
          parseFloat(window.getComputedStyle(this.$refs.thl_ul[index]).left) >=
          0
        ) {
          this.$refs.prev[index].style.display = "none";
        }
      });
      this.$refs.prev[index].addEventListener("click", () => {
        setTimeout(() => {
          re += 146.017;
          this.$refs.thl_ul[index].style.left = re + "px";
          this.$refs.next[index].style.display = "block";

          if (re >= 0) {
            this.$refs.prev[index].style.display = "none";
            this.$refs.thl_ul[index].style.left = 0 + "px";
          }
        });
      });
      el.addEventListener("mouseleave", el1 => {
        console.log(1);

        this.$refs.next[index].style.display = "none";
        this.$refs.prev[index].style.display = "none";
      });
    });

    this.$axios
      .get("http://localhost:81/comic/data")
      .then(res => {
        console.log(res.data);
        this.title_name.forEach((el, i) => {
          res.data.data.forEach((el1, index) => {
            if (i == el1.index) {
              el.data.push(el1);
            }
          });
        });
        this.title_name[10].data.forEach((el, i) => {
          res.data.data.forEach((el1, index) => {
            if (i == el1.index) {
              el.data.push(el1);
            }
          });
        });
      })
      .catch(err => {
        console.log(err);
      });
    this.$axios
      .get("http://localhost:81/comic/paihang")
      .then(res => {
        this.title_name[9].data.forEach((el, i) => {
          res.data.data.forEach((el1, index) => {
            el.data.push(el1);
          });
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
img {
  width: 100%;
  max-width: 100%;
}

@font-face {
  font-family: "iconfont"; /* project id 1495772 */
  src: url("//at.alicdn.com/t/font_1495772_sq9u4foyqpd.eot");
  src: url("//at.alicdn.com/t/font_1495772_sq9u4foyqpd.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1495772_sq9u4foyqpd.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1495772_sq9u4foyqpd.woff") format("woff"),
    url("//at.alicdn.com/t/font_1495772_sq9u4foyqpd.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1495772_sq9u4foyqpd.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 22px;
  font-style: normal;
  color: rgba(0, 0, 0, 0.6);
}
div::after {
  margin: 0;
  padding: 0;
  display: block;
  clear: both;
  content: "";
}
ul::after {
  margin: 0;
  padding: 0;
  display: block;
  clear: both;
  content: "";
}
.cartoon_box {
  max-width: 80%;
  min-width: 960px;
  /* background-color: rgb(250, 31, 239); */

  margin: 24px auto;
}
li {
  list-style: none;
}
.title {
  /* margin-top: 10px;  */
  padding: 5px 0 0 0;
}
.title img {
  float: left;
  width: 38px;
  margin-right: 10px;
  /* margin-left: 5px; */
}
.title h2 {
  float: left;
  margin: 16px 0 0 0;
  text-align: center;
  height: 40px;
  font-weight: 400;
  font-size: 28px;
  cursor: pointer;
}
.title_detail {
  margin: 20px 0 0 16px;
  height: 28px;
  float: left;
  line-height: 28px;
  font-size: 16px;
  color: darkgray;
  padding-left: 16px;
  border-left: 1px solid darkgray;
}
.content_box {
  margin: 5px 0 0 0;
}
.bottom_box {
  margin: 5px 0 0 0;
}
.lunbo_left {
  float: left;
  width: 30.2521008400361%;
}
.lunbo_left:hover img {
  transform: scale(1.2, 1.2);
}
.c_right_box {
  float: right;
  width: 66.12605%;
  height: 472.438px;
}

.c_right_box .item {
  float: left;
  /* width: 123.202px; */
  width: 17.4193548387097%;
  margin-right: 3.2258064516129%;
  margin-bottom: 0.96774%;

  /* margin: 0 22.8151px 21.908px 0; */
}
.info .title {
  height: 20px;
  margin: 10px 0 0;
  line-height: 20px;
  color: #555;
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.info .desc {
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  color: #999;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.item .newset {
  position: absolute;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  right: 5px;
  bottom: 5px;
  max-width: 80%;
  line-height: 20px;
  text-align: right;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.5);
  height: 20px;
  padding: 0 4px;
  font-size: 12px;
  color: #fff;
  box-sizing: border-box;
}
.item .score {
  position: absolute;
  max-width: 48px;
  top: 5px;
  right: 5px;
  height: 16px;
  line-height: 16px;
  padding: 0 4px;
  border-radius: 3px;
  background-color: #ff7647;
  color: #fff;
  font-size: 12px;
  transform: scale(0.75);
  transform-origin: 100% 0;
}
.c_right_box .item:nth-child(5n) {
  margin-right: 0;
}
.c_right_box .item > a {
  text-decoration: none;
  position: relative;
  display: block;
  width: 100%;
  height: 0;
  padding-bottom: 133.33333%;
  /* background-color: green; */
  border-radius: 3px;
}
.comic {
  /* width: 123.23px; */
  /* height: 100%; */
}

.bigbox {
  position: relative;
  height: 217.268px;
  overflow: hidden;
}

.bigbox .prev {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 100%;
  background-color: rgba(235, 226, 226, 0.3);
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.75);
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease-in;
  line-height: 214.31px;
}
.bigbox .next {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 100%;
  background-color: rgba(235, 226, 226, 0.3);
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.75);
  cursor: pointer;
  text-align: center;
  line-height: 214.31px;
  transition: all 0.3s ease-in;
}
.bigbox ul {
  position: absolute;
  left: 0;
  top: 0;
  width: 2021.42px;
  height: 100%;
  overflow: hidden;
  transition: all 0.3s ease-in;
}

.bigbox .item {
  float: left;
  width: 123.23px;
  height: 214.31px;

  margin: 0 22.813px 21.908px 0;
}
/* .bigbox .item:nth-child(5n) {
  margin-right: 0;
} */
.bigbox .item > a {
  text-decoration: none;
  display: block;
  width: 100%;
  height: 0;
  padding-bottom: 133.33333%;
  /* background-color: green; */
  border-radius: 3px;
}
.classify {
  margin-top: 16px;
  overflow: hidden;
  border-radius: 3px;
  min-width: 960px;

  background-color: #f5f5f5;
}
.classify > .left_box {
  background-color: #ff7647;
  position: relative;
  width: 40px;
  height: 40px;
  font-size: 16px;
  float: left;
  padding: 16px 8px;
  text-align: center;

  color: #fff;
}
.classify > .left_box::after {
  position: absolute;
  top: 50%;
  left: 100%;
  margin-top: -9px;
  border-left: 9px solid #ff7647;
  border-top: 9px solid transparent;
  border-bottom: 9px solid transparent;
}
.classify > .right_box {
  margin-left: 72px;
  padding: 8px;
  height: 56px;
  line-height: 24px;
  font-size: 0;
}
.right_box li {
  display: inline-block;
  font-size: 14px;
  margin-right: 16px;
}
.right_box li a {
  text-decoration: none;
  color: rgb(35, 36, 35);
}
.right_box li a:hover {
  color: #ff7647;
}

.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.rank {
  /* width: 93%; */
}
.align-left {
  margin: 0 auto 0 0;
}
.rank > .hd {
  position: relative;
  height: 0;
  padding-bottom: 70.8091px;
  margin-bottom: 10px;
}
.manhuajia > li {
  height: 60px;
  padding: 5px 0;
  border-bottom: 1px dotted #ddd;
  font-size: 12px;
}
.manhuajia > li > a {
  display: block;
  height: 48px;
  padding: 6px;
  border-radius: 30px;
  transition: background-color 0.3s;
}

.manhuajia > li > a > .headp {
  float: left;
  width: 48px;
  height: 48px;
  margin-right: 10px;
  border-radius: 50%;
  overflow: hidden;
  transition: 0.3s;
}
.manhuajia > li > a:hover {
  background-color: rgb(247, 206, 228);
}
.manhuajia > li > a:hover > .headp {
  transform: rotate(720deg);
}
.manhuajia .reward {
  float: right;
  line-height: 48px;
  color: #999;
}
.manhuajia .reward strong {
  font-weight: 400;
  color: #ffc2ad;
  margin: 0 2px;
}
.bg-purple {
  background: none;
}
.manhuajia > li > a:hover .info .name {
  color: #ffc2ad;
}
.info .name {
  height: 24px;
  line-height: 24px;
  font-weight: 400;
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.info .desc {
  color: #999;
  line-height: 20px;
}
.info strong {
  font-weight: 400;
  color: #ffc2ad;
  margin: 0 2px;
}
.manhuaph .item {
  padding: 5px 0;
  border-bottom: 1px dotted #ddd;
  font-size: 12px;
}
.manhuaph .item .hd {
  height: 30px;
}
.manhua .item .bd {
  display: none;
  position: relative;
  height: 100px;
}
.item .reward {
  float: right;
  line-height: 30px;
  margin-left: 10px;
  color: #999;
}
.item .reward strong {
  margin: 0 4px;
  color: #ffc2ad;
}
.designation {
  float: left;
  width: 20px;
  height: 20px;
  margin: 5px 4px 5px 0;
  line-height: 20px;
  font-family: Microsoft Yahei, SimSun, Tahoma, arial, SimHei, sans-serif;
  font-size: 12px;
  text-align: center;
  color: #fff;
  font-style: normal;
  background: #ddd;
  border-radius: 50%;
}
.manhuaph .item:nth-child(1) .designation {
  background-color: #ff7647;
}
.manhuaph .item:nth-child(2) .designation {
  background-color: #ff9450;
}
.manhuaph .item:nth-child(3) .designation {
  background-color: #ffbc4e;
}
</style>
