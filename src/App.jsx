import Tabs from "./components/Tabs.jsx"
import CurrentWeather from "./components/CurrentWeather.jsx"
import HourlyWeather from "./components/HourlyWeather.jsx"
import WeaklyWeather from "./components/WeeklyWeather.jsx"

function App() {

  return (
    <>
      <h1 className='min-h-screen w-full flex items-center bg-gradient-to-b from-slate-900 via-cyan-800 to-black'>
        <div className='w-full text-center text-white'>
          <h1 className='text-4xl font-bold'>Wheather Dashboard</h1>
          <p className='text-lg'>Welcome to React Tailwind Starter</p>
          <Tabs className='flex'>
            <div label='Current Weather'>
              <CurrentWeather />
            </div>
            <div label='Hourly Weather'>
              <HourlyWeather />
            </div>
            <div label='Weekly Weather'>
              <WeaklyWeather />
            </div>
          </Tabs>
        </div>
      </h1>
    </>
  )
}

export default App
