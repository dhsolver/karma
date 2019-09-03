export const INITIAL_KARMA_STRUCTURE = {
  karmaPick: {
    teamKey: 'ATL',
    value: 7.5
  },
  karmaSim: {
    percentage: 48,
    teamKey: 'PHI',
    value: 7.5
  },
  sharp: 5
};

export function transformFromAPI(apiResponse) {
  const {
    KarmaPick: karmaPick,
    KarmaSim: karmaSim,
    Sharp: sharp
  } = apiResponse;
  const { TeamKey: pickTeamKey, Value: pickValue } = karmaPick;
  const {
    TeamKey: simTeamKey,
    Value: simValue,
    Percentage: percentage
  } = karmaSim;

  return {
    karmaPick: { teamKey: pickTeamKey, value: pickValue },
    karmaSim: { percentage, teamKey: simTeamKey, value: simValue },
    sharp
  };
}
