import SummaryCard from './SummaryCard';

const summaryData = [
  {
    title: 'Total Balance',
    value: '$12,345',
    percentage: '+5%',
  },
  {
    title: 'Total Credits',
    value: '$7,890',
    percentage: '+3%',
  },
  {
    title: 'Total Debits',
    value: '$4,455',
    percentage: '-2%',
  },
  {
    title: 'Transactions',
    value: '$150',
    percentage: '+10%',
  },
];

const SummarySection = () => {
  return (
    <div className="summary">
      <h1 className="text-[#1B2528] font-bold text-[20px] mb-3">Summary</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[28px]">
        {summaryData.map((item, index) => (
          <SummaryCard
            key={index}
            title={item.title}
            value={item.value}
            percentage={item.percentage}
          />
        ))}
      </div>
    </div>
  );
};

export default SummarySection;
