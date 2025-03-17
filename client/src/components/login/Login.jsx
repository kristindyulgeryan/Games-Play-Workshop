import { Link, useNavigate } from "react-router";


function Login({
  onLogin
}) {
  const navigate = useNavigate();
  const loginAction = (formData)=>{
    const email = formData.get('email')
    onLogin(email);
    
    navigate('/games')
  }
  return (
    <section id="login-page" className="auth">
    <form id="login" action = {loginAction}>
      <div className="container">
        <div className="brand-logo" />
        <h1>Login</h1>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Sokka@/gmail.com"
        />
        <label htmlFor="login-pass">Password:</label>
        <input type="password" id="login-password" name="password" />
        <input type="submit" className="btn submit"/>
        <p className="field">
          <span>
            If you don't have profile click <Link to="/register">here</Link>
          </span>
        </p>
      </div>
    </form>
  </section>
  )
}

export default Login