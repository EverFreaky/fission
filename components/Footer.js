import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			Copyright by{" "}
			<a href="https://acs.bg/" className={styles.link}>
				The American College of Sofia
			</a>
			. All rights reserved.{" "}
			<Link href="/team">
				<a className={styles.link}>Contact us.</a>
			</Link>{" "}
			<a
				href="https://acs.bg/articles/privacy-notice/"
				className={styles.link}
			>
				Privacy notice.
			</a>
			<p className={styles.text}>Made with ♥ by Kaloyan Dimitrov '25</p>
		</footer>
	);
}
