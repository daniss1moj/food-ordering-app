import styles from '../styles/PizzaCard.module.scss';
import Image from 'next/image';

const PizzaCard = () => {
	return (
		<div className={styles.container}>
			<Image src="/img/pizza.png" alt="pizza" width="150" height="150" />

			<h1 className={styles.title}>FIORI DI ZUCCA</h1>
			<span className={styles.price}>$19.0</span>
			<p className={styles.desc}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi cupiditate ipsam
			</p>
		</div>
	);
};

export default PizzaCard;
