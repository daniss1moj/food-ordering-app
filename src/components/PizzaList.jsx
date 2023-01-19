import styles from '../styles/PizzaList.module.scss';
import PizzaCard from './PizzaCard';

const PizzaList = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
			<p className={styles.desc}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa mollitia quidem
				consectetur reprehenderit expedita facilis commodi labore, deserunt assumenda
				dolorum! Voluptate animi modi deleniti porro eveniet dignissimos, earum totam
				dolores!
			</p>
			<div className={styles.wrapper}>
				<PizzaCard />
				<PizzaCard />
				<PizzaCard />
				<PizzaCard />
				<PizzaCard />
				<PizzaCard />
				<PizzaCard />
			</div>
		</div>
	);
};

export default PizzaList;
