import { h } from 'preact';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<a href="/" class={style.logo}>
			<img src="../../assets/preact-logo-inverse.svg" alt="Preact Logo" />
			<h1>Preact CLI</h1>
		</a>
	</header>
);

export default Header;
