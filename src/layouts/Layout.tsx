import {BrowserRouter} from 'react-router-dom';
import {LayoutStyles} from './LayoutStyles';
import {useRefreshToken} from 'helpers/hooks';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Main } from 'pages/main/Main';

export const Layout = () => {
	useRefreshToken()
	return (
		<LayoutStyles>
			<BrowserRouter>
				<Header />
				<Main />
				<Footer />
			</BrowserRouter>
		</LayoutStyles>
	)
}
