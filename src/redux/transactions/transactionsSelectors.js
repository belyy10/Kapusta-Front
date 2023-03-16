import { nanoid } from '@reduxjs/toolkit';

export const getTransactions = state => state.transactions.transactions;

export const selectSummaryExpenses = state => state.transactions.summary;

export const selectSummaryIncomes = state => state.transactions.summary.incomes;

export const selectDate = state => state.transactions.date;

export const getType = state => state.transactions.type;

export const getReportsData = state => state.transactions.reportsData;

export const isLoading = state => state.transactions.isLoading;

export const selectTransactions = state => state.transactions.transactions;
export const selectPeriod = state => state.transactions.reports.period;

export const selectTypeTransactionMain = state => state.transactions.mainType;
export const selectTypeTransactionReports = state =>
  state.transactions.reports.type;
export const selectReportsCategoryExpenses = state =>
  state.transactions.reports.categoryExpenses;
export const selectReportsCategoryIncomes = state =>
  state.transactions.reports.categoryIncomes;

export const selectCurrentPeriod = state => ({
  mm: state.transactions.reports.currentMonth,
  year: state.transactions.reports.currentYear,
});

export const selectTransactionsByType = state => {
  const transactions = selectTransactions(state);
  const type = selectTypeTransactionMain(state);

  return transactions.filter(
    transaction => transaction.type.toLowerCase() === type.toLowerCase()
  );
};

export const selectTransactionsByTypeAndDate = state => {
  const transactions = selectTransactions(state);
  const type = selectTypeTransactionMain(state);
  const date = selectDate(state);

  return transactions.filter(
    transaction =>
      transaction.type.toLowerCase() === type.toLowerCase() &&
      transaction.date.includes(date)
  );
};

export const selectCategoryByType = state => {
  const type = selectTypeTransactionReports(state);

  if (type === 'Expenses') {
    return selectReportsCategoryExpenses(state);
  }
  return selectReportsCategoryIncomes(state);
};

// selectSummary in REPORTS
export const selectSummary = state => {
  const transactions = selectTransactions(state);
  const period = selectPeriod(state);

  const filteredExpenses = transactions.filter(
    transaction =>
      transaction.date.includes(period) && transaction.type === 'expenses'
  );

  const filteredIncomes = transactions.filter(
    transaction =>
      transaction.date.includes(period) && transaction.type === 'incomes'
  );

  const summaryExpenses = filteredExpenses.reduce(
    (prevState, { sum }) => (prevState += sum),
    0
  );

  const summaryIncomes = filteredIncomes.reduce(
    (prevState, { sum }) => (prevState += sum),
    0
  );

  return { incomes: summaryIncomes, expenses: summaryExpenses };
};

//graphic in REPORTS
export const selectDescriptionsByCategory = state => {
  const type = selectTypeTransactionReports(state);
  const category = selectCategoryByType(state);
  const { mm, year } = selectCurrentPeriod(state);
  const transactions = selectTransactions(state);

  const filteredTransactions = transactions.filter(
    transaction =>
      transaction.type.toLowerCase() === type.toLowerCase() &&
      transaction.date.includes(mm) &&
      transaction.date.includes(year) &&
      category.toLowerCase().includes(transaction.category.toLowerCase())
  );

  const descriptions = filteredTransactions.reduce(
    (prev, { description, sum }) => {
      const index = prev.findIndex(option => option.name === description);

      const cost = type === 'Expenses' ? sum * -1 : sum;

      if (index !== -1) {
        prev[index].sum += cost;
        return prev;
      }

      prev.push({
        name: description,
        sum: cost,
        id: nanoid(),
      });
      return prev;
    },
    []
  );

  return descriptions.sort((firstEl, secondEl) => secondEl.sum - firstEl.sum);
};

//select sum of Category in REPORTS
export const selectSummaryByCategory = state => {
  const type = selectTypeTransactionReports(state);
  const transactions = selectTransactions(state);
  const period = selectPeriod(state);

  const filteredTransactions = transactions.filter(
    transaction =>
      transaction.type.toLowerCase() === type.toLowerCase() &&
      transaction.date.includes(period)
  );

  const descriptions = filteredTransactions.reduce(
    (prev, { category, sum }) => {
      const index = prev.findIndex(option => option.name === category);

      const cost = type === 'Expenses' ? sum * -1 : sum;

      if (index !== -1) {
        prev[index].sum += cost;
        return prev;
      }

      prev.push({
        name: category,
        sum: cost,
        id: nanoid(),
      });
      return prev;
    },
    []
  );

  return descriptions;
};
