import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { SummaryCard, SummaryContainer } from './style';

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entries</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>CAD 18,100.00</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Out</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>CAD 18,100.00</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} />
        </header>
        <strong>CAD 18,100.00</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
