import { useState, type FormEvent, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { Apple, AtSign, CalendarDays, Check, ChevronDown, LockKeyhole, Mail, Phone, UserRound } from 'lucide-react';
import brandMark from './assets/brand-mark.svg';
import './style.css';

type Mode = 'create' | 'signin';
type Method = 'phone' | 'email';

function App() {
  const [mode, setMode] = useState<Mode>('create');
  const [method, setMethod] = useState<Method>('phone');
  const [message, setMessage] = useState('');
  const [values, setValues] = useState({ phone: '', email: '', password: '', repeat: '', name: '', age: '', gender: '' });

  const update = (key: keyof typeof values, value: string) => setValues(current => ({ ...current, [key]: value }));
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (mode === 'create' && values.password !== values.repeat) {
      setMessage('Passwords do not match. Please check and try again.');
      return;
    }
    setMessage(mode === 'create' ? 'Your SIP:O account is ready to continue.' : 'Welcome back to SIP:O.');
  };

  const field = (label: string, key: keyof typeof values, icon: ReactNode, props: { type?: string; placeholder?: string; autoComplete?: string } = {}) => (
    <label className="form-field">
      <span className="field-label">{label}</span>
      <span className="field-control">
        {icon}
        <input
          type={props.type || 'text'}
          placeholder={props.placeholder || ''}
          value={values[key]}
          autoComplete={props.autoComplete}
          onChange={event => update(key, event.target.value)}
          required={key !== 'repeat' || mode === 'create'}
        />
      </span>
    </label>
  );

  return (
    <main className="page-shell">
      <section className="single-screen" aria-label="SIP:O welcome and account screen">
        <aside className="welcome-panel">
          <div className="brand-mark"><img src={brandMark} alt="" /></div>
          <div className="welcome-copy">
            <span className="eyebrow">YOUR PERSONAL SIP COMPANION</span>
            <h1>Hi!<br />Welcome to SIP:O</h1>
            <p>AI uses the information you choose to share to provide personalized insights and improve your experience. Your data stays private and is never used for advertising.</p>
          </div>
          <div className="privacy-note"><span className="privacy-icon"><Check size={15} /></span><span>Your information stays private and secure.</span></div>
          <div className="welcome-orb orb-one"/><div className="welcome-orb orb-two"/>
        </aside>

        <section className="account-panel">
          <header className="account-heading">
            <div>
              <span className="eyebrow">GET STARTED</span>
              <h2>{mode === 'create' ? 'Create an account' : 'Sign in'}</h2>
              <p>{mode === 'create' ? 'Set up your SIP:O profile in one place.' : 'Pick up where you left off.'}</p>
            </div>
            <span className="account-icon"><UserRound size={19}/></span>
          </header>

          <div className="mode-tabs" role="tablist" aria-label="Account action">
            <button type="button" role="tab" aria-selected={mode === 'create'} className={mode === 'create' ? 'active' : ''} onClick={() => { setMode('create'); setMessage(''); }}>Create an account</button>
            <button type="button" role="tab" aria-selected={mode === 'signin'} className={mode === 'signin' ? 'active' : ''} onClick={() => { setMode('signin'); setMessage(''); }}>I have an account</button>
          </div>

          <form onSubmit={submit}>
            <div className="method-row">
              <span className="section-label">Continue with</span>
              <div className="method-tabs" role="tablist" aria-label="Contact method">
                <button type="button" role="tab" aria-selected={method === 'phone'} className={method === 'phone' ? 'active' : ''} onClick={() => { setMethod('phone'); setMessage(''); }}><Phone size={15}/> Phone</button>
                <button type="button" role="tab" aria-selected={method === 'email'} className={method === 'email' ? 'active' : ''} onClick={() => { setMethod('email'); setMessage(''); }}><Mail size={15}/> Email</button>
              </div>
            </div>

            <div className="form-grid">
              {method === 'phone'
                ? <label className="form-field">
                    <span className="field-label">Phone number</span>
                    <span className="field-control phone-control"><Phone/><span className="country-code">+65</span><span className="field-divider"/><input type="tel" placeholder="Enter your phone number" value={values.phone} onChange={event => update('phone', event.target.value)} autoComplete="tel" required /></span>
                  </label>
                : field('Email address', 'email', <AtSign/>, { type: 'email', placeholder: 'name@example.com', autoComplete: 'email' })}

              {field('Password', 'password', <LockKeyhole/>, { type: 'password', placeholder: 'Enter your password', autoComplete: mode === 'create' ? 'new-password' : 'current-password' })}

              {mode === 'create' && <>
                {field('Retype password', 'repeat', <LockKeyhole/>, { type: 'password', placeholder: 'Retype your password', autoComplete: 'new-password' })}
                {field('Preferred name', 'name', <UserRound/>, { placeholder: 'What should we call you?' })}
                {field('Age', 'age', <CalendarDays/>, { type: 'number', placeholder: 'Enter your age' })}
                <label className="form-field">
                  <span className="field-label">Gender</span>
                  <span className="field-control select-control"><UserRound/><select value={values.gender} onChange={event => update('gender', event.target.value)} required><option value="" disabled>Select your gender</option><option>Woman</option><option>Man</option><option>Non-binary</option><option>Prefer not to say</option></select><ChevronDown className="select-chevron"/></span>
                </label>
              </>}
            </div>

            {mode === 'create' && <p className="privacy-copy">Your details are used to personalize your experience. Your data stays private and is never used for advertising.</p>}
            {message && <p className={`form-message ${message.startsWith('Passwords') ? 'error' : ''}`} role="status">{message}</p>}
            <button className="submit-button" type="submit">{mode === 'create' ? 'Create an account' : 'Continue'}</button>
          </form>

          <div className="divider"><span>Continue with other methods</span></div>
          <button className="apple-button" type="button" onClick={() => setMessage('Apple sign-in is ready to connect.') }><Apple size={17} fill="currentColor"/> Continue with Apple</button>
          <p className="terms-copy">By continuing, you agree to SIP:O’s <a href="#terms" onClick={event => event.preventDefault()}>Terms</a> and <a href="#privacy" onClick={event => event.preventDefault()}>Privacy Policy</a>.</p>
        </section>
      </section>
      <footer className="page-footer">SIP:O <span>·</span> Your data stays yours.</footer>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<App/>);
