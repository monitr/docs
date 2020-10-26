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
        'setup/reporting/reporting', 
        {
          Report:['setup/reporting/cash-flow','setup/reporting/profit-loss-balance-sheet']
        },
        'setup/mapping/mapping',
        'setup/custom-metrics/custom-metrics',
        'setup/budget/budget',
        {
          Files:['setup/budget/budget-versions','setup/budget/budget-accounts', 'setup/budget/budgets' ]
        }  
      ],
    },
    {
      type: 'category',
      label: 'Dashboards',
      items: ['dashboards/dashboards'],
    },
    {
      type: 'category',
      label: 'Reports',
      items: ['reports/reports'],
    },
    {
      type: 'category',
      label: 'Manage your organisation',
      items: ['team-management'],
    },
    {
      type: 'category',
      label: 'Template',
      items: ['setup/reporting/template'],
    },
  ],
};
