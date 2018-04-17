import React from 'react'

export default class NumForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {value: ''}
    }

    ChangeNum (e) {
        const cNum = e.target.value
        const newNum = cNum.replace(/[^0-9]/g, '')
        this.setState({value: newNum})

    }

    Submit(e) {
        window.alert('전송 : ' + this.state.value)
        e.preventDefault()
        this.setState({value: ''})
    }

    render() {
        const ChangeNum = (e) => this.ChangeNum(e)
        const Submit = (e) => this.Submit(e)
        return(
            <form onSubmit={Submit}>
                  <input type ='text'
                         value={this.state.value}
                         onChange={ChangeNum}/>
                    <input type='submit' value='전송' />
                </form>
        )
    }
}
