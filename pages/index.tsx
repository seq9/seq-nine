import type { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <div className="md:flex bg-white rounded-lg p-24 justify-center">
      <div className="text-center md:text-left">
        <h2 className="text-lg">Jake Prins</h2>
        <div className="text-purple-500">JavaScript developer</div>
        <div className="text-gray-600">Twitter: @jakeprins_nl</div>
        <div className="text-gray-600">www.jakeprins.com</div>
      </div>
    </div>
  )
}

export default Home
