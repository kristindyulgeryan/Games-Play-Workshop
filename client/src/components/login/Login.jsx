

function Login() {
  return (
    <section id="login-page" className="auth">
    <form id="login">
      <div className="container">
        <div className="brand-logo" />
        <h1>Login</h1>
        <label htmlfor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Sokka@/gmail.com"
        />
        <label htmlfor="login-pass">Password:</label>
        <input type="password" id="login-password" name="password" />
        <input type="submit" className="btn submit"/>
        <p className="field">
          <span>
            If you don't have profile click <a href="/register">here</a>
          </span>
        </p>
      </div>
    </form>
  </section>
  )
}

export default Login