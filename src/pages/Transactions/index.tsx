import { Header } from '../../components/Header';
import { SearchForm } from '../../components/SearchForm';
import { Summary } from '../../components/Summary';
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles';

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td>Pay check</td>
              <td>
                <PriceHighlight variant="income">3.000,00</PriceHighlight>
              </td>
              <td>income</td>
              <td>20/02/2023</td>
            </tr>
            <tr>
              <td>Rent</td>
              <td>
                <PriceHighlight variant="outcome">1.000,00</PriceHighlight>
              </td>
              <td>Fixed</td>
              <td>20/02/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
