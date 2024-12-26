import {Linking} from 'react-native';
import Share from 'react-native-share';

export function formatNumberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const openEmail = email => {
  const emailUrl = `mailto:${email}`;
  Linking.openURL(emailUrl).catch(err =>
    console.error('Failed to open email client:', err),
  );
};

export const sharePost = async (text, imageUri) => {
  const shareOptions = {
    title: 'Share your post',
    message: text, // Post text
    url: imageUri, // Optional: Image URL to share
  };

  try {
    const result = await Share.open(shareOptions);
    console.log('Share response:', result);
  } catch (error) {
    console.error('Error sharing post:', error);
  }
};
