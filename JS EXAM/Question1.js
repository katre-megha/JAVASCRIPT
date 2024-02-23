//Write an Arrow function to print different menu for different day in a week.
const printMenu = (day) => {
  switch(day.toLowerCase()) {
    case 'monday':
      console.log("Monday Menu: Spaghetti Bolognese");
      break;
    case 'tuesday':
      console.log("Tuesday Menu: Grilled Chicken Salad");
      break;
    case 'wednesday':
      console.log("Wednesday Menu: Vegetarian Stir-Fry");
      break;
    case 'thursday':
      console.log("Thursday Menu: BBQ Pulled Pork Sandwich");
      break;
    case 'friday':
      console.log("Friday Menu: Margherita Pizza");
      break;
    case 'saturday':
      console.log("Saturday Menu: Shrimp Scampi");
      break;
    case 'sunday':
      console.log("Sunday Menu: Roast Beef Dinner");
      break;
    default:
      console.log("Invalid day. Please enter a valid day of the week.");
  }
};


printMenu('Monday');
printMenu('Wednesday');
printMenu('Sunday');
printMenu('InvalidDay');