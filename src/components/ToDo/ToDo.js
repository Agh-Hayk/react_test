import React, { Component } from 'react'
import style from './ToDo.module.css'
import idGenerator from '../../helpers/idGenerator'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Task from './Task/Task'

class ToDo extends Component {

    state = {
<<<<<<< HEAD
        task: [],
        inpVal: '',
        chechArr: new Set()
=======
        task:[],
        inpVal:'',
        checkArr:new Set()
>>>>>>> 2164035a2033c9e3a42fc6623b1b1767e77994c1
    };


    addLi = () => {
        const inpVal = this.state.inpVal.trim()
        if (!inpVal) { return }
        const newTask = {
            _id: idGenerator(),
            title: inpVal
        }
        const task = [...this.state.task, newTask]
        this.setState({
            task,
            inpVal: '',
        })
    }
    handleInp = (e) => {
        this.setState({
            inpVal: e.target.value
        })
    }
    deleteTask = (taskId) => {
        const newTask = this.state.task.filter((task) => taskId !== task._id)
        this.setState({
            task: newTask
        })
    }
    item_checked = (taskId) => {
<<<<<<< HEAD
        const newArr = new Set(this.state.chechArr)
        if (newArr.has(taskId)) {
=======
        const newArr = new Set(this.state.checkArr) 
        if(newArr.has(taskId)){
>>>>>>> 2164035a2033c9e3a42fc6623b1b1767e77994c1
            newArr.delete(taskId)
        } else {
            newArr.add(taskId)
        }
        this.setState({
<<<<<<< HEAD
            chechArr: newArr
        })
    }

    removeSelected = () => {
        const { chechArr } = this.state
        const task = [...this.state.task]
        const newTasks = task.filter((task) => {
            if (chechArr.has(task._id)) {
=======
            checkArr:newArr
        })
    }
    
    removeSelected = () =>{
        const {checkArr} = this.state
        const task = [...this.state.task]
        const newTasks = task.filter((task)=>{
            if(checkArr.has(task._id)){
>>>>>>> 2164035a2033c9e3a42fc6623b1b1767e77994c1
                return false
            }
            return true
        })

        this.setState({
<<<<<<< HEAD
            task: newTasks,
            chechArr: new Set()
=======
            task:newTasks,
            checkArr:new Set()
>>>>>>> 2164035a2033c9e3a42fc6623b1b1767e77994c1
        })
    }

    handleKeyEnter = (e) => {
        if (e.key === "Enter") {
            this.addLi()
        }
    }

<<<<<<< HEAD
    render() {
        const { task, chechArr } = this.state;
        const item = task.map((item, index) => {
            return (
                <Col key={item._id} xs={12} sm={6} md={4} lg={3} xl={3}>
                    <Task
                        data={item}
                        itemToggle={this.item_checked}
                        onDelete={this.deleteTask}
                        disabled={!!chechArr.size}
                    />
=======
    render(){   
        const {task,checkArr} = this.state;
        const item = task.map((item,index)=>{
            return (
                <Col key={item._id} xs={12} sm={6} md={4} lg={3} xl={3}>
                    <div className={style.new_item}>
                        <input type="checkbox" className={style.item_checkbox} onChange={()=>this.item_checked(item._id)}/>
                        <h3>{item.title}</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, porro?</p>
                        <button className={style.spanRed} disabled={!!checkArr.size} data-name={index} onClick={()=>this.deleteTask(item._id)}>x</button>
                    </div>
>>>>>>> 2164035a2033c9e3a42fc6623b1b1767e77994c1
                </Col>
            )
        })
        return (
            <div className={style.ToDo}>
                <Container>
                    <Row className="justify-content-center mb-3">
<<<<<<< HEAD
                        <Col xs={12} lg={6} xl={6}>
                            <div className={style.searchItem}>
                                <input
                                    onChange={this.handleInp}
                                    onKeyDown={this.handleKeyEnter}
                                    disabled={!!chechArr.size}
                                    type="text"
                                    placeholder="text"
                                    value={this.state.inpVal}
                                />
                                <button className={style.search_btn} onClick={this.addLi} disabled={!!chechArr.size}>ok</button>
                            </div>
                        </Col>
=======
                      <Col xs={12} lg={6} xl={6}>
                          <div className={style.searchItem}>
                            <input 
                                onChange={this.handleInp} 
                                onKeyDown={this.handleKeyEnter}
                                disabled={!!checkArr.size} 
                                type="text" 
                                placeholder="text" 
                                value={this.state.inpVal}
                            />
                            <button className={style.search_btn} onClick={this.addLi} disabled={!!checkArr.size}>ok</button>
                          </div>
                      </Col>
>>>>>>> 2164035a2033c9e3a42fc6623b1b1767e77994c1
                    </Row>
                    <Row>
                        {item}
                    </Row>
                    <Row>
<<<<<<< HEAD
                        <Button variant="danger" onClick={this.removeSelected} disabled={!chechArr.size}>Delete selected</Button>
=======
                    <Button variant="danger" onClick={this.removeSelected} disabled={!checkArr.size}>Delete selected</Button>
>>>>>>> 2164035a2033c9e3a42fc6623b1b1767e77994c1
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ToDo

