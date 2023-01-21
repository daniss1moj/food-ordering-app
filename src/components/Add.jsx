import { useState } from 'react';
import styles from '../styles/Add.module.scss';
import axios from 'axios';
import { useRouter } from 'next/router';

const Add = ({ setClose }) => {
	const [file, setFile] = useState('');
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const [prices, setPrices] = useState([]);
	const [extra, setExtra] = useState('');
	const [extraOptions, setExtraOptions] = useState([]);

	const handleExtraInput = (e) => {
		setExtra({ ...extra, [e.target.name]: e.target.value });
	};

	const handleExtra = (e) => {
		setExtraOptions((prev) => [...prev, extra]);
	};

	const changePrice = (e, index) => {
		const currentPrices = prices;
		currentPrices[index] = e.target.value;
		setPrices(currentPrices);
	};

	const handleCreate = async () => {
		const data = new FormData();
		data.append('file', file);
		data.append('upload_preset', 'uploads');
		try {
			const uploadRes = await axios.post(
				'https://api.cloudinary.com/v1_1/dad6vblnd/image/upload',
				data,
			);
			const { url } = uploadRes.data;
			const newProduct = {
				title,
				desc,
				prices,
				extraOptions,
				img: url,
			};

			await axios.post('http://localhost:3000/api/products', newProduct);
			setClose(true);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<span className={styles.close} onClick={() => setClose(true)}>
					X
				</span>
				<h1>Add a new Pizza</h1>
				<div className={styles.item}>
					<label className={styles.label}>Choose an image</label>
					<input type="file" onChange={(e) => setFile(e.target.files[0])} />
				</div>
				<div className={styles.item}>
					<label className={styles.label}>Title</label>
					<input type="text" onChange={(e) => setTitle(e.target.value)} />
				</div>
				<div className={styles.item}>
					<label className={styles.label}>Description</label>
					<textarea rows={5} type="text" onChange={(e) => setDesc(e.target.value)} />
				</div>
				<div className={styles.item}>
					<div className={styles.priceContainer}>
						<label className={styles.label}>Prices</label>
						<input
							className={`${styles.input} ${styles.inputSm}`}
							type="number"
							placeholder="small"
							onChange={(e) => changePrice(e, 0)}
						/>
						<input
							className={`${styles.input} ${styles.inputSm}`}
							type="number"
							placeholder="medium"
							onChange={(e) => changePrice(e, 1)}
						/>
						<input
							className={`${styles.input} ${styles.inputSm}`}
							type="number"
							placeholder="large"
							onChange={(e) => changePrice(e, 2)}
						/>
					</div>
				</div>
				<div className={styles.item}>
					<label className={styles.label}>Extra</label>
					<div className={styles.extra}>
						<input
							className={`${styles.input} ${styles.inputSm}`}
							type="text"
							placeholder="Item"
							name="text"
							onChange={handleExtraInput}
						/>
						<input
							className={`${styles.input} ${styles.inputSm}`}
							type="number"
							placeholder="Price"
							name="price"
							onChange={handleExtraInput}
						/>
						<button className={styles.extraButton} onClick={handleExtra}>
							Add
						</button>
					</div>
					<div className={styles.extraItems}>
						{extraOptions.map((option) => {
							return (
								<span key={option.text} className={styles.extraItem}>
									{option.text} {option.price}
								</span>
							);
						})}
					</div>
				</div>
				<button className={styles.addButton} onClick={handleCreate}>
					Create
				</button>
			</div>
		</div>
	);
};

export default Add;
