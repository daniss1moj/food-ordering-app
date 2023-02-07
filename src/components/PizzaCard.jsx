import styles from '../styles/PizzaCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const PizzaCard = ({ pizza }) => {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Link href={`/product/${pizza._id}`}>
					<Image src={pizza.img} alt="pizza" fill />
				</Link>
			</div>

			<h1 className={styles.title}>{pizza.title}</h1>
			<span className={styles.price}>${pizza.prices[0]}</span>
			<Link href={`/product/${pizza._id}`} className={styles.buyButton}>
				Buy
			</Link>
		</div>
	);
};

export default PizzaCard;
