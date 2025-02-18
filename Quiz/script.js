const questions = {
    easy: [
        { question: "What does HTTPS stand for?", options: ["Hyper Text Transfer Standard", "Hyper Transfer Protocol Secure", "Hyper Text Transfer Protocol Secure", "High Transfer Protection System"], answer: 2 },
        { question: "Which of these is a strong password?", options: ["12345678", "Your name & birthdate", "A mix of uppercase, lowercase, numbers & symbols", "'password'"], answer: 2 },
        { question: "What is the purpose of a firewall?", options: ["Block unauthorized access", "Speed up the internet", "Increase RAM", "Boost WiFi signals"], answer: 0 },
        { question: "What does VPN stand for?", options: ["Virtual Private Network", "Very Personal Network", "Verified Protected Network", "Virtual Protected Net"], answer: 0 },
        { question: "What is phishing?", options: ["Catching fish online", "A hacking method to steal data", "A type of encryption", "A social media scam"], answer: 1 },
        { question: "Which one is a secure web protocol?", options: ["HTTP", "FTP", "HTTPS", "TCP"], answer: 2 },
        { question: "What does 2FA stand for?", options: ["Two-Factor Authentication", "Two-Face Authorization", "Twice Fast Access", "Two-Factor Agreement"], answer: 0 },
        { question: "What is social engineering?", options: ["Building websites", "Manipulating people to gain access", "A programming language", "A secure coding technique"], answer: 1 },
        { question: "Which of the following is a cybersecurity best practice?", options: ["Using the same password everywhere", "Clicking unknown links", "Using multi-factor authentication", "Sharing passwords"], answer: 2 },
        { question: "Which symbol is commonly used in a secure password?", options: ["@", "#", "!", "All of the above"], answer: 3 },
        { question: "What is ransomware?", options: ["A software update", "A malware that demands money", "A type of firewall", "An antivirus"], answer: 1 },
        { question: "What is malware?", options: ["Malicious software", "An antivirus", "A hacking tool", "A password manager"], answer: 0 },
        { question: "What is an IP address?", options: ["A physical address", "A unique address for a device on a network", "A website name", "A virus"], answer: 1 },
        { question: "What does DDoS stand for?", options: ["Dynamic Denial of Service", "Distributed Denial of Service", "Data Damage on System", "Digital Data Over Security"], answer: 1 },
        { question: "Which of these is a secure email provider?", options: ["Gmail", "Yahoo", "ProtonMail", "Hotmail"], answer: 2 },
        { question: "What is an example of an encrypted messaging app?", options: ["WhatsApp", "Facebook Messenger", "Snapchat", "Instagram"], answer: 0 },
        { question: "What does a strong password prevent?", options: ["Brute force attacks", "Firewalls", "ISP tracking", "Computer overheating"], answer: 0 },
        { question: "Which is an example of biometric authentication?", options: ["Username & password", "Fingerprint scan", "Security questions", "CAPTCHA"], answer: 1 },
        { question: "What should you do if you suspect a phishing email?", options: ["Reply and ask if it's real", "Click the links", "Report and delete it", "Forward it to a friend"], answer: 2 },
        { question: "What does Incognito mode do?", options: ["Completely hides your identity", "Deletes cookies after session", "Encrypts all traffic", "Prevents all tracking"], answer: 1 }
    ],
    medium: [
        { question: "What does SQL Injection exploit?", options: ["Buffer Overflow", "Database Vulnerabilities", "Network Protocols", "Session Cookies"], answer: 1 },
        { question: "Which protocol is used for sending emails?", options: ["HTTP", "SMTP", "FTP", "DNS"], answer: 1 },
        { question: "Which cybersecurity attack involves encrypting a victim's files for ransom?", options: ["Spyware", "Ransomware", "Adware", "Rootkit"], answer: 1 },
        { question: "What is an example of an insider threat?", options: ["A hacker stealing data", "An employee leaking confidential data", "A virus infecting a system", "A phishing email attack"], answer: 1 },
        { question: "Which of the following helps prevent phishing attacks?", options: ["Using a VPN", "Checking URLs before clicking", "Increasing RAM", "Using Incognito Mode"], answer: 1 },
        { question: "What is a zero-day vulnerability?", options: ["A fully patched system", "An exploit unknown to the vendor", "A virus found on day zero", "A type of encryption"], answer: 1 },
        { question: "Which of the following is NOT an authentication factor?", options: ["Something you know", "Something you have", "Something you are", "Something you like"], answer: 3 },
        { question: "What type of attack is MITM?", options: ["Man In The Middle", "Machine Internet Threat Malware", "Multiple Internet Tracking Mechanism", "Modified Internal TCP Manipulation"], answer: 0 },
        { question: "What does the OSI model stand for?", options: ["Operating System Interface", "Open Systems Interconnection", "Official Security Infrastructure", "Open Security Internet"], answer: 1 },
        { question: "Which tool is commonly used for penetration testing?", options: ["Kali Linux", "Windows Defender", "Notepad++", "Wireshark"], answer: 0 },
        { question: "Which attack tries all possible password combinations?", options: ["DDoS", "Brute Force", "Phishing", "Spyware"], answer: 1 },
        { question: "Which protocol encrypts web traffic?", options: ["HTTP", "TLS/SSL", "FTP", "UDP"], answer: 1 },
        { question: "What is a botnet?", options: ["A network of infected computers", "A type of antivirus", "A firewall feature", "A website security measure"], answer: 0 },
        { question: "Which port is commonly used for HTTPS?", options: ["21", "22", "443", "80"], answer: 2 },
        { question: "What is the primary goal of social engineering?", options: ["Gain unauthorized access", "Improve security", "Speed up network traffic", "Encrypt data"], answer: 0 },
        { question: "What is an IDS?", options: ["Intrusion Detection System", "Internet Data Security", "Identity Digital Signature", "Internet Domain Service"], answer: 0 },
        { question: "Which of the following is NOT a hashing algorithm?", options: ["MD5", "SHA-256", "AES", "SHA-1"], answer: 2 },
        { question: "Which type of malware spreads without user intervention?", options: ["Trojan", "Worm", "Spyware", "Ransomware"], answer: 1 },
        { question: "What is the main function of a honeypot in cybersecurity?", options: ["Store sensitive data", "Attract and monitor attackers", "Encrypt network traffic", "Speed up the internet"], answer: 1 },
        { question: "What does a SOC (Security Operations Center) do?", options: ["Develops websites", "Monitors and defends against cyber threats", "Manages databases", "Increases internet speed"], answer: 1 }
    ],
    hard: [
        { question: "Which encryption algorithm is considered post-quantum secure?", options: ["RSA", "AES", "SHA-256", "Lattice-based Cryptography"], answer: 3 },
        { question: "What does a CVE (Common Vulnerabilities and Exposures) entry represent?", options: ["A security certification", "A unique identifier for vulnerabilities", "A government security policy", "An encrypted database"], answer: 1 },
        { question: "Which of these attacks exploits a race condition?", options: ["SQL Injection", "Buffer Overflow", "Time-of-Check to Time-of-Use (TOCTOU)", "Man-in-the-Middle"], answer: 2 },
        { question: "What is the primary weakness of symmetric encryption?", options: ["Slow processing speed", "Key distribution problem", "Incompatibility with networks", "Low security"], answer: 1 },
        { question: "Which of the following is NOT a valid IPv6 address format?", options: ["2001:db8::ff00:42:8329", "2001::25de::cade", "fe80::1", "::1"], answer: 1 },
        { question: "What is the primary function of a rootkit?", options: ["Steal passwords", "Hide malicious processes", "Encrypt files for ransom", "Monitor network traffic"], answer: 1 },
        { question: "Which penetration testing methodology is most widely used?", options: ["OWASP Top 10", "NIST SP 800-115", "MITRE ATT&CK", "ISO 27001"], answer: 2 },
        { question: "Which type of vulnerability does Buffer Overflow exploit?", options: ["Memory management", "Network configuration", "File system permissions", "User authentication"], answer: 0 },
        { question: "What is the purpose of a Canary Token?", options: ["Detect unauthorized access", "Encrypt communications", "Improve website performance", "Analyze network traffic"], answer: 0 },
        { question: "What is the function of the 'nonce' in cryptographic operations?", options: ["Increase entropy", "Prevent replay attacks", "Generate encryption keys", "Optimize hashing"], answer: 1 },
        { question: "What attack method involves executing malicious code in the browser by injecting scripts?", options: ["CSRF", "XSS", "Man-in-the-Middle", "Brute Force"], answer: 1 },
        { question: "Which tool is used for exploiting vulnerabilities in Metasploit?", options: ["nmap", "Burp Suite", "msfconsole", "Wireshark"], answer: 2 },
        { question: "What is a characteristic of elliptic curve cryptography (ECC)?", options: ["Requires longer keys than RSA", "Is weaker than DES", "Provides strong security with shorter keys", "Does not require a private key"], answer: 2 },
        { question: "Which protocol is used to establish a secure shell connection remotely?", options: ["FTP", "RDP", "SSH", "Telnet"], answer: 2 },
        { question: "Which of the following is NOT a component of the CIA triad?", options: ["Confidentiality", "Integrity", "Availability", "Anonymity"], answer: 3 },
        { question: "What does the term 'sandboxing' refer to in cybersecurity?", options: ["Isolating applications to prevent threats", "Encrypting sensitive data", "Testing vulnerabilities in a production environment", "A type of phishing attack"], answer: 0 },
        { question: "What kind of attack involves intercepting and modifying communication between two parties?", options: ["Replay Attack", "DNS Spoofing", "Man-in-the-Middle", "Social Engineering"], answer: 2 },
        { question: "What is the role of an HSM (Hardware Security Module)?", options: ["Manage network traffic", "Secure cryptographic operations", "Monitor insider threats", "Prevent phishing"], answer: 1 },
        { question: "Which of the following is a technique for detecting hidden malware in memory?", options: ["Signature-based detection", "Heuristic analysis", "Memory forensics", "Penetration testing"], answer: 2 },
        { question: "What does the STIX framework help with in cybersecurity?", options: ["Secure file encryption", "Standardizing threat intelligence sharing", "Automating firewall configuration", "Testing web applications"], answer: 1 }
    ]
};
let currentMode = "";
let currentQuestionIndex = 0;
let currentQuestions = [];

function startQuiz(mode) {
    currentMode = mode;
    currentQuestions = questions[mode];
    currentQuestionIndex = 0;
    document.getElementById("mode-selection").classList.add("hide");
    document.getElementById("quiz-container").classList.remove("hide");
    showQuestion();
}

function showQuestion() {
    let q = currentQuestions[currentQuestionIndex];

    // Restore quiz UI
    let questionCard = document.getElementById("question-card");
    questionCard.innerHTML = `
        <p id="question-number">Question ${currentQuestionIndex + 1}</p>
        <p id="question-text">${q.question}</p>
        <div id="options-container"></div>
    `;

    let optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    q.options.forEach((opt, index) => {
        let btn = document.createElement("button");
        btn.innerText = opt;
        btn.classList.add("option-btn");
        btn.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedIndex) {
    let q = currentQuestions[currentQuestionIndex];
    let options = document.querySelectorAll(".option-btn");

    options[q.answer].classList.add("correct");
    if (selectedIndex !== q.answer) {
        options[selectedIndex].classList.add("wrong");
    }

    // Wait for 1 second, then show answer and encouragement
    setTimeout(() => {
        let questionCard = document.getElementById("question-card");
        questionCard.innerHTML = `
            <p class="encouragement">Great Job! Keep Going! 🎉</p>
        `;

        // Wait for 1.5 seconds, then move to the next question
        setTimeout(nextQuestion, 1000);
    }, 1000);
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        // Displaying completion message
        document.getElementById("question-card").innerHTML = `
            <p class="encouragement">🎉 Congratulations! You completed the quiz! 🎉</p>
            <p>Select another level to test your skills</p>
        `;

    }
}
