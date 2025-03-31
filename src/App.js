import { useState } from "react";
import "./App.css"
const App = () => {
	const [user, setUser] = useState()
	const [dark, setDark] = useState(false)
	// declaring a function for the buttons
	const Sign = () => {
		setUser("Marvin")
	}
	const logout = () => {
		setUser("")
	}
	const ToggleDark = () => {
		setDark(!dark)
	}


	return (
		<div className={`${(dark)? ("darkness") : ("")} creator ` } >
			<img src="linkedIn.png" className="linkedin" />
			<button className={`dark ${(dark) && ("butt")}`} onClick={ToggleDark} >
				{(!dark)?(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="imgsize">
					<path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
				</svg>):(

				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="imgsize">
					<path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
				</svg>)}

				Dark Mode
			</button>
			<div className="bodycontainer">
				{
					(user) ? (
						<div className="logoutformat">
							<h1>You are logged in</h1>
							<button onClick={logout} className="logout">LOGOUT</button>
						</div>
					) : (
						<div className={`body ${(dark) && ("darknes")}`}>
							<p className="sign">Sign in</p>
							<p className="txt">Stay updated on your professional world</p>
							<input type="text" placeholder="Email or Phone" className={`email ${(dark) && ("emaildark")}`} />
							<input type="password" placeholder="Password" className={`email ${(dark) && ("emaildark")}`} />
							<p className="forgot">Forgot password?</p>
							<button className="signbutton" onClick={Sign}>Sign in</button>
							<p className="or"><hr className="line1" />or<hr className="line1" /></p>
							<button className="appletext" onClick={Sign}>
								<img src="image-removebg-preview(2).png" className="Apple" />
								Sign in with Apple
							</button>



						</div>
					)
				}

			</div>

			<p className="joinnow">New to LinkedIn? <span>Join now</span></p>

		</div>
	)
}
export default App

