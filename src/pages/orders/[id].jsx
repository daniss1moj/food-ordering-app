import styles from '../../styles/Order.module.scss';
import Image from 'next/image';

const Order = () => {
	const status = 0;

	const statusClass = (index) => {
		if (index - status < 1) return styles.done;
		if (index - status === 1) return styles.inProgress;
		if (index - status >= 1) return styles.undone;
	};
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<div className={styles.row}>
					<table className={styles.table}>
						<tbody>
							<tr className={styles.trTitle}>
								<th>Order ID</th>
								<th>Customer</th>
								<th>Address</th>
								<th>Total</th>
							</tr>
							<tr className={styles.tr}>
								<td>
									<span className={styles.id}>2132313</span>
								</td>
								<td>
									<span className={styles.name}>John doe</span>
								</td>
								<td>
									<span className={styles.address}>New York Pushkina Street</span>
								</td>

								<td>
									<span className={styles.total}>$39.90</span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className={styles.row}>
					<div className={statusClass(0)}>
						<Image src="/img/paid.png" width={30} height={30} alt="paid" />
						<span>Payment</span>
						<div className={styles.checkedIcon}>
							<Image
								src="/img/checked.png"
								width={20}
								height={20}
								alt="paid"
								className={styles.checked}
							/>
						</div>
					</div>
					<div className={statusClass(1)}>
						<Image src="/img/bake.png" width={30} height={30} alt="paid" />
						<span>Preparing</span>
						<div className={styles.checkedIcon}>
							<Image
								src="/img/checked.png"
								width={20}
								height={20}
								alt="paid"
								className={styles.checked}
							/>
						</div>
					</div>
					<div className={statusClass(2)}>
						<Image src="/img/bike.png" width={30} height={30} alt="paid" />
						<span>On the way</span>
						<div className={styles.checkedIcon}>
							<Image
								src="/img/checked.png"
								width={20}
								height={20}
								alt="paid"
								className={styles.checked}
							/>
						</div>
					</div>

					<div className={statusClass(3)}>
						<Image src="/img/delivered.png" width={30} height={30} alt="paid" />
						<span>Delievered</span>
						<div className={styles.checkedIcon}>
							<Image
								src="/img/checked.png"
								width={20}
								height={20}
								alt="paid"
								className={styles.checked}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.right}>
				<div className={styles.wrapper}>
					<h2 className={styles.title}>CART TOTAL</h2>
					<div className={styles.totalText}>
						<b className={styles.totalTextTitle}>
							Subtotal <b>$79.60</b>
						</b>
					</div>
					<div className={styles.totalText}>
						<b className={styles.totalTextTitle}>
							Discount <b>$00.0</b>
						</b>
					</div>
					<div className={styles.totalText}>
						<b className={styles.totalTextTitle}>
							Total <b>$79.60</b>
						</b>
					</div>
					<button disabled className={styles.button}>
						PAID
					</button>
				</div>
			</div>
		</div>
	);
};

export default Order;
