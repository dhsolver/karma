export function transformFromAPI(apiResponse, schedule) {
  const {
    HomeTeam: homeTeam,
    AwayTeam: awayTeam,
    ScoreID: id,
    GlobalGameID: globalGameID,
    GlobalHomeTeamID: globalHomeTeamID,
    GlobalAwayTeamID: globalAwayTeamID,
    AwayScore: awayScore,
    AwayScoreOvertime: awayScoreOvertime,
    AwayScoreQuarter1: awayScoreQuarter1,
    AwayScoreQuarter2: awayScoreQuarter2,
    AwayScoreQuarter3: awayScoreQuarter3,
    AwayScoreQuarter4: awayScoreQuarter4,
    Status: status,
    IsInProgress: isInProgress,
    IsOver: isOver,
    IsOvertime: isOvertime,
    LastPlay: lastPlay,
    LastUpdated: lastUpdated,
    Possession: possession,
    Quarter: quarter,
    QuarterDescription: quarterDescription,
    GameEndDateTime: gameEndDateTime,
    HasStarted: hasStarted,
    HomeScore: homeScore,
    HomeScoreOvertime: homeScoreOvertime,
    HomeScoreQuarter1: homeScoreQuarter1,
    HomeScoreQuarter2: homeScoreQuarter2,
    HomeScoreQuarter3: homeScoreQuarter3,
    HomeScoreQuarter4: homeScoreQuarter4
  } = apiResponse;

  return {
    id,
    schedule,
    status,
    gameId: globalGameID,
    isInProgress,
    isOver,
    isOvertime,
    lastPlay,
    lastUpdated,
    possession,
    quarter,
    gameEndDateTime,
    hasStarted,
    quarterDescription,
    homeTeam: {
      id: globalHomeTeamID,
      name: homeTeam,
      score: homeScore,
      quarters: [
        homeScoreOvertime,
        homeScoreQuarter1,
        homeScoreQuarter2,
        homeScoreQuarter3,
        homeScoreQuarter4
      ]
    },
    awayTeam: {
      id: globalAwayTeamID,
      name: awayTeam,
      score: awayScore,
      quarters: [
        awayScoreOvertime,
        awayScoreQuarter1,
        awayScoreQuarter2,
        awayScoreQuarter3,
        awayScoreQuarter4
      ]
    }
  };
}
