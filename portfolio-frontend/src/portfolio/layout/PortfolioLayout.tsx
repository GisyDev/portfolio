import Header from '../ui/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../ui/Footer'

const PortfolioLayout = () => {
    return (
        <>
            <Header />
            <main className='max-w-page m-auto mt-34 flex flex-col gap-30'>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default PortfolioLayout