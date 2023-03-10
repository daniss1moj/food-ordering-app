import styles from '../../styles/Product.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import cn from 'classnames';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addProduct } from '@/redux/cartSlice';
const Product = ({ pizza }) => {
	const [size, setSize] = useState(0);
	const [price, setPrice] = useState(pizza.prices[0]);
	const [extras, setExtras] = useState([]);
	const [quantity, setQuantity] = useState(1);
	const dispatch = useDispatch();

	const changePrice = (number) => {
		setPrice(price + number);
	};

	const handleSize = (sizeIndex) => {
		const diff = pizza.prices[sizeIndex] - pizza.prices[size];
		setSize(sizeIndex);
		changePrice(diff);
	};

	const handleChange = (e, option) => {
		const checked = e.target.checked;
		if (checked) {
			changePrice(option.price);
			setExtras((prev) => [...prev, option]);
		} else {
			changePrice(-option.price);
			setExtras(extras.filter((extra) => extra._id !== option._id));
		}
	};

	const handleClick = () => {
		dispatch(
			addProduct({
				...pizza,
				size,
				price,
				extras,
				quantity,
			}),
		);
	};

	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<div className={styles.imgContainer}>
					<Image src={pizza.img} fill alt="pizza img" style={{ objectFit: 'contain' }} />
				</div>
			</div>
			<div className={styles.right}>
				<h1 className={styles.title}>{pizza.title}</h1>
				<span className={styles.price}>${price}</span>
				<p className={styles.desc}>{pizza.desc}</p>
				<h3 className={styles.choose}>Choose the size</h3>
				<div className={styles.sizes}>
					<div
						className={cn(styles.size, {
							[styles.active]: size === 0,
						})}
						onClick={() => handleSize(0)}>
						<Image src="/img/size.png" fill alt="size" />
						<span className={styles.number}>Small</span>
					</div>
					<div
						className={cn(styles.size, {
							[styles.active]: size === 1,
						})}
						onClick={() => handleSize(1)}>
						<Image src="/img/size.png" fill alt="size" />
						<span className={styles.number}>Medium</span>
					</div>
					<div
						className={cn(styles.size, {
							[styles.active]: size === 2,
						})}
						onClick={() => handleSize(2)}>
						<Image src="/img/size.png" fill alt="size" />
						<span className={styles.number}>Large</span>
					</div>
				</div>
				<h3 className={styles.choose}>Choose additional ingridients</h3>
				<div className={styles.ingridients}>
					{pizza.extraOptions.map((option) => {
						return (
							<div className={styles.option} key={option._id}>
								<input
									type="checkbox"
									id={option.text}
									name={option.text}
									className={styles.checkbox}
									onChange={(e) => handleChange(e, option)}
								/>
								<label htmlFor="double">{option.text}</label>
							</div>
						);
					})}
				</div>
				<div className={styles.add}>
					<input
						type="number"
						defaultValue={1}
						className={styles.quantity}
						onChange={(e) => setQuantity(e.target.value)}
					/>
					<button className={styles.button} onClick={handleClick}>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default Product;

// export async function getStaticPaths() {
// 	const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
// 	const paths = res.data.map((product) => {
// 		return {
// 			params: { id: `${product.id}` },
// 		};
// 	});
// 	return {
// 		paths: paths,
// 		fallback: 'blocking',
// 	};
// }

export const getServerSideProps = async (context) => {
	const { params } = context;
	const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${params.id}`);
	return {
		props: {
			pizza: res.data,
		},
	};
};
