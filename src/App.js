import FootNav from './components/UI/FootNav';
import Navbar from './components/UI/Navbar';
import ViewRoute from './ViewRoute';

import './Animations.css';

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className='banner'></div>
			<ViewRoute />
			<FootNav />
		</div>
	);
}

export default App;
