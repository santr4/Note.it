import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";

const Stats = () => {
  return (
    <>
      <div className="px-24">
        <StatGroup>
          <Stat>
            <StatLabel className="p-1 text-pink-700">Visited</StatLabel>
            <StatNumber className="text-lime-700">345,670</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              23.36%
            </StatHelpText>
          </Stat>
        </StatGroup>
      </div>
      <div className="px-24">
        <StatGroup>
          <Stat>
            <StatLabel className="p-1 text-emerald-500">Retained</StatLabel>
            <StatNumber className="text-rose-600">321,500</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              9.05%
            </StatHelpText>
          </Stat>
        </StatGroup>
      </div>
    </>
  );
};

export default Stats;
