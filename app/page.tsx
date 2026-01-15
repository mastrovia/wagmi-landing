import React from 'react'
import Header from './components/ui/Header'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className="bg-[#F3F4FB] min-h-screen">
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold text-center">Welcome to Wagmi Workspace</h1>
      </main>
    </div>
  )
}

export default Home