import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/cart/cart.slice';
import { Product } from '../redux/products/product.request';
import { useAppDispatch } from '../redux/store';

function CartItems(props: Product) {
	const dispatch = useAppDispatch();
	const handleIncreaseBtn =()=> {
		dispatch(increaseQuantity(props.id))
	}
	const handleDecreaseBtn =()=> {
		dispatch(decreaseQuantity(props.id))
	}
	const handleRemoveCartItem =()=> {
		dispatch(removeFromCart(props.id))
	}
	return (
		<div className=" grid grid-cols-cart_container_sm md:grid-cols-cart_container_md mb-4 mt-4 border-b border-b-slate-300 pb-5">
			<div className='flex gap-4 relative'>
				<img className='h-20 block w-24 object-cover object-top brightness-75' src={props.image} alt={props.description} />
				<p className='md:hidden absolute font-bold text-white left-12 -translate-x-1/2 top-1/2 -translate-y-1/2 '>X{props.quantity}</p>
				<div>
					<h2 className="font-semibold text-gray-700">{props.name}</h2>
					<p className='text-sm text-gray-400'>{props.category}</p>
				</div>
			</div>
			<p className='font-bold text-gray-500 hidden md:block '>${props.price}</p>
			<div className='hidden md:flex gap-4 h-fit bg-gray-200 w-fit px-3 rounded-2xl items-center py-1'>
				<img onClick={handleDecreaseBtn} className='w-4 invert-[.5] block cursor-pointer py-1' src="/minus.svg" alt="minus-icon" />
				<p className=' font-semibold text-sm'>{props.quantity}</p>
				<img onClick={handleIncreaseBtn} className='w-4 invert-[.5] block cursor-pointer py-1' src="/plus.svg" alt="plus-icon" />
			</div>
			<div>{(props.quantity * props.price).toFixed(2)}</div>
			<button onClick={handleRemoveCartItem} className='w-7 h-7 bg-gray-300 rounded-full p-[.3rem]'>
				<img className='rotate-45 invert brightness-200' src="/plus.svg" alt="" />
			</button>
		</div>
	);
}
export default CartItems;
