import { useAuth } from '../../context/Auth/AuthContext'
import fetchLogo from '../../assets/logo_1677004268602.png'
import { logout } from '../../services/LoginService'
import { useNavigate } from 'react-router-dom'

type LayoutProps = {
	children: JSX.Element[] | JSX.Element
}
const Layout = ({ children }: LayoutProps) => {
	const { isAuth, email, setIsAuthFalse } = useAuth()
	const navigate = useNavigate()

	const navLogout = async () => {
		await logout()
		setIsAuthFalse()
		navigate('/')
	}
	return (
		<>
			<nav className="nav-container">
				<div className="nav-center">
					<div className="nav-header">
						<img src={fetchLogo} alt="Fetch logo" />
						{email && <h5 className="nav-text">Welcome {email}</h5>}
					</div>
					{isAuth && email && (
						<button className="navbar-end" onClick={navLogout}>
							Logout
						</button>
					)}
				</div>
			</nav>
			{children}
		</>
	)
}

export default Layout
