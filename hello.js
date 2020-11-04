var app = new Vue({
  el: '#app',
  data: {
    message: '<span>hello</span>'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '页面加载于 ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '整个牛项目' }
    ]
  }
})
app4.todos.push({ text: 'new project' })

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'hello Vue.js'
  },
  methods: {
    reverseMessage: () => {
      app5.message = app5.message.split('').reverse().join('')
    }
  }
})

let app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'hello input'
  }
})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, text: '蔬菜' },
        { id: 1, text: '奶酪' },
        { id: 2, text: '随便其它什么人吃的东西' }
      ]
    }
})

// ------------------
let data = { a: 1 }

var vm = new Vue({
  data: data
})

vm.a = 2
console.log(data.a)

console.log(vm.a)
console.log(vm.$data.a)

// ------------------
var obj = {
  foo: 'bar'
}

Object.freeze(obj)

new Vue({
  el: '#app-8',
  data: obj
})

// ------------------
var data9 = { a: 1, url: 'https://www.baidu.com', id: 'aaa', href: 'href' }
var vm = new Vue({
  el: '#app-9',
  data: data9
})

console.log(vm.$data === data9)
console.log(vm.$el === document.getElementById('app-9'))

vm.$watch('a', (newValue, oldValue) => {
  console.log(newValue, oldValue)
})
