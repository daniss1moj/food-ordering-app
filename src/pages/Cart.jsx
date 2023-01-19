import styles from '../styles/Cart.module.scss';
import Image from 'next/image';
const Cart = () => {
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<table className={styles.table}>
					<tbody>
						<tr className={styles.trTitle}>
							<th>Product</th>
							<th>Name</th>
							<th>Exrtas</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Total</th>
						</tr>
						<tr className={styles.tr}>
							<td>
								<div className={styles.imgContainer}>
									<Image src="/img/pizza.png" fill objectFit="cover" alt="good" />
								</div>
							</td>
							<td>
								<span className={styles.name}>CORALZO</span>
							</td>
							<td>
								<span className={styles.extras}>Double ingridient spicy sauce</span>
							</td>
							<td>
								<span className={styles.price}>$19.90</span>
							</td>
							<td>
								<span className={styles.quantity}>2</span>
							</td>
							<td>
								<span className={styles.total}>$39.90</span>
							</td>
						</tr>
					</tbody>
				</table>
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
					<button className={styles.button}>Checkout now</button>
				</div>
			</div>
		</div>
	);
};

export default Cart;
