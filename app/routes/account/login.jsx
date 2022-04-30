import { redirect } from "@remix-run/node"
import { useFetcher } from "@remix-run/react"

export const action = async ({ request }) => {
  const formData = await request.formData()
  console.log(formData)
  await new Promise((resolve) => setTimeout(resolve, 5000))

  return redirect(`/dashboard`)
}

export default function Login() {
  const logIn = useFetcher()
  return (
    <div className="card w-92 mt-12 my-auto mx-auto bg-base-200 max-w-xs shadow-xl">
      <logIn.Form method="post" action="/account/signup" className="card-body items-center text-center">
        <h1 className="card-title">Log In!</h1>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input name="username" type="text" placeholder="Username" className="input input-bordered w-full" />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="Password" className="input input-bordered w-full" />
        </div>
        <div class="card-actions mt-4">
          <button className={"btn btn-primary btn-wide " + (logIn.state === "submitting" ? "loading" : "")}>Sign Up</button>
        </div>
      </logIn.Form>
    </div>
  )
}
