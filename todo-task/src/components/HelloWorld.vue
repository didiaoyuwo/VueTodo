<template>
  <section class="todo">
    <header class="todo-header">
      <h1 class='todo-title'>todo</h1>
      <div class="todo-input">
        <img src="../../static/all.png" alt="" class="icon-all" v-if='items.length > 0' @click='selectAll($event)'>
        <input type="text" v-model="msg" class="todo-msg" placeholder="请随便输入点什么..." v-focus @keyup.enter='add(msg)'>
      </div>
    </header>
    <section class="todo-body">
      <ul>
        <li v-for='(item,index) in items' :key='index' class='item-list' @mouseover='showDelete(index)' @mouseout="hideDelete(index)" v-if='bbb || (ccc?item.isCheck:!item.isCheck)'>
          <input type="checkbox" class="item-checkbox" v-model='item.isCheck' v-if='aaa'>
          <span class="item-msg" :class="{'gray':item.isCheck}" @dblclick="showInput(index)" v-if='!item.showInput' >{{item.val}}</span>
          <input type="text" v-model="item.val" class="item-input" v-if='item.showInput' v-focus @keyup.enter='HideInput(index)' @blur='HideInput(index)'>
          <img src="../../static/delete.png" alt="" class="delete-icon" v-if='item.showDelete && aaa' @click='deleteData(index)'>
        </li>
      </ul>
    </section>
    <footer class="todo-footer">
      <span>{{count}} item left</span>
      <a class='footer-all' @click='showAll()'>all</a>
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
      aaa: true,
      bbb: true,
      ccc: true,
      checkList: [],
      items: [
        {
          val: '1',
          isCheck: false,
          showInput: false,
          showDelete: false,
          allStatus: true
        },
        {
          val: '2',
          isCheck: false,
          showInput: false,
          showDelete: false,
          allStatus: true
        },
        {
          val: '3',
          isCheck: false,
          showInput: false,
          showDelete: false,
          allStatus: true
        }
      ]
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
        alert('您好像什么都没输出哦...')
      } else {
        this.items.push({
          val: msg,
          isCheck: false,
          showInput: false,
          showDelete: false,
          allStatus: true
        })
      }
      // localStorage.setItem('data', JSON.stringify(this.items))
      this.msg = ''
    },
    showInput (index) {
      this.items[index].showInput = true
      this.aaa = false
    },
    HideInput (index) {
      this.items[index].showInput = false
      this.aaa = true
    },
    showDelete (index) {
      this.items[index].showDelete = true
    },
    hideDelete (index) {
      this.items[index].showDelete = false
    },
    selectAll (event) {
      // alert(1)
      // console.log(event)
      // event.path[0].src = '../../static/allcolor.png'
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].isCheck = true
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
      this.bbb = false
      this.ccc = true
      let list = document.getElementsByTagName('a')
      for (let i = 0; i < list.length; i++) {
        list[i].classList.remove('active')
      }
      const completed = list[2]
      completed.classList.add('active')
    },
    showAll (event) {
      this.bbb = true
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
      this.bbb = false
      this.ccc = false
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
.todo{
  width: 80%;
  margin: 0 auto;
  background: #f5f5f5;
  .todo-header{
    width: 50%;
    margin: 0 auto;
    .todo-title{
      font-size: 100px;
      font-weight: 100;
      color: rgba(175, 47, 47, 0.15);
      margin-left:66px;
    }
    .todo-input{
      position: relative;
      height: 66px;
      display: flex;
      align-items: center;
      .icon-all{
        position: absolute;
        top:0;
        left:0;
        display: inline-block;
        height: 60px;
      }
      .todo-msg{
        margin-left:66px;
        width: 80%;
        height: 60px;
        font-size: 30px;
        background:none;
        outline:none;
        border:0px;
      }
    }
  }
  .todo-body{
    width: 50%;
    margin: 0 auto;
    .item-list{
      display: flex;
      height: 60px;
      align-items: center;
      position: relative;
      margin-bottom:10px;
      .gray{
        text-decoration: line-through
      }
      .item-checkbox{
        position: absolute;
        display: block;
        width: 60px;
        height: 60px;
        border-radius: 50%
      }
      .item-msg{
        display: block;
        width: 90%;
        font-size: 30px;
        margin-left:66px;
      }
      .item-input{
        font-size: 30px;
        height: 40px;
        line-height: 40px;
        margin-left:66px;
      }
      .delete-icon{
        width: 40px;
        height: 40px;
        position: absolute;
        top:5px;
        right: 0;
      }
    }
  }
  .todo-footer{
    position: relative;
    width: 50%;
    margin: 0 auto;
    height: 60px;
    display:flex;
    align-items: center;
    .active{
      background-color: #fff;
    }
    a{
      display: block;
      padding: 10px;
      cursor: pointer;
      border:solid 1px yellowgreen;
      margin-right:10px;
    }
    .footer-all{
      margin-left:13%;
    }
    .clear-completed{
      position: absolute;
      right: 0
    }
  }
}
</style>
