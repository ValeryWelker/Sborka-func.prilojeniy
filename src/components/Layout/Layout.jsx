import Navbar from '../Navbar';
import Footer from '../Footer';
import { AppRoutes } from '../../routes';
import { ToastContainer } from 'react-toastify';
import { useLocation } from 'react-router-dom';

import styles from './Layout.module.scss';

const Layout = () => {
	const { pathname } = useLocation();

	return (
		<div className={styles.wrapper}>
			<ToastContainer autoClose={3000} />
			<Navbar />
			<AppRoutes />
			{pathname !== '/signup' && pathname !== '/login' ? <Footer /> : ''}
		</div>
	);
};

export default Layout;
