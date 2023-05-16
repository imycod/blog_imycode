实现背景滚动,敌机随机出场等,后续会添加碰撞检测和我方飞机的子弹攻击等...

## 飞机精灵类

```python
import random
import pygame

# 496

# 屏幕大小的常量
SCREEN_RECT = pygame.Rect(0, 0, 480, 700)
# 刷新帧率
FRAME_PRE_SEC = 60
# 创建敌机的定时器常量
CREATE_ENEMY_EVENT = pygame.USEREVENT


class GameSprite(pygame.sprite.Sprite):
    """飞机大战游戏精灵(封装图像,位置,速度)并提供个update方法,供精灵组调用"""

    def __init__(self, image_name, speed=5):
        # 调用父类的初始化方法
        super().__init__()

        # 定义对象的属性
        self.image = pygame.image.load(image_name)
        # 默认大小就是图像大小,同时x y都是0
        self.rect = self.image.get_rect()
        self.speed = speed

    def update(self):
        # 在屏幕的垂直方向移动
        self.rect.y += self.speed


class Background(GameSprite):
    """游戏背景精灵"""

    def __init__(self, is_alt=False):
        # 调用父类方法实现精灵创建 image rect speed
        super().__init__("../images/background.png")
        if is_alt:
            self.rect.y = -self.rect.height

    # 父类提供方法,不能满足子类的需求,就重写吧
    def update(self):
        # 1.调用父类的方法实现
        super().update()
        # 2.判断是否移除屏幕, 如果移除屏幕,就将图像设置到屏幕的上方
        if self.rect.y >= SCREEN_RECT.height:
            self.rect.y = -self.rect.height


class Enemy(GameSprite):
    """游戏背景精灵"""

    def __init__(self):
        # 调用父类方法实现精灵创建 image rect speed
        super().__init__("../images/enemy1.png")
        # 指定 敌机初始随即速度
        self.speed = random.randint(1, 3)
        # 指定 敌机初始随机位置
        self.rect.bottom = 0
        # 屏幕宽度-敌机宽度
        max_x = SCREEN_RECT.width - self.rect.width
        self.rect.x = random.randint(0, max_x)

    # 父类提供方法,不能满足子类的需求,就重写吧
    def update(self):
        # 1.调用父类方法保持垂直飞行
        super().update()
        # 2.判断是否非出屏幕,及时销毁释放内存
        if self.rect.y >= SCREEN_RECT.height:
            print("飞出屏幕需要从精灵组删除/.....")
            # 敌机精灵会被销毁
            self.kill()

    # 当敌机销毁会自动调用del方法
    def __del__(self):
        print("敌机挂了 %s" % self.rect)

```

## 主函数

```python
import pygame
from plane_sprites import *


class PlaneGame(object):
    """飞机大战主程序"""

    def __init__(self):
        print("游戏初始化")

        # 1. 创建游戏窗口
        self.screen = pygame.display.set_mode(SCREEN_RECT.size)
        # 2. 创建游戏时钟
        self.clock = pygame.time.Clock()
        # 3. 调用私有化方法,精灵和精灵组创建,因为不知道要提供多少精灵
        self.__create_sprites()
        # 4. 设置定时器事件, 个多少时间创建一架敌机
        pygame.time.set_timer(CREATE_ENEMY_EVENT, 1000)

    def __create_sprites(self):
        # 创建背景精灵
        bg1 = Background()
        bg2 = Background(True)
        self.back_group = pygame.sprite.Group(bg1,bg2)
        # 创建敌机的精灵组
        self.enemy_group = pygame.sprite.Group()
        pass

    def start(self):
        print("游戏开始")

        while True:
            # 设置刷新帧率
            self.clock.tick(FRAME_PRE_SEC)
            # 事件监听
            self.__event_handler()
            # 碰撞检测
            self.__check_collide()
            # 更新/绘制精灵组
            self.__update_sprites()
            # 更新显示
            pygame.display.update()

    def __event_handler(self):
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                PlaneGame.__game_over()
            elif event.type == CREATE_ENEMY_EVENT:
                enemy = Enemy()
                self.enemy_group.add(enemy)
                print("敌机出场...")

    def __check_collide(self):
        pass

    def __update_sprites(self):
        self.back_group.update()
        self.back_group.draw(self.screen)
        self.enemy_group.update()
        self.enemy_group.draw(self.screen)
        pass
    @staticmethod
    def __game_over():
        # 没有用到当前类的实例,可以设置成静态方法
        print("游戏结束..")
        pygame.quit()
        exit()


if __name__ == '__main__':
    # 创建游戏对象
    game = PlaneGame()
    # 启动游戏
    game.start()

```



## 目前效果

![image-20230507124930895](/image-20230507124930895.png)

未完待续...