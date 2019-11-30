(function(){
    var threeJs = document.createElement('script');
    threeJs.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/95/three.min.js';
    document.body.appendChild(threeJs);

    threeJs.onload = function threeRender() {
        const canvas = window.sceneCanvas;
        const getCanvasSize = () => { return { w: canvas.parentElement.clientWidth, h: canvas.parentElement.clientHeight } };
        const darkmagenta = '#3c0328';
        const dullpink = '#9d3472';
        const electric = '#f0c54f';
        const peach = '#dd6a65';
        const hotpink = '#d13190';
        const cyan = '#10c6bd';
        const sunTop = '#ed23af';
        const sunMiddle = '#ffafa3';
        const sunBottom = '#ffffe9';
        const size = getCanvasSize();
        const width = size.w;
        const height = size.h;

        // Start THREE.js
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);

        camera.position.set(0, 1, 60); // Raise right above horizon
        // camera.lookAt(scene.position);
        camera.lookAt(new THREE.Vector3(0,.5,0)); // Move down so the grid's far end meets the horizon
        var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
        renderer.setSize(width, height);

        var division = 80;
        var limit = 100;
        var grid = new THREE.GridHelper(limit * 2, division, cyan, cyan);

        var moveable = [];
        for (let i = 0; i <= division; i++) {
            moveable.push(1, 1, 0, 0); // move horizontal lines only (1 - point is moveable)
        }
        grid.geometry.addAttribute(
            "moveable",
            new THREE.BufferAttribute(new Uint8Array(moveable), 1)
        );
        grid.material = new THREE.ShaderMaterial({
            uniforms: {
                time: {
                    value: 0
                },
                limits: {
                    value: new THREE.Vector2(-limit, limit)
                },
                speed: {
                    value: 5
                }
            },
            vertexShader: `
                uniform float time;
                uniform vec2 limits;
                uniform float speed;
                
                attribute float moveable;
                
                varying vec3 vColor;
            
                void main() {
                vColor = color;
                float limLen = limits.y - limits.x;
                vec3 pos = position;
                if (floor(moveable + 0.5) > 0.5){ // if a point has "moveable" attribute = 1 
                    float dist = speed * time;
                    float currPos = mod((pos.z + dist) - limits.x, limLen) + limits.x;
                    pos.z = currPos;
                } 
                gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);
                }
            `,
            fragmentShader: `
                varying vec3 vColor;
            
                void main() {
                gl_FragColor = vec4(vColor, 1.);
                }
            `,
            vertexColors: THREE.VertexColors
        });

        scene.add(grid);

        var clock = new THREE.Clock();
        var time = 0;

        render();

        function resizeRendererToDisplaySize(renderer) {
            const c = renderer.domElement;
            const size = getCanvasSize();
            const needResize = c.width !== size.w || c.height !== size.h;
            if (needResize) {
              renderer.setSize(size.w, size.h, false);
            }
            return needResize;
        }

        function render() {
            requestAnimationFrame(render);

            const size = getCanvasSize();
            time += clock.getDelta();
            grid.material.uniforms.time.value = time;

            if (resizeRendererToDisplaySize(renderer)) {
                camera.aspect = size.w / size.h;
                camera.updateProjectionMatrix();
            }

            renderer.render(scene, camera);
        }
    }
})()