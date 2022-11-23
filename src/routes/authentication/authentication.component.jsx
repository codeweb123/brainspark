import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import SignInForm from '../../components/sign-in-form/sign-in-form.component'
import './authentication.styles.scss'
import Footer from '../../components/footer/footer.component'

const Authentication = () => {
  return (
    <>
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
    <Footer />
    </>
  )
}

export default Authentication;