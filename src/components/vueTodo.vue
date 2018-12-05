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
        <li v-for='(item,index) in items' :key='index' class='item-list' @mouseover='showDelete(index)' @mouseout="hideDelete(index)" v-if='allStatus || (ifIsCheck?item.isCheck:!item.isCheck)'>
          <input type="checkbox" class="item-checkbox" v-model='item.isCheck' v-if='item.hideInpStatus'>
          <span class="item-msg" :class="{'gray':item.isCheck}" @dblclick="showInput(index)" v-if='!item.showInput' >{{item.val}}</span>
          <input type="text" v-model="item.val" class="item-input" v-if='item.showInput' v-focus @keyup.enter='HideInput(index)' @blur='HideInput(index)'>
          <img src="../../static/delete.png" alt="" class="delete-icon" v-if='item.showDelete && item.hideInpStatus' @click='deleteData(index)'>
        </li>
      </ul>
    </section>
    <footer class="todo-footer">
      <span>{{count}} item left</span>
      <a class='footer-all' @click='showAll()' :class="{'active':allStatus}">all</a>
      <a class='footer-active' @click='showActive()'>Active</a>
      <a class='footer-completed' @click='showCompleted()'>Completed</a>
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
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].isCheck === false) {
          count++
        }
      }
      return count
    }
  },
  methods: {
    add (msg) {
      // alert(1)
      if (msg === '') {
        alert('亲，您好像什么都没输出哦...')
      } else {
        this.items.push({
          val: msg,
          isCheck: false,
          showInput: false,
          showDelete: false,
          allStatus: true,
          hideInpStatus: true
        })
      }
      // localStorage.setItem('data', JSON.stringify(this.items))
      this.msg = ''
    },
    showInput (index) {
      this.items[index].showInput = true
      this.items[index].hideInpStatus = false
    },
    HideInput (index) {
      this.items[index].showInput = false
      this.items[index].hideInpStatus = true
    },
    showDelete (index) {
      this.items[index].showDelete = true
    },
    hideDelete (index) {
      this.items[index].showDelete = false
    },
    selectAll () {
      let isAllChecked = true
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].isCheck === false) {
          isAllChecked = false
          break
        }
      }
      if (isAllChecked) {
        for (let j = 0; j < this.items.length; j++) {
          this.items[j].isCheck = !this.items[j].isCheck
        }
      } else {
        for (let j = 0; j < this.items.length; j++) {
          this.items[j].isCheck = true
        }
      }
    },
    deleteData (index) {
      // console.log(1)
      this.items.splice(index, 1)
    },
    clearCompleted () {
      // alert(1)
      let templateData = []
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].isCheck === false) {
          templateData.push(this.items[i])
        }
      }
      this.items = templateData
    },
    showCompleted () {
      // alert(1)
      this.allStatus = false
      this.ifIsCheck = true
      let list = document.getElementsByTagName('a')
      for (let i = 0; i < list.length; i++) {
        list[i].classList.remove('active')
      }
      const completed = list[2]
      completed.classList.add('active')
    },
    showAll () {
      this.allStatus = true
      let list = document.getElementsByTagName('a')
      for (let i = 0; i < list.length; i++) {
        list[i].classList.remove('active')
      }
      const all = list[0]
      all.classList.add('active')
      // console.log(list)
    },
    showActive () {
      // alert(1)
      this.allStatus = false
      this.ifIsCheck = false
      let list = document.getElementsByTagName('a')
      for (let i = 0; i < list.length; i++) {
        list[i].classList.remove('active')
      }
      const active = list[1]
      active.classList.add('active')
    }
  },
  mounted () {
    window.onbeforeunload = () => {
      // return localStorage.setItem('store', JSON.stringify(this.items))
      localStorage.clear()
    }
  },
  created () {
    let store = JSON.parse(localStorage.getItem('store'))
    if (store) {
      this.items = store
    }
    // console.log(store)
  }
}
</script>
<style lang='scss' scoped>
@import '../style/vueTodo.scss';
</style>
