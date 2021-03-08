module.exports = {
  main: [
    {
      type: 'doc',
      id: 'welcome',
    },
    {
      type: 'category',
      label: 'Setup',
      items: [
        'setup/integrations/integrations',
        {
          Report: ['setup/reporting/introduction', 'setup/reporting/cash-flow', 'setup/reporting/profit-loss-balance-sheet']
        },
        'setup/mapping/mapping',
        'setup/custom-metrics/custom-metrics',
        {
          Budget: ['setup/budget/introduction', 'setup/budget/budget-versions', 'setup/budget/budget-accounts', 'setup/budget/budgets']
        }
      ],
    },
    {
      type: 'doc',
      id: 'validations',
    },
    {
      type: 'doc',
      id: 'dashboards/dashboards',
    },
    {
      type: 'doc',
      id: 'reports/reports',
    },
    {
      type: 'category',
      label: 'Automated Forecast',
      items: ['automated-forecast/introduction',
        {
          Automations: ['automated-forecast/nwc-unwinding/net-working-capital-unwinding', 'automated-forecast/nwc-budget/net-working-capital-budget']
        }]
    },
    {
      type: 'doc',
      id: 'team-management'
    },
    {
      type: 'doc',
      id: 'setup/reporting/template',
    },
  ],
};
