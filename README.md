## Tab 切换

### 方式一：用原生js实现各种Tab切换效果。

#### 1. 鼠标滑动切换 :
这是最简单的Tab切换。鼠标滑过时，切换Tab.

首先，通过getElementById、 getElementsByTagNameL等方法来获取相应的元素。

然后，对相应的元素绑定mouseover事件即可。

具体代码见  [js-mouseover-tab.html](https://github.com/frankwang0909/Tab/blob/master/js-mouseover-tab.html)

#### 2. 鼠标点击切换
与第一种的区别在于绑定的事件不同。获取元素的方法是一样的，只需把绑定mouseovers事件改为click事件即可。

具体代码见  [js-click-tab.html](https://github.com/frankwang0909/Tab/blob/master/js-click-tab.html)

#### 3. 鼠标滑动延迟切换
延迟切换涉及到了一个时间问题，可以通过设置定时器来实现延迟的效果。定时器有setTimeout()和setInterval()两种方式来设置。

setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式。setTimeout() 只执行 code 一次。如果要多次调用，需要使用 setInterval()。 

setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。由 setInterval() 返回的 ID 值可用作 clearInterval() 方法的参数。

因为这里的延迟切换是在指定的延迟时间之后才实现切换效果，所以使用setTimeout() 。

具体代码见  [js-delay-tab.html](https://github.com/frankwang0909/Tab/blob/master/js-delay-tab.html)

#### 4. 自动切换
自动切换，即按指定的周期自动切换到下一个Tab。这里也需要一个定时器，而且是按周期调用函数，因此使用setInterval() 方法来实现。
当鼠标滑动到某个Tab时，高亮显示当前页，同时停止自动切换，此时需要用到 clearInterval()方法来清除定时器。

具体代码见  [js-auto-tab-01.html](https://github.com/frankwang0909/Tab/blob/master/js-auto-tab-01.html)


优化后的代码见 [js-auto-tab-02.html](https://github.com/frankwang0909/Tab/blob/master/js-auto-tab-02.html)


### 方式二：用jQuery实现各种Tab切换效果。

#### 1. 鼠标滑动切换 
具体代码见  [jQ-mouseover-tab.html](https://github.com/frankwang0909/Tab/blob/master/jQ-mouseover-tab.html)

#### 2. 鼠标滑动延迟切换
具体代码见  [jQ-delay-tab.html](https://github.com/frankwang0909/Tab/blob/master/jQ-delay-tab.html)

#### 3. 鼠标点击切换
具体代码见  [jQ-click-tab.html](https://github.com/frankwang0909/Tab/blob/master/jQ-click-tab.html)

#### 4. 自动切换
具体代码见  [jQ-auto-tab-01.html](https://github.com/frankwang0909/Tab/blob/master/jQ-auto-tab-01.html)

优化后的代码 见[jQ-auto-tab-02.html](https://github.com/frankwang0909/Tab/blob/master/jQ-auto-tab-02.html)
