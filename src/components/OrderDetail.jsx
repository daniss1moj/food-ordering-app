import styles from '../styles/OrderDetail.module.scss';
import { useState } from 'react';
import cn from 'classnames';
import { useEffect } from 'react';
const OrderDetail = ({ total, createOrder, active }) => {
	const [customer, setCustomer] = useState('');
	const [address, setAddress] = useState('');

	const handleClick = () => {
		createOrder({ customer, address, total, method: 0 });
	};

	useEffect(() => {
		if (active) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [active]);

	return (
		<div
			className={cn(styles.container, {
				[styles.active]: active,
			})}>
			<div
				className={cn(styles.wrapper, {
					[styles.active]: active,
				})}>
				<h1 className={styles.title}>You will pay $12 after dilievery</h1>
				<div className={styles.item}>
					<label htmlFor="name">Name</label>
					<input
						id="name"
						type="text"
						className={styles.input}
						placeholder="Name"
						onChange={(e) => setCustomer(e.target.value)}
					/>
				</div>
				<div className={styles.item}>
					<label htmlFor="phone">Phone</label>
					<input
						id="phone"
						type="text"
						placeholder="+1 234 567 89"
						className={styles.input}
					/>
				</div>
				<div className={styles.item}>
					<label htmlFor="phone">Address</label>
					<textarea
						id="address"
						rows={5}
						type="text"
						placeholder="Elton St. 505 NY"
						className={styles.input}
						onChange={(e) => setAddress(e.target.value)}
					/>
				</div>
				<button className={styles.button} onClick={handleClick}>
					Order
				</button>
			</div>
		</div>
	);
};

export default OrderDetail;
