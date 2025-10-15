import React, { useState } from "react";

const Apps = () => {
  const [users, setUsers] = useState([
    { username: "admin", password: "admin@123", role: "admin" },
    { username: "student1", password: "pass123", role: "student", access: true },
    { username: "student2", password: "pass456", role: "student", access: true },
  ]);

  // ---------- Generate Real Engineering Subjects ----------
  const generateSubjects = () => {
    const baseSubjects = {
      Maths: ["Algebra", "Calculus", "Geometry", "Trigonometry"],
      "C Programming": ["Variables", "Loops", "Functions", "Pointers"],
      DBMS: ["ER Diagrams", "Normalization", "SQL Queries", "Transactions"],
      "Front-End": ["HTML", "CSS", "JavaScript", "React"],
      English: ["Grammar", "Vocabulary", "Comprehension", "Writing Skills"],
      Sports: ["Football", "Basketball", "Cricket", "Athletics"],
    };

    const engineeringSubjects = [
      "Data Structures", "Algorithms", "Computer Networks", "Operating Systems",
      "Software Engineering", "Web Technologies", "Compiler Design", "Machine Learning",
      "Artificial Intelligence", "Computer Graphics", "Cyber Security", "Object Oriented Programming",
      "Discrete Mathematics", "Cloud Computing", "Internet of Things", "Data Mining",
      "Big Data Analytics", "Blockchain Technology", "Human Computer Interaction", "Mobile App Development",
      "Digital Electronics", "Analog Circuits", "Microprocessors", "Microcontrollers", "VLSI Design",
      "Embedded Systems", "Control Systems", "Signal and Systems", "Communication Systems",
      "Digital Signal Processing", "Wireless Communication", "Antenna and Wave Propagation",
      "Optical Communication", "Network Analysis", "RF and Microwave Engineering", "Biomedical Instrumentation",
      "Power Systems", "Electrical Machines", "Power Electronics", "Control of Electric Drives",
      "Energy Systems", "High Voltage Engineering", "Switchgear and Protection", "Smart Grid Technology",
      "Electrical Measurements", "Renewable Energy Sources", "Electrical Circuits", "Microgrids",
      "Engineering Mechanics", "Thermodynamics", "Fluid Mechanics", "Strength of Materials",
      "Manufacturing Processes", "Machine Design", "Heat Transfer", "Refrigeration and Air Conditioning",
      "Automobile Engineering", "CAD and CAM", "Robotics", "Industrial Engineering",
      "Kinematics of Machines", "Dynamics of Machinery", "Mechatronics",
      "Structural Analysis", "Surveying", "Building Materials", "Concrete Technology",
      "Soil Mechanics", "Transportation Engineering", "Environmental Engineering", "Hydraulics",
      "Construction Management", "Water Resources Engineering", "Geotechnical Engineering", "Bridge Engineering",
      "Design of Steel Structures", "Earthquake Engineering",
      "Information Security", "Software Project Management", "Data Warehousing", "Cloud Architecture",
      "Web Application Development", "DevOps", "Data Visualization", "Database Security",
      "Distributed Systems", "Full Stack Development",
      "Deep Learning", "Natural Language Processing", "Neural Networks", "Reinforcement Learning",
      "Computer Vision", "Data Science", "Statistical Learning", "Predictive Analytics",
      "AI Ethics", "Data Preprocessing", "Model Optimization", "Explainable AI",
      "Engineering Drawing", "Basic Electrical Engineering", "Basic Electronics", "Physics for Engineers",
      "Chemistry for Engineers", "Engineering Workshop", "Environmental Studies", "Professional Ethics",
      "Communication Skills", "Soft Skills", "Project Management", "Entrepreneurship Development",
      "Numerical Methods", "Probability and Statistics", "Engineering Economics",
      "Research Methodology", "Design Thinking", "Industrial Safety", "Innovation and Incubation",
      "Capstone Project", "Internship Training",
      "Virtual Reality", "Augmented Reality", "Quantum Computing", "3D Printing", "Renewable Technologies",
      "Smart Materials", "Nanotechnology", "Space Technology", "Drone Technology", "Renewable Power Systems",
      "Image Processing", "Advanced Database Systems", "Compiler Optimization", "Bioinformatics",
      "Pattern Recognition", "Autonomous Vehicles", "Ethical Hacking", "Wireless Sensor Networks",
      "Game Development", "Edge Computing", "Digital Forensics", "AI in Healthcare",
      "Internet Security", "Simulation and Modelling", "Parallel Computing",
    ];

    const subjectsMap = {};
    engineeringSubjects.forEach((subj) => {
      subjectsMap[subj] = [
        `Introduction to ${subj}`,
        `${subj} Basics`,
        `${subj} Advanced Concepts`,
        `Applications of ${subj}`,
      ];
    });

    return { ...baseSubjects, ...subjectsMap };
  };

  const subjects = generateSubjects();

  // ---------- Sample PDFs ----------
  const samplePDF = new Blob(["This is a sample PDF content."], { type: "application/pdf" });

  const [uploadedBooks, setUploadedBooks] = useState({
    Maths: [{ name: "Algebra Basics", file: new File([samplePDF], "Algebra.pdf") }],
    DBMS: [{ name: "Intro to SQL", file: new File([samplePDF], "SQL.pdf") }],
    "C Programming": [{ name: "Pointers Deep Dive", file: new File([samplePDF], "Pointers.pdf") }],
    "Data Structures": [{ name: "Data Structures Fundamentals", file: new File([samplePDF], "DataStructures.pdf") }],
    "Algorithms": [{ name: "Sorting and Searching", file: new File([samplePDF], "Algorithms.pdf") }],
    "Operating Systems": [{ name: "OS Concepts", file: new File([samplePDF], "OperatingSystems.pdf") }],
    "Computer Networks": [{ name: "Network Basics", file: new File([samplePDF], "ComputerNetworks.pdf") }],
    "Power Systems": [{ name: "Electrical Power Systems", file: new File([samplePDF], "PowerSystems.pdf") }],
    "Thermodynamics": [{ name: "Thermodynamics Fundamentals", file: new File([samplePDF], "Thermodynamics.pdf") }],
    "Machine Design": [{ name: "Machine Design Essentials", file: new File([samplePDF], "MachineDesign.pdf") }],
  });

  const [step, setStep] = useState("chooseRole");
  const [role, setRole] = useState(null);
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // ---------------- Login & Role ----------------
  const handleRoleClick = (selectedRole) => {
    setRole(selectedRole);
    setStep("enterCreds");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.username === userid && u.password === password && u.role === role && (role === "admin" || u.access)
    );
    if (user) {
      setCurrentUser(user);
      setStep("dashboard");
      setUserid("");
      setPassword("");
    } else {
      alert(role === "student" ? "❌ Student access denied or invalid credentials." : "❌ Invalid credentials.");
    }
  };

  const handleLogout = () => {
    setStep("chooseRole");
    setRole(null);
    setCurrentUser(null);
    setSelectedSubject(null);
  };

  // ---------------- Book Upload ----------------
  const handleUpload = (e) => {
    e.preventDefault();
    if (currentUser.role !== "admin") return;
    const form = e.target;
    const name = form.bookName.value.trim();
    const subject = form.bookSubject.value;
    const file = form.bookFile.files[0];
    if (!name || !subject || !file) {
      alert("Please fill all fields.");
      return;
    }
    setUploadedBooks((prev) => {
      const updated = { ...prev };
      if (!updated[subject]) updated[subject] = [];
      updated[subject].push({ name, file });
      return updated;
    });
    alert(`📚 Book "${name}" uploaded under ${subject}`);
    form.reset();
  };

  // ---------------- Add Student ----------------
  const handleAddStudent = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value.trim();
    const password = form.password.value.trim();
    const access = form.access.checked;
    if (!username || !password) {
      alert("Please fill all fields.");
      return;
    }
    setUsers((prev) => [...prev, { username, password, role: "student", access }]);
    alert(`✅ Student "${username}" added successfully`);
    form.reset();
  };

  // ---------------- Toggle Access ----------------
  const toggleAccess = (username) => {
    setUsers((prev) =>
      prev.map((u) => (u.username === username ? { ...u, access: !u.access } : u))
    );
  };

  // ---------------- Search Subjects ----------------
  const filteredSubjects = Object.keys(subjects).filter((sub) =>
    sub.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ---------------- Render Books ----------------
  const renderUploadedBooks = (subject = null) => {
    const displaySubjects = subject ? [subject] : Object.keys(uploadedBooks);
    const foundBooks = displaySubjects.filter((sub) => uploadedBooks[sub] && uploadedBooks[sub].length > 0);
    if (foundBooks.length === 0)
      return <p style={{ color: "#888", fontStyle: "italic" }}>❌ No books available for this subject.</p>;

    return foundBooks.map((sub) => (
      <div key={sub} style={{ marginBottom: 15 }}>
        <p style={{ fontWeight: "600" }}>{sub}:</p>
        <ul>
          {uploadedBooks[sub].map((book, idx) => (
            <li key={idx}>
              <a href={URL.createObjectURL(book.file)} download={book.file.name}>
                📘 {book.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  // ---------------- Render Pages ----------------
  if (step === "chooseRole") {
    return (
      <div style={{ textAlign: "center", marginTop: 100 }}>
        <h1>📚 Engineering Library Portal</h1>
        <p>Select your role:</p>
        <button onClick={() => handleRoleClick("admin")}>Admin</button>
        <button onClick={() => handleRoleClick("student")}>Student</button>
      </div>
    );
  }

  if (step === "enterCreds") {
    return (
      <div style={{ textAlign: "center", marginTop: 80 }}>
        <h2>Login as {role}</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Username" value={userid} onChange={(e) => setUserid(e.target.value)} required />
          <br />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  if (step === "dashboard") {
    return (
      <div style={{ padding: 20 }}>
        <h2>Welcome, {currentUser.username}</h2>
        <input
          type="text"
          placeholder="🔍 Search subjects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: 8, width: "100%", marginTop: 10 }}
        />
        <h3 style={{ marginTop: 20 }}>Subjects</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 10, maxHeight: "400px", overflowY: "scroll" }}>
          {filteredSubjects.length > 0 ? filteredSubjects.map((sub) => (
            <div key={sub} onClick={() => setSelectedSubject(sub)} style={{ background: "#ecf0f1", padding: 12, borderRadius: 6, cursor: "pointer", textAlign: "center" }}>
              {sub}
            </div>
          )) : (
            <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: 20, color: "#888" }}>
              ❌ No subjects found for "<strong>{searchTerm}</strong>"
            </div>
          )}
        </div>

        {/* Admin Section */}
        {currentUser.role === "admin" && (
          <>
            <div style={{ marginTop: 30 }}>
              <h3>📤 Upload Book</h3>
              <form onSubmit={handleUpload}>
                <input type="text" name="bookName" placeholder="Book Name" required />
                <select name="bookSubject" required>
                  <option value="">Select Subject</option>
                  {Object.keys(subjects).map((sub) => (<option key={sub} value={sub}>{sub}</option>))}
                </select>
                <input type="file" name="bookFile" required />
                <button type="submit">Upload</button>
              </form>
            </div>

            <div style={{ marginTop: 30 }}>
              <h3>👨‍🎓 Add Student</h3>
              <form onSubmit={handleAddStudent}>
                <input type="text" name="username" placeholder="Username" required />
                <input type="password" name="password" placeholder="Password" required />
                <label>
                  <input type="checkbox" name="access" defaultChecked /> Access Granted
                </label>
                <button type="submit">Add Student</button>
              </form>
            </div>

            <div style={{ marginTop: 30 }}>
              <h3>🔑 Student Access Control</h3>
              {users.filter(u => u.role === "student").map((stu) => (
                <div key={stu.username} style={{ marginBottom: 10 }}>
                  {stu.username} - Access: {stu.access ? "✅" : "❌"} 
                  <button style={{ marginLeft: 10 }} onClick={() => toggleAccess(stu.username)}>Toggle Access</button>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Books */}
        <div style={{ marginTop: 30 }}>
          <h3>📚 Books</h3>
          {renderUploadedBooks(selectedSubject)}
        </div>

        {/* Topics */}
        {selectedSubject && (
          <div style={{ marginTop: 20 }}>
            <h3>{selectedSubject} Topics</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {subjects[selectedSubject].map((topic) => (
                <div key={topic} style={{ background: "#dff9fb", padding: "6px 12px", borderRadius: 6, cursor: "pointer" }}>
                  {topic}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default Apps;
