import React from 'react';
import { FeatureCard } from '@components/FeatureCard';

const FeatureCards = () => {
  return (
    <React.Fragment>
      <FeatureCard
        title="Your One-Stop Shop for NFL Betting Content."
        content="Read our expert analysis, check out our expert picks, and listen to our podcasts. Our entire NFL staff make sure that whether you like to bet on underdogs, spreads, teasers, or pretty much anything else, that you find what you’re looking for with our weekly content schedule!"
        reverse={false}
      />
      <FeatureCard
        title="Live Odds, Expert Picks, AI Prediction and More... for Every NFL Game."
        content="It doesn’t get much better than betting on props. Check out our Karma Grades to see where our proprietary projections match up with the implied totals to help you pick the most optimal props to bet on for each game!"
        reverse={true}
      />
      <FeatureCard
        title="Prop Bet Recommendations with Karma Grades"
        content="It doesn’t get much better than betting on props. Check out our Karma Grades to see where our proprietary projections match up with the implied totals to help you pick the most optimal props to bet on for each game!"
        reverse={false}
      />
      <FeatureCard
        title="See the Expert. Be the Expert."
        content="Each week of the NFL season our NFL Experts pick their favorite spread for EACH NFL game in our Karma Picks. Track their record throughout the season to see who has caught fire and trail their picks! Log in your own betting action in our Bet Tracker to see how you stack up against our experts and the entire Bet Karma community!"
        reverse={true}
      />
    </React.Fragment>
  );
};

export default FeatureCards;
