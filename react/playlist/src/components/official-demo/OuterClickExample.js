import React, { Component } from 'react'

export default class OuterClickExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
        this.timer = null;
        this.toggleContainer = React.createRef();

        this.onClickHandle = this.onClickHandle.bind(this);
        
        this.onBlurHandler = this.onBlurHandler.bind(this);
        this.onFocusHandler = this.onFocusHandler.bind(this);
        // this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
    }

    // componentDidMount() {
    //     window.addEventListener('click', this.onClickOutsideHandler);
    // }

    // componentWillUnmount() {
    //     window.removeEventListener('click', this.onClickOutsideHandler)
    // }

    onClickHandle() {
        this.setState((currentState) => ({
            isOpen: !currentState.isOpen
        }))
    }

    onClickOutsideHandler(e) {
        if (this.state.isOpen && !this.toggleContainer.current.contains(e.target)) {
            this.setState({ isOpen: false })
        }
    }

    // 我们在下一个时间点使用 setTimeout 关闭弹窗。
    // 这是必要的，因为失去焦点事件会在新的焦点事件前被触发，
    // 我们需要通过这个步骤确认这个元素的一个子节点
    // 是否得到了焦点。
    onBlurHandler() {
        this.timer = setTimeout(() => {
            this.setState({ isOpen: false })
        })
    }

    // 如果一个子节点获得了焦点，不要关闭弹窗。
    onFocusHandler() {
        clearTimeout(this.timer)
    }
    //ref={this.toggleContainer}
    render() {
        return (
            <div onBlur={this.onBlurHandler} onFocus={this.onFocusHandler} > 
                <button onClick={this.onClickHandle}>Select an option</button>
                {
                    this.state.isOpen ? (
                        <ul>
                            <li>option 1</li>
                            <li>option 2</li>
                            <li>option 3</li>
                        </ul>
                    ) : null
                }
            </div>
        )
    }
}
