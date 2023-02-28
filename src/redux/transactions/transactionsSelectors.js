export const getTransactions = state => state.transactions.transactions;

export const getSummaryExpenses = state => state.transactions.summaryExpenses;

export const getSummaryIncomes = state => state.transactions.summaryIncomes;

export const getDate = state => state.transactions.date;

export const getType = state => state.transactions.type;

export const getReportsData = state => state.transactions.reportsData;

export const isLoading = state => state.transactions.isLoading;

//useNick
export const selectTransactions = state => state.transactions.transactions;
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

export const selectCategoryByType = state => {
  const type = selectTypeTransactionReports(state);

  if (type === 'Expenses') {
    return selectReportsCategoryExpenses(state);
  }
  return selectReportsCategoryIncomes(state);
};

export const selectDescriptionsByCategory = state => {
  const type = selectTypeTransactionReports(state);
  const category = selectCategoryByType(state);
  const { mm, year } = selectCurrentPeriod(state);
  const transactions = selectTransactions(state);

  const filteredTransactions = transactions.filter(
    transaction =>
      transaction.type.toLowerCase() === type.toLowerCase() &&
      transaction.category.toLowerCase() === category.toLowerCase() &&
      transaction.month === mm &&
      transaction.year === year
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
      });
      return prev;
    },
    []
  );

  return descriptions.sort((firstEl, secondEl) => secondEl.sum - firstEl.sum);
};
