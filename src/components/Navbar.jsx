import styles from '../styles/Navbar.module.scss';
import Image from 'next/image';
const Navbar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<div className={styles.callButton}>
					<Image src="/img/telephone.png" width="32" height="32" alt="phone" />
				</div>
				<div className={styles.texts}>
					<div className={styles.text}>ORDER NOW!</div>
					<div className={styles.text}>012 345 678</div>
				</div>
			</div>
			<div className={styles.item}>
				<ul className={styles.list}>
					<li className={styles.listItem}>Homepage</li>
					<li className={styles.listItem}>Products</li>
					<Image src="/img/logo.png" alt="logo" width="160" height="69" />
					<li className={styles.listItem}>Menu</li>
					<li className={styles.listItem}>Events</li>
					<li className={styles.listItem}>Blog</li>
					<li className={styles.listItem}>Contact</li>
				</ul>
			</div>
			<div className={styles.item}>
				<div className={styles.cart}>
					<Image src="/img/cart.png" alt="cart" width="30" height="30" />
					<span className={styles.count}>2</span>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
