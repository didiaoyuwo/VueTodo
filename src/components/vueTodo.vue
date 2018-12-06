<template>
  <section class="todo">
    <header class="todo-header">
      <h1 class='todo-title'>todo</h1>
      <div class="todo-input">
        <img src="../../static/all.png" alt="" class="icon-all" v-if='items.length>0 && count>0' @click='selectAll()'>
        <img src="../../static/allcolor.png" alt="" class="icon-all"
        v-if='items.length>0 && count==0' @click='selectAll()'>
        <input type="text" v-model="msg" class="todo-msg" placeholder="请随便输入点什么..." v-focus @keyup.enter='add(msg)'>
      </div>
    </header>
    <section class="todo-body">
      <ul>
        <li v-for='(item,index) in items' :key='index' class='item-list' @mouseover='showDelete(item.id)' @mouseout="hideDelete(item.id)" v-show='allStatus || (ifIsCheck?item.isCheck:!item.isCheck)'>
          <input type="checkbox" class="item-checkbox" v-model='item.isCheck' v-if='item.hideInpStatus'>
          <span class="item-msg" :class="{'gray':item.isCheck}" @dblclick="showInput(item.id)" v-if='!item.showInput' >{{item.val}}</span>
          <input type="text" v-model="item.val" class="item-input" v-if='item.showInput' v-focus @keyup.enter='HideInput(item.id)' @blur='HideInput(item.id)'>
          <img src="../../static/delete.png" alt="" class="delete-icon" v-if='item.showDelete && item.hideInpStatus' @click='deleteData(item.id)'>
        </li>
      </ul>
    </section>
    <footer class="todo-footer">
      <span>{{count}} item left</span>
      <a class='footer-all' @click='showAll($event)' :class="{'active':allStatus}">all</a>
      <a class='footer-active' @click='showActive($event)'>Active</a>
      <a class='footer-completed' @click='showCompleted($event)'>Completed</a>
      <a class='clear-completed' @click='clearCompleted' v-if='count < items.length'>clearCompleted</a>
    </footer>
  </section>
</template>
<script>
export default {
  data () {
    return {
      msg: '',
      allStatus: true,
      ifIsCheck: true,
      items: []
    }
  },
  computed: {
    count () {
      let count = 0
      this.items.forEach((item) => {
        if (item.isCheck === false) {
          count++
        }
      })
      return count
    }
  },
  methods: {
    add (msg) {
      if (msg === '') {
        alert('亲，您好像什么都没输出哦...')
      } else {
        this.items.push({
          id: this.items.length,
          val: msg,
          isCheck: false,
          showInput: false,
          showDelete: false,
          allStatus: true,
          hideInpStatus: true
        })
      }
      this.msg = ''
    },
    showInput (id) {
      this.items.forEach((item) => {
        if (item.id === id) {
          item.showInput = true
          item.hideInpStatus = false
        }
      })
    },
    HideInput (id) {
      this.items.forEach((item) => {
        if (item.id === id) {
          item.showInput = false
          item.hideInpStatus = true
        }
      })
    },
    showDelete (id) {
      this.items.forEach((item) => {
        item.showDelete = false
        if (item.id === id) {
          item.showDelete = true
        }
      })
    },
    hideDelete (id) {
      this.items.forEach((item) => {
        item.showDelete = false
      })
    },
    selectAll () {
      let isAllChecked = true
      this.items.forEach((item) => {
        if (item.isCheck === false) {
          isAllChecked = false
        }
      })
      if (isAllChecked) {
        this.items.forEach((item) => {
          item.isCheck = !item.isCheck
        })
      } else {
        this.items.forEach((item) => {
          item.isCheck = true
        })
      }
    },
    deleteData (index) {
      this.items.splice(index, 1)
    },
    clearCompleted () {
      let templateData = []
      this.items.forEach((item) => {
        if (item.isCheck === false) {
          templateData.push(item)
        }
      })
      this.items = templateData
    },
    showCompleted (event) {
      this.allStatus = false
      this.ifIsCheck = true

      let list = document.getElementsByTagName('a')
      for (let i = 0; i < list.length; i++) {
        list[i].classList.remove('active')
      }
      const completed = list[2]
      completed.classList.add('active')
    },
    showAll (event) {
      this.allStatus = true
      let list = document.getElementsByTagName('a')
      for (let i = 0; i < list.length; i++) {
        list[i].classList.remove('active')
      }
      const all = list[0]
      all.classList.add('active')
    },
    showActive (event) {
      this.allStatus = false
      this.ifIsCheck = false
      let list = document.getElementsByTagName('a')
      for (let i = 0; i < list.length; i++) {
        list[i].classList.remove('active')
      }
      const active = list[1]
      active.classList.add('active')
    }
  }
}
</script>
<style lang='scss' scoped>
@import '../style/vueTodo.scss';
</style>
