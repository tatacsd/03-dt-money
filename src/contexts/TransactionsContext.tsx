import { createContext, useEffect, useState } from 'react';
interface Transaction {
  id: number;
  description: string;
  amount: number;
  type: 'income' | 'outcome';
  createdAt: string;
  category: string;
}
interface TransactionsContextType {
  transactions: Transaction[];
}

export const TransactionsContext = createContext({} as TransactionsContextType);

export interface TransactionProviderProps {
  children: React.ReactNode;
}

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function loadingTransactions() {
    const response = await fetch('http://localhost:3333/transactions');
    const data = await response.json();
    setTransactions(data);
  }
  useEffect(() => {
    loadingTransactions();
  }, []);
  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
