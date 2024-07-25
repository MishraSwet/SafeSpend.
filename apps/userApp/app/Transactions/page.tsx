"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface Transaction{
    status: string,
    time: string,
}
const [data, setdata] = useState<Transaction[]>([]);

export default function Transactions() {
    return <div>
        <Navbar />
        <TransactionCard />
    </div>
}

export function Navbar() {
    return <nav className="sticky z-50 sm:bottom-0 md:top-0 shadow-md p-4 bg-white">
        <div className="flex items-center justify-around">
            <div className="flex items-center justify-between"><span className="text-2xl font-bold text-purple-500">SafeSpend</span></div>
            <div className="hidden md:flex items-center justify-between space-x-4">
                <NavText href="./Home">Home</NavText>
                <NavText href="./Transactions">Transactions</NavText>
                <NavText href="./Targets">Targets</NavText>
                <NavText href="./Wallet">Wallet</NavText>
                <NavText href="./Settings">Settings</NavText>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg px-4 py-2">
                    New Transaction
                </button>
            </div>
            <div className="md:hidden z-50 fixed bottom-0 flex justify-between items-center p-2 shadow-md w-screen">
                <NavText href="./Home">Home</NavText>
                <NavText href="./Transactions">Transactions</NavText>
                <NavText href="./Targets">Targets</NavText>
                <NavText href="./Wallet">Wallet</NavText>
                <NavText href="./Settings">Settings</NavText>
            </div>
        </div>
    </nav>
}

export function NavText({ children,href}: { children: React.ReactNode,href:string }) {
    const router = useRouter()
    const handleNavigate = () => {
        router.push(href)
    }
    return <button className="text-gray-500 hover:text-gray-600" onClick={handleNavigate}>{children}
    </button>
    
}

export function NavBtn() {
    return <button className="h-8 w-8">

    </button>
}

export function TransactionCard() {
    return <div className="flex items-center justify-center">

    </div>
}

export function TransactionSelect() {
    return <div>
        Transaction 
    </div>
}