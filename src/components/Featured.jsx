import styles from '../styles/Featured.module.scss';
import Image from 'next/image';
import { useState } from 'react';

const Featured = () => {
	const [slideNumber, setSlideNumber] = useState(0);
	const images = ['/img/featured.png', '/img/featured2.png', '/img/featured3.png'];
	const handleChangeSlide = (direction) => {
		if (direction === 'plus') {
			if (slideNumber === images.length - 1) {
				setSlideNumber(0);
				return;
			}
			setSlideNumber((slideNumber) => slideNumber + 1);
		}
		if (direction === 'minus') {
			if (slideNumber === 0) {
				setSlideNumber(images.length - 1);
				return;
			}
			setSlideNumber((slideNumber) => slideNumber - 1);
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.arrowlContainer} onClick={() => handleChangeSlide('minus')}>
				<Image
					src="/img/arrowl.png"
					alt="image slider"
					fill
					style={{ objectFit: 'contain' }}
				/>
			</div>
			<div
				className={styles.wrapper}
				style={{
					transform: `translateX(${-100 * slideNumber}vw)`,
				}}>
				{images.map((image, i) => {
					return (
						<div className={styles.imgContainer} key={i}>
							<Image
								src={image}
								alt="image slider"
								fill
								style={{ objectFit: 'contain' }}
							/>
							;
						</div>
					);
				})}
			</div>
			<div className={styles.arrowrContainer} onClick={() => handleChangeSlide('plus')}>
				<Image
					src="/img/arrowr.png"
					alt="image slider"
					fill
					style={{ objectFit: 'contain' }}
				/>
			</div>
		</div>
	);
};

export default Featured;
