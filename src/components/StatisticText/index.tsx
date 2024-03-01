import {
  StatisticTextContainer,
  StatisticTextSubtitle,
  StatisticTextTitle,
} from "./style";

type StatisticTextProps = {
  title: number;
  subtitle: string;
};

export function StatisticText({ title, subtitle }: StatisticTextProps) {
  return (
    <StatisticTextContainer>
      <StatisticTextTitle>{title}</StatisticTextTitle>
      <StatisticTextSubtitle>{subtitle}</StatisticTextSubtitle>
    </StatisticTextContainer>
  );
}
