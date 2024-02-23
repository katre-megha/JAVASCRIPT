//Write down a nested object to store data of company employees

const companyData = {
    companyName: "TechCo",
    location: "Cityville",
    employees: {
      managers: [
        {
          id: 101,
          name: "John Manager",
          department: "Engineering",
        },
        {
          id: 102,
          name: "Alice Lead",
          department: "Marketing",
        },
      ],
      developers: [
        {
          id: 201,
          name: "Bob Developer",
          department: "Engineering",
        },
        {
          id: 202,
          name: "Eva Coder",
          department: "Engineering",
        },
      ],
      marketers: [
        {
          id: 301,
          name: "Charlie Marketer",
          department: "Marketing",
        },
        {
          id: 302,
          name: "Diana Strategist",
          department: "Marketing",
        },
      ],
    },
  };
  

  console.log(companyData.employees.managers[0].name); 
  console.log(companyData.employees.developers[1].department); 
  console.log(companyData.location);
  