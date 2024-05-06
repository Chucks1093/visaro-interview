import { Product } from './products/product.request';

export const updateCartItem = <T extends Product>(
	state: { cartItems: T[] },
	id: T['id'],
	updateFn: (item: T) => T
) => {
	const updatedCartItems = state.cartItems.map((item) =>
		item.id === id ? updateFn(item) : item
	);

	state.cartItems = updatedCartItems;
};

export const getUniqueCategories = (
	products: Product[]
): Array<Product['category']> => {
	const categories = new Set<Product['category']>();

	for (const product of products) {
		categories.add(product.category.toLowerCase());
	}

	return [...categories];
};
