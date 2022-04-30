import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { broker } from "../../broker.server"
export const loader = async () => {
  return json({
    message: await broker.call("greeter.hello"),
  })
}
export default function DashboardIndex() {
  const data = useLoaderData()
  return (
    <div className="mockup-window border bg-base-300 max-w-xl mx-auto mt-12">
      <div className="flex justify-center px-4 py-16 bg-base-200">{data.message}</div>
    </div>
  )
}
