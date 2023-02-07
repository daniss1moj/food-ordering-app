import styles from '../styles/Navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Navbar = () => {
	const quantity = useSelector((state) => state.cart.quantity);

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
					<Link href="/">
						<li className={styles.listItem}>Homepage</li>
					</Link>
					<li className={styles.listItem}>Products</li>
					<Image
						src="/img/logo.png"
						alt="logo"
						width="80"
						height="80"
						style={{
							objectFit: 'contain',
							borderRadius: '999px',
							border: '2px solid #fff',
						}}
					/>
					<li className={styles.listItem}>Menu</li>
					<li className={styles.listItem}>Events</li>
					<li className={styles.listItem}>Blog</li>
					<li className={styles.listItem}>Contact</li>
				</ul>
			</div>
			<div className={styles.item}>
				<Link href="/cart">
					<div className={styles.cart}>
						<Image src="/img/cart.png" alt="cart" width="30" height="30" />
						<span className={styles.count}>{quantity}</span>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
