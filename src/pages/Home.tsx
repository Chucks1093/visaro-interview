import { useAppSelector } from '../redux/store';
import ProductCard from '../components/ProductCard';
import { selectProducts } from '../redux/products/products.slice';
import { Fragment } from 'react/jsx-runtime';
import { useParams } from 'react-router-dom';

const currentImage = {
	"men's": '/men-bg.jpg',
	"women's": '/women-bg.jpg',
	glasses: '/glass-bg.jpg',
	hats: '/hat-bg.jpg',
};

function Home() {
	const products = useAppSelector(selectProducts);
	const { category: currentCategory } = useParams<{
		category: keyof typeof currentImage;
	}>();


	return (
		<Fragment>
			<header className="h-[30rem] flex justify-center items-center relative fade__in">
				<h1 className="uppercase text-white font-bold text-5xl text-center md:text-9xl z-[3] font-jersey">
					{currentCategory ? `${currentCategory} shop` : 'visaro'}
				</h1>
				<img
					className=" absolute left-0 top-0 h-full brightness-[.75]  w-full block object-cover "
					src={currentImage[currentCategory!] || '/men-bg.jpg'}
					alt=""
				/>
			</header>
			<section className="grid grid-cols-product_container gap-x-8 gap-y-10 px-4 pt-12 bg-gray-100 pb-6">
				{products.map((product, index) => {
					if (product.category.toLowerCase() === currentCategory) {
						return <ProductCard key={index} {...product} />;
					} else if (currentCategory === undefined) {
						return <ProductCard key={index} {...product} />;
					}
				})}
			</section>
		</Fragment>
	);
}
export default Home;
