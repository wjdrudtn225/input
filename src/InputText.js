import React from 'react'
export class InputForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {value: ''}
    }

    ChangeText (e){
        const newValue = e.target.value
        this.setState({value: newValue})
    }

    Submit (e){
        window.alert('전송 : ' + this.state.value)
        e.preventDefault()
        this.setState({value:''})
    }

    render() {
        const Submit = (e) => this.Submit(e)
        const ChangeText = (e) => this.ChangeText(e)
        return(
            <form onSubmit={Submit}>
                <input type='text'
                value={this.state.value}
                onChange={ChangeText}/>
                <input type = 'submit' value = '전송' />
            </form>
        )
    }
}