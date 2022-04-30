import { Link } from "@remix-run/react"

export default function Index() {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url(https://media.timeout.com/images/105617426/750/422/image.jpg)` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-secondary-content">
        <div className="max-w-3xl">
          <h1 className="mb-5 text-8xl font-bold">JAZZ STACK</h1>
          <p className="mb-5">Check the README.MD file for instructions on how to get this project deployed</p>
          <div className="w-full flex justify-center">
            <Link to="/account/signup" className="w-32 btn btn-active btn-primary">
              Sign Up
            </Link>
            <div className="divider divider-horizontal">OR</div>
            <Link to="/account/login" className="btn w-32 btn-active btn-primary">
              Login
            </Link>
          </div>
          <img src={require("./../../assets/images/remix.svg")} alt="" />
        </div>
      </div>
    </div>
  )
}
