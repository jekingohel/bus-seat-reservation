import PassangerList from "./PassangerList"
const Dashboard = () => {
  return (
    <div className="container flex flex-col max-w-screen-md items-start">
      <div className="flex flex-col items-start my-8 gap-y-2">
        <h1 className="text-4xl text-left font-bold">Passenger Reservation</h1>
        <p className="text-left text-zinc-500">
          View and manage all passenger reservations
        </p>
      </div>
      <PassangerList />
    </div>
  )
}
export default Dashboard
