document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(TextPlugin);

    // --- 0. HACKER CORE ---
    const body = document.body;
    const ultraFrame = document.querySelector('.ultra-frame');
    const mCanvas = document.getElementById('matrix-canvas');
    const pCanvas = document.getElementById('particle-canvas');
    const fragmentContainer = document.getElementById('fragment-container');
    const logContainer = document.getElementById('log-container');
    const mctx = mCanvas.getContext('2d');
    const pctx = pCanvas.getContext('2d');
    const audio = document.getElementById('main-audio');

    const songs = [
        { title: "SHAPE OF YOU", file: "Shape_of_You.mp3" },
        { title: "THE NIGHT WE MET", file: "The_Night_We_Met.mp3" },
        { title: "GINSENG STRIP", file: "Ginseng_Strip.mp3" }
    ];

    let currentTrackIdx = 0;
    let isPlaying = false;
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let lastMouse = { x: 0, y: 0 };
    let mouseVel = { x: 0, y: 0 };
    let frameRot = { x: 0, y: 0 };
    let intensity = 0;

    // Initialize Audio
    audio.src = songs[currentTrackIdx].file;
    audio.volume = 1.0;

    // --- 1. THE SINGULARITY ENTRANCE (ULTRA EXTREME) ---
    const entrance = gsap.timeline();
    const statusText = document.querySelector('.loader-status');
    const miniTerminal = document.querySelector('.loader-terminal-mini');
    const fragmentPings = document.querySelectorAll('.fragment-ping');

    // Hide fragment pings initially
    gsap.set(fragmentPings, { opacity: 0, scale: 0 });

    const hackingLog = [
        "BOOTSTRAPPING NEURAL CORE...",
        "DECRYPTING MEMORY BLOCKS...",
        "BYPASSING KERNEL SECURITY...",
        "INJECTING POLYMORPHIC CODE...",
        "STABILIZING REALITY MATRIX...",
        "AUTHORIZING QUANTUM LINK..."
    ];

    const terminalLines = [
        "> ssh root@singularity -p 2244",
        "> Requesting encrypted handshake...",
        "> Cipher: AES-256-GCM [ACTIVE]",
        "> Overriding local authorization...",
        "> Breach depth: 88.4% [CRITICAL]",
        "> Rendering holographic viewport...",
        "> Handshake complete. Accessing..."
    ];

    entrance
        .to('.loader-progress', {
            width: '100%',
            duration: 5,
            ease: "slow(0.7, 0.7, false)", // Non-linear surge
            onUpdate: function () {
                const progress = Math.round(this.progress() * 100);
                const logIdx = Math.min(Math.floor(this.progress() * hackingLog.length), hackingLog.length - 1);
                const termIdx = Math.min(Math.floor(this.progress() * terminalLines.length), terminalLines.length - 1);

                if (statusText) statusText.innerText = `${hackingLog[logIdx]} ${progress}%`;
                if (miniTerminal) miniTerminal.innerText = terminalLines[termIdx];

                // Sudden HUD Surges
                if (Math.random() > 0.94) {
                    const ping = fragmentPings[Math.floor(Math.random() * fragmentPings.length)];
                    gsap.fromTo(ping,
                        { x: (Math.random() - 0.5) * 800, y: (Math.random() - 0.5) * 800, opacity: 1, scale: 0 },
                        { scale: 5, opacity: 0, duration: 0.8 }
                    );

                    // Screen shake & flash
                    gsap.to('.loader-wrapper', { x: (Math.random() - 0.5) * 10, duration: 0.05, repeat: 3, yoyo: true });
                    gsap.to('.loader-glitch-overlay', { opacity: 0.1, duration: 0.05, yoyo: true, repeat: 1 });
                }

                // Logo Tremor
                if (Math.random() > 0.97) {
                    gsap.to('.loader-logo-container', { skewX: (Math.random() - 0.5) * 40, duration: 0.04, yoyo: true, repeat: 1 });
                }
            }
        })
        .to('.loader-text', {
            text: "ACCESS_GRANTED",
            duration: 0.5,
            color: "#fff",
            textShadow: "0 0 50px #fff"
        })
        .to('.loader-wrapper', {
            autoAlpha: 0,
            scale: 2,
            duration: 1.5,
            ease: 'expo.inOut',
            onStart: () => {
                // Final explosive data burst
                gsap.to('.loader-hud-rings', { scale: 10, opacity: 0, duration: 1 });
            }
        })
        .set('.ultra-frame', { opacity: 1, visibility: "visible", z: 0, scale: 1, rotationX: 0 })
        .set('.bento-box', { opacity: 1, visibility: "visible", scale: 1 })
        .from('.content-grid', {
            opacity: 0,
            y: 100,
            rotationX: -45,
            duration: 2,
            ease: 'expo.out'
        }, "-=1");






    // --- 2. HACKER BACKGROUND ENGINE ---
    function initCanvases() {
        mCanvas.width = pCanvas.width = window.innerWidth;
        mCanvas.height = pCanvas.height = window.innerHeight;
    }
    initCanvases();
    window.addEventListener('resize', initCanvases);
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });


    // Matrix Char Stream
    const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789アあイいウうエえオおカかキきクくケけコこ";
    let mStreams = Array.from({ length: 150 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        speed: 3 + Math.random() * 8,
        chars: []
    }));

    function drawWorld() {
        mctx.fillStyle = "rgba(0, 0, 0, 0.2)"; // Sharper trail
        mctx.fillRect(0, 0, mCanvas.width, mCanvas.height);

        mctx.font = "14px monospace";
        mctx.shadowBlur = 15;
        mctx.shadowColor = "#00ff41";

        mStreams.forEach(s => {
            const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
            mctx.fillStyle = isPlaying ? "#FFF" : "#00ff41";
            mctx.fillText(char, s.x, s.y);

            s.y += s.speed * (1 + intensity * 3);
            if (s.y > window.innerHeight) {
                s.y = -20;
                s.x = Math.random() * window.innerWidth;
            }
        });

        // Neural Swarm (Toxic Green) - More Reactive
        pctx.clearRect(0, 0, pCanvas.width, pCanvas.height);
        binaryParticles.forEach((p, i) => {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Stronger pull when intensity is high
            const force = (500 + intensity * 1000);
            if (dist < force) {
                p.vx += (dx / dist) * (1.2 + intensity * 2);
                p.vy += (dy / dist) * (1.2 + intensity * 2);
            }

            p.x += p.vx * 0.95;
            p.y += p.vy * 0.95;
            p.vx *= 0.94;
            p.vy *= 0.94;

            pctx.fillStyle = isPlaying ? "#FFF" : "#00ff41";
            pctx.font = (10 + intensity * 5) + "px monospace";
            pctx.fillText(Math.random() > 0.9 ? "1" : "0", p.x, p.y);
        });
    }

    let binaryParticles = Array.from({ length: 400 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 15,
        vy: (Math.random() - 0.5) * 15
    }));


    // --- 3. TERMINAL LOG STREAM ---
    const logMessages = [
        "BYPASSING FIREWALL...",
        "ACCESSING CORE DATA...",
        "ENCRYPTING CONNECTION...",
        "REALITY_OVERRIDE_ACTIVE",
        "SYNCING NEURAL LINK...",
        "PACKET_INTERCEPT_SUCCESS",
        "VOID_BREACH_DETECTED",
        "SYSTEM_INTENSITY_LEVEL_MAX"
    ];

    function updateLogs() {
        const line = document.createElement('div');
        line.textContent = `> ${logMessages[Math.floor(Math.random() * logMessages.length)]} [${Math.random().toString(16).slice(2, 8)}]`;
        logContainer.appendChild(line);
        if (logContainer.childNodes.length > 30) logContainer.removeChild(logContainer.firstChild);
        logContainer.scrollTop = logContainer.scrollHeight;
    }
    setInterval(updateLogs, 500);

    // --- 4. TEXT DECRYPTION EFFECT ---
    function decryptText(el, originalText) {
        let iterations = 0;
        const interval = setInterval(() => {
            el.innerText = originalText.split("").map((char, index) => {
                if (index < iterations) return originalText[index];
                return matrixChars[Math.floor(Math.random() * matrixChars.length)];
            }).join("");
            if (iterations >= originalText.length) clearInterval(interval);
            iterations += 1 / 3;
        }, 30);
    }

    document.querySelectorAll('.bento-box').forEach(box => {
        const title = box.querySelector('h3, h1');
        if (title) {
            const original = title.innerText;
            box.addEventListener('mouseenter', () => decryptText(title, original));
        }
    });

    // --- 5. THE MASTER RENDER LOOP ---
    function render() {
        drawWorld();
        intensity += (isPlaying ? 1 - intensity : 0 - intensity) * 0.05;

        mouseVel.x = mouse.x - lastMouse.x;
        mouseVel.y = mouse.y - lastMouse.y;

        // Unified 3D Motion Logic
        const time = Date.now() / 1000;

        // Stabilized Mouse Tilt
        const tx = (mouse.y / window.innerHeight - 0.5) * -20;
        const ty = (mouse.x / window.innerWidth - 0.5) * 20;

        frameRot.x += (tx - frameRot.x) * 0.05;
        frameRot.y += (ty - frameRot.y) * 0.05;

        // Glitch Trigger
        const glitchChance = Math.random() > 0.99 ? 1 : 0;
        const glitchScale = 1 + (glitchChance * 0.02);


        gsap.set(ultraFrame, {
            rotationX: frameRot.x,
            rotationY: frameRot.y,
            z: Math.sin(time) * 30,
            scale: glitchScale,
            skewX: glitchChance * (Math.random() - 0.5) * 5,
            opacity: 1,
            visibility: "visible"
        });







        gsap.set('#cursor-dot', { x: mouse.x, y: mouse.y, xPercent: -50, yPercent: -50 });
        gsap.to('#cursor-outline', {
            x: mouse.x, y: mouse.y,
            xPercent: -50, yPercent: -50,
            width: 25 + intensity * 80 + (glitchChance * 50),
            height: 25 + intensity * 80 + (glitchChance * 50),
            duration: 0.1
        });
        gsap.to('#cursor-ghost', {
            x: mouse.x, y: mouse.y,
            xPercent: -50, yPercent: -50,
            duration: 0.2,
            ease: 'expo.out'
        });

        lastMouse.x = mouse.x;
        lastMouse.y = mouse.y;

        requestAnimationFrame(render);
    }

    render();

    // --- 6. INTERACTION & MUSIC ---
    const playBtn = document.getElementById('play-pause');
    const trackTitle = document.getElementById('current-track');
    const listItems = document.querySelectorAll('.list-item');

    function triggerPulse() {
        const pulse = document.createElement('div');
        pulse.className = 'neural-pulse-ring';
        document.body.appendChild(pulse);
        gsap.fromTo(pulse, { width: 0, height: 0, opacity: 1 }, {
            width: 15000, height: 15000,
            opacity: 0,
            duration: 2,
            ease: 'expo.out',
            onComplete: () => pulse.remove()
        });
    }

    function loadTrack(idx) {
        currentTrackIdx = idx;
        audio.pause();
        audio.src = songs[idx].file;
        audio.load();
        trackTitle.textContent = songs[idx].title;
        listItems.forEach(item => item.classList.remove('active'));
        listItems[idx].classList.add('active');
        if (isPlaying) audio.play();
        triggerPulse();
    }

    playBtn.addEventListener('click', () => {
        if (!isPlaying) {
            audio.play().then(() => {
                isPlaying = true;
                playBtn.textContent = "DECRYPTION_ON";
            }).catch(() => alert("Click page first to unlock sound!"));
        } else {
            isPlaying = false;
            audio.pause();
            playBtn.textContent = "STABLE_LINK";
        }
    });

    listItems.forEach((item, i) => item.addEventListener('click', () => loadTrack(i)));
    document.getElementById('next').addEventListener('click', () => loadTrack((currentTrackIdx + 1) % songs.length));
    document.getElementById('prev').addEventListener('click', () => loadTrack((currentTrackIdx - 1 + songs.length) % songs.length));

    window.addEventListener('mousedown', (e) => {
        gsap.fromTo('body', { filter: 'brightness(15) invert(1) contrast(10)' }, { filter: 'none', duration: 1, ease: 'expo.out' });
        triggerPulse();
        // Spall fragments
        for (let i = 0; i < 30; i++) {
            const f = document.createElement('div');
            f.className = 'shard';
            f.style.backgroundColor = '#00ff41';
            body.appendChild(f);
            gsap.set(f, { x: e.clientX, y: e.clientY });
            gsap.to(f, {
                x: e.clientX + (Math.random() - 0.5) * 3000,
                y: e.clientY + (Math.random() - 0.5) * 3000,
                opacity: 0,
                duration: 1,
                onComplete: () => f.remove()
            });
        }
    });

    setInterval(() => {
        const el = document.getElementById('real-time');
        if (el) el.textContent = new Date().toLocaleTimeString();
    }, 1000);
});
