import React from 'react'

function Register() {
  return (
    <section id="register-page" className="content auth">
    <form id="register">
      <div className="container">
        <div className="brand-logo" />
        <h1>Register</h1>
        <label htmlfor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="maria@/email.com"
        />
        <label htmlfor="pass">Password:</label>
        <input type="password" name="password" id="register-password" />
        <label htmlfor="con-pass">Confirm Password:</label>
        <input
          type="password"
          name="confirm-password"
          id="confirm-pass/word"
        />
        <input className="btn submit" type="submit" />
        
        <p className="field">
          <span>
            If you already have profile click <a href="/login">here</a>
          </span>
        </p>
      </div>
    </form>
  </section>
  )
}

export default Register