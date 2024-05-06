import { NavLink, useParams } from 'react-router-dom';
import {
	addCategories,
	selectCategories,
} from '../redux/products/products.slice';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { Fragment, useEffect, useState } from 'react';
import { selectCartItems } from '../redux/cart/cart.slice';

const activeClassNames =
	'before:absolute 	before:-bottom-1 before:left-0 before:h-[2px] bp before:w-full before:bg-white';





function NavBar() {
	const categories = useAppSelector(selectCategories);
	const cartItems = useAppSelector(selectCartItems);
	const { category: currentCategory } = useParams();
	const dispatch = useAppDispatch();

	const [showNav, setShowNav] = useState(false)

	const handleShowNavBar = ()=> {
		setShowNav(!showNav)
	}

	useEffect(()=> {
		dispatch(addCategories())
	}, [])


	return (
		<nav className=" flex justify-between items-center fixed top-0 left-0 w-full  h-[10vh] px-5 z-10  py-1">
			<NavLink to="/" className="flex justify-between gap-1 items-center">
				<img className="w-6 invert brightness-200" src="/logo.svg" alt="" />
				<h2 className="font-jersey  text-white text-2xl">Visaro</h2>
			</NavLink>
			<div className="md:flex justify-center items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden">
				{categories.map((category, index) => (
					<NavLink
						key={index}
						className={`capitalize relative ${
							currentCategory == category && activeClassNames
						}  text-white`}
						to={`/home/${category}`}
					>
						{category}
					</NavLink>
				))}
			</div>
			<NavLink
				to="/cart"
				className="relative flex justify-center items-center ml-auto mr-3"
			>
				<img className="invert w-8 brightness-200" src="/cart.svg" alt="" />
				<span className="rounded-full w-5 h-5 bg-blue-400 text-sm  font-semibold flex justify-center items-center top-0 -right-2 absolute text-white -translate-y-1/2	">
					{cartItems.length}
				</span>
			</NavLink>
			<button onClick={handleShowNavBar} className="z-10 block md:hidden">
				<img className="invert w-8 brightness-200" src="/menu.svg" alt="" />
			</button>
			{showNav && <Fragment>
				<div onClick={handleShowNavBar} className='fixed top-0 left-0 w-full h-screen bg-gray-400 opacity-60 z-50' />
				<div className=" gap-8 h-screen min-w-[15rem]    md:hidden fixed w-[75%] top-0 right-0 bg-white pt-12 z-50">
					<NavLink to="/" className="flex justify-center gap-1 items-center">
						<img
							className="w-6 invert-[.5] brightness-200"
							src="/logo.svg"
							alt=""
						/>
						<h2 className="font-jersey  text-gray-700 text-2xl">Visaro</h2>
					</NavLink>
					<div className='pl-12 mt-12'>
						{categories.map((category, index) => (
							<NavLink
								key={index}
								className={`before:absolute 	before:-bottom-1  before:h-3  before:w-3 before:rounded-full  before:bg-gray-500 before:-left-4 before:top-1/2 before:-translate-y-1/2 capitalize relative text-3xl block font-extrabold text-gray-500 mb-4 pl-3 ${
									currentCategory == category ? "opacity-100" : "opacity-50"
								} `}
								to={`/home/${category}`}
								onClick={()=>setShowNav(false)}
							>
								{category}
							</NavLink>
						))}
					</div>
					<p className="text-sm  text-gray-400 mb-[9vh] absolute  bottom-8 left-0 text-center block w-full">All right reserved {new Date().getFullYear()}</p>
				</div>

			</Fragment>}
		</nav>
	);
}
export default NavBar;
