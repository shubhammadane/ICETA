import React from 'react';
import ProfileCard from './ProfileCard';

export default function SpeakerCard(props) {
  return <ProfileCard {...props} isSpeaker={true} />;
}
