import { colors } from '@/theme/theme';
import { Pill } from '@mantine/core';

type StatusPillProps = {
  label: string;
  dotColor?: string;
  textColor?: string;
  bgColor?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

const StatusPill = ({
  label,
  dotColor = 'bg-green-700',
  textColor = 'text-[15px] font-medium',
  size = 'xl',
}: StatusPillProps) => {
  return (
    <Pill size={size} c={colors.dark} color={colors.primaryLight}>
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${dotColor}`} />
        <span className={`font-medium ${textColor} capitalize`}>{label}</span>
      </div>
    </Pill>
  );
};

export default StatusPill;
