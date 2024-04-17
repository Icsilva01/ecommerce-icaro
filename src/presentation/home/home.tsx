import { Header, TopHeader } from "../components"
import { Sidebar } from "../components/sidebar/sidebar"



export const Home = () => {
  return(
    <div>
      <TopHeader />
      <Header />
      <Sidebar />
      <h1>Home</h1>
    </div>
  )
}