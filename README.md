# gaui组件UI

##### 封装一些elementUI组件，作为练习，没有弄成库，很简单的一些技巧

​                                                                                                                                         ----2021-12-16-11:50

### 总结知识点

1. 组件中，this.$slots可以拿到所有的插槽，可以根据是否传入具名插槽，来判断是否显示

2. 组件中，this.type   可以拿到传过来的type属性

3. 组件中，传进来的props，要使用对象进行约束，类型和默认值，props是单项数据流，只读，修改的话发送给父组件

4. 想要父组件操作子组件的事件，使用this.$emit('方法名'，参数)，在父组件中写方法

5. 父组件中可以使用直接传参，也可以使用动态传参（v-bind），向子组件传递值

6. 子组件中，注意class的数组和对象的写法

7. @click.self,只点击自己有效，点击子元素不能触发，dialog点击遮罩层关闭

8. 父组件使用.sync语法糖    **：demo= “demo” @updata：demo = "fn1"**相当于  **:demo.sync= "demo"**,两边名字相同的话，不用来回传了

9. 祖孙组件之间传值，provide（this可以把真个组件的传过去，在孙子组件中，可以通过他相当于拿到祖组件的全局this）和inject，和react中的上下文传值很像
10. this.$root、this.$refs、this.$parent、this.$children
11. $attrs 把父组件中非prop属性绑定到内部组件（非prop属性指的是，父组件传值,子组件中没有使用prop接收的，会自动设置到子组件的根元素标签上，如果是class和style的话，会自动合并最外层标签的class和style）（如果子组件中不想继承父组件传入的非prop属性，可以使用inheritAttrs禁用继承，然后通过v-bind="$attrs"把外部传入的非prop属性设置给希望的标签上，$attrs是一个对象，父组件传给子组件设置的，但是不会包含class和style）$attrs能让我们在子组件中更好的控制父组件中传入的属性
12. $listener 把父组件中的DOM对象的原生事件绑定到内部组件
13. 区别：$attrs(属性),  $listeners （事件）

