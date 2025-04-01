const employees = [
  {
    id: 1,
    name:"Chotu",
    email: "chotu007@gmail.com",
    password: "123",
    tasks: [
      {
        task_title: "Report Analysis",
        task_description: "Analyze monthly sales report",
        task_date: "2025-03-01",
        category: "Analysis",
        active: 1,
        new_task: 1,
        completed: 0,
        failed: 0
      },
      {
        task_title: "Client Meeting",
        task_description: "Discuss project roadmap",
        task_date: "2025-03-02",
        category: "Meeting",
        active: false,
        new_task: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    name:"tilak",
    email: "tilak@example.com",
    password: "123",
    tasks: [
      {
        task_title: "Code Review",
        task_description: "Review code for bug fixes",
        task_date: "2025-03-01",
        category: "Development",
        active: 1,
        new_task: 0,
        completed: 0,
        failed: 1
      },
      {
        task_title: "Team Stand-up",
        task_description: "Daily team update meeting",
        task_date: "2025-03-02",
        category: "Meeting",
        active: false,
        new_task: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    name:"rahul",
    email: "rahul@example.com",
    password: "123",
    tasks: [
      {
        task_title: "Marketing Strategy",
        task_description: "Plan digital marketing strategy",
        task_date: "2025-03-03",
        category: "Marketing",
        active: 0,
        new_task: 1,
        completed: 1,
        failed: 0
      },
      {
        task_title: "Budget Approval",
        task_description: "Get budget approved by finance",
        task_date: "2025-03-04",
        category: "Finance",
        active: false,
        new_task: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 4,
    name:"naruto",
    email: "naruto@example.com",
    password: "123",
    tasks: [
      {
        task_title: "Server Maintenance",
        task_description: "Update and check server logs",
        task_date: "2025-03-05",
        category: "IT",
        active: 0,
        new_task: 1,
        completed: 0,
        failed: 1
      },
      {
        task_title: "Security Audit",
        task_description: "Perform security checks",
        task_date: "2025-03-06",
        category: "Security",
        active: false,
        new_task: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    name:"sasuke",
    email: "sasuke@example.com",
    password: "123",
    tasks: [
      {
        task_title: "Customer Support",
        task_description: "Resolve customer tickets",
        task_date: "2025-03-07",
        category: "Support",
        active: 1,
        new_task: 1,
        completed:0 ,
        failed: 0
      },
      {
        task_title: "Product Demo",
        task_description: "Present product to clients",
        task_date: "2025-03-08",
        category: "Sales",
        active: false,
        new_task: true,
        completed: false,
        failed: false
      }
    ]
  }
];

const admin=[
    {
        "id": 1, "email": "tilak@example.com", "password": "123"
      },
     

]
export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))

}
export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))
    return {employees,admin}
    
 

}