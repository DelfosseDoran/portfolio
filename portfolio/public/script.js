console.log('🏳️‍🌈');

var sketchProc = function (processingInstance) {
    with (processingInstance) {
        // Canvas setup
        size(600, 600);
        frameRate(60);
        smooth();
        background(255); // Set background to white

        textAlign(CENTER, CENTER);
        textSize(25);
        strokeCap(PROJECT);

        // Tree properties
        var tree = {
            x: 300,
            y: 500,
            len: 100,
            depth: 6,
            angle: -90,
            branches: [],
            leaves: [],
            flowers: [],
            colors: {
                trunk: color(139, 69, 19), // Brown color for trunk
                leaves: color(0, 128, 0)   // Green color for leaves
            }
        };

        // Recursive function to draw branches
        function drawBranch(x, y, length, angle, depth) {
            if (depth === 0) return; // Base case: stop recursion

            // Calculate the end point of the branch
            var xEnd = x + length * cos(angle);
            var yEnd = y + length * sin(angle);

            // Draw the branch
            stroke(tree.colors.trunk);
            strokeWeight(depth); // Thicker branches at lower depth
            line(x, y, xEnd, yEnd);

            // Recursive calls for the next branches
            drawBranch(xEnd, yEnd, length * 0.7, angle - radians(30), depth - 1); // Left branch
            drawBranch(xEnd, yEnd, length * 0.7, angle + radians(30), depth - 1); // Right branch

            // Draw leaves at the end of branches
            if (depth === 1) { // Leaves only at the last level of branches
                drawLeaf(xEnd, yEnd);
            }
        }

        // Function to draw a leaf
        function drawLeaf(x, y) {
            fill(tree.colors.leaves);
            noStroke();
            ellipse(x, y, 10, 20); // Draw an elliptical leaf
        }

        // Start drawing the tree
        drawBranch(tree.x, tree.y, tree.len, tree.angle, tree.depth);
    }
};