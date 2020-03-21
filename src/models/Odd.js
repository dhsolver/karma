export const INITIAL_PRO_ODD_STRUCTURE = {
  awayMoneyLine: null,
  awayPointSpread: 0.0,
  awayPointSpreadPayout: -105,
  created: '2018-09-06T21:10:44',
  drawMoneyLine: null,
  id: 7135,
  homeMoneyLine: null,
  homePointSpread: 0.0,
  homePointSpreadPayout: -115,
  overPayout: -110,
  overUnder: 44.5,
  scoreId: 16654,
  sportsbook: 'Bookmaker',
  sportsbookId: 5,
  underPayout: -110,
  updated: '2018-09-06T21:20:44'
};

export function transformFromAPI(apiResponse) {
  const {
    AwayMoneyLine: awayMoneyLine,
    AwayPointSpread: awayPointSpread,
    AwayPointSpreadPayout: awayPointSpreadPayout,
    Created: created,
    DrawMoneyLine: drawMoneyLine,
    id: id,
    HomeMoneyLine: homeMoneyLine,
    HomePointSpread: homePointSpread,
    HomePointSpreadPayout: homePointSpreadPayout,
    OverPayout: overPayout,
    OverUnder: overUnder,
    ScoreId: scoreId,
    Sportsbook: sportsbook,
    SportsbookId: sportsbookId,
    UnderPayout: underPayout,
    Updated: updated
  } = apiResponse;

  return {
    id,
    created,
    drawMoneyLine,
    scoreId,
    sportsbookId,
    sportsbook,
    updated,
    moneyLine: {
      homeTeam: homeMoneyLine,
      awayTeam: awayMoneyLine
    },
    ou: {
      overUnder,
      overPayout,
      underPayout
    },
    spread: {
      homeTeam: {
        pointPayout: homePointSpreadPayout,
        pointSpread: homePointSpread
      },
      awayTeam: {
        pointPayout: awayPointSpreadPayout,
        pointSpread: awayPointSpread
      }
    }
  };
}
