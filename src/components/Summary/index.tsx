import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { useContext } from 'react';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { SummaryCard, SummaryContainer } from './style';

export function Summary() {
  const { transactions } = useContext(TransactionsContext);
  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.outcome += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entries</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>CAD ${summary.income}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Out</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>CAD ${summary.outcome}</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} />
        </header>
        <strong>CAD {summary.total}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
