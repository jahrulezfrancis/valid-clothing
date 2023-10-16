const generateRandomTransaction = () => {
    const transaction = {
      tx_ref: `TX-${Math.floor(Math.random() * 10000)}`,
      amount: (Math.random() * 1000).toFixed(0), // Random amount between 0 and 1000
      currency: "NGN",
      email: "example@example.com", // You can replace with a random email generator
      phone_number: "+1234567890", // You can replace with a random phone number generator
      name: "John Doe", // You can replace with a random name generator
    };
    return transaction;
  };
  
  // Generate 5 random transactions
  export const randomTransactions = [];
  for (let i = 0; i < 5; i++) {
    randomTransactions.push(generateRandomTransaction());
  }
  
  console.log(randomTransactions);
  