import styles from '../styles/PizzaList.module.scss';
import PizzaCard from './PizzaCard';

const PizzaList = ({ pizzaList }) => {
	if (pizzaList.length === 0) {
		return <h1>Loading...</h1>;
	}
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
				{pizzaList.map((pizza) => {
					return <PizzaCard key={pizza._id} pizza={pizza} />;
				})}
			</div>
		</div>
	);
};

export default PizzaList;
