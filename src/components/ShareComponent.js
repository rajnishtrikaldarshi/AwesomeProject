import React from 'react';
import {Share, Button} from 'react-native';

const ShareComponent = () => {
  const shareContent = async () => {
    try {
      const result = await Share.share({
        message:
          'Check out this amazing app! Here is the link: https://example.com', // Make sure the link is valid
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Shared with activity type of result.activityType
          console.log('Shared with activity type:', result.activityType);
        } else {
          // Shared
          console.log('Shared successfully');
        }
      } else if (result.action === Share.dismissedAction) {
        // Dismissed
        console.log('Share dismissed');
      }
    } catch (error) {
      console.error('Error sharing content:', error.message);
    }
  };

  return <Button onPress={shareContent} title="Share this app" />;
};

export default ShareComponent;
