const projects_data = [
    {
        w_no: 1,
        project_name: "Food Delivery Application",
        project_year: "2024",
        project_desc:"I developed a robust full-stack food delivery application with a dynamic React frontend, enabling users to log in, maintain sessions, browse food items, place orders, manage their cart, and review past purchases, all secured with JWT authentication. The backend, built with Node.js, Express, and MongoDB, efficiently handles authentication, order processing, and database management, ensuring seamless data flow and performance. The frontend communicates with the backend via Axios for real-time updates. Additionally, an admin panel provides full control over food item management, enhancing operational efficiency.",
        skill:["HTML&CSS", "JavaScript", "React", "Nodejs", "Express", "MongoDB", "Axios", "jwt"]
    },
    {
        w_no:2,
        project_name:"Lip to Speech Synthesis",
        project_year: "2022",
        project_desc:"Developed a deep learning model using CNN, AlexNet, and LSTM to generate speech and text from video, trained on 1,500 clips. Processed video frames (227x227x3) to retain lip movement details. Enhanced accuracy to 75% by training on diverse datasets for robustness against muted or disturbed videos.",
        skill: ['Python', 'TensorFlow', 'CNN', 'LSTM']
    },
    {
        w_no:3,
        project_name:"Pneumonia Prediction Using X-rays",
        project_year: "2021",
        project_desc: "Developed a deep learning model from scratch and leveraged VGG19 & ResNet-50 on an 8,000-image medical dataset. Achieved 95% accuracy in pneumonia detection from X-rays.",
        skill: ['Python', 'CoreML', 'VGG-19', 'ResNet-50']
    },
    {
        w_no:4,
        project_name:"COVID-19 Prediction",
        project_year: "2020",
        project_desc: "Developed a predictive model using SVM and Decision Trees for daily COVID-19 case, recovery, and death forecasts globally and in India, achieving 98% accuracy. Integrated real-time data from the Johns Hopkins API, enhancing forecasting accuracy by 25%.",
        skill: ['Python', 'Trees', 'SVM', 'API']
    },
    {
        w_no:5,
        project_name:"Crime Grievance Cell",
        project_year: "2020",
        project_desc: "Created an application with \textbf{HTML, CSS, JavaScript, Python, and Django} that enables online crime reporting, complaint tracking, and criminal record management 24/7, reducing manual processing time by 40% and improving accessibility for the public and authorities.",
        skill: ['HTML&CSS', 'JavaScript', 'Django', 'Postgresql']
    }
]
 
export default projects_data;