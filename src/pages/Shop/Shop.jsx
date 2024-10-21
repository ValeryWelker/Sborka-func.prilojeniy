import { CardItem } from '../../components';
import { Spinner } from '../../ui-kit';
import Filter from './Filter/Filter';
import { Pagination } from 'antd';
import { IButton, Typography } from '../../ui-kit';
import { useShopItems } from './useShopItems';

import styles from './Shop.module.scss';

const Shop = () => {
	const {
		filter,
		getFilter,
		filteredItems,
		sortedItems,
		page,
		setPage,
		setSortBy,
		isLoading,
	} = useShopItems();

	return (
		<section className={styles.shop}>
			<div className={styles.container}>
				{isLoading ? (
					<Spinner />
				) : (
					<>
						<Typography variant='title'>Магазин</Typography>
						<Filter getFilter={getFilter} filterVal={filter} />
						<div className={styles.sort}>
							<IButton variant='primary' onClick={() => setSortBy('up')}>
								По возрастанию
							</IButton>
							<IButton variant='primary' onClick={() => setSortBy('down')}>
								По убыванию
							</IButton>
						</div>

						{sortedItems().length > 0 ? (
							<>
								<p>
									Показано {sortedItems().length} из {filteredItems.length}{' '}
									товаров
								</p>
								<div className={styles.list}>
									{sortedItems().map((item) => (
										<CardItem key={item?.id} item={item} />
									))}
								</div>
								<p>
									Показано {sortedItems().length} из {filteredItems.length}{' '}
									товаров
								</p>

								<div className={styles.pagination}>
									<Pagination
										simple
										onChange={setPage}
										current={page}
										total={filteredItems.length}
										pageSize={9}
									/>
								</div>
							</>
						) : (
							<h1>Пока тут ничего нет</h1>
						)}
					</>
				)}
			</div>
		</section>
	);
};

export default Shop;
