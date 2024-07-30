"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface Transaction{
    id: string,
    date: string,
    desc: string,
    status: string,
    time: string,
    amount:string
}

interface Transactionprops{
    transaction:Transaction
}

export default function Transaction() {
    
    const [data, setData] = useState<Transaction[]>([
        { id: "1", date: "1/1/24", desc: "desc", status: "status", time: "10:24", amount: "6000" }, { id: "1", date: "1/1/24", desc: "desc", status: "status", time: "10:24", amount: "6000" }, { id: "1", date: "1/1/24", desc: "desc", status: "status", time: "10:24", amount: "6000" }, { id: "1", date: "1/1/24", desc: "desc", status: "status", time: "10:24", amount: "6000" }, { id: "1", date: "1/1/24", desc: "desc", status: "status", time: "10:24", amount: "6000" }, { id: "1", date: "1/1/24", desc: "desc", status: "status", time: "10:24", amount: "6000" }
    ]);

    return <div>
        <Navbar />
        {data.map((trans) => (
            <TransactionCard
                key={trans.id}
                transaction={trans} />

        ))}
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


export function TransactionCard({ transaction }: Transactionprops) {
    return (
        <div className="flex sm:flex-row justify-end bg-purple-200 w-full sm:w-11/12 md:w-3/4 lg:w-1/2 min-h-[6rem] my-5 mx-auto p-4 shadow-md rounded-md">
            <div className="flex flex-col justify-center items-start w-full sm:w-1/2 mb-2 sm:mb-0">
                <p className="text-md font-semibold">{transaction.desc}</p>
                <p className="text-xs text-gray-600">{transaction.date} - {transaction.time}</p>
            </div>
            <div className="flex flex-col justify-center items-end w-full sm:w-1/2">
                <p className="text-lg font-bold">{transaction.amount}</p>
                <p className={`text-md font-semibold ${transaction.status === 'completed' ? 'text-green-600' : 'text-red-600'}`}>
                    {transaction.status}
                </p>
            </div>
        </div>
    );
}

