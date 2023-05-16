import{_ as s,c as n,o as a,a as l}from"./app.ead3f76b.js";const p="/image-20230507124930895.png",f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"飞机精灵类","slug":"飞机精灵类","link":"#飞机精灵类","children":[]},{"level":2,"title":"主函数","slug":"主函数","link":"#主函数","children":[]},{"level":2,"title":"目前效果","slug":"目前效果","link":"#目前效果","children":[]}],"relativePath":"project/planwar/index.md"}'),o={name:"project/planwar/index.md"},e=l(`<p>实现背景滚动,敌机随机出场等,后续会添加碰撞检测和我方飞机的子弹攻击等...</p><h2 id="飞机精灵类" tabindex="-1">飞机精灵类 <a class="header-anchor" href="#飞机精灵类" aria-hidden="true">#</a></h2><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> random</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> pygame</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 496</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 屏幕大小的常量</span></span>
<span class="line"><span style="color:#A6ACCD;">SCREEN_RECT </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> pygame</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Rect</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">480</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">700</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 刷新帧率</span></span>
<span class="line"><span style="color:#A6ACCD;">FRAME_PRE_SEC </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">60</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 创建敌机的定时器常量</span></span>
<span class="line"><span style="color:#A6ACCD;">CREATE_ENEMY_EVENT </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> pygame</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">USEREVENT</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GameSprite</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">pygame</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">sprite</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Sprite</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span><span style="color:#676E95;font-style:italic;">飞机大战游戏精灵(封装图像,位置,速度)并提供个update方法,供精灵组调用</span><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__init__</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">image_name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">speed</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 调用父类的初始化方法</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">super</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">__init__</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 定义对象的属性</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">image</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> pygame</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">load</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">image_name</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 默认大小就是图像大小,同时x y都是0</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">rect</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get_rect</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">speed</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> speed</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">update</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 在屏幕的垂直方向移动</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">rect</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">y</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">speed</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Background</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">GameSprite</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span><span style="color:#676E95;font-style:italic;">游戏背景精灵</span><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__init__</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">is_alt</span><span style="color:#89DDFF;">=False):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 调用父类方法实现精灵创建 image rect speed</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">super</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">__init__</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">../images/background.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> is_alt</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">rect</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">y</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">rect</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">height</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 父类提供方法,不能满足子类的需求,就重写吧</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">update</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 1.调用父类的方法实现</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">super</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">update</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 2.判断是否移除屏幕, 如果移除屏幕,就将图像设置到屏幕的上方</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">rect</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">y</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> SCREEN_RECT</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">height</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">rect</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">y</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">rect</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">height</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Enemy</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">GameSprite</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span><span style="color:#676E95;font-style:italic;">游戏背景精灵</span><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__init__</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 调用父类方法实现精灵创建 image rect speed</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">super</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">__init__</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">../images/enemy1.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 指定 敌机初始随即速度</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">speed</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> random</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">randint</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 指定 敌机初始随机位置</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">rect</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">bottom</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 屏幕宽度-敌机宽度</span></span>
<span class="line"><span style="color:#A6ACCD;">        max_x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> SCREEN_RECT</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">width</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">rect</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">width</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">rect</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">x</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> random</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">randint</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> max_x</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 父类提供方法,不能满足子类的需求,就重写吧</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">update</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 1.调用父类方法保持垂直飞行</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">super</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">update</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 2.判断是否非出屏幕,及时销毁释放内存</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">rect</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">y</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> SCREEN_RECT</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">height</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">飞出屏幕需要从精灵组删除/.....</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#676E95;font-style:italic;"># 敌机精灵会被销毁</span></span>
<span class="line"><span style="color:#A6ACCD;">            self</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">kill</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 当敌机销毁会自动调用del方法</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__del__</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">敌机挂了 </span><span style="color:#F78C6C;">%s</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">%</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">rect</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="主函数" tabindex="-1">主函数 <a class="header-anchor" href="#主函数" aria-hidden="true">#</a></h2><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> pygame</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> plane_sprites </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PlaneGame</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">object</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span><span style="color:#676E95;font-style:italic;">飞机大战主程序</span><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__init__</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">游戏初始化</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 1. 创建游戏窗口</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">screen</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> pygame</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">display</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set_mode</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">SCREEN_RECT</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">size</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 2. 创建游戏时钟</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">clock</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> pygame</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">time</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Clock</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 3. 调用私有化方法,精灵和精灵组创建,因为不知道要提供多少精灵</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">__create_sprites</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 4. 设置定时器事件, 个多少时间创建一架敌机</span></span>
<span class="line"><span style="color:#A6ACCD;">        pygame</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">time</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set_timer</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">CREATE_ENEMY_EVENT</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__create_sprites</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 创建背景精灵</span></span>
<span class="line"><span style="color:#A6ACCD;">        bg1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Background</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">        bg2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Background</span><span style="color:#89DDFF;">(True)</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">back_group</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> pygame</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">sprite</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Group</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">bg1</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">bg2</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 创建敌机的精灵组</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">enemy_group</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> pygame</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">sprite</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Group</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">pass</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">start</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">游戏开始</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">True:</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#676E95;font-style:italic;"># 设置刷新帧率</span></span>
<span class="line"><span style="color:#A6ACCD;">            self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">clock</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">tick</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">FRAME_PRE_SEC</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#676E95;font-style:italic;"># 事件监听</span></span>
<span class="line"><span style="color:#A6ACCD;">            self</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">__event_handler</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#676E95;font-style:italic;"># 碰撞检测</span></span>
<span class="line"><span style="color:#A6ACCD;">            self</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">__check_collide</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#676E95;font-style:italic;"># 更新/绘制精灵组</span></span>
<span class="line"><span style="color:#A6ACCD;">            self</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">__update_sprites</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#676E95;font-style:italic;"># 更新显示</span></span>
<span class="line"><span style="color:#A6ACCD;">            pygame</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">display</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">update</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__event_handler</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> event </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> pygame</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">event</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> event</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> pygame</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">QUIT</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">                PlaneGame</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">__game_over</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">elif</span><span style="color:#A6ACCD;"> event</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> CREATE_ENEMY_EVENT</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">                enemy </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Enemy</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">                self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">enemy_group</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">enemy</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">敌机出场...</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__check_collide</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">pass</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__update_sprites</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">back_group</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">update</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">back_group</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">draw</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">screen</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">enemy_group</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">update</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">enemy_group</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">draw</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">screen</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">pass</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#FFCB6B;">staticmethod</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__game_over</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 没有用到当前类的实例,可以设置成静态方法</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">游戏结束..</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        pygame</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">quit</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">exit</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> __name__ </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">__main__</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 创建游戏对象</span></span>
<span class="line"><span style="color:#A6ACCD;">    game </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">PlaneGame</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 启动游戏</span></span>
<span class="line"><span style="color:#A6ACCD;">    game</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">start</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="目前效果" tabindex="-1">目前效果 <a class="header-anchor" href="#目前效果" aria-hidden="true">#</a></h2><p><img src="`+p+'" alt="image-20230507124930895"></p><p>未完待续...</p>',8),t=[e];function c(r,y,F,D,A,C){return a(),n("div",null,t)}const _=s(o,[["render",c]]);export{f as __pageData,_ as default};
