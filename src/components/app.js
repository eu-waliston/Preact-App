import { h, Component } from 'preact';

import Header from './header/index'
import Clock from './clock';
import style from './style.css';
class App extends Component {

	// Add `name` to the initial state
	state = { value: '', name: 'world' }

	onInput = ev => {
		this.setState({ value: ev.target.value });
	}

	// Add a submit handler that updates the `name` with the latest input value
	onSubmit = ev => {
		// Prevent default browser behavior (aka don't submit the form here)
		ev.preventDefault();

		this.setState({ name: this.state.value });
	}

	render() {
		return (
			<div>
				<Header />
		
				<h1 class={style.top}>Hello, {this.state.name}!</h1>
				<p  class={style.p2}>update the hello with your name</p>
				<form onSubmit={this.onSubmit} class={style.form__style}>
					<input type="text" value={this.state.value} onInput={this.onInput} />
					<button type="submit">Update</button>
				</form>
				<Clock />
			</div>
		);
	}
}

export default App;
