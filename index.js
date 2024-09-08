document.addEventListener('DOMContentLoaded', function() {
    // All your JavaScript code goes here
    
    const subjectsData = {
        "11": [
            { code: "110001", name: "Chemistry" },
            { code: "110002", name: "Communication Skills" },
            { code: "110003", name: "Computer Programming and Utilization" },
            { code: "110004", name: "Elements of Civil Engineering" },
            { code: "110005", name: "Elements of Electrical Engineering" },
            { code: "110006", name: "Elements of Mechanical Engineering" },
            { code: "110007", name: "Environmental Studies" },
            { code: "110011", name: "Physics" },
            { code: "110012", name: "Workshop" },
            { code: "110013", name: "Engineering Graphics" },
            { code: "110014", name: "Calculus" },
            { code: "110015", name: "Vector Calculus and Linear Algebra" },
            { code: "1990001", name: "Contributor Personality Development" },
            { code: "2110002", name: "Communication Skills" },
            { code: "2110003", name: "Computer Programming And Utilization" },
            { code: "2110005", name: "Elements of Electrical Engineering" },
            { code: "2110006", name: "Elements of Mechanical Engineering" },
            { code: "2110007", name: "Environmental Studies" },
            { code: "2110011", name: "Physics" },
            { code: "2110013", name: "Engineering Graphics" },
            { code: "2110014", name: "Calculus" },
            { code: "2110015", name: "Vector Calculus And Linear Algebra" },
            { code: "2110016", name: "Basic Electronics" },
            { code: "2110017", name: "Electrical and Electronics Workshop" },
            { code: "2990001", name: "Contributor Personality Development" },
            { code: "3110001", name: "Chemistry" },
            { code: "3110002", name: "English" },
            { code: "3110003", name: "Programming for Problem Solving" },
            { code: "3110005", name: "Basic Electrical Engineering" },
            { code: "3110006", name: "Basic Mechanical Engineering" },
            { code: "3110007", name: "Environmental Sciences" },
            { code: "3110012", name: "Workshop/ Manufacturing Practices" },
            { code: "3110013", name: "Engineering Graphics & Design" },
            { code: "3110014", name: "Mathematics - 1" },
            { code: "3110015", name: "Mathematics - 2" },
            { code: "3110016", name: "Basic Electronics" },
            { code: "3110017", name: "Induction Program" },
            { code: "3110018", name: "Physics" },
            { code: "130002", name: "Advanced Engineering Mathematics" },
            { code: "130701", name: "Digital Logic Design" },
            { code: "130901", name: "Circuits and Networks" },
            { code: "131101", name: "Basic Electronics" },
            { code: "131102", name: "Simulation and Design Tools" },
            { code: "131103", name: "Electronics Workshop" },
            { code: "131701", name: "Electrical Machines" },
            { code: "2130002", name: "Advance Engineering Mathematics" },
            { code: "2130004", name: "Engineering Economics and Management" },
            { code: "2130005", name: "Design Engineering I-A" },
            { code: "2130901", name: "Circuits and Networks" },
            { code: "2131004", name: "Digital Electronics" },
            { code: "2131005", name: "Electrical Machines" },
            { code: "2131006", name: "Electronic Devices and Circuits" },
            { code: "3130004", name: "Effective Technical Communication" },
            { code: "3130006", name: "Probability and Statistics" },
            { code: "3130007", name: "Indian Constitution" },
            { code: "3130008", name: "Design Engineering - I A" },
            { code: "3131101", name: "Control Systems" },
            { code: "3131102", name: "Digital System Design" },
            { code: "3131103", name: "Network Theory" },
            { code: "140001", name: "Mathematics-IV" },
            { code: "140002", name: "Management-I" },
            { code: "140701", name: "Microprocessor And Interfacing" },
            { code: "141101", name: "Advance Electronics" },
            { code: "141102", name: "Communication Engineering" },
            { code: "141701", name: "Control Theory" },
            { code: "141904", name: "Non - Conventional Energy Sources" },
            { code: "2140002", name: "Design Engineering - I B" },
            { code: "2141001", name: "Microprocessor and Interfacing" },
            { code: "2141002", name: "Analog Circuit Design" },
            { code: "2141003", name: "Electronics Measurement and Instrumentation" },
            { code: "2141004", name: "Control System Engineering" },
            { code: "2141005", name: "Signals and Systems" },
            { code: "2141006", name: "Simulation and Design Tools" },
            { code: "2150001", name: "Design Engineering - II A" },
            { code: "2150002", name: "Institute Elective - Cyber Security" },
            { code: "2150003", name: "Institute Elective - Disaster Management" },
            { code: "2151001", name: "Microcontroller and Interfacing (EC)" },
            { code: "2151002", name: "Engineering Electromagnetics" },
            { code: "2151004", name: "Electronics and Communication" },
            { code: "2151101", name: "Audio Video Systems" },
            { code: "2151102", name: "Mini project" },
            { code: "2160001", name: "Design Engineering - II B" },
            { code: "2161001", name: "Digital Communication" },
            { code: "2161003", name: "Antenna & Wave Propagation" },
            { code: "2161005", name: "Optical Communication" },
            { code: "2161006", name: "Power Electronics Devices and Circuits" },
            { code: "2161101", name: "VLSI Technology & Design" },
            { code: "2161102", name: "Advanced Microprocessor" },
            { code: "2161103", name: "Telecommunication Switching systems and Networks" },
            { code: "2170001", name: "Project - I" },
            { code: "2171001", name: "Microwave Engineering" },
            { code: "2171003", name: "Digital Signal Processing" },
            { code: "2171004", name: "Wireless Communication" },
            { code: "2171005", name: "Embedded Systems" },
            { code: "2171007", name: "Satellite Communication" },
            { code: "2171008", name: "Data Communication and Networking" },
            { code: "2171102", name: "Biomedical Instrumentation" },
            { code: "2171103", name: "Industrial Automation" },
            { code: "2181102", name: "Fundamentals of Image Processing" },
            { code: "2181103", name: "Radar & Navigational Aids" },
            { code: "2181105", name: "Project – II" },
            { code: "2181106", name: "Device Driver & Writing" },
            { code: "2181107", name: "Testing And Verification" },
            { code: "2181108", name: "Project II" },
            { code: "3140005", name: "Design Engineering 1 B" },
            { code: "3141002", name: "Analog Circuit Design" },
            { code: "3141005", name: "Signal & Systems" },
            { code: "3141007", name: "Professional Ethics" },
            { code: "3141008", name: "Microprocessor & Microcontroller" },
            { code: "3141009", name: "Electromagnetic Theory" },
            { code: "3141010", name: "Electronic Measurement Laboratory" },
            { code: "3150001", name: "Design Engineering - II A" },
            { code: "3150004", name: "Contributor Personality Development Program" },
            { code: "3150005", name: "Integrated Personality Development Course" },
            { code: "3151103", name: "Principles of Management" },
            { code: "3151104", name: "Analog and Digital Communication" },
            { code: "3151105", name: "VLSI Design" },
            { code: "3151106", name: "Power Electronics" },
            { code: "3151107", name: "Advance Microcontroller" },
            { code: "3151108", name: "Python Programming" },
            { code: "3151109", name: "Industrial Automation" },
            { code: "3151110", name: "Robotics and Automation" },
            { code: "3160001", name: "Design Engineering II B" },
            { code: "3160002", name: "Contributor Personality Development Program" },
            { code: "3160003", name: "Integrated Personality Development Course" },
            { code: "3161003", name: "Antennas and Propagation" },
            { code: "3161005", name: "Fiber Optic Communication" },
            { code: "3161007", name: "Computer Networks" },
            { code: "3161008", name: "Sensors and Transducers" },
            { code: "3161009", name: "Embedded Systems" },
            { code: "3161010", name: "Satellite Communication" },
            { code: "3161011", name: "Cyber Physical systems" },
            { code: "3161012", name: "Web Technology" },
            { code: "3161013", name: "Systems Engineering" },
            { code: "3170001", name: "Summer Internship" },
            { code: "3171001", name: "Microwave Theory and Techniques" },
            { code: "3171003", name: "Digital Signal Processing" },
            { code: "3171004", name: "Wireless Communication" },
            { code: "3171104", name: "Biomedical Electronics" },
            { code: "3171105", name: "Introducion of Artificial Intelligence" },
            { code: "3171106", name: "Wireless Sensor Networks" },
            { code: "3171107", name: "Introducion to MEMS" },
            { code: "3171108", name: "Internet of Things" },
            { code: "3171109", name: "Digital Image and Video Processing" },
            { code: "3171110", name: "Radar and Navigational Aids" },
            { code: "3171111", name: "Testing and Verification" },
            { code: "3171112", name: "Automotive Electronics" },
            { code: "3171113", name: "Practical aspects of Computer Vision" },
            { code: "3171114", name: "Introducion of Machine learning" },
            { code: "3181101", name: "Internship/Project" },
        ],

        "06": [
            { code: "110001", name: "Chemistry" },
            { code: "110002", name: "Communication Skills" },
            { code: "110003", name: "Computer Programming and Utilization" },
            { code: "110004", name: "Elements of Civil Engineering" },
            { code: "110005", name: "Elements of Electrical Engineering" },
            { code: "110006", name: "Elements of Mechanical Engineering" },
            { code: "110007", name: "Environmental Studies" },
            { code: "110010", name: "Mechanics of Solids" },
            { code: "110011", name: "Physics" },
            { code: "110012", name: "Workshop" },
            { code: "110013", name: "Engineering Graphics" },
            { code: "110014", name: "Calculus" },
            { code: "110015", name: "Vector Calculus and Linear Algebra" },
            { code: "1990001", name: "Contributor Personality Development" },
            { code: "2110002", name: "Communication Skills" },
            { code: "2110003", name: "Computer Programming And Utilization" },
            { code: "2110004", name: "Elements of Civil Engineering" },
            { code: "2110005", name: "Elements of Electrical Engineering" },
            { code: "2110006", name: "Elements of Mechanical Engineering" },
            { code: "2110007", name: "Environmental Studies" },
            { code: "2110011", name: "Physics" },
            { code: "2110012", name: "Workshop" },
            { code: "2110013", name: "Engineering Graphics" },
            { code: "2110014", name: "Calculus" },
            { code: "2110015", name: "Vector Calculus And Linear Algebra" },
            { code: "2990001", name: "Contributor Personality Development" },
            { code: "3110001", name: "Chemistry" },
            { code: "3110002", name: "English" },
            { code: "3110003", name: "Programming for Problem Solving" },
            { code: "3110004", name: "Basic Civil Engineering" },
            { code: "3110005", name: "Basic Electrical Engineering" },
            { code: "3110006", name: "Basic Mechanical Engineering" },
            { code: "3110007", name: "Environmental Sciences" },
            { code: "3110011", name: "Physics" },
            { code: "3110012", name: "Workshop/ Manufacturing Practices" },
            { code: "3110013", name: "Engineering Graphics & Design" },
            { code: "3110014", name: "Mathematics - 1" },
            { code: "3110015", name: "Mathematics - 2" },
            { code: "3110017", name: "Induction Program" },
            { code: "130002", name: "Advanced Engineering Mathematics" },
            { code: "130601", name: "Surveying" },
            { code: "130602", name: "Fluid Mechanics" },
            { code: "130603", name: "Building and Town Planning" },
            { code: "130604", name: "Structural Analysis-I" },
            { code: "130605", name: "Concrete Technology" },
            { code: "2130002", name: "Advance Engineering Mathematics" },
            { code: "2130003", name: "Mechanics of Solids" },
            { code: "2130005", name: "Design Engineering I-A" },
            { code: "2130601", name: "Surveying" },
            { code: "2130602", name: "Fluid Mechanics" },
            { code: "2130606", name: "Geotechnics & Applied Geology" },
            { code: "2130607", name: "Building Construction" },
            { code: "3130004", name: "Effective Technical Communication" },
            { code: "3130007", name: "Indian Constitution" },
            { code: "3130008", name: "Design Engineering - I A" },
            { code: "3130606", name: "Geotechnical Engineering" },
            { code: "3130607", name: "Building Construction Technology" },
            { code: "3130608", name: "Mechanics of Solids" },
            { code: "3130609", name: "Building and Town Planning" },
            { code: "140001", name: "Mathematics-IV" },
            { code: "140002", name: "Management-I" },
            { code: "140601", name: "Advanced Surveying" },
            { code: "140602", name: "Building Construction" },
            { code: "140603", name: "Structural Analysis-II" },
            { code: "140604", name: "Engineering Geology" },
            { code: "140605", name: "Advanced Strength Of Materials" },
            { code: "2140002", name: "Design Engineering - I B" },
            { code: "2140003", name: "Engineering Economics and Management" },
            { code: "2140601", name: "Advanced Surveying" },
            { code: "2140603", name: "Structural Analysis-I" },
            { code: "2140606", name: "Numerical And Statistical Methods for Civil Engineering" },
            { code: "2140607", name: "Buliding & Town Planning" },
            { code: "2140608", name: "Concrete Technology" },
            { code: "3140005", name: "Design Engineering 1 B" },
            { code: "3140601", name: "Surveying" },
            { code: "3140603", name: "Structural Analysis-I" },
            { code: "3140609", name: "Civil Engineering - Societal & Global Impact" },
            { code: "3140610", name: "Complex Variables and Partial Differential Equations" },
            { code: "3140611", name: "Fluid Mechanics & Hydraulics" },
            { code: "150001", name: "Management - II" },
            { code: "150601", name: "Highway Engineering" },
            { code: "150602", name: "Hydrology & Water Resources Engineering" },
            { code: "150603", name: "Environmental Engineering" },
            { code: "150604", name: "Geotechnical Engineering - I" },
            { code: "150605", name: "Structural Analysis - III" },
            { code: "150606", name: "Disaster Assessment Using Geospatial Techniques" },
            { code: "2150001", name: "Design Engineering - II A" },
            { code: "2150002", name: "Institute Elective - Cyber Security" },
            { code: "2150003", name: "Institute Elective - Disaster Management" },
            { code: "2150601", name: "Highway Engineering" },
            { code: "2150602", name: "Hydrology & Water Resources Engineering" },
            { code: "2150603", name: "Environmental Engineering" },
            { code: "2150608", name: "Structural Analysis-II" },
            { code: "2150609", name: "Soil Mechanics" },
            { code: "3150001", name: "Design Engineering - II A" },
            { code: "3150004", name: "Contributor Personality Development Program" },
            { code: "3150005", name: "Integrated Personality Development Course" },
            { code: "3150610", name: "Concrete Technology" },
            { code: "3150611", name: "Transportation Engineering" },
            { code: "3150612", name: "Design of Structures" },
            { code: "3150613", name: "Pavement Design and Highway construction" },
            { code: "3150614", name: "Structural analysis-II" },
            { code: "3150615", name: "Soil Mechanics" },
            { code: "3150616", name: "Pipeline Engineering" },
            { code: "3150617", name: "Remote Sensing and GIS" },
            { code: "3151108", name: "Python Programming" },
            { code: "160601", name: "Advanced Construction Technology" },
            { code: "160602", name: "Applied Fluid Mechanics" },
            { code: "160603", name: "Railway Bridge and Tunnel Engineering" },
            { code: "160604", name: "Water & Waste Water Engineering" },
            { code: "160605", name: "Earthquake Engineering" },
            { code: "160606", name: "Geotechnical Engineering - II" },
            { code: "2160001", name: "Design Engineering - II B" },
            { code: "2160601", name: "Advanced Construction and Equipments" },
            { code: "2160602", name: "Applied Fluid Mechanics" },
            { code: "2160603", name: "Railway, Bridge & Tunnel Engineering" },
            { code: "2160604", name: "Water & Waste Water Engineering" },
            { code: "2160607", name: "Elementary Structural Design" },
            { code: "2160608", name: "Urban Transportation system" },
            { code: "2160609", name: "Computational Mechanics" },
            { code: "3160001", name: "Design Engineering II B" },
            { code: "3160002", name: "Contributor Personality Development Program" },
            { code: "3160003", name: "Integrated Personality Development Course" },
            { code: "3160608", name: "Urban Transportation Planning" },
            { code: "3160610", name: "Water Resources Engineering and Hydrology" },
            { code: "3160611", name: "Environmental Engineering" },
            { code: "3160612", name: "Design of Reinforced Concrete structures" },
            { code: "3160613", name: "Rock Mechanics and Tunneling" },
            { code: "3160614", name: "Contracts Management" },
            { code: "3160615", name: "Traffic Engineering and Management" },
            { code: "3160616", name: "Foundation Engineering" },
            { code: "3160617", name: "Construction Equipment and Automation" },
            { code: "3160618", name: "Open Channel flow" },
            { code: "3160619", name: "Soft Computing Techniques" },
            { code: "3160620", name: "Instrumentation and Sensors" },
            { code: "3160621", name: "Earthquake Engineering" },
            { code: "3160622", name: "Disaster Management" },
            { code: "170001", name: "Project - I" },
            { code: "170601", name: "Construction Management And Equipments" },
            { code: "170602", name: "Irrigation Engineering" },
            { code: "170603", name: "Structural Design-I" },
            { code: "170604", name: "Urban Transportation System" },
            { code: "170605", name: "Advanced Structural Analysis" },
            { code: "170606", name: "Application Of Geoinformatics In Civil Engineering" },
            { code: "2170003", name: "Project - I" },
            { code: "2170606", name: "Application of Geoinformatics in Civil Engineering" },
            { code: "2170607", name: "Design of Reinforced Concrete Structures" },
            { code: "2170609", name: "Irrigation Engineering" },
            { code: "2170610", name: "Professional Practices and Valuation" },
            { code: "2170611", name: "Infrastructure Engineering And Management" },
            { code: "2170612", name: "Earthquake Engineering" },
            { code: "2170613", name: "Traffic Engineering" },
            { code: "3170001", name: "Summer Internship" },
            { code: "3170609", name: "Irrigation Engineering" },
            { code: "3170614", name: "Construction Engineering and Management" },
            { code: "3170615", name: "Engineering Economics, Estimation and Costing" },
            { code: "3170616", name: "Retrofitting of structures" },
            { code: "3170617", name: "Application of GIS in Civil Engineering" },
            { code: "3170618", name: "Design of Steel Structures" },
            { code: "3170619", name: "Railway and Airport Engineering" },
            { code: "3170620", name: "Computational Geotechnics" },
            { code: "3170621", name: "Design of hydraulic structures" },
            { code: "3170622", name: "Precast Construction" },
            { code: "3170623", name: "Port and Harbour Engineering" },
            { code: "3170624", name: "Design of Prestressed Concrete structures" },
            { code: "3170625", name: "Environmental Impact Assessment" },
            { code: "3170626", name: "Design of Industrial Structures" },
            { code: "3170627", name: "ICT For Development" },
            { code: "3170628", name: "Infrastructure for smart Cities" },
            { code: "3170629", name: "Green Built Environment" },
            { code: "180601", name: "Design of Hydraulic Structures" },
            { code: "180602", name: "Dock, Harbour & Airport Engineering" },
            { code: "180603", name: "Professional Practice & Valuation" },
            { code: "180604", name: "Structural Design II" },
            { code: "180605", name: "Project - II" },
            { code: "180606", name: "Irrigation Water Management" },
            { code: "180607", name: "Repairs and Rehabilitation Of Structures" },
            { code: "180608", name: "Air Pollution Control" },
            { code: "2180601", name: "Design of Hydrauilic Structures" },
            { code: "2180602", name: "Harbour & Airport Engineering" },
            { code: "2180605", name: "Project -II" },
            { code: "2180607", name: "Repairs & Rehabilitation of Concrete Structures" },
            { code: "2180609", name: "Foundation Engineering" },
            { code: "2180610", name: "Design of Steel Structures" },
            { code: "2180611", name: "Construction Management" },
            { code: "2180612", name: "Design Of Prestressed Concrete Structures & Bridges" },
            { code: "2180613", name: "Glass Facade Engineering" },
            { code: "3180601", name: "Internship/Project" }
        ],

        "12": [
            { code: "223456", name: "Database Management Systems" },
            { code: "223457", name: "Web Technologies" }
        ],
        "13": [
            { code: "323456", name: "Thermodynamics" },
            { code: "323457", name: "Fluid Mechanics" }
        ]
    };

    let selectedBranch = "";
    let selectedSubject = "";

    // Populate subject list based on selected branch
    document.getElementById("branchSelect").addEventListener("change", function() {
        selectedBranch = this.value;
        updateSubjectList();
        document.getElementById("downloadBtn").style.display = "none";
    });

    // Filter subjects based on search input
    function filterSubjects() {
        updateSubjectList(document.getElementById("subjectSearch").value);
    }

    // Update subject list dynamically
    function updateSubjectList(filter = "") {
        const subjectList = document.getElementById("subjectList");
        subjectList.innerHTML = ""; // Clear the list
        if (selectedBranch && subjectsData[selectedBranch]) {
            const filteredSubjects = subjectsData[selectedBranch].filter(subject => 
                subject.name.toLowerCase().includes(filter.toLowerCase()) || 
                subject.code.toLowerCase().includes(filter.toLowerCase())
            );
            
            filteredSubjects.forEach(subject => {
                const li = document.createElement("li");
                li.textContent = `${subject.name} (Code: ${subject.code})`;
                li.setAttribute('data-subject-code', subject.code);
                li.setAttribute('data-subject-name', subject.name);
                li.addEventListener("click", function() {
                    selectedSubject = subject;
                    document.getElementById("downloadBtn").style.display = "block";
                });
                subjectList.appendChild(li);
            });
        }

        // Update meta tags for SEO
        updateMetaTags(selectedBranch, filter);
    }

    function updateMetaTags(branch, filter) {
        const metaDescription = document.querySelector('meta[name="description"]');
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        
        if (!metaDescription) {
            const newMetaDescription = document.createElement('meta');
            newMetaDescription.name = 'description';
            document.head.appendChild(newMetaDescription);
        }
        if (!metaKeywords) {
            const newMetaKeywords = document.createElement('meta');
            newMetaKeywords.name = 'keywords';
            document.head.appendChild(newMetaKeywords);
        }

        const description = `GTU Syllabus Finder for ${branch} branch${filter ? ` - ${filter}` : ''}`;
        const keywords = `GTU, syllabus, ${branch}, ${filter}`;

        document.querySelector('meta[name="description"]').setAttribute('content', description);
        document.querySelector('meta[name="keywords"]').setAttribute('content', keywords);
    }
    // Handle download button click
    document.getElementById("downloadBtn").addEventListener("click", function() {
        if (selectedBranch && selectedSubject) {
            const filePath = `syllabus/${selectedBranch}/${selectedSubject.code}.pdf`;
            window.location.href = filePath;
        }
    });
});
