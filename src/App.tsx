import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Provider } from 'react-redux';
import store from './redux/store';
import SharedAppLayout from './components/SharedAppLayout';
import { Toaster } from 'react-hot-toast';



const router = createBrowserRouter([
	{
		element: <SharedAppLayout />,
		path: '/',
		children: [
			{
				path: '/',		
				element: <Home />,
			},
			{
				path: '/home/:category',
				element: <Home />,
			},
			{
				path: '/cart',
				element: <Cart />,
			},
		],
	},
]);

function App() {
	return (
		<Provider store={store}>
			<Toaster
				position="top-center"
				reverseOrder={false}
				gutter={8}
			/>
			<RouterProvider router={router} />
		</Provider>
	);
}

export default App;
