<template>
	<div>
		<div class="container to-padding">
			<div class="row">
				<div class="crumb">
					<em>当前位置</em>
					:
					<a href="#" title="知音漫客网">知音漫客网</a>
					>
					<a href="#" title="少男漫画">少男漫画</a>
					>
					<strong>最强枭雄系统</strong>
				</div>
			</div>
			<div class="row">
				<div class="detail-main">
					<div class="wrap-main">
						<div class="comic">
							<img src="../assets/最强枭雄.jpg" alt="最强枭雄系统,最强枭雄系统漫画">
						</div>
						<div class="comic-intro">
							<div class="graded">
								<div class="graded-tips">
									<p>记得为我打分哦
										<strong>(^_^)</strong>
									</p>
									<div class="score-star">
									</div>
								</div>
								<div class="score-num">
									<strong>9.7</strong>
									分
								</div>
								<div class="reated">
									<strong>1543</strong>
									人评价
								</div>
							</div>
							<div class="title-wraper">
								<h1 class="title">最强枭雄系统</h1>
								<span class="update-time">每周一、五更新</span>
							</div>
							<div class="attr">
								<a class="tags c1" href="#" title="生活漫画">生活</a>
								<a class="tags c2" href="#" title="都市漫画">都市</a>
								<a class="tags c3" href="#" title="恋爱漫画">恋爱</a>
							</div>
							<div class="desc">
								<div class="desc-con">
									每周一五更新一场车祸，娱乐城小保安竟穿越到了平行世界的另一个“自己”身上！还带着个专属大BUG来历不明无所不能的大枭雄系统！从此，开启闪亮亮的人生路！
								</div>
								<div class="desc-switch">
									<i class="iconfont icon-arrow-down" style="font-size: 25px;color: #E5E5E5;"></i>
								</div>
							</div>
							<div class="comic-operate">
								<ul>
									<li class="item">
										<i class="ift-read iconfont icon-yuedu" style="font-size: 46px;"></i>
										<span class="type" title="阅读">阅读</span>
										<p class="type-show">1185万</p>
									</li>
									<li class="item">
										<i class="ift-rss iconfont icon-dingyue" style="font-size: 30px;"></i>
										<span class="type" title="订阅">订阅</span>
										<strong class="type-show">51144人</strong>
									</li>
									<li class="item ">
										<i class="ift-reward iconfont icon-dashang" style="font-size: 32px;"></i>
										<span class="type" title="打赏">打赏</span>
										<strong class="type-show">5799元宝</strong>
									</li>
									<li class="item">
										<i class="ift-ticket iconfont icon-yuepiaoyuankongxin" style="font-size: 32px;"></i>
										<span class="type" title="月票">月票</span>
										<strong class="type-show">8980张</strong>
									</li>
									<li class="item ">
										<i class="ift-fire iconfont icon-tuijian" style="font-size: 32px;"></i>
										<span class="type" title="推荐">推荐</span>
										<strong class="type-show">26488次</strong>
									</li>
									<li class="item ">
										<i class="ift-comment iconfont icon-pinglun" style="font-size: 32px;"></i>
										<span class="type" title="评论">评论</span>
										<strong class="type-show">5265次</strong>
									</li>
								</ul>
								<div class="share">
									<a href="#" class="bds">
										<i class="iconfont icon-fenxiang"></i>
										分享
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="detail-aside">
					<div class="author">
						<div class="hd">
							<h2 class="title">作者</h2>
							<div class="author-head">
								<a href="#" title="掌阅漫画">
									<img src="../assets/error.png" alt="掌阅漫画">
								</a>
							</div>
							<div class="author-info">
								<p class="name">
									<a href="#" title="掌阅漫画">掌阅漫画</a>
								</p>
								<p class="attr">
									<span class="attr-lable">代表作品：</span>
									<a href="#" title="指染成婚漫画">指染成婚</a>
									、
									<a href="#" title="九阳神王漫画">九阳神王</a>
									、
									<a href="#" title="魔妃嫁到漫画">魔妃嫁到</a>
								</p>
							</div>
						</div>
						<div class="bd">
							<div class="after"></div>
							<div class="author-con">这家伙太懒了，什么都没说~</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row1 mt">
				<div class="detail-main">
					<div class="wrap-main">
						<div class="box box2">
							<div class="hd">
								<h2 class="title">
									<i class="ift-chapter iconfont icon-999999" style="font-size: 32px;"></i>
									漫画章节
								</h2>
								<div class="operate clear_fix">
									<i class="ift-sort iconfont icon-paixu" style="font-size: 20px;"></i>
									<p class="update">最后更新: 2019-11-10</p>
								</div>
								<div class="bd">
									<ul class="chapter-list">
										<li class="item newest" v-for="(item,index) in list" :to="item.chapter_url">
											<router-link class="tit" :title="item.chapter" :to="item.chapter_url">{{item.chapter}}</router-link>
											<i class="ift-new iconfont icon-Nzi" style="font-size: 19px;"></i>
											<i class="ift-lock iconfont icon-icon2" style="font-size: 19px;"></i>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="box2 mt2 box">
							<div class="hd">
								<h2 class="title">
									<i class="ift-relevant iconfont icon-tuijianshi" style="font-size: 20px;"></i>
									相关推荐
								</h2>
								<div class="related-toggle">
									<i class="iconfont icon-left-jf ift-prev"></i>
									<ul>
										<li class="active">
											<i class="iconfont smile icon-smile" style="font-size: 16px"></i>
											<i class="smile1 iconfont icon-smile" style="font-size: 12px;"></i>
											<i class="smile1 iconfont icon-smile" style="font-size: 12px;"></i>

										</li>
									</ul>
									<i class="iconfont icon-you2 ift-prev"></i>
								</div>
							</div>
							<div class="bd1">
								<div class="temwrap" style="overflow: hidden; position: relative; width: auto;">
									<div class="wrap-slider" style="width: 3390px; left: 0px; position: relative; overflow: hidden; padding: 0px; margin: 0px;">
										<ul class="comic-list col" style="float: left; width: 1130px;">
											<li class="item " v-for="(item,index) in imgs" :to="item.img_url">
												<router-link class="thumbnail" :title="item.name" :to="item.img_url">
													<img :src="item.src" alt="穿越西元3000后,穿越西元3000后漫画">
													<span class="chapter">{{item.chapter_name}}</span>
													<span class="score">{{item.score}}</span>
												</router-link>
												<div class="info">
													<h3 class="title">
														<router-link class="tit" :title="item.name" :to="item.img_url">{{item.name}}</router-link>
													</h3>
													<p class="desc">{{item.desc}}</p>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="box box2 mt1">
							<div class="hd">
								<h2 class="title">
									<i class="iconfont icon-huihua1 ift-comment1" style="font-size: 20px;"></i>
									漫友评论
								</h2>
							</div>
							<div class="bd1">
								<div class="comment">
									<div class="comment-hd">
										<span class="comment-number">
											<strong>5257</strong>
											条评论
										</span>
									</div>
									<div class="comment-bd">
										<div class="comment-box">
											<div class="textarea-bd">
												<textarea class="comment-textarea" maxlength="500" placeholder="有事没事说两句..."></textarea>
												<span class="input-num">0/500</span>
											</div>
											<div class="comment-box-ft">
												<button class="comment-submit">
													吐槽一下
												</button>
											</div>
										</div>
										<div class="comment-loading">
											加载中……
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="detail-aside1">
					<div class="tabs mb24">
						<div class="hd">
							<h2 class="title">
								<i class="iconfont ift-fans icon-fensi">
								</i>
								粉丝排行
							</h2>
							<ul>
								<li class="active">影响力榜单</li>
							</ul>
						</div>
						<div class="bd">
							<div class="tabs-item">
								<ul class="reward-list">
									<li class="item" v-for="(item,index) in fans" :to="item.url">
										<router-link class="wrap-con" :title="item.name" :to="item.url">
											<div class="thumbnail">
												<img :src="item.src" :alt="item.name">
											</div>
											<span class="reward-num">
												<strong>{{item.fans_num}}</strong>
												<i class="iconfont ift-active icon-xindiantu"></i>
											</span>
											<div class="info">
												<h3 class="title">{{item.name}}</h3>
											</div>
										</router-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="tabs mb24">
						<div class="hd">
							<h3 class="title">
								<i class="ift-fans iconfont icon-tuijian"></i>
								热门漫画
							</h3>
							<ul>
								<li>总</li>
								<li>月</li>
								<li class="active">日</li>
							</ul>
						</div>
						<div class="bd">
							<div class="tabs-item">
								<ul class="rank-list">
									<li class="item" v-for="(item,index) in nums" :to="item.url">
										<div class="item-hd">
											<div class="reward-num">
												<strong>{{item.reward_num}}</strong>
											</div>
											<p class="rank-first">{{item.rank_num}}</p>
											<h3 class="title">
												<span :title="item.name">{{item.name}}</span>
											</h3>
										</div>
										<div class="item-bd">
											<div class="thumbnail">
												<img :src="item.src" alt=" 斗破苍穹漫画 ">
											</div>
											<div class="info">
												<h3 class="title">
													<router-link :title="item.name" :to="item.url">{{item.name}}</router-link>
												</h3>
												<p class="attr">
													<span class="attr-label">
														玄幻 热血 修真
													</span>
												</p>
												<p class="reward-num">
													<i class="ift-qushi iconfont icon-dapanqushi">
													</i>
													<strong>{{item.reward_num}}</strong>
												</p>
											</div>
											<div class="rank-num">{{item.ranknum}}</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				  <div class="box box2 mb24">
					  <div class="hd">
						  <h2 class="title">
							  <i class="ift-fans iconfont icon-pinglun" style="font-size: 20px;"></i>
						      最新更新
						  </h2>
						  <a href="/" class="more"title="查看更多">
							  <i class="ift-more"></i>
						  </a>
					  </div>
					  <div class="bd1">
						  <ul class="update-list">
							  <li class="item" v-for="(item,index) in updates" :to="item.url">
								  <span class="chapter">
									  <router-link :title="item.chapter"  :to="item.url">{{item.chapter}}</router-link>
								  </span>
								  <router-link class="actives" :title="item.name" :to="item.url">{{item.name}}</router-link>
							  </li>
						  </ul>
					  </div>
				  </div>
				</div>
			</div>
		</div>

	</div>

</template>

<script>
	export default {
		name: "DetailPage",
		data() {
			return {
				list: [{
						chapter: "175话",
						chapter_url: "/"
					},
					{
						chapter: "174话",
						chapter_url: "/"
					},
					{
						chapter: "173话",
						chapter_url: "/"
					},
					{
						chapter: "172话",
						chapter_url: "/"
					},
					{
						chapter: "171话",
						chapter_url: "/"
					},
					{
						chapter: "170话",
						chapter_url: "/"
					},
					{
						chapter: "169话",
						chapter_url: "/"
					},
					{
						chapter: "168话",
						chapter_url: "/"
					},
					{
						chapter: "167话",
						chapter_url: "/"
					},
					{
						chapter: "166话",
						chapter_url: "/"
					},
					{
						chapter: "165话",
						chapter_url: "/"
					},
					{
						chapter: "164话",
						chapter_url: "/"
					},
					{
						chapter: "163话",
						chapter_url: "/"
					},
					{
						chapter: "162话",
						chapter_url: "/"
					},
					{
						chapter: "161话",
						chapter_url: "/"
					},
					{
						chapter: "160话",
						chapter_url: "/"
					},
					{
						chapter: "159话",
						chapter_url: "/"
					},
					{
						chapter: "158话",
						chapter_url: "/"
					},
					{
						chapter: "157话",
						chapter_url: "/"
					},
					{
						chapter: "156话",
						chapter_url: "/"
					},
					{
						chapter: "155话",
						chapter_url: "/"
					},
					{
						chapter: "154话",
						chapter_url: "/"
					},
					{
						chapter: "153话",
						chapter_url: "/"
					},
					{
						chapter: "152话",
						chapter_url: "/"
					},
					{
						chapter: "151话",
						chapter_url: "/"
					},
					{
						chapter: "150话",
						chapter_url: "/"
					},
					{
						chapter: "149话",
						chapter_url: "/"
					},
					{
						chapter: "148话",
						chapter_url: "/"
					},
					{
						chapter: "147话",
						chapter_url: "/"
					},
					{
						chapter: "146话",
						chapter_url: "/"
					},
					{
						chapter: "145话",
						chapter_url: "/"
					},
					{
						chapter: "144话",
						chapter_url: "/"
					},
					{
						chapter: "143话",
						chapter_url: "/"
					},
					{
						chapter: "142话",
						chapter_url: "/"
					},
					{
						chapter: "141话",
						chapter_url: "/"
					},
					{
						chapter: "140话",
						chapter_url: "/"
					},
					{
						chapter: "139话",
						chapter_url: "/"
					},
					{
						chapter: "138话",
						chapter_url: "/"
					},
					{
						chapter: "137话",
						chapter_url: "/"
					},
					{
						chapter: "136话",
						chapter_url: "/"
					}, {
						chapter: "135话",
						chapter_url: "/"
					},
					{
						chapter: "134话",
						chapter_url: "/"
					},
					{
						chapter: "133话",
						chapter_url: "/"
					},
					{
						chapter: "132话",
						chapter_url: "/"
					},
					{
						chapter: "131话",
						chapter_url: "/"
					},
					{
						chapter: "130话",
						chapter_url: "/"
					},
					{
						chapter: "129话",
						chapter_url: "/"
					},
					{
						chapter: "128话",
						chapter_url: "/"
					},
					{
						chapter: "127话",
						chapter_url: "/"
					},
					{
						chapter: "126话",
						chapter_url: "/"
					},
					{
						chapter: "125话",
						chapter_url: "/"
					},
					{
						chapter: "124话",
						chapter_url: "/"
					},
					{
						chapter: "123话",
						chapter_url: "/"
					},
					{
						chapter: "122话",
						chapter_url: "/"
					},
					{
						chapter: "121话",
						chapter_url: "/"
					},
					{
						chapter: "120话",
						chapter_url: "/"
					},
					{
						chapter: "119话",
						chapter_url: "/"
					},
					{
						chapter: "118话",
						chapter_url: "/"
					},
					{
						chapter: "117话",
						chapter_url: "/"
					},
					{
						chapter: "116话",
						chapter_url: "/"
					},
					{
						chapter: "115话",
						chapter_url: "/"
					},
					{
						chapter: "114话",
						chapter_url: "/"
					},
					{
						chapter: "113话",
						chapter_url: "/"
					},
					{
						chapter: "112话",
						chapter_url: "/"
					},
					{
						chapter: "111话",
						chapter_url: "/"
					},
					{
						chapter: "110话",
						chapter_url: "/"
					},
					{
						chapter: "109话",
						chapter_url: "/"
					},
					{
						chapter: "108话",
						chapter_url: "/"
					},
					{
						chapter: "107话",
						chapter_url: "/"
					},
					{
						chapter: "106话",
						chapter_url: "/"
					},
					{
						chapter: "105话",
						chapter_url: "/"
					},
					{
						chapter: "104话",
						chapter_url: "/"
					},
					{
						chapter: "103话",
						chapter_url: "/"
					},
					{
						chapter: "102话",
						chapter_url: "/"
					},
					{
						chapter: "101话",
						chapter_url: "/"
					},
					{
						chapter: "100话",
						chapter_url: "/"
					},
					{
						chapter: "99话",
						chapter_url: "/"
					},
					{
						chapter: "98话",
						chapter_url: "/"
					},
					{
						chapter: "97话",
						chapter_url: "/"
					},
					{
						chapter: "96话",
						chapter_url: "/"
					},
					{
						chapter: "95话",
						chapter_url: "/"
					},
					{
						chapter: "94话",
						chapter_url: "/"
					},
					{
						chapter: "93话",
						chapter_url: "/"
					},
					{
						chapter: "92话",
						chapter_url: "/"
					},
					{
						chapter: "91话",
						chapter_url: "/"
					},
					{
						chapter: "90话",
						chapter_url: "/"
					},
					{
						chapter: "89话",
						chapter_url: "/"
					},
					{
						chapter: "87话",
						chapter_url: "/"
					},
					{
						chapter: "86话",
						chapter_url: "/"
					},
					{
						chapter: "85话",
						chapter_url: "/"
					},
					{
						chapter: "84话",
						chapter_url: "/"
					},
					{
						chapter: "83话",
						chapter_url: "/"
					},
					{
						chapter: "82话",
						chapter_url: "/"
					},
					{
						chapter: "81话",
						chapter_url: "/"
					},
					{
						chapter: "80话",
						chapter_url: "/"
					},
					{
						chapter: "79话",
						chapter_url: "/"
					},
					{
						chapter: "78话",
						chapter_url: "/"
					},
					{
						chapter: "77话",
						chapter_url: "/"
					},
					{
						chapter: "76话",
						chapter_url: "/"
					},
					{
						chapter: "75话",
						chapter_url: "/"
					},
					{
						chapter: "74话",
						chapter_url: "/"
					},
					{
						chapter: "73话",
						chapter_url: "/"
					},
					{
						chapter: "72话",
						chapter_url: "/"
					},
					{
						chapter: "71话",
						chapter_url: "/"
					},
					{
						chapter: "70话",
						chapter_url: "/"
					},
					{
						chapter: "69话",
						chapter_url: "/"
					},
					{
						chapter: "67话",
						chapter_url: "/"
					},
					{
						chapter: "66话",
						chapter_url: "/"
					},
					{
						chapter: "65话",
						chapter_url: "/"
					},
					{
						chapter: "64话",
						chapter_url: "/"
					},
					{
						chapter: "63话",
						chapter_url: "/"
					},
					{
						chapter: "62话",
						chapter_url: "/"
					},
					{
						chapter: "61话",
						chapter_url: "/"
					},
					{
						chapter: "60话",
						chapter_url: "/"
					},
					{
						chapter: "59话",
						chapter_url: "/"
					},
					{
						chapter: "58话",
						chapter_url: "/"
					},
					{
						chapter: "57话",
						chapter_url: "/"
					},
					{
						chapter: "56话",
						chapter_url: "/"
					},
					{
						chapter: "55话",
						chapter_url: "/"
					},
					{
						chapter: "54话",
						chapter_url: "/"
					},
					{
						chapter: "53话",
						chapter_url: "/"
					},
					{
						chapter: "52话",
						chapter_url: "/"
					},
					{
						chapter: "51话",
						chapter_url: "/"
					},
					{
						chapter: "50话",
						chapter_url: "/"
					},
					{
						chapter: "49话",
						chapter_url: "/"
					},
					{
						chapter: "48话",
						chapter_url: "/"
					},
					{
						chapter: "47话",
						chapter_url: "/"
					},
					{
						chapter: "46话",
						chapter_url: "/"
					},
					{
						chapter: "45话",
						chapter_url: "/"
					},
					{
						chapter: "44话",
						chapter_url: "/"
					},
					{
						chapter: "43话",
						chapter_url: "/"
					},
					{
						chapter: "42话",
						chapter_url: "/"
					},
					{
						chapter: "41话",
						chapter_url: "/"
					},
					{
						chapter: "40话",
						chapter_url: "/"
					},
					{
						chapter: "39话",
						chapter_url: "/"
					},
					{
						chapter: "38话",
						chapter_url: "/"
					},
					{
						chapter: "37话",
						chapter_url: "/"
					},
					{
						chapter: "36话",
						chapter_url: "/"
					},
					{
						chapter: "35话",
						chapter_url: "/"
					},
					{
						chapter: "34话",
						chapter_url: "/"
					},
					{
						chapter: "33话",
						chapter_url: "/"
					},
					{
						chapter: "32话",
						chapter_url: "/"
					},
					{
						chapter: "31话",
						chapter_url: "/"
					},
					{
						chapter: "30话",
						chapter_url: "/"
					},
					{
						chapter: "29话",
						chapter_url: "/"
					},
					{
						chapter: "28话",
						chapter_url: "/"
					},
					{
						chapter: "27话",
						chapter_url: "/"
					},
					{
						chapter: "26话",
						chapter_url: "/"
					},
					{
						chapter: "25话",
						chapter_url: "/"
					},
					{
						chapter: "24话",
						chapter_url: "/"
					},
					{
						chapter: "23话",
						chapter_url: "/"
					},
					{
						chapter: "22话",
						chapter_url: "/"
					},
					{
						chapter: "21话",
						chapter_url: "/"
					},
					{
						chapter: "20话",
						chapter_url: "/"
					},
					{
						chapter: "19话",
						chapter_url: "/"
					},
					{
						chapter: "17话",
						chapter_url: "/"
					},
					{
						chapter: "16话",
						chapter_url: "/"
					},
					{
						chapter: "15话",
						chapter_url: "/"
					},
					{
						chapter: "14话",
						chapter_url: "/"
					},
					{
						chapter: "13话",
						chapter_url: "/"
					},
					{
						chapter: "12话",
						chapter_url: "/"
					},
					{
						chapter: "11话",
						chapter_url: "/"
					},
					{
						chapter: "10话",
						chapter_url: "/"
					},
					{
						chapter: "9话",
						chapter_url: "/"
					},
					{
						chapter: "8话",
						chapter_url: "/"
					},
					{
						chapter: "7话",
						chapter_url: "/"
					},
					{
						chapter: "6话",
						chapter_url: "/"
					},
					{
						chapter: "5话",
						chapter_url: "/"
					},
					{
						chapter: "4话",
						chapter_url: "/"
					},
					{
						chapter: "3话",
						chapter_url: "/"
					},
					{
						chapter: "2话",
						chapter_url: "/"
					},
					{
						chapter: "1话",
						chapter_url: "/"
					}
				],
				imgs: [{
						name: "穿越西元3000后漫画",
						src: "https://image.zymkcdn.com/file/cover/000/000/100.jpg",
						img_url: "/",
						chapter_name: "664话 大梦一场2 ",
						score: "9.6 ",
						desc: "穿到三千年后玩机甲"
					},
					{
						name: "血族禁域",
						src: "https://image.zymkcdn.com/file/cover/000/000/144.jpg-300x400.webp",
						img_url: "/",
						chapter_name: "最终话 决裂3 ",
						score: "9.6 ",
						desc: "与命运抗争的三姐妹"
					},
					{
						name: "偷星九月天",
						src: "https://image.zymkcdn.com/file/cover/000/000/038.jpg-300x400.webp",
						img_url: "/",
						chapter_name: "番外2 ",
						score: "9.6 ",
						desc: "从偷心的飞贼邂逅开始"
					},
					{
						name: "寻找前世之旅",
						src: "https://image.zymkcdn.com/file/cover/000/000/102.jpg-300x400.webp",
						img_url: "/",
						chapter_name: "434话 桂花树下1  ",
						score: "9.6 ",
						desc: "承接各类前世的委托"
					},
					{
						name: "妃夕妍雪",
						src: "https://image.zymkcdn.com/file/cover/000/000/146.jpg-300x400.webp",
						img_url: "/",
						chapter_name: "最终话2  ",
						score: "9.4 ",
						desc: "三个女人和皇帝的纠葛"
					},
					{
						name: "骑士幻想夜",
						src: "https://image.zymkcdn.com/file/cover/000/000/099.jpg-300x400.webp",
						img_url: "/",
						chapter_name: "最终话2 我们的永远 ",
						score: "9.5 ",
						desc: "游戏世界的骑士誓约"
					},
					{
						name: "奇怪的苏夕",
						src: "https://image.zymkcdn.com/file/cover/000/000/104.jpg-300x400.webp",
						img_url: "/",
						chapter_name: "最终话 幽灵与小夕3  ",
						score: "9.6 ",
						desc: "两魂一体，自体CP"
					},
					{
						name: "天降贤淑男",
						src: "https://image.zymkcdn.com/file/cover/000/000/150.jpg-300x400.webp",
						img_url: "/",
						chapter_name: "最终话 天降贤淑男  ",
						score: "9.6 ",
						desc: "女汉子也有爱情春天"
					},
					{
						name: "三眼哮天录",
						src: "https://image.zymkcdn.com/file/cover/000/000/103.jpg-300x400.webp",
						img_url: "/",
						chapter_name: "2季序章  ",
						score: "9.6 ",
						desc: "天神下凡来除妖"
					},
					{
						name: "勇者是女孩",
						src: "https://image.zymkcdn.com/file/cover/000/000/053.jpg-300x400.webp",
						img_url: "/",
						chapter_name: "付费通知  ",
						score: "9.5",
						desc: "变男变女？KISS说了算"
					}
				],
				fans: [{
						url: "/",
						src: "https://image.zymkcdn.com/file/head/000/691/768.jpg-100x100.webp",
						name: "加载中",
						fans_num: "2749"
					},
					{
						url: "/",
						src: "https://image.zymkcdn.com/file/head/001/418/235.jpg-100x100.webp",
						name: "NK醉帝",
						fans_num: "1125"
					},
					{
						url: "/",
						src: "https://image.zymkcdn.com/file/head/001/845/095.jpg-100x100.webp",
						name: "Lcky丶",
						fans_num: "665"
					},
					{
						url: "/",
						src: "https://image.zymkcdn.com/file/head/005/397/952.jpg-100x100.webp",
						name: "来自风平浪静的明天",
						fans_num: "598"
					},
					{
						url: "/",
						src: "https://image.zymkcdn.com/file/head/002/293/917.jpg-100x100.webp",
						name: "木秀兰香",
						fans_num: "573"
					},
					{
						url: "/",
						src: "https://image.zymkcdn.com/file/head/002/293/917.jpg-100x100.webp",
						name: "我菜徐鲲",
						fans_num: "294"
					},
					{
						url: "/",
						src: "https://image.zymkcdn.com/file/head/015/949/717.jpg-100x100.webp",
						name: "rmd",
						fans_num: "271"
					},
					{
						url: "/",
						src: "https://image.zymkcdn.com/file/head/008/132/309.jpg-100x100.webp",
						name: "若水呀",
						fans_num: "244"
					},
					{
						url: "/",
						src: "https://image.zymkcdn.com/file/head/002/182/799.jpg-100x100.webp",
						name: "余生劫",
						fans_num: "223"
					},
					{
						url: "/",
						src: "https://image.zymkcdn.com/file/head/011/250/200.jpg-100x100.webp",
						name: "馒头_wu4kgA0hp",
						fans_num: "199"
					}
				],
				nums: [{
						src: "https://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400.webp",
						reward_num: "834225",
						rank_num: "1",
						name: "斗破苍穹",
						url: "/",
						ranknum: "NO.1"
					},
					{
						src: "https://image.zymkcdn.com/file/cover/000/000/002.jpg-300x400.webp",
						reward_num: "214690",
						rank_num: "2",
						name: "斗罗大陆",
						url: "/",
						ranknum: "NO.2"
					},
					{
						src: "https://image.zymkcdn.com/file/cover/000/000/609.jpg-300x400.webp",
						reward_num: "117062",
						rank_num: "3",
						name: "绝世唐门",
						url: "/",
						ranknum: "NO.3"
					},
					{
						src: "https://image.zymkcdn.com/file/cover/000/001/966.jpg-300x400.webp",
						reward_num: "85280",
						rank_num: "4",
						name: "元尊",
						url: "/",
						ranknum: "NO.4"
					},
					{
						src: "https://image.zymkcdn.com/file/cover/000/000/584.jpg-300x400.webp",
						reward_num: "79146",
						rank_num: "5",
						name: "神印王座",
						url: "/",
						ranknum: "NO.5"
					},
					{
						src: "https://image.zymkcdn.com/file/cover/000/000/101.jpg-300x400.webp",
						reward_num: "76575",
						rank_num: "6",
						name: "逆风天下",
						url: "/",
						ranknum: "NO.6"
					},
					{
						src: "https://image.zymkcdn.com/file/cover/000/000/749.jpg-300x400.webp",
						reward_num: "68647",
						rank_num: "7",
						name: "X龙时代",
						url: "/",
						ranknum: "NO.7"
					},
					{
						src: "https://image.zymkcdn.com/file/cover/000/001/417.jpg-300x400.webp",
						reward_num: "67993",
						rank_num: "8",
						name: "灵剑尊",
						url: "/",
						ranknum: "NO.8"
					},
					{
						src: "https://image.zymkcdn.com/file/cover/000/000/857.jpg-300x400.webp",
						reward_num: "67525",
						rank_num: "9",
						name: "妖神记",
						url: "/",
						ranknum: "NO.9"
					}
				],
				updates:[
					{
						name:"绝世古尊",
						chapter:"32话 我什么都没看到！",
						url:"/"
					},
					{
						name:"王牌特工",
						chapter:"21话2 ",
						url:"/"
					},
					{
						name:"总裁的天价萌妻",
						chapter:"171话",
						url:"/"
					},
					{
						name:"帝王怕怕·妃要坐拥天下",
						chapter:"80话",
						url:"/"
					},
					{
						name:"我的V信是外挂",
						chapter:"109话 ",
						url:"/"
					},
					{
						name:"总裁有毒",
						chapter:"37话 如果出了什么岔！",
						url:"/"
					},
					{
						name:"宅男救世主",
						chapter:"41话 '南瓜汤'行动",
						url:"/"
					},
					{
						name:"对抗男神boss",
						chapter:"34话 ",
						url:"/"
					},
					{
						name:"本座右手成精了",
						chapter:"31话 若早已约定终生了",
						url:"/"
					},
					{
						name:"吾名社会黄",
						chapter:"99话 节后余生！",
						url:"/"
					},
					{
						name:"极品战士在都市",
						chapter:"154话！",
						url:"/"
					},
					{
						name:"读档皇后",
						chapter:"152话 我去救他！",
						url:"/"
					},
					{
						name:"桃运高手",
						chapter:"2ji第14话 化敌为友",
						url:"/"
					},
					{
						name:"兄控公爵嫁不得",
						chapter:"11月12日复更通知",
						url:"/"
					},
					{
						name:"绝色小蛋妃",
						chapter:"17话 人鱼国的私生女",
						url:"/"
					},
				]
			}
		}
	}
</script>

<style scoped>
/* div::after{
  display: block;
  clear: both;
  content: "";
} */
	* {
		margin: 0px;
		padding: 0px;
	}

	a {
		text-decoration: none;
		color: #555555;
	}

	img {
		vertical-align: middle;
		border-style: none;
	}

	ul,
	li {
		list-style: none;
	}

	strong {
		font-weight: bolder;
	}
  div::after{
    content: "";
    clear: both;
    display: block;
  }

	.mt1 {
		margin-top: 24px;
	}

	.to-padding {
		padding-top: 72px;
	}

	.row {
		width: 80%;
		max-width: 80%;
		margin: 0px auto;
	
		/* background-color: #0000FF; */
	}

	.crumb {
		height: 48px;
		line-height: 48px;
		font-size: 14px;
		color: #DDDDDD;
		float: left;
	}

	.crumb em {
		color: #999999;
		font-style: normal;

	}

	.crumb strong {
		color: #ff7647;
	}

	.detail-main {
		float: left;
		width: 100%;
		margin-right: -100%;
	}

	.wrap-main {
		margin-right: 330px;
	}

	.comic {
		float: left;
		width: 210px;
		height: 280px;
		padding: 0 20px 40px 10px;
		background: url(../assets/pc_skin.png)no-repeat;
	}

	.comic img {
		width: 100%;
		height: 100%;
	}

	.comic-intro {
		position: relative;
		margin-left: 260px;
		z-index: 1000;
	}

	.comic-intro .graded {
		position: absolute;
		right: 0;
		top: -45px;
		width: 100px;
		height: 80px;
		padding-top: 45px;
		background: url(../assets/pc_skin.png) -234px -116px;
		transition: padding-top .3s, top .3s;
		cursor: pointer;
	}

	.comic-intro .graded .graded-tips {
		position: absolute;
		z-index: 3;
		left: 50%;
		bottom: 104%;
		width: 140px;
		margin-left: -81px;
		font-size: 12px;
		background-color: #fff;
		padding: 10px;
		color: #999;
		border: 1px solid #ddd;
		border-radius: 3px;
		text-align: center;
		transition: bottom 0.3s;
		display: none;
	}

	.comic-intro .graded:hover .graded-tips {
		display: block;
	}

	.graded-tips strong {
		color: #ff7647;
	}

	.score-star {
		position: relative;
		width: 120px;
		height: 24px;
		background: url(../assets/打分.png) no-repeat;
		background-size: 100px;
		cursor: pointer;
		margin: 10px auto 0;
	}

	.comic-intro .graded .score-num {
		height: 50px;
		color: #fff;
		text-align: center;
		line-height: 50px;
		background-color: #ff7647;
		font-style: italic;
		border-radius: 3px 3px 0 0;
	}

	.score-num strong {
		color: #fff100;
		font-weight: 700;
		margin-right: 4px;
		font-size: 36px;
	}

	.reated {
		height: 30px;
		line-height: 30px;
		text-align: center;
		color: #fff;
		font-size: 12px;
		background-color: #2a2b4a;
		border-radius: 0 0 3px 3px;
	}

	.comic-intro .title-wraper {
		height: 30px;
		padding-top: 8px;
		line-height: 30px;
		margin: 16px 110px 16px 0;
		overflow: hidden;
	}

	.title-wraper .title {
		float: left;
		margin: 0;
		font-weight: 400;
		font-size: 24px;
	}

	.comic-intro .title-wraper .update-time {
		margin-left: 8px;
		font-size: 12px;
		color: #5ccf5a;
		float: left;
	}

	.comic-intro .attr {
		width: 100%;
		height: 24px;
		font-size: 0;
		text-align: left;
		margin-bottom: 20px;
	}

	.attr .tags {
		font-size: 12px;
		display: inline-block;
		line-height: 20px;
		padding: 0 8px;
		background-color: #f5f5f5;
		border-radius: 3px;
		margin-right: 4px;
	}

	.attr .tags.c1 {
		background-color: #c78590;
		color: white;
	}

	.attr .tags.c2 {
		background-color: #f3bd7e;
		color: white;
	}

	.attr .tags.c3 {
		background-color: #6ec4e9;
		color: white;
	}

	.comic-intro .desc {
		position: relative;
		cursor: pointer;
		text-align: left;
    max-height: 60px;
	}

	.desc-con {
		width: 100%;
		height: 40px;
		font-size: 12px;
		color: #999;
		background-color: #fff;
		overflow: hidden;
		line-height: 20px;
		transition: height .3s;
	}

	.comic-intro .desc-switch {
		height: 20px;
		line-height: 20px;
		text-align: right;
	}

	.comic-operate {
		margin-top: 24px;
	}

	.comic-operate ul {
		min-width: 375px;
		max-width: 420px;
		height: 110px;
	}

	.comic-operate .item {
		float: left;
		width: 32%;
		height: 50px;
		padding: 4px;
		border: 1px solid #ddd;
		background-color: #f5f5f5;
		margin: 5px 1.33333% 0 0;
		border-radius: 3px;
		cursor: pointer;
		box-sizing: border-box;
	}

	.comic-operate .ift-read {
		color: #ff7647;
	}

	.comic-operate .ift-read,
	.ift-rss,
	.ift-reward,
	.ift-ticket,
	.ift-fire,
	.ift-comment {
		float: left;
		width: 40px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		margin-right: -24px;
	}

	.comic-operate .type {
		display: block;
		height: 24px;
		line-height: 24px;
		font-size: 16px;
	}

	.comic-operate .item .type-show {
		height: 16px;
		line-height: 16px;
		font-size: 12px;
		color: #999;
		word-break: break-all;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.comic-operate .ift-rss {
		color: #6ec4e9;
	}

	.comic-operate .ift-reward {
		color: #f3bd7e;
	}

	.comic-operate .ift-ticket {
		color: #c78590;
	}

	.comic-operate .ift-fire {
		color: #9b9bd5;
	}

	.comic-operate .ift-comment {
		color: #66c9bb;
	}

	.comic-operate .share {
		position: relative;
		float: right;
		height: 40px;
		margin-top: -40px;
		text-align: center;
		font-size: 12px;
		color: #ddd;
		cursor: pointer;
	}

	.comic-operate .share a {
		float: none;
		font-size: inherit;
		padding-left: inherit;
		line-height: inherit;
		height: inherit;
		background-image: inherit;
		background-repeat: inherit;
		cursor: pointer;
		margin: inherit;
		color: inherit;
	}

	.comic-operate .share .iconfont {
		display: block;
		position: relative;
		z-index: -1;
	}

	.detail-aside {
		float: right;
		width: 310px;
	}

	.author {
		padding: 15px;
		border-radius: 62px 5px 5px 5px;
		border: 1px solid #ddd;
		background-color: #f5f5f5;
	}

	.author>.hd {
		position: relative;
		min-height: 96px
	}

	.author>.hd .title {
		position: absolute;
		top: -21px;
		right: 0;
		width: 48px;
		height: 25px;
		padding: 5px 0 0 5px;
		font-size: 14px;
		text-align: center;
		color: rgba(0, 0, 0, .3);
		background: url(../assets/pc_skin.png)no-repeat -245px -75px;
	}

	.author-head {
		float: left;
		width: 94px;
		height: 94px;
		margin-right: 10px;
		overflow: hidden;
		border-radius: 50%;
		border: 1px solid #ddd;
	}

	.author-head img {
		position: relative;
		top: 24px;
	}

	.author-info {
		padding-top: 12px
	}

	.author-info .name {
		height: 24px;
		line-height: 24px;
		font-size: 16px;
		margin-bottom: 4px;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.author-info .attr {
		font-size: 12px;
		line-height: 20px;
	}

	.author-info .attr-lable {
		color: #999;
		margin-right: 4px;
	}

	.author>.bd {
		position: relative;
		margin-top: 20px;
		padding: 20px;
		border-radius: 6px;
		font-size: 12px;
		color: #fff;
		line-height: 20px;
		background-color: #b4dce3;
	}

	.author-con {
		height: 100px;
		overflow-x: hidden;
		overflow-y: auto;
	}

	.author>.bd .after {
		position: absolute;
		top: -12px;
		left: 38px;
		border-bottom: 12px solid #b4dce3;
		border-left: 12px dashed transparent;
		border-right: 12px dashed transparent;
	}

	.row1 {
		width: 80%;
		max-width: 80%;
		margin: 0px auto;
		/* height: 5157px; */
		/* background: #0077AA; */
		position: relative;
		/* bottom: -292px; */
	}

	.mt {
		margin-top: 16px;
	}

	.box2>.hd {
		padding-left: 9px;
		background-color: #f5f5f5;
		height: 46px;
		border: 1px solid #ddd;
	}

	.box>.hd .title {
		font-size: 18px;
		padding-top: 4px;
		float: left;
		display: inline;
		line-height: 40px;
		height: 40px;
		font-weight: 400;
		cursor: pointer;
	}

	.box2 .title .ift-chapter {
		color: #ff7647;
		margin-right: 5px;
		vertical-align: middle;
	}

	.operate {
		float: right;
		width: 48px;
		height: 46px;
		line-height: 46px;
		text-align: center;
		border-left: 1px solid #ddd;
		cursor: pointer;
		clear: both;
		margin-top: -45px;
	}

	.operate .ift-sort {
		color: #999;
		position: relative;
	}

	.box>.hd .update {
		height: 48px;
		line-height: 48px;
		font-size: 12px;
		color: #999;
		margin-right: 10px;
		position: absolute;
		top: 2px;
		right: 382px;
	}

	.box2 .bd {
		margin-top: 0;
		padding: 16px 10px;
		border: 1px solid #ddd;
		border-top: 0;
		margin: 8px 0;
		height: 1478px;
		margin-left: -10px;
	}

	.chapter-list {
		padding: 0 10px 5px;
	}

	.chapter-list .item {
		position: relative;
		top: 35px;
		float: left;
		/* left: -110px; */
		width: 18%;
		height: 30px;
		line-height: 30px;
		margin: 0 1% 10px;
		font-size: 12px;
		text-align: center;
		box-sizing: border-box;
		border: 1px solid #ddd;
		background-color: #f5f5f5;
		border-radius: 3px;
	}

	.chapter-list .item.newest {
		color: #5ccf5a;
	}

	.chapter-list .tit {
		display: block;
		line-height: 30px;
		position: absolute;
		left: 58px;
		height: 30px;
		margin: 0 10px;
		color: #5ccf5a;
	}

	.chapter-list .item .ift-lock {
		right: auto;
		left: -4px;
		top: 0px;
		line-height: 15px;
		color: #daa520;
		position: absolute;
	}

	.chapter-list .item .ift-new {
		position: absolute;
		right: -4px;
		top: -4px;
		width: 18px;
		height: 18px;
		line-height: 18px;
		border-radius: 50%;
		color: #fff;
		text-align: center;
		background-color: #5ccf5a;
	}

	.mt2 {
		margin-top: 100px;
	}

	.ift-relevant,
	.ift-comment1 {
		color: #ff7647;
		margin-right: 5px;
		vertical-align: middle;
	}

	.related-toggle {
		float: right;
		margin-right: 5px;
	}

	.related-toggle .ift-prev {
		float: left;
		line-height: 46px;
		padding: 0 5px;
		font-size: 12px;
		color: #999;
		cursor: pointer;
	}

	.related-toggle ul {
		float: left;
		font-size: 0;
	}

	.related-toggle li {
		display: inline-block;
		padding: 0 2px;
		height: 46px;
		line-height: 46px;
		cursor: pointer;
	}

	.smile {
		color: #ff7647;
	}

	.smile1 {
		color: #999;
	}

	.col .item {
		float: left;
		width: 17.4193548387097%;
		margin-right: 3.2258064516129%;
		margin-bottom: 3.0967741935484%;
	}

	.comic-list .thumbnail {
		display: block;
		position: relative;
		width: 197px;
		height: 262px;
		padding-bottom: 133.33333%;
		overflow: hidden;
		border-radius: 3px;
		box-sizing: border-box;
		transform: rotate(0deg);
	}

	.comic-list .thumbnail img {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		border: 0;
		color: transparent;
		transition: .1s ease-in-out;
	}

	.comic-list .thumbnail img:hover {
		transform: scale(1.5);
	}

	.comic-list .thumbnail>.chapter {
		right: 5px;
		bottom: 5px;
		max-width: 80%;
		line-height: 20px;
		text-align: right;
		border-radius: 3px;
		color: white;
		position: absolute;
		font-size: 12px;
		background-color: rgba(0, 0, 0, .5);
	}

	.thumbnail .score {
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
		transform: scale(.75);
		transform-origin: 100% 0;
	}

	.comic-list .title {
		height: 20px;
		margin: 10px 0 0;
		line-height: 20px;
		color: #555;
		font-size: 14px;
		font-weight: 400;
		text-align: left;
	}

	.comic-list .desc {
		height: 20px;
		line-height: 20px;
		font-size: 12px;
		color: #999;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		text-align: left;
	}

	.box2 .bd1 {
		margin-top: 0;
		padding: 16px 8px;
		border: 1px solid #ddd;
		border-top: 0;
		margin: 0px 0;
		margin-left: 0px;
	}

	.comment {
		font-size: 14px;
		padding: 10px;
		font-family: Microsoft Yahei, SimSun, Tahoma, arial, SimHei, sans-serif;
		background: white;
	}

	.comment-hd {
		margin-bottom: 10px;
		height: 40px;
		border: none;
	}

	.comment-number {
		float: right;
		padding-top: 10px;
		height: 30px;
		line-height: 30px;
		color: #fc6454;
	}

	.comment-number strong {
		padding: 0 5px;
		font-size: 20px;
		font-family: Impact;
	}

	.comment-box {
		margin-bottom: 10px;
		font-size: 0;
	}

	.textarea-bd {
		position: relative;
		border: 1px solid #fc6454;
		border-radius: 3px;
		padding-bottom: 12px;
	}

	.comment-textarea {
		width: 100%;
		box-sizing: border-box;
		display: block;
		min-height: 60px;
		margin: 0;
		border: none;
		outline: none;
		padding: 5px 5px 0;
		font-size: 14px;
		color: #333;
		background: transparent;
	}

	.input-num {
		position: absolute;
		height: 12px;
		line-height: 12px;
		left: 0;
		bottom: 0;
		padding: 0 5px;
		font-size: 12px;
		color: #dcdcdc;
	}

	.comment-box-ft {
		padding: 10px 0;
		text-align: right;
	}

	.comment-submit {
		position: relative;
		height: 32px;
		padding: 0 16px;
		border: 0;
		outline: none;
		font-size: 16px;
		background-color: #fc6454;
		color: #fff;
		border-radius: 8px 8px 8px 0;
	}

	.comment-loading {
		height: 300px;
		text-align: center;
		line-height: 300px;
	}

	.detail-aside1 {
		float: right;
		width: 310px;
		position: relative;
	
		margin-top: -24px;
	}

	.mb24 {
		margin-top: 24px;
	}

	.tabs>.hd {
		position: relative;
		height: 46px;
		border: 1px solid #ddd;
		background-color: #f5f5f5;
	}

	.tabs .hd .title {
		float: left;
		height: 46px;
		font-size: 18px;
		font-weight: 400;
		padding-left: 9px;
		line-height: 46px;
	}

	.ift-fans {
		font-size: 20px;
		color: #ff7647;
		margin-right: 5px;
	}

	.tabs .hd .active {
		background-color: #fff;
		padding-bottom: 1px;
		border-bottom: 0;
		color: #ff7647;
	}

	.tabs .hd ul li {
		border-left: 1px solid #ddd;
		font-size: 14px;
		display: inline;
		float: right;
		padding: 0 16px;
		line-height: 46px;
		cursor: pointer;
		text-align: center;
	}

	.tabs>.bd {
		border: 1px solid #ddd;
		border-top: 0;
		padding: 10px;
	}

	.reward-list .item {
		height: 50px;
		padding: 5px 0;
		border-bottom: 1px dotted #ddd;
		font-size: 12px;
	}

	.reward-list .item .wrap-con {
		height: 40px;
		border-radius: 30px;
		padding: 6px;
		display: block;
		transition: background-color .3s;
	}

	.reward-list .item:hover {
		transform: scale(1.0);
		background-color: #FDE2E2;
		border-radius: 50px;
	}

	.reward-list .item .thumbnail {
		float: left;
		width: 48px;
		height: 48px;
		margin-right: 10px;
		border-radius: 50%;
		overflow: hidden;
		transition: .3s;
	}

	.reward-list .item .thumbnail img {
		width: 100%;
		height: 100%;
	}

	/* @keyframes turnX{
		0%{transform: rotateX(0deg);}
		100%{transform: rotateX(360deg);}
	} */
	.reward-list .item :hover img {
		transform: scale(1.2);
		animation-name: turnX;
		animation-direction: 2s;
		animation-iteration-count: 1;
	}

	.reward-list .item .reward-num {
		float: right;
		line-height: 40px;
		color: #999;
	}

	.reward-list .item strong {
		font-weight: 400;
		color: #ffc2ad;
		margin: 0 2px;
	}

	.reward-list>.item .ift-active {
		color: #ddd;
	}

	.reward-list>.item .title {
		height: 40;
		line-height: 40px;
		font-weight: 400;
		font-size: 14px;
		text-align: left;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.tabs-item .rank-list .item {
		padding: 5px 0;
		border-bottom: 1px dotted #ddd;
		font-size: 12px;
	}

	.rank-list .item-hd {
		height: 30px;
	}

	.rank-list .item-hd .reward-num {
		float: right;
		line-height: 30px;
		margin-left: 10px;
		color: #999;
	}

	.rank-list .item strong {
		margin: 0 4px;
		color: #ffc2ad;
	}

	.rank-first {
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
		/* background: #ddd; */
		border-radius: 50%;
		background-color: #ff7647;
	}

	.rank-list .item .title {
		font-weight: 400;
		height: 30px;
		line-height: 30px;
		overflow: hidden;
		text-align: left;

	}

	.rank-list .item-bd {
		display: block;
		position: relative;
		height: 100px;
	}

/* 	.rank-list .item.hd:hover .item-bd {
		display: block;
	} */

	.rank-list .item-bd .thumbnail {
		float: left;
		width: 75px;
		height: 100px;
		margin-right: 10px;
	}

	.rank-list .item-bd .thumbnail img {
		width: 100%;
		height: 100%;
	}

	.rank-list .item-bd .title {
		height: 40px;
		line-height: 40px;
		margin-bottom: 10px;
		margin-right: 64px;
		font-size: 18px;
	}

	.rank-list .item .attr {
		height: 25px;
		line-height: 20px;
		color: #555;
		text-align: left;
	}

	.rank-list .item .attr-label {
		color: #999;
		margin-right: 5px;
	}

	.ift-qushi {
		color: #ddd;
	}

	.rank-list .item-bd .reward-num {
		line-height: 20px;
		color: #999;
		text-align: left;
	}

	.rank-list .item-bd .reward-num strong {
		color: #ff7647;
	}

	.rank-list .item-bd .rank-num {
		position: absolute;
		right: 0;
		top: 50%;
		width: 64px;
		height: 64px;
		line-height: 64px;
		margin-top: -32px;
		border-radius: 50%;
		font-size: 18px;
		text-align: center;
		background-color: #ff7647;
		color: #fff;
	}
	.mb24{
		margin-bottom: 24px;
	}
	.box2>.hd .more .ift-more {
    width: 42px;
    height: 24px;
	display: inline-block;
    margin-top: 0;
	position: absolute;
    right: 10px;
    bottom: 685px;
	background: url(https://www.zymk.cn/static/images/default/icon/more.svg) no-repeat,none;
}
.update-list .item {
    padding: 5px 0;
    font-weight: 400;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    border-bottom: 1px dotted #ddd;
    overflow: hidden;
}
.update-list .item .chapter {
    font-size: 12px;
    float: right;
    color: #ffc2ad;
    max-width: 50%;
}
.update-list .item .chapter a {
    color: #ffc2ad;
}
.actives{
	float: left;
}
</style>
