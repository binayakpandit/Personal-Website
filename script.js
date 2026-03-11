document.addEventListener('DOMContentLoaded', () => {
    // Resume Data Extracted from PDF
    const resumeData = {
        profile: `
            <div class="section-content fade-in">
                <h2>> User Profile</h2>
                <p>
                    <span class="prompt">NAME:</span> Binayak Pandit<br>
                    <span class="prompt">ROLE:</span> Aspiring Cybersecurity Analyst<br>
                    <span class="prompt">LOCATION:</span> Kathmandu, Nepal<br><br>
                </p>
                <p>
                    Highly motivated and passionate Cybersecurity enthusiast with a strong foundation in Mathematics, Python, & PHP. 
                    Proficient in problem-solving, analytical thinking, and effective communication, with experience in designing 
                    efficient, scalable, and secure systems. Eager to apply technical knowledge to real world challenges, 
                    continuously learn from experienced professionals, and contribute to dynamic teams in building innovative solutions. 
                    Dedicated, curious, and committed to growing as a cybersecurity professional while making a tangible impact.
                </p>
            </div>
        `,
        skills: `
            <div class="section-content fade-in">
                <h2>> Skills_Load.exe</h2>
                <h3>Cybersecurity & Networking</h3>
                <div class="tag-cloud">
                    <span class="tag">Network fundamentals</span>
                    <span class="tag">OSI/TCP-IP model</span>
                    <span class="tag">Subnetting</span>
                    <span class="tag">Routing basics</span>
                    <span class="tag">Vulnerability assessment</span>
                </div>
                <h3>Programming & Development</h3>
                <div class="tag-cloud">
                    <span class="tag">Python</span>
                    <span class="tag">PHP</span>
                    <span class="tag">SQL</span>
                    <span class="tag">Web dev basics</span>
                    <span class="tag">Algorithmic thinking</span>
                </div>
                <h3>AI & Data Skills</h3>
                <div class="tag-cloud">
                    <span class="tag">AI & Prompt Engineering</span>
                    <span class="tag">Data analysis</span>
                    <span class="tag">Automation</span>
                </div>
                <h3>Analytical & Soft Skills</h3>
                <div class="tag-cloud">
                    <span class="tag">Critical thinking</span>
                    <span class="tag">Effective communication</span>
                    <span class="tag">Rapid learning</span>
                    <span class="tag">Attention to detail</span>
                </div>
            </div>
        `,
        experience: `
            <div class="section-content fade-in">
                <h2>> Experience_Log.sh</h2>
                <div class="project-card">
                    <h3>Cyber-Security Customer Support Executive</h3>
                    <p><span class="prompt">COMPANY:</span> GAP Technologies<br>
                    <span class="prompt">DATE:</span> 2025/06 – Present</p>
                    <ul>
                        <li>Conduct customized phishing simulation campaigns for large organizations, including BFSI institutions and high-level clients.</li>
                        <li>Collaborate with the security team in executing and monitoring security-related workflows and awareness initiatives.</li>
                        <li>Generate, modify, and analyze detailed security reports, and communicate findings directly with stakeholders.</li>
                        <li>Assist in the planning and coordination of C-Suite cybersecurity drills and leadership-level security awareness sessions.</li>
                    </ul>
                </div>
            </div>
        `,
        projects: `
            <div class="section-content fade-in">
                <h2>> Projects_Manifest.bat</h2>
                
                <div class="project-card">
                    <h3>Reconity (Cybersecurity Platform)</h3>
                    <p>Designed a modular web-based cybersecurity platform for reconnaissance and vulnerability assessment workflows. Implemented backend scan handling, structured reporting, and secure authentication mechanisms.</p>
                </div>

                <div class="project-card">
                    <h3>Web-Based Vulnerability Scanner</h3>
                    <p>Developed a web interface to automate vulnerability scanning and organize results by threat level. Integrated backend scripts for scan execution and basic workflow automation.</p>
                </div>

                <div class="project-card">
                    <h3>Library Management System</h3>
                    <p>Program developed using PHP, HTML, CSS based on CRUD to manage a simple library.</p>
                    <div class="tag-cloud">
                        <span class="tag">PHP</span>
                        <span class="tag">MySQL</span>
                        <span class="tag">CRUD</span>
                    </div>
                </div>

                <div class="project-card">
                    <h3>Networking & Security Lab</h3>
                    <p>Configured routing protocols, subnetting, and multi-network topologies in a simulated environment. Analyzed packet flow and troubleshot connectivity and protocol-level issues.</p>
                </div>
            </div>
        `,
        education: `
            <div class="section-content fade-in">
                <h2>> Education_History.log</h2>
                <ul>
                    <li>
                        <h3>KFA Business School & IT</h3>
                        <p><strong>BCS IT</strong> (2024 - Present)<br>
                        Specialization: Cybersecurity & Networking | Kathmandu</p>
                    </li>
                    <li>
                        <h3>Nist Education Foundation</h3>
                        <p><strong>Intermediate (Computer Science)</strong> (2022 - 2024)<br>
                        Activities: Code camp on C-programming and CSS | Kathmandu</p>
                    </li>
                </ul>
                <br>
                <h2>> Courses.txt</h2>
                <ul>
                    <li>
                        <h3>Introduction to Offensive Security with Artificial Intelligence</h3>
                        <p>Red Team Leaders</p>
                    </li>
                    <li>
                        <h3>Foundations of Log Analysis for Cyber Defense</h3>
                        <p>Red Team Leaders</p>
                    </li>
                    <li>
                        <h3>OpSec & Anonymity for Red Teams</h3>
                        <p>Red Team Leaders</p>
                    </li>
                    <li>
                        <h3>Purple Team – Active Directory & Azure AD v1</h3>
                        <p>Red Team Leaders</p>
                    </li>
                </ul>
                <br>
                <h2>> Certificates.crt</h2>
                <ul>
                    <li>
                        <h3>Certified Red Team Operations Management (CRTOM)</h3>
                        <p>Red Team Leaders</p>
                    </li>
                    <li>
                        <h3>ATM Penetration Testing & Security Assessment</h3>
                        <p>Red Team Leaders</p>
                    </li>
                    <li>
                        <h3>Certified Cybersecurity Awareness Trainer</h3>
                        <p>EC-Council</p>
                    </li>
                    <li>
                        <h3>Cisco Networking Academy (NetAcad)</h3>
                        <div class="tag-cloud">
                            <span class="tag">Cyber Threat Management</span>
                            <span class="tag">Endpoint Security</span>
                            <span class="tag">Networking Devices & Initial Configuration</span>
                            <span class="tag">Introduction to Cybersecurity</span>
                            <span class="tag">Networking Basics</span>
                            <span class="tag">Junior Cybersecurity Analyst Career Path</span>
                        </div>
                    </li>
                    <li>
                        <h3>Basic Python Programming</h3>
                        <p>Broadway Infosys</p>
                    </li>
                </ul>
            </div>
        `,
        contact: `
            <div class="section-content fade-in">
                <h2>> Contact_Me.sh</h2>
                <p>Initiating communication protocols...</p>
                <ul>
                    <li><span class="prompt">EMAIL:</span> <a href="mailto:artsbinay@gmail.com" class="glitch-hover">artsbinay@gmail.com</a></li>
                    <li><span class="prompt">PHONE:</span> <a href="tel:9742437562" class="glitch-hover">9742437562</a></li>
                    <li><span class="prompt">LINKEDIN:</span> <a href="https://linkedin.com/in/binayakpandit" target="_blank" class="glitch-hover">linkedin.com/binayakpandit</a></li>
                    <li><span class="prompt">GITHUB:</span> <a href="https://github.com/binayakpandit" target="_blank" class="glitch-hover">github.com/binayakpandit</a></li>
                </ul>
                <br>
                <p class="blink">Waiting for incoming transmission...</p>
            </div>
        `
    };

    // Elements
    const app = document.getElementById('app');
    const mainContent = document.getElementById('main-content');
    const contentOutput = document.getElementById('content-output');
    const menuItems = document.querySelectorAll('.menu-item');
    const typingElement = document.querySelector('.typing-effect');

    // Typing Effect Logic
    const textToType = typingElement.getAttribute('data-text');
    let charIndex = 0;

    function typeText() {
        if (charIndex < textToType.length) {
            typingElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 50); // Typing speed
        } else {
            // Typing finished, show main content
            setTimeout(() => {
                document.querySelector('.intro-sequence').classList.add('hidden');
                mainContent.classList.remove('hidden');
                loadSection('profile'); // Load default section
            }, 800);
        }
    }

    // Start typing effect on load
    setTimeout(typeText, 500);

    // Navigation Logic
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all
            menuItems.forEach(i => i.classList.remove('active'));
            // Add active class to clicked
            item.classList.add('active');

            // Load content
            const section = item.getAttribute('data-section');
            loadSection(section);
        });
    });

    function loadSection(sectionKey) {
        contentOutput.innerHTML = '<p class="blink">Loading data...</p>';

        setTimeout(() => {
            if (resumeData[sectionKey]) {
                contentOutput.innerHTML = resumeData[sectionKey];
            } else {
                contentOutput.innerHTML = '<p class="error">Error: Section not found.</p>';
            }
        }, 300); // Fake loading delay
    }
});
