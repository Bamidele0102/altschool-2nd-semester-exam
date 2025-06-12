// Update navigation highlighting
function updateNavigation() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        if (currentPath === link.getAttribute('href')) {
            link.classList.add('active');
        } else if (currentPath === '/' && link.getAttribute('href') === '/') {
            link.classList.add('active');
        }
    });
}

// Scroll animations
document.addEventListener('DOMContentLoaded', () => {
    updateNavigation();

    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
    
    // Terminal typewriter effect
    const commands = [
        "kubectl get pods --namespace production",
        "terraform apply -auto-approve",
        "aws ec2 describe-instances --query 'Reservations[*].Instances[*].{Instance:InstanceId}'",
        "python optimize.py --env production",
        "git push origin main"
    ];
    
    let currentCommand = 0;
    let charIndex = 0;
    let isDeleting = false;
    let terminalOutput = "";
    const terminal = document.getElementById('terminal-output');
    
    function typeCommand() {
        if (!terminal) return;
        const command = commands[currentCommand];
        
        if (!isDeleting && charIndex <= command.length) {
            terminalOutput = command.substring(0, charIndex);
            charIndex++;
            setTimeout(typeCommand, 100);
        } else if (isDeleting && charIndex >= 0) {
            terminalOutput = command.substring(0, charIndex);
            charIndex--;
            setTimeout(typeCommand, 50);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                currentCommand = (currentCommand + 1) % commands.length;
            }
            setTimeout(typeCommand, 1200);
        }
        
        terminal.innerHTML = `
            <div class="mb-2">
                <span class="text-green-400">$ </span>
                <span>${terminalOutput}</span><span class="blink">_</span>
            </div>
            <div class="text-blue-300">
                ✓ Command executed successfully
            </div>
        `;
    }
    
    // Start the terminal effect after a delay
    setTimeout(typeCommand, 2000);
    
    // Tab switching for code editor
    const codeTabs = document.querySelectorAll('.code-tab');
    codeTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            codeTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');
        });
    });
});
