import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { SearchForm } from '../../components/SearchForm';
import { Summary } from '../../components/Summary';
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles';

export interface Transaction {
  id: number;
  description: string;
  amount: number;
  type: 'income' | 'outcome';
  createdAt: string;
  category: string;
}

export function Transactions() {
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
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.amount}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
