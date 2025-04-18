// Sample Data
const employees = [
    { name: "John Doe", department: "HR", status: "Present", salary: "50,000" },
    { name: "John Smitch", department: "IT", status: "Absent", salary: "70,000" },
    { name: "Mike Brown", department: "Finance", status: "Present", salary: "60,000" },
];

// Populate Overview Section
document.getElementById("total-employees").innerText = employees.length;
document.getElementById("active-employees").innerText = employees.filter(emp => emp.status === "Present").length;

// Populate Attendance Table
const attendanceTable = document.getElementById("attendance-data");
employees.forEach(emp => {
    const row = `<tr>
        <td>${emp.name}</td>
        <td>${emp.department}</td>
        <td>${emp.status}</td>
    </tr>`;
    attendanceTable.innerHTML += row;
});

// Populate Payroll Table
const payrollTable = document.getElementById("payroll-data");
employees.forEach(emp => {
    const row = `<tr>
        <td>${emp.name}</td>
        <td>${emp.salary}</td>
        <td>Paid</td>
    </tr>`;
    payrollTable.innerHTML += row;
});

// Chart Example (using Chart.js)
const ctx = document.getElementById('performance-chart').getContext('2d');
const performanceChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: employees.map(emp => emp.name),
        datasets: [{
            label: 'Performance',
            data: [80, 70, 85], // Example performance data
            backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'],
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});