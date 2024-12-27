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

export const generateChatbotResponse = userMessage => {
  const responses = {
    'what is a car':
      'A car is a road vehicle, typically with four wheels, powered by an internal combustion engine or electric motor, used to transport people.',
    'how does a car engine work':
      'A car engine works by converting fuel into mechanical energy. The combustion of fuel in the engine’s cylinders generates power, which turns the wheels.',
    'what is an electric car':
      'An electric car is a vehicle powered by one or more electric motors, using energy stored in batteries instead of gasoline or diesel fuel.',
    'what is a hybrid car':
      'A hybrid car uses two or more types of power, typically combining an internal combustion engine with an electric motor to improve fuel efficiency and reduce emissions.',
    'what is the top speed of a car':
      'The top speed of a car depends on the model, make, and engine type. For example, sports cars can reach speeds over 200 mph.',
    'how do electric car batteries work':
      'Electric car batteries store energy that powers the electric motor. The batteries are usually lithium-ion and can be recharged using an external power source.',
    'how long does a car last':
      'The lifespan of a car depends on its make, model, and how well it is maintained, but most cars last around 12-15 years or 150,000 to 200,000 miles.',
    'what is a car transmission':
      'A car transmission is a system that transmits power from the engine to the wheels, allowing the car to change speeds smoothly.',
    'what is car maintenance':
      'Car maintenance involves regular inspections, oil changes, tire rotations, brake checks, and other services to keep the vehicle in good working condition.',
    'what is a sports car':
      'A sports car is a low, fast, and maneuverable car designed for high-speed driving and performance.',
  };

  return (
    responses[userMessage.toLowerCase()] ||
    "I'm sorry, I can only answer questions related to cars. Please ask something about cars."
  );
};
