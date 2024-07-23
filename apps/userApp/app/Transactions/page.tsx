"use client"
import { useState } from "react";
export default function Transactions() {
    return <div>
        <Navbar/>
    </div>
}

export function Navbar() {
    return <nav className="sticky z-50 sm:bottom-0 md:top-0 shadow-md p-4 bg-white">
        <div className="flex items-center justify-around">
            <div className="flex items-center justify-between"><span className="text-2xl font-bold text-purple-500">SafeSpend</span></div>
            <div className="hidden md:flex items-center justify-between space-x-4">
                <NavText>Home</NavText>
                <NavText>Transactions</NavText>
                <NavText>Targets</NavText>
                <NavText>Wallet</NavText>
                <NavText>Settings</NavText>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg px-4 py-2">
                    New Transaction
                </button>
            </div>
            <div className="md:hidden z-50 fixed bottom-0 flex justify-between items-center p-2 shadow-md w-screen">
                <NavText>Home</NavText>
                <NavText>Transactions</NavText>
                <NavText>Targets</NavText>
                <NavText>Wallet</NavText>
                <NavText>Settings</NavText>
            </div>
        </div>
    </nav>
}

export function NavText({ children }: { children: React.ReactNode }) {
    return <span className="text-gray-500 hover:text-gray-600">{children}</span>;
}

export function NavBtn() {
    return <button className="h-8 w-8">

    </button>
}

export function TransactionCard() {
    return <div>
        Transaction Card
    </div>
}

export function TransactionSelect() {
    return <div>
        Transaction 
    </div>
}