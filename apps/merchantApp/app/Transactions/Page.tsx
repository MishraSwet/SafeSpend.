interface Transaction {
  id: string,
  date: string,
  desc: string,
  status: string,
  time: string,
  amount: string
}

interface Transactionprops {
  transaction: Transaction
}

export default function Transactions() {
  return (
    <div>
      Transactions Page
    </div>
  )
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

