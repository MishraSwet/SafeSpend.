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

