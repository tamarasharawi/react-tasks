// task 4
interface Product {
    name: string;
    price: number;
  }
  
  function TotalPrice(products: Product[]): number {
    let total = 0;
    for (const product of products) {
      total += product.price; 
    }
    return total;
  }

  const products: Product[] = [
    { name: "apple", price: 1000 },
    { name: "orange", price: 50 },
    { name: "banana", price: 75 }
  ];
  
  console.log("Total Price:", TotalPrice(products)); 

  // task 5 
function isValidEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  
 
  const email1 = "example@domain.com";
  const email2 = "invalid-email";
  
//   console.log(isValidEmail(email1)); 
//   console.log(isValidEmail(email2)); 
  