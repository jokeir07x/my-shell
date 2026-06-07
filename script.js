<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>HellsKey Breach – Elite OSINT Framework</title>
    <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            user-select: none;
        }

        body {
            overflow: hidden;
            font-family: 'Share Tech Mono', 'Orbitron', monospace;
            background: #000;
            color: #0f0;
        }

        /* Digital Rain Canvas */
        #matrix-canvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            opacity: 0.35;
            pointer-events: none;
        }

        /* Three.js Container */
        #three-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
        }

        .ui-overlay {
            position: absolute;
            z-index: 20;
            width: 100%;
            height: 100%;
            pointer-events: none;
            top: 0;
            left: 0;
        }

        /* Top Bar */
        .top-bar {
            position: absolute;
            top: 20px;
            left: 20px;
            right: 20px;
            display: flex;
            justify-content: space-between;
            pointer-events: auto;
            z-index: 30;
        }

        .badge {
            background: rgba(0,0,0,0.85);
            backdrop-filter: blur(10px);
            padding: 10px 20px;
            border-radius: 40px;
            border-left: 4px solid #0f0;
            font-size: 0.85rem;
            font-weight: bold;
            letter-spacing: 1.5px;
            box-shadow: 0 0 15px rgba(0,255,0,0.4);
            font-family: 'Orbitron', monospace;
        }

        .telegram-link a {
            color: #0f0;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 10px;
            background: rgba(0,0,0,0.85);
            padding: 8px 20px;
            border-radius: 40px;
            border: 1px solid #0f0;
            transition: 0.25s;
            font-weight: bold;
            backdrop-filter: blur(8px);
        }

        .telegram-link a:hover {
            background: #0f0;
            color: #000;
            box-shadow: 0 0 20px #0f0;
            transform: scale(1.02);
        }

        /* Central Two‑Column Container */
        .message-container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 860px;
            max-width: 92%;
            z-index: 45;
            pointer-events: none;
        }

        .typewriter-box {
            background: rgba(0, 0, 0, 0.92);
            backdrop-filter: blur(18px);
            border: 2px solid #0f0;
            border-radius: 38px;
            padding: 20px 24px;
            box-shadow: 0 0 70px rgba(0, 255, 0, 0.4), inset 0 0 20px rgba(0, 255, 0, 0.1);
            pointer-events: auto;
            animation: fadeInGlow 0.8s ease-out;
        }

        @keyframes fadeInGlow {
            from { opacity: 0; transform: translateY(30px); box-shadow: 0 0 0 rgba(0,255,0,0); }
            to { opacity: 1; transform: translateY(0); box-shadow: 0 0 70px rgba(0,255,0,0.4); }
        }

        .typewriter-header {
            font-size: 0.95rem;
            line-height: 1.4;
            color: #0f0;
            text-shadow: 0 0 5px #0f0;
            margin-bottom: 16px;
            text-align: center;
            font-weight: bold;
            letter-spacing: 1px;
        }

        /* Two‑column grid */
        .two-columns {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin: 10px 0 10px;
        }

        .column {
            background: rgba(0, 30, 0, 0.45);
            border-radius: 24px;
            padding: 16px;
            border: 1px solid #2a2;
            backdrop-filter: blur(4px);
            transition: 0.2s;
        }

        .column:hover {
            border-color: #0f0;
            box-shadow: 0 0 12px rgba(0,255,0,0.2);
        }

        .column h3 {
            font-family: 'Orbitron', monospace;
            font-size: 1rem;
            margin-bottom: 14px;
            border-bottom: 1px solid #0f0;
            display: inline-block;
            padding-bottom: 4px;
            letter-spacing: 1px;
        }

        .column ul, .column p {
            font-size: 0.8rem;
            line-height: 1.5;
            list-style: none;
            margin-left: 8px;
        }

        .column li {
            margin-bottom: 8px;
            position: relative;
            padding-left: 16px;
        }

        .column li::before {
            content: "►";
            position: absolute;
            left: 0;
            color: #0f0;
        }

        .stats-row {
            display: flex;
            justify-content: space-between;
            margin-top: 12px;
            font-size: 0.75rem;
            background: rgba(0,20,0,0.6);
            padding: 8px 12px;
            border-radius: 20px;
        }

        .signature-footer {
            margin-top: 18px;
            font-size: 0.75rem;
            color: #0f0;
            text-align: center;
            border-top: 1px solid #0f0;
            padding-top: 12px;
            letter-spacing: 2px;
        }

        /* Leader Message (Bottom Left) */
        .leader-message {
            position: absolute;
            bottom: 25px;
            left: 25px;
            max-width: 340px;
            background: rgba(0,0,0,0.9);
            backdrop-filter: blur(12px);
            border: 1px solid #ff3366;
            border-radius: 20px;
            padding: 12px 16px;
            pointer-events: auto;
            z-index: 35;
            font-size: 0.7rem;
            box-shadow: 0 0 20px rgba(255,51,102,0.3);
            animation: glitchBorder 1.2s infinite alternate;
        }

        .leader-message h4 {
            color: #ff3366;
            margin-bottom: 6px;
            display: flex;
            gap: 8px;
            align-items: center;
            font-family: 'Orbitron', monospace;
            font-size: 0.8rem;
        }

        .leader-message p {
            color: #ffaa88;
            line-height: 1.35;
        }

        @keyframes glitchBorder {
            0% { border-color: #ff3366; box-shadow: 0 0 8px rgba(255,51,102,0.3);}
            100% { border-color: #ff00aa; box-shadow: 0 0 25px rgba(255,0,170,0.6);}
        }

        /* Interactive OSINT Terminal (Bottom Right) */
        .hack-terminal {
            position: absolute;
            bottom: 25px;
            right: 25px;
            width: 480px;
            max-width: calc(100% - 50px);
            background: rgba(0, 0, 0, 0.97);
            backdrop-filter: blur(16px);
            border-radius: 20px;
            border: 1px solid #0f0;
            box-shadow: 0 0 35px rgba(0,255,0,0.4);
            font-family: 'Share Tech Mono', monospace;
            font-size: 0.7rem;
            pointer-events: auto;
            z-index: 35;
            overflow: hidden;
        }

        .term-header {
            background: #0a0a0a;
            padding: 6px 14px;
            border-bottom: 1px solid #0f0;
            display: flex;
            align-items: center;
            gap: 8px;
            color: #0f0;
            font-weight: bold;
            font-size: 0.75rem;
        }

        .term-body {
            padding: 10px;
            height: 250px;
            overflow-y: auto;
            white-space: pre-wrap;
            background: #000000bb;
        }

        .term-line {
            margin: 4px 0;
            border-left: 2px solid #0f0;
            padding-left: 8px;
            font-size: 0.68rem;
        }
        .term-line.success { color: #5eff7a; border-left-color: #2eff7a; text-shadow: 0 0 2px #0f0; }
        .term-line.error { color: #ff8888; border-left-color: #ff3366; }
        .term-line.cyan { color: #55ffff; border-left-color: #0ff; }

        .term-input-line {
            display: flex;
            padding: 6px 12px;
            border-top: 1px dashed #0f0;
            background: #050505;
        }

        .term-prompt {
            color: #0f0;
            margin-right: 8px;
            white-space: nowrap;
        }

        .term-input {
            background: transparent;
            border: none;
            color: #0f0;
            font-family: monospace;
            flex: 1;
            outline: none;
            font-size: 0.7rem;
        }

        /* Digital stats box (top right) */
        .digital-stats {
            position: absolute;
            top: 90px;
            right: 25px;
            background: rgba(0,0,0,0.75);
            backdrop-filter: blur(8px);
            padding: 8px 14px;
            border-radius: 20px;
            font-size: 0.65rem;
            border-right: 3px solid #0f0;
            pointer-events: none;
            z-index: 30;
            text-align: right;
            font-family: monospace;
        }

        /* Responsive */
        @media (max-width: 900px) {
            .two-columns { grid-template-columns: 1fr; gap: 12px; }
            .leader-message { max-width: 260px; font-size: 0.6rem; bottom: 15px; left: 15px; }
            .hack-terminal { width: 340px; bottom: 15px; right: 15px; }
            .message-container { width: 95%; }
            .typewriter-box { padding: 16px; }
            .column h3 { font-size: 0.9rem; }
            .column ul li { font-size: 0.7rem; }
            .digital-stats { top: 75px; right: 15px; font-size: 0.55rem; }
        }
    </style>
</head>
<body>

    <canvas id="matrix-canvas"></canvas>
    <div id="three-container"></div>

    <div class="ui-overlay">
        <div class="top-bar">
            <div class="badge"><i class="fas fa-brain"></i> HELLSKEY BREACH // ELITE OSINT FRAMEWORK</div>
            <div class="telegram-link"><a href="https://t.me/HellsKey" target="_blank"><i class="fab fa-telegram-plane"></i> @HellsKey</a></div>
        </div>

        <div class="digital-stats">
            <div><i class="fas fa-globe"></i> 3D EARTH</div>
            <div><i class="fas fa-dice-d6"></i> <span id="hexStat">0x8F3A_BE7C</span></div>
            <div><i class="fas fa-shield-haltered"></i> OSINT ACTIVE</div>
        </div>

        <!-- Central Two‑Column OSINT Box -->
        <div class="message-container">
            <div class="typewriter-box">
                <div class="typewriter-header">
╔════════════════════════════════════════════════════════════════════════════╗<br>
║          HELLSKEY BREACH – ELITE OSINT FRAMEWORK (v9.0)                     ║<br>
║          AUTOMATED INTELLIGENCE | MASS DATA EXTRACTION | DARK WEB SCRAPING  ║<br>
╚════════════════════════════════════════════════════════════════════════════╝
                </div>

                <div class="two-columns">
                    <!-- Left Column: Features & Stats -->
                    <div class="column">
                        <h3><i class="fas fa-chart-line"></i> OSINT CORE</h3>
                        <ul>
                            <li>Automated mass data extraction (domains, social media, darkweb)</li>
                            <li>Real‑time intelligence gathering & correlation engine</li>
                            <li>Zero‑day exploit integration (23+ CVEs) – automatic deployment</li>
                            <li>API‑ready: integrate with your own tools via REST</li>
                        </ul>
                        <div class="stats-row">
                            <span><i class="fas fa-satellite-dish"></i> Active sensors: 12</span>
                            <span><i class="fas fa-database"></i> Indexed targets: 1,898,888+</span>
                            <span><i class="fas fa-bug"></i> Exploits ready: 23</span>
                        </div>
                    </div>

                    <!-- Right Column: Active Exploits & Commands -->
                    <div class="column">
                        <h3><i class="fas fa-skull-crossbones"></i> ACTIVE EXPLOITS</h3>
                        <ul>
                            <li>SaveTempo (users_can_register + default_role)</li>
                            <li>WholesaleX (wsx_install plugin install)</li>
                            <li>WooCommerce Payments (ID brute + RCE + shell)</li>
                            <li>CVE-2025-6440, CVE-2025-13342, CVE-2025-14364, CVE-2025-15030</li>
                            <li>CVE-2025-15521, CVE-2025-29009, CVE-2025-39459, CVE-2025-47539</li>
                            <li>CVE-2025-49901, CVE-2025-53580, CVE-2026-0920, CVE-2025-2563</li>
                            <li>CVE-2025-13390, CVE-2025-14998, CVE-2025-68860, GutenKit</li>
                            <li>CVE-2025-68001, CVE-2026-2631, CVE-2026-1357, NxadminBypass</li>
                        </ul>
                    </div>
                </div>

                <div class="signature-footer">
                    —— HellsKey Breach · Elite OSINT Division ——
                </div>
            </div>
        </div>

        <!-- Team Leader Message (Left) -->
        <div class="leader-message">
            <h4><i class="fas fa-skull"></i> DARK 07X / HELLSKEY COUNCIL <i class="fas fa-bolt"></i></h4>
            <p>► Ultimate OSINT & zero‑day deployment. We provide unmatched intelligence.<br>
            <span style="color:#ff3366;">◆ Real‑time darkweb monitoring | Automated exploitation | Full red team support ◆</span></p>
            <div style="text-align:left; margin-top:6px;">— Jokeir07x, Chief Architect —</div>
        </div>

        <!-- Interactive OSINT Terminal (Right) -->
        <div class="hack-terminal" id="hackTerminal">
            <div class="term-header">
                <i class="fas fa-terminal"></i> <span>HELLSKEY OSINT TERMINAL // DARK 07x CONSOLE</span>
                <i class="fas fa-times-circle" id="closeTermBtn" style="margin-left:auto; cursor:pointer;"></i>
            </div>
            <div class="term-body" id="termBody"></div>
            <div class="term-input-line">
                <span class="term-prompt">osint@hellskey:~$</span>
                <input type="text" class="term-input" id="termInput" autofocus>
                <span class="cursor-blink" style="width:6px; height:12px;"></span>
            </div>
        </div>
    </div>

    <script type="importmap">
        {
            "imports": {
                "three": "https://unpkg.com/three@0.128.0/build/three.module.js",
                "three/addons/": "https://unpkg.com/three@0.128.0/examples/jsm/"
            }
        }
    </script>

    <script type="module">
        import * as THREE from 'three';
        import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

        // --- 3D Scene Setup ---
        const container = document.getElementById('three-container');
        const scene = new THREE.Scene();
        scene.background = null;
        scene.fog = new THREE.FogExp2(0x000000, 0.0018);

        const camera = new THREE.PerspectiveCamera(43, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 0.2, 5.4);
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);

        // Lighting
        const ambient = new THREE.AmbientLight(0x112211);
        scene.add(ambient);
        const dirLight = new THREE.DirectionalLight(0xffffff, 1.3);
        dirLight.position.set(4, 8, 5);
        scene.add(dirLight);
        const greenFill = new THREE.PointLight(0x33ff66, 0.65);
        greenFill.position.set(1.5, 1.2, 2.5);
        scene.add(greenFill);
        const backLight = new THREE.PointLight(0x2266ff, 0.5);
        backLight.position.set(-2, 1, -3);
        scene.add(backLight);

        // Earth Sphere
        const earthGeo = new THREE.SphereGeometry(1.22, 128, 128);
        const texLoader = new THREE.TextureLoader();
        const earthMap = texLoader.load('https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg');
        const earthSpec = texLoader.load('https://threejs.org/examples/textures/planets/earth_specular_2048.jpg');
        const earthNorm = texLoader.load('https://threejs.org/examples/textures/planets/earth_normal_2048.jpg');
        const cloudMap = texLoader.load('https://threejs.org/examples/textures/planets/earth_clouds_1024.png');
        const earthMat = new THREE.MeshPhongMaterial({ map: earthMap, specularMap: earthSpec, specular: new THREE.Color('grey'), shininess: 5, normalMap: earthNorm });
        const earth = new THREE.Mesh(earthGeo, earthMat);
        scene.add(earth);
        const cloudGeo = new THREE.SphereGeometry(1.23, 128, 128);
        const cloudMat = new THREE.MeshPhongMaterial({ map: cloudMap, transparent: true, opacity: 0.12, blending: THREE.AdditiveBlending });
        const clouds = new THREE.Mesh(cloudGeo, cloudMat);
        scene.add(clouds);

        // Stars field
        const starGeo = new THREE.BufferGeometry();
        const starCount = 2800;
        const starPos = new Float32Array(starCount * 3);
        for (let i = 0; i < starCount; i++) {
            starPos[i*3] = (Math.random() - 0.5) * 1000;
            starPos[i*3+1] = (Math.random() - 0.5) * 800;
            starPos[i*3+2] = (Math.random() - 0.5) * 150 - 50;
        }
        starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
        const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.16 }));
        scene.add(stars);

        // CSS2D Renderer for Team Logo + Text
        const css2DRenderer = new CSS2DRenderer();
        css2DRenderer.setSize(window.innerWidth, window.innerHeight);
        css2DRenderer.domElement.style.position = 'absolute';
        css2DRenderer.domElement.style.top = '0px';
        css2DRenderer.domElement.style.left = '0px';
        css2DRenderer.domElement.style.pointerEvents = 'none';
        css2DRenderer.domElement.style.zIndex = '10';
        container.appendChild(css2DRenderer.domElement);

        // 3D Team Label
        const teamDiv = document.createElement('div');
        teamDiv.innerHTML = '<span style="font-size: 1.8rem; font-weight:900; letter-spacing: 4px; text-shadow: 0 0 20px #0f0, 0 0 35px #0f0;">HELLSKEY BREACH</span><br><span style="font-size:0.85rem; color:#aff;">⚡ ELITE OSINT FRAMEWORK ⚡</span>';
        teamDiv.style.background = 'rgba(0, 12, 0, 0.75)';
        teamDiv.style.backdropFilter = 'blur(15px)';
        teamDiv.style.border = '2px solid #0f0';
        teamDiv.style.borderRadius = '40px';
        teamDiv.style.padding = '12px 24px';
        teamDiv.style.textAlign = 'center';
        teamDiv.style.fontFamily = "'Orbitron', 'Share Tech Mono', monospace";
        teamDiv.style.fontWeight = 'bold';
        teamDiv.style.color = '#0f0';
        teamDiv.style.boxShadow = '0 0 45px rgba(0,255,0,0.7)';
        teamDiv.style.whiteSpace = 'nowrap';
        const teamLabel3D = new CSS2DObject(teamDiv);
        teamLabel3D.position.set(0, -0.2, 1.9);
        scene.add(teamLabel3D);

        // Circular Team Logo (from IBB)
        const logoTexture = texLoader.load('https://i.ibb.co/21SG8xZZ/helmlskey.jpg');
        const logoMaterial = new THREE.SpriteMaterial({ map: logoTexture, transparent: true, blending: THREE.AdditiveBlending });
        const logoSprite = new THREE.Sprite(logoMaterial);
        logoSprite.scale.set(0.7, 0.7, 1);
        logoSprite.position.set(0, -1.15, 1.55);
        scene.add(logoSprite);
        
        // Floating digital rings
        const digitalRing = new THREE.Group();
        const hexChars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','#','@','%','&','$'];
        const particleCount = 220;
        const particles = [];
        for (let i = 0; i < particleCount; i++) {
            const canvas = document.createElement('canvas');
            canvas.width = 36;
            canvas.height = 36;
            const ctx = canvas.getContext('2d');
            const updateDigit = () => {
                ctx.clearRect(0, 0, 36, 36);
                ctx.font = 'bold 22px "Share Tech Mono"';
                ctx.fillStyle = `#${Math.floor(0x33 + Math.random() * 0xCC).toString(16)}ff44`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                const digit = hexChars[Math.floor(Math.random() * hexChars.length)];
                ctx.fillText(digit, 18, 18);
                texture.needsUpdate = true;
            };
            const texture = new THREE.CanvasTexture(canvas);
            const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true, blending: THREE.AdditiveBlending });
            const sprite = new THREE.Sprite(spriteMat);
            const angle = (i / particleCount) * Math.PI * 2;
            const radius = 1.48;
            const yOffset = Math.sin(angle * 2.5) * 0.22;
            sprite.position.x = Math.cos(angle) * radius;
            sprite.position.z = Math.sin(angle) * radius;
            sprite.position.y = yOffset + 0.05;
            sprite.scale.set(0.2, 0.2, 1);
            digitalRing.add(sprite);
            particles.push({ sprite, updateDigit, interval: setInterval(updateDigit, 350 + Math.random() * 550) });
        }
        scene.add(digitalRing);

        const outerRing = new THREE.Group();
        for (let i = 0; i < 140; i++) {
            const canvas = document.createElement('canvas');
            canvas.width = 28;
            canvas.height = 28;
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = '#0f0';
            ctx.font = '16px monospace';
            ctx.fillText(Math.floor(Math.random()*16).toString(16), 8, 18);
            const tex = new THREE.CanvasTexture(canvas);
            const spr = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, blending: THREE.AdditiveBlending }));
            const rad = (i / 140) * Math.PI * 2;
            const r = 1.98;
            spr.position.set(Math.cos(rad) * r, Math.sin(rad * 2.2) * 0.42, Math.sin(rad) * r);
            spr.scale.set(0.14, 0.14, 1);
            outerRing.add(spr);
        }
        scene.add(outerRing);

        let animTime = 0;
        function animateRings() {
            requestAnimationFrame(animateRings);
            animTime += 0.014;
            digitalRing.rotation.y += 0.009;
            digitalRing.rotation.x = Math.sin(animTime * 0.6) * 0.06;
            digitalRing.rotation.z = Math.cos(animTime * 0.35) * 0.04;
            outerRing.rotation.y -= 0.006;
            outerRing.rotation.x += 0.004;
            teamLabel3D.position.y = -0.2 + Math.sin(animTime * 1.3) * 0.025;
            logoSprite.position.y = -1.15 + Math.abs(Math.sin(animTime * 1.5)) * 0.03;
        }
        animateRings();

        function animateEarth() {
            requestAnimationFrame(animateEarth);
            earth.rotation.y += 0.0025;
            clouds.rotation.y += 0.0028;
            stars.rotation.y += 0.00018;
            camera.position.x += (0 - camera.position.x) * 0.02;
            camera.position.y += (0.08 - camera.position.y) * 0.02;
            camera.lookAt(0, -0.05, 0);
            renderer.render(scene, camera);
            css2DRenderer.render(scene, camera);
        }
        animateEarth();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            css2DRenderer.setSize(window.innerWidth, window.innerHeight);
        });

        // Digital Rain Effect
        const matrixCanvas = document.getElementById('matrix-canvas');
        const mCtx = matrixCanvas.getContext('2d');
        let width, height, columns, drops = [];
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&*<>/\\|";
        function resizeMatrix() {
            width = window.innerWidth;
            height = window.innerHeight;
            matrixCanvas.width = width;
            matrixCanvas.height = height;
            columns = Math.floor(width / 18);
            drops = Array(columns).fill(1);
        }
        function drawMatrix() {
            mCtx.fillStyle = 'rgba(0,0,0,0.045)';
            mCtx.fillRect(0, 0, width, height);
            mCtx.fillStyle = '#0f0';
            mCtx.font = '17px "Share Tech Mono"';
            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                mCtx.fillText(text, i * 18, drops[i] * 18);
                if (drops[i] * 18 > height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            }
        }
        resizeMatrix();
        setInterval(drawMatrix, 55);
        window.addEventListener('resize', resizeMatrix);

        // OSINT Terminal Logic
        const termBody = document.getElementById('termBody');
        const termInput = document.getElementById('termInput');
        const closeTermBtn = document.getElementById('closeTermBtn');
        
        function addTermLine(text, className = 'term-line') {
            const line = document.createElement('div');
            line.className = className;
            line.innerHTML = text;
            termBody.appendChild(line);
            termBody.scrollTop = termBody.scrollHeight;
        }
        
        setTimeout(() => {
            addTermLine('> [HELLSKEY BREACH] OSINT framework online...', 'term-line success');
            addTermLine('> Global intelligence grid activated. Data streams live.', 'term-line success');
            addTermLine('> 🔓 Darkweb crawlers engaged. Tor exit nodes routed.', 'term-line cyan');
            addTermLine('> ⚡ Available exploits: 23 | RCE, LFI, SQLi, File Uploads', 'term-line cyan');
            addTermLine('> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'term-line');
            addTermLine('> █▓▒░ OSINT MODULES ACTIVE ░▒▓█', 'term-line cyan');
            addTermLine('> ✦ Domain scanner | Social media profiler | Email harvester', 'term-line success');
            addTermLine('> 📲 Admin : https://t.me/HellsKey', 'term-line');
            addTermLine('> 📢 Channel : https://t.me/+mh91Ns55-6kwNDgx', 'term-line');
            addTermLine('> 🌐 Darknet Site : http://2dpg7coa4gi4rw2pjaor4cwwcelspqlpt2yvmu6avgk6mq3jmwz6pxad.onion', 'term-line');
            addTermLine('> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'term-line');
            addTermLine('> Type \'help\' for available OSINT commands.', 'term-line');
        }, 500);
        
        termInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const cmd = termInput.value.trim().toLowerCase();
                addTermLine(`osint@hellskey:~$ ${cmd}`);
                if (cmd === 'help') {
                    addTermLine('OSINT commands: scan, harvest, darkweb, exploit-list, status, clear, whoami, team', 'term-line cyan');
                } else if (cmd === 'whoami') {
                    addTermLine('You are connected to HellsKey Breach – Elite OSINT Framework. Role: Operator', 'term-line success');
                } else if (cmd === 'clear') {
                    termBody.innerHTML = '';
                } else if (cmd === 'scan') {
                    addTermLine('>> Scanning darknet surfaces... 1,230 new .onion services discovered.', 'term-line success');
                } else if (cmd === 'harvest') {
                    addTermLine('>> Data harvesting initiated: 4,500 email addresses, 1,200 passwords leaked.', 'term-line error');
                } else if (cmd === 'darkweb') {
                    addTermLine('Darknet Mirror: http://2dpg7coa4gi4rw2pjaor4cwwcelspqlpt2yvmu6avgk6mq3jmwz6pxad.onion', 'term-line');
                } else if (cmd === 'exploit-list') {
                    addTermLine('Active exploits: SaveTempo, WholesaleX, WooCommerce Payments RCE, CVE-2025-6440, CVE-2025-13342, CVE-2025-14364, CVE-2025-15030, CVE-2025-15521, CVE-2025-29009, CVE-2025-39459, CVE-2025-47539, CVE-2025-49901, CVE-2025-53580, CVE-2026-0920, CVE-2025-2563, CVE-2025-13390, CVE-2025-14998, CVE-2025-68860, GutenKit, CVE-2025-68001, CVE-2026-2631, CVE-2026-1357, NxadminBypass.', 'term-line cyan');
                } else if (cmd === 'status') {
                    addTermLine('OSINT Framework: ACTIVE | Sensors: 12 | Domains indexed: 1,898,888+ | Exploits loaded: 23', 'term-line success');
                } else if (cmd === 'team') {
                    addTermLine('TEAM: HellsKey Breach | DARK 07x Council | Leader: Jokeir07x | Specialization: OSINT & Zero‑Day Exploitation', 'term-line cyan');
                } else if (cmd !== '') {
                    addTermLine(`Unknown command: ${cmd}. Type 'help'`, 'term-line error');
                }
                termInput.value = '';
                termBody.scrollTop = termBody.scrollHeight;
            }
        });
        
        closeTermBtn.addEventListener('click', () => {
            document.getElementById('hackTerminal').style.display = 'none';
        });
        
        // Random hex updates for stats panel
        setInterval(() => {
            const hexSpan = document.getElementById('hexStat');
            if (hexSpan) hexSpan.innerText = '0x' + Math.floor(Math.random() * 0xFFFFFF).toString(16).toUpperCase();
        }, 1800);
    </script>
</body>
</html>
