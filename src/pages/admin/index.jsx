import styles from '../../styles/Admin.module.scss';
import Image from 'next/image';
import axios from 'axios';
import { useState } from 'react';

const Index = ({ products, orders }) => {
	const [pizzaList, setPizzaList] = useState(products);
	const [orderList, setOrderList] = useState(orders);
	const status = ['preparing', 'on the way', 'delievered'];

	const handleDelete = async (id, property = 'products') => {
		try {
			const res = await axios.delete(`http://localhost:3000/api/${property}/${id}`);
			if (property === 'products') {
				setPizzaList(pizzaList.filter((pizza) => pizza._id !== res.data._id));
			}
			if (property === 'orders') {
				setOrderList(res.data);
			}
		} catch (err) {
			console.log(err);
		}
	};

	const handleStatus = async (id) => {
		const [order] = orderList.filter((order) => order._id === id);

		const newStatus = Number(order.status) + 1;
		try {
			const res = await axios.patch(`http://localhost:3000/api/orders/${id}`, {
				status: newStatus,
			});
			setOrderList([res.data, ...orderList.filter((order) => order._id !== id)]);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<h1 className={styles.title}>Products</h1>
				<table className={styles.table}>
					<tbody>
						<tr className={styles.trTitle}>
							<th>Image</th>
							<th>Id</th>
							<th>Title</th>
							<th>Price</th>
							<th>Action</th>
						</tr>
					</tbody>
					{pizzaList.map((product) => {
						return (
							<tbody key={product._id}>
								<tr className={styles.tr}>
									<td>
										<Image
											src={product.img}
											width={50}
											height={50}
											objectFit="cover"
											alt="pizza"
										/>
									</td>
									<td>{product._id.slice(0, 5)}</td>
									<td>{product.title}</td>
									<td>{product.prices[0]}</td>
									<td>
										<button className={styles.button}>Edit</button>
										<button
											className={styles.button}
											onClick={() => handleDelete(product._id, 'products')}>
											Delete
										</button>
									</td>
								</tr>
							</tbody>
						);
					})}
				</table>
			</div>
			<div className={styles.item}>
				<h1 className={styles.title}>Orders</h1>
				<table className={styles.table}>
					<tbody>
						<tr className={styles.trTitle}>
							<th>OrderId</th>
							<th>Customer</th>
							<th>Total</th>
							<th>Payment</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</tbody>
					{orderList.map((order) => {
						return (
							<tbody key={order._id}>
								<tr className={styles.tr}>
									<td>{order._id.slice(0, 5)}...</td>
									<td>{order.customer}</td>
									<td>${order.total}</td>
									<td>
										{order.method === 0 ? <span>cash</span> : <span>paid</span>}
									</td>
									<td>{status[order.status]}</td>
									<td>
										<button
											className={styles.button}
											onClick={() => handleStatus(order._id)}>
											Next stage
										</button>
									</td>
								</tr>
							</tbody>
						);
					})}
				</table>
			</div>
		</div>
	);
};

export const getServerSideProps = async (context) => {
	const myCookie = context.req?.cookies || '';
	if (myCookie.token !== process.env.TOKEN) {
		return {
			redirect: {
				destination: '/admin/login',
				permanent: false,
			},
		};
	}
	const productRes = await axios.get('http://localhost:3000/api/products');
	const orderRes = await axios.get('http://localhost:3000/api/orders');

	return {
		props: {
			orders: orderRes.data,
			products: productRes.data,
		},
	};
};

export default Index;
