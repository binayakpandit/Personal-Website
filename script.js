document.addEventListener('DOMContentLoaded', () => {
    // Resume Data Extracted from PDF
    const resumeData = {
        profile: `
            <div class="section-content fade-in">
                <h2>> User Profile</h2>
                <p>
                    <span class="prompt">NAME:</span> Binayak Pandit<br>
                    <span class="prompt">ROLE:</span> Aspiring Backend Developer<br>
                    <span class="prompt">LOCATION:</span> Banasthali, Kathmandu<br><br>
                </p>
                <p>
                    Highly motivated fresher passionate about backend development with a strong foundation in Mathematics and PHP. 
                    Proficient in Problem-solving, Analytical thinking, and Effective communication. 
                    I am eager to learn and contribute to building efficient and scalable systems.
                    Dedicated to collaborating with dynamic teams and growing by learning from professionals in the field.
                </p>
            </div>
        `,
        skills: `
            <div class="section-content fade-in">
                <h2>> Skills_Load.exe</h2>
                <div class="tag-cloud">
                    <span class="tag">Laravel</span>
                    <span class="tag">MySQL</span>
                    <span class="tag">PHP</span>
                    <span class="tag">HTML & CSS</span>
                    <span class="tag">REST API</span>
                    <span class="tag">Git/GitHub</span>
                    <span class="tag">Python (Basic)</span>
                    <span class="tag">C-Programming</span>
                    <span class="tag">Problem Solving</span>
                </div>
            </div>
        `,
        projects: `
            <div class="section-content fade-in">
                <h2>> Projects_Manifest.bat</h2>
                
                <div class="project-card">
                    <h3>Library Management System</h3>
                    <p>Program developed using PHP, HTML, CSS based on CRUD (Create, Read, Update, Delete) to manage a simple library.</p>
                    <div class="tag-cloud">
                        <span class="tag">PHP</span>
                        <span class="tag">MySQL</span>
                        <span class="tag">CRUD</span>
                    </div>
                </div>

                <div class="project-card">
                    <h3>Instagram Clone</h3>
                    <p>Program developed using Laravel which has features to follow/unfollow accounts and basic social interaction simulation.</p>
                    <div class="tag-cloud">
                        <span class="tag">Laravel</span>
                        <span class="tag">MVC</span>
                    </div>
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
                        Specialization: Cloud Computing, Networking</p>
                    </li>
                    <li>
                        <h3>Nist Education Foundation</h3>
                        <p><strong>Intermediate (Computer Science)</strong> (2022 - 2024)<br>
                        Activities: Code camp on C-programming and CSS</p>
                    </li>
                </ul>
                <br>
                <h2>> Certificates</h2>
                <ul>
                    <li>
                        <h3>Laravel From Scratch</h3>
                        <p>Covered MVC architecture, routing, middleware, Eloquent ORM, and Blade templating.</p>
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
                    <li><span class="prompt">LINKEDIN:</span> <a href="https://linkedin.com/in/binayak11" target="_blank" class="glitch-hover">linkedin.com/in/binayak11</a></li>
                    <li><span class="prompt">GITHUB:</span> <a href="https://github.com/axel008" target="_blank" class="glitch-hover">github.com/axel008</a></li>
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
