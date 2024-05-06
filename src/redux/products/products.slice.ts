import { createSlice } from '@reduxjs/toolkit';
import { Product } from './product.request';
import { fetchProducts } from './product.request';
import { getUniqueCategories } from '../store.utils';

const data = [
	{
		id: 'men-1',
		name: 'Classic White Shirt',
		quantity: 0,
		description: 'A timeless white dress shirt, perfect for any occasion.',
		price: 29.99,
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780427/visaro/mens/men-6_yskqy7.jpg',
	},
	{
		id: 'men-2',
		name: 'Slim Fit Navy Shirt',
		quantity: 0,
		description: 'A modern slim fit navy shirt with a subtle pattern.',
		price: 39.99,
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780424/visaro/mens/men-5_hicchp.jpg',
	},
	{
		id: 'men-3',
		name: 'Casual Chambray Shirt',
		quantity: 0,
		description: 'A relaxed and comfortable chambray shirt for casual wear.',
		price: 24.99,
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780421/visaro/mens/men-3_yetfvo.jpg',
	},
	{
		id: 'men-4',
		name: 'Striped Oxford Shirt',
		quantity: 0,
		description: 'A classic Oxford shirt with a modern striped pattern.',
		price: 34.99,
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780420/visaro/mens/men-2_bgo3t4.jpg',
	},
	{
		id: 'men-5',
		name: 'Linen Short-Sleeve Shirt',
		quantity: 0,
		description:
			'A lightweight and breathable linen shirt for warmer weather.',
		price: 29.99,
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780417/visaro/mens/men-1_cc3tyg.jpg',
	},
	{
		id: 'men-6',
		name: 'Flannel Plaid Shirt',
		quantity: 0,
		description:
			'A cozy and stylish flannel shirt with a classic plaid pattern.',
		price: 39.99,
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780415/visaro/mens/men-14_etjvih.jpg',
	},
	{
		id: 'men-7',
		name: 'Denim Western Shirt',
		quantity: 0,
		description:
			'A rugged and stylish denim shirt with a Western-inspired design.',
		price: 44.99,
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780412/visaro/mens/men-13_c58a7x.jpg',
	},
	{
		id: 'men-8',
		name: 'Printed Hawaiian Shirt',
		quantity: 0,
		description: 'A vibrant and fun Hawaiian shirt with a tropical print.',
		price: 29.99,
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780411/visaro/mens/men-12_pnc3bo.jpg',
	},
	{
		id: 'men-9',
		name: 'Corduroy Button-Down Shirt',
		quantity: 0,
		description: 'A warm and cozy corduroy shirt with a button-down collar.',
		price: 39.99,
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780409/visaro/mens/men-11_fik1i8.jpg',
	},
	{
		id: 'men-10',
		name: 'Polo Shirt ',
		quantity: 0,
		description:
			'A classic polo shirt with a contrasting collar for a pop of style.',
		price: 24.99,
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780407/visaro/mens/men-10_xvm6jg.jpg',
	},
	{
		id: 'men-11',
		name: 'Casual Henley Shirt',
		quantity: 0,
		description:
			'A relaxed and comfortable Henley shirt for a laid-back look.',
		price: 29.99,
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780405/visaro/mens/men-9_mp44nb.jpg',
	},
	{
		id: 'men-12',
		name: 'Checked Flannel Shirt',
		quantity: 0,
		description:
			'A warm and stylish flannel shirt with a classic checked pattern.',
		price: 34.99,
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780403/visaro/mens/men-8_mmte2w.jpg',
	},
	{
		id: 'men-13',
		name: 'Denim Shirt Jacket',
		quantity: 0,
		description:
			'A versatile denim shirt jacket that can be worn as a shirt or light jacket.',
		price: 49.99,
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780401/visaro/mens/men-7_rluux8.jpg',
	},
	{
		id: 'men-14',
		name: 'Linen Blend Casual Shirt',
		quantity: 0,
		description:
			'A lightweight and breathable linen blend shirt for casual occasions.',
		price: 29.99,
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780399/visaro/mens/men-4_rdlnfa.jpg',
	},
	{
		id: 'hat-1',
		name: 'Classic Baseball Cap',
		quantity: 0,
		description:
			'A timeless baseball cap with a curved visor and adjustable strap.',
		price: 14.99,
		category: 'Hats',
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780487/visaro/hats/hat-1_pupkpx.jpg',
	},
	{
		id: 'hat-2',
		name: 'Fedora Hat',
		quantity: 0,
		description: 'A stylish fedora hat with a classic vintage look.',
		price: 29.99,
		category: 'Hats',
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780485/visaro/hats/hat-6_yd44l0.jpg',
	},
	{
		id: 'hat-3',
		name: 'Bucket Hat',
		quantity: 0,
		description: 'A trendy and practical bucket hat for outdoor activities.',
		price: 19.99,
		category: 'Hats',
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780482/visaro/hats/hat-5_rc81sp.jpg',
	},
	{
		id: 'hat-4',
		name: 'Beanie Hat',
		quantity: 0,
		description: 'A cozy and warm beanie hat for cold weather.',
		price: 12.99,
		category: 'Hats',
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780479/visaro/hats/hat-4_qppzue.jpg',
	},
	{
		id: 'hat-5',
		name: 'Sun Visor',
		quantity: 0,
		description:
			'A lightweight and breathable sun visor for outdoor activities.',
		price: 9.99,
		category: 'Hats',
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780477/visaro/hats/hat-3_fiquhe.jpg',
	},
	{
		id: 'hat-6',
		name: 'Cowboy Hat',
		quantity: 0,
		description: 'A classic cowboy hat with a wide brim and a stylish look.',
		price: 39.99,
		category: 'Hats',
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780474/visaro/hats/hat-2_qushdx.jpg',
	},
	{
		id: 'glass-1',
		name: 'Classic Aviator Sunglasses',
		quantity: 0,
		description:
			'Timeless aviator-style sunglasses with a sleek metal frame.',
		price: 49.99,
		category: 'Glasses',
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780257/visaro/glass/glass-3_q5ztvv.jpg',
	},
	{
		id: 'glass-2',
		name: 'Retro Round Eyeglasses',
		quantity: 0,
		description: 'Vintage-inspired round eyeglasses with a trendy style.',
		price: 39.99,
		category: 'Glasses',
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780256/visaro/glass/glass-1_b2tfaf.jpg',
	},
	{
		id: 'glass-3',
		name: 'Blue Light Blocking Glasses',
		quantity: 0,
		description:
			'Stylish and functional glasses that block blue light from digital screens.',
		price: 24.99,
		category: 'Glasses',
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780256/visaro/glass/glass-5_rpbnf7.jpg',
	},
	{
		id: 'glass-4',
		name: 'Tortoiseshell Eyeglasses',
		quantity: 0,
		description:
			'Classic rectangular frames with a timeless tortoiseshell pattern.',
		price: 59.99,
		category: 'Glasses',
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780256/visaro/glass/glass-4_cttorm.jpg',
	},
	{
		id: 'glass-5',
		name: 'Oversized Cat-Eye Sunglasses',
		quantity: 0,
		description:
			'Bold and stylish oversized cat-eye sunglasses for a retro look.',
		price: 44.99,
		category: 'Glasses',
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780256/visaro/glass/glass-6_poc0te.jpg',
	},
	{
		id: 'glass-6',
		name: 'Rimless Titanium Eyeglasses',
		quantity: 0,
		description:
			'Lightweight and durable rimless titanium eyeglasses for a modern look.',
		price: 79.99,
		category: 'Glasses',
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780256/visaro/glass/glass-2_mcocag.jpg',
	},
	{
		id: 'women-1',
		name: 'Floral Print Blouse',
		quantity: 0,
		description:
			'A lightweight and feminine blouse with a beautiful floral print.',
		price: 34.99,
		category: "Women's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714782130/visaro/womens/women-2_u8mqlb.jpg',
	},
	{
		id: 'women-2',
		name: 'Striped Button-Down Shirt',
		quantity: 0,
		description: 'A classic striped button-down shirt with a modern twist.',
		price: 39.99,
		category: "Women's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714782126/visaro/womens/women-1_y7acpc.jpg',
	},
	{
		id: 'women-3',
		name: 'Off-Shoulder Top',
		quantity: 0,
		description:
			'A trendy and flirty off-shoulder top with a fitted silhouette.',
		price: 29.99,
		category: "Women's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714782122/visaro/womens/women-11_mwt8ml.jpg',
	},
	{
		id: 'women-4',
		name: 'Oversized Chambray Shirt',
		quantity: 0,
		description:
			'A relaxed and effortless oversized chambray shirt with a casual vibe.',
		price: 44.99,
		category: "Women's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714782119/visaro/womens/women-10_kd0un8.jpg',
	},
	{
		id: 'women-5',
		name: 'Lace Tank Top',
		quantity: 0,
		description:
			'A delicate and feminine lace tank top, perfect for layering.',
		price: 24.99,
		category: "Women's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714782116/visaro/womens/women-9_p6ljom.jpg',
	},
	{
		id: 'women-6',
		name: 'Graphic Tee',
		quantity: 0,
		description: 'A fun and trendy graphic tee with a bold print or slogan.',
		price: 19.99,
		category: "Women's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714782112/visaro/womens/women-8_ucioqt.jpg',
	},
	{
		id: 'women-7',
		name: 'Wrap Blouse',
		quantity: 0,
		description: 'An elegant and flattering wrap blouse with a tie waist.',
		price: 49.99,
		category: "Women's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714782108/visaro/womens/women-7_ievff9.jpg',
	},
	{
		id: 'women-8',
		name: 'Denim Shirt',
		quantity: 0,
		description:
			'A classic and versatile denim shirt that never goes out of style.',
		price: 39.99,
		category: "Women's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714782105/visaro/womens/women-6_t5gwkl.jpg',
	},
	{
		id: 'women-9',
		name: 'Satin Camisole',
		quantity: 0,
		description:
			'A luxurious and silky satin camisole for a touch of elegance.',
		price: 29.99,
		category: "Women's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714782102/visaro/womens/women-5_o3vlzv.jpg',
	},
	{
		id: 'women-10',
		name: 'Boho Peasant Blouse',
		quantity: 0,
		description:
			'A bohemian-inspired peasant blouse with a romantic and free-spirited vibe.',
		price: 34.99,
		category: "Women's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714782099/visaro/womens/women-4_dyjiyh.jpg',
	},
	{
		id: 'women-11',
		name: 'Linen Button-Down Shirt',
		quantity: 0,
		description:
			'A breathable and lightweight linen button-down shirt for warm weather.',
		price: 44.99,
		category: "Women's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714782097/visaro/womens/women-3_glqpeg.jpg',
	},
];

const initialState = {
	products: data as Product[],
	status: 'idle' as 'idle' | 'success' | 'failed',
	categories: [] as Array<Product['category']>,
};

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		addCategories: (state) => {
			state.categories = getUniqueCategories(data);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			state.products = action.payload;
			state.status = 'success';
			state.categories = getUniqueCategories(action.payload);
		});
	},
	selectors: {
		selectCategories: (state) => state.categories,
		selectProducts: (state) => state.products,
		selectProductsStatus: (state) => state.status,
	},
});

export const { selectProducts, selectCategories, selectProductsStatus } =
	productSlice.selectors;
export const { addCategories } = productSlice.actions;
export default productSlice.reducer;
