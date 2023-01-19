import styles from '../styles/Footer.module.scss';
import Image from 'next/image';
const Footer = () => {
	return (
		<footer className={styles.container}>
			<div className={styles.item}>
				<Image src="/img/bg.png" fill alt="background" />
			</div>
			<div className={styles.item}>
				<div className={styles.card}>
					<h2 className={styles.motto}>
						OH YES, WE DID. THE LAMA PIZZA, WELL BACKED SLICE PIZZA
					</h2>
				</div>
				<div className={styles.card}>
					<h1 className={styles.title}>FIND OUR REUSTARANT</h1>
					<p className={styles.text}>
						1654 R. Don Road
						<br /> New York, 85022
						<br /> (602) 867-1010
					</p>
					<p className={styles.text}>
						1654 R. Don Road
						<br /> New York, 85022
						<br /> (602) 867-1010
					</p>
					<p className={styles.text}>
						1654 R. Don Road
						<br /> New York, 85022
						<br /> (602) 867-1010
					</p>
				</div>
				<div className={styles.card}>
					<h1 className={styles.title}>WORKING HOURS</h1>
					<p className={styles.text}>
						MONDAY UNTILL FRIDAY
						<br /> 9.00 - 22.00
					</p>
					<p className={styles.text}>
						SATURDAY - SUNDAY
						<br /> 12.00 - 24.00
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;