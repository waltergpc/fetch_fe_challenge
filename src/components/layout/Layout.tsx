import { useAuth } from '../../context/Auth/AuthContext'
import fetchLogo from '../../assets/logo_1677004268602.png'
import { logout } from '../../services/LoginService'

type LayoutProps = {
	children: JSX.Element[]
}
const Layout = ({ children }: LayoutProps) => {
	const { isAuth, email, setIsAuthFalse } = useAuth()

	const navLogout = async () => {
		await logout()
		setIsAuthFalse()
	}
	return (
		<>
			<nav className="nav-container">
				<div className="nav-center">
					<div className="nav-header">
						<img src={fetchLogo} alt="Fetch logo" />
						{email && <h5>Welcome {email}</h5>}
						{isAuth && <button onClick={navLogout}>Logout</button>}
					</div>
				</div>
			</nav>
			{children}
		</>
	)
}

export default Layout
